import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// @ts-ignore
import Phone from "../assets/phone_image.png";
import Input from "../base/Input.base";
import "../styles/pages/invite.scss";
import Coins from "../assets/coins.png";
import Gold from "../assets/gold.png";
import { facebook, twitter, whatsapp } from "../assets/media";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api/api";
import { Clipboard, Link } from "react-feather";
import { Dropdown, Popover } from "antd";

export default function Invite() {
  const ref = useRef<any>();
  // ref.current.show();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [shareLink, setShareLink] = useState("");
  const [shareWeb, setShareWeb] = useState("");
  const [share, setShare] = useState("");
  const [code, setCode] = useState<any>("");
  const [points, setPoints] = useState(0);
  const [cell, setCell] = useState<any[]>([]);
  const [barWidth, setBarWidth] = useState(0);
  const [emptyColumns] = useState({
    _4: new Array(4).fill(""),
    _12: new Array(12).fill(""),
    _26: new Array(26).fill(""),
  });

  const copy = () => {
    navigator.clipboard.writeText(share).then(
      function () {
        setVisible(true);
        // navigator.clipboard.write([clipboardItem]);
        setTimeout(() => setVisible(false), 2000);
        /* clipboard successfully set */
      },
      function () {
        /* clipboard write failed */
      }
    );
    // navigator.clipboard.writeText(share).then(
    //   function () {},
    //   function (err) {
    //     console.error("Async: Could not copy text: ", err);
    //   }
    // );
  };

  useEffect(() => {
    if (points <= 10) {
      setBarWidth(points * 5);
    } else if (points <= 25) {
      setBarWidth((points - 10) * (25 / 15) + 50);
    } else {
      setBarWidth(points + 50);
    }
  }, [points]);

  useEffect(() => {
    const points = searchParams.get("points");
    if (points) {
      setPoints(parseInt(points));
    }
    const code = searchParams.get("user");
    setCode(code);
    api
      .get(`/referrals?code=${code}`)
      .then(({ data }) => {
        setPoints(parseInt(data));
      })
      .catch((err) => navigate("/", { replace: true }));
    setShareWeb(
      `Can’t wait for @filtroo.co to launch. I’m going to be %23earning money for sharing stories on %23TikTok! https://referrals.filtroo.co/join?code=${code}`
    );
    setShare(
      `Can’t wait for @filtroo.co to launch. I’m going to be #earning money for sharing stories on #TikTok! https://referrals.filtroo.co/join?code=${code}`
    );
    setShareLink(`https://referrals.filtroo.co/join?code=${code}`);
  }, []);

  return (
    <div className="invite__container" style={{}}>
      <img
        // className="invite__container-background"
        src={Phone}
        style={{ width: 300, marginTop: 30 }}
      />
      {/* <div id="filtroo--empty" /> */}
      <div className="invite__container__body">
        <div className="invite__container__body-t">
          <h2 style={{ marginBottom: 30 }}>
            Invite your friends and earn up to €100 in rewards.
          </h2>
          <p>
            Share your unique link via email, Whatsapp or social media and earn
            <br></br>
            rewards for each friend who signs up.
          </p>
          <p style={{ marginBottom: 10 }}>
            Your friend will also earn 10 points for signing-up.
          </p>
        </div>
        <div
          className="invite__container__body-media"
          style={{ marginBottom: 10 }}
        >
          <div className="invite__container__body-media__input">
            <Input
              disabled
              // @ts-ignore
              value={shareLink}
              onChange={(v) => {}}
            />
          </div>
          <span>
            <Popover
              visible={visible}
              placement="top"
              trigger={["click"]}
              ref={ref}
              content={
                <div>
                  <span>Copied!</span>
                </div>
              }
            >
              <a onClick={copy}>
                <div
                  style={{
                    height: 30,
                    width: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                    borderRadius: 6,
                  }}
                >
                  <Link />
                </div>
              </a>
            </Popover>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.facebook.com/sharer.php?u=${shareLink}`}
            >
              <img src={facebook} style={{ height: 30, width: 30 }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?url=Can’t wait for @filtroo_app to launch. I’m going to be %23earning money for sharing stories on %23TikTok! https://referrals.filtroo.co/join?code=${code}`}
            >
              <img src={twitter} style={{ height: 30, width: 30 }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?text=${shareWeb}`}
            >
              <img src={whatsapp} style={{ height: 30, width: 30 }} />
            </a>
          </span>
        </div>
        <div style={{ width: "100%", height: 30 }} />
        <div className="invite__container__body-b" style={{ width: "90%" }}>
          <h3
            className="invite__container__body-b-h3"
            // style={{ marginTop: 30 }}
          >
            Here ́s how it works
          </h3>
          <div className="filtroo-progress-horizontal" style={{ width: "70%" }}>
            <div className="filtroo-progress-top">
              <span
                className="filtroo-progress-top__s"
                style={{ marginLeft: 35, fontSize: 12 }}
              >
                Friends joined
              </span>
            </div>
            <div>
              <div className="filtroo-progress__top">
                <div>
                  <div
                    className={`filtroo-progress--step ${
                      points >= 5 ? "filtroo-progress--step-full" : ""
                    }`}
                  >
                    <span>5</span>
                  </div>
                  <div className="filtroo-progress-reward">
                    <div className="filtroo-progress-reward__body progress-coins">
                      <span>50</span>
                      <img style={{ height: 25 }} src={Coins} />
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className={`filtroo-progress--step ${
                      points >= 10 ? "filtroo-progress--step-full" : ""
                    }`}
                  >
                    <span>10</span>
                  </div>
                  <div className="filtroo-progress-reward">
                    <div className="filtroo-progress-reward__body">
                      <p style={{ margin: 0, textAlign: "center", width: 100 }}>
                        Three months
                      </p>
                      <img style={{ height: 15 }} src={Gold} />
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className={`filtroo-progress--step ${
                      points >= 25 ? "filtroo-progress--step-full" : ""
                    }`}
                  >
                    <span>25</span>
                  </div>
                  <div className="filtroo-progress-reward">
                    <div className="filtroo-progress-reward__body progress-coins">
                      <span>250</span>
                      <img style={{ height: 25 }} src={Coins} />
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className={`filtroo-progress--step ${
                      points >= 50 ? "filtroo-progress--step-full" : ""
                    }`}
                  >
                    <span>50</span>
                  </div>
                  <div className="filtroo-progress-reward">
                    <div className="filtroo-progress-reward__body">
                      <p style={{ margin: 0, textAlign: "center" }}>One Year</p>
                      <img style={{ height: 15 }} src={Gold} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="filtroo-progress__bar">
                <div
                  className="filtroo-progress__bar--fulfilled"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
            <div className="filtroo-progress-bottom">
              <span
                className="filtroo-progress-top__s"
                style={{ marginLeft: 35, fontSize: 12 }}
              >
                Rewards earned
              </span>
            </div>
          </div>

          <div
            className="filtroo-progress-vertical"
            style={{ width: "100%", height: 600 }}
          >
            <div className="filtroo-progress-vertical__l">
              <div>
                <div
                  className={`filtroo-progress--step ${
                    points >= 5 ? "filtroo-progress--step-full" : ""
                  }`}
                >
                  <span>5</span>
                </div>
                <div className="filtroo-progress-reward--vertical">
                  <div className="filtroo-progress-reward__body progress-coins">
                    <span>50</span>
                    <img style={{ height: 25 }} src={Coins} />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`filtroo-progress--step ${
                    points >= 10 ? "filtroo-progress--step-full" : ""
                  }`}
                >
                  <span>10</span>
                </div>
                <div className="filtroo-progress-reward--vertical">
                  <div className="filtroo-progress-reward__body">
                    <p style={{ margin: 0, textAlign: "center", width: 100 }}>
                      Three months
                    </p>
                    <img style={{ height: 15 }} src={Gold} />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`filtroo-progress--step ${
                    points >= 25 ? "filtroo-progress--step-full" : ""
                  }`}
                >
                  <span>25</span>
                </div>
                <div className="filtroo-progress-reward--vertical">
                  <div className="filtroo-progress-reward__body progress-coins">
                    <span>250</span>
                    <img style={{ height: 25 }} src={Coins} />
                  </div>
                </div>
              </div>

              <div>
                <div
                  className={`filtroo-progress--step ${
                    points >= 50 ? "filtroo-progress--step-full" : ""
                  }`}
                >
                  <span>50</span>
                </div>
                <div className="filtroo-progress-reward--vertical">
                  <div className="filtroo-progress-reward__body">
                    <p style={{ margin: 0, textAlign: "center" }}>One Year</p>
                    <img style={{ height: 15 }} src={Gold} />
                  </div>
                </div>
              </div>
            </div>

            <div className="filtroo-progress__bar-vertical">
              <div
                className="filtroo-progress__bar-vertical--fulfilled"
                style={{ height: `${barWidth}%` }}
              />
            </div>

            <div style={{ width: 35, height: 35 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
