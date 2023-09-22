import { Alert } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "react-feather";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api/api";
// @ts-ignore
import Referrals from "../assets/video.mp4";
import Input from "../base/Input.base";
import PrincipalButton from "../base/PrincipalButton.base";
import Modal from "../components/Modal";
import { useLoader } from "../contexts/LoaderContext";
import "../styles/pages/index.scss";
import { PhoneInput } from "../components/PhoneInput";
import { E164Number } from "libphonenumber-js/types";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import google from "../assets/googleplay.svg";
import apple from "../assets/appstore.svg";
import flyIcon from "../assets/fly-icon.png";
import statisticsIcon from "../assets/statistics-icon.png";
import vaultIcon from "../assets/vault-icon.png";
import arrowsIcon from "../assets/arrows-icon.png";
import QR from "../assets/onelinkto_cef3xk_svg.svg";
import { set } from "store";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

export default function Join() {
  const ref = useRef<any>();
  const validationRef = useRef<any>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setLoading } = useLoader();
  const handleChange = (newNumber: E164Number) => {
    console.log(newNumber);
    setState((prev) => ({
      ...prev,
      phone: newNumber,
    }));
  };
  const [download, setDownload] = useState(false);

  const [state, setState] = useState({
    // email: "",
    // username: "",
    code: "",
    phone: "",
  });

  // useEffect(() => {
  //   if (searchParams.get("v")) {
  //     validationRef.current.open();
  //     const code = searchParams.get("code");
  //     api
  //       .post("/referrals/referrer/verify", {
  //         code,
  //       })
  //       .then(({ data }) => {
  //         validationRef.current.close();
  //         navigate(`/invite?user=${data.code}&&points=${data.points}`);
  //       })
  //       .catch((err) => {
  //         validationRef.current.close();
  //       });
  //   }
  // }, []);

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      setState((prev) => ({
        ...prev,
        code,
      }));
    }
  }, []);

  const handleJoin = () => {
    setLoading(true);
    validationRef.current.open();
    api
      .post("/referrals/join", state)
      .then(({ data }) => {
        // ref.current.open();
        if (data.created) {
          if (isMobile) {
            window.location.replace("https://onelink.to/cef3xk");
          } else {
            setDownload(true);
          }
        } else if (data.updated) {
          if (isMobile) {
            window.location.replace("https://onelink.to/cef3xk");
          } else {
            setDownload(true);
          }
        } else {
          alert("Error trying to join");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error trying to join");
      })
      .finally(() => {
        setLoading(false);
        validationRef.current.close();
      });
  };

  return (
    <>
      <Modal title="" ref={validationRef}>
        <h1>Please wait</h1>
      </Modal>

      <div className="index__container">
        <section className="index__container-section">
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="index__container-section"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              style={{ top: "-18vw" } as any}
            >
              <h1
                style={{ fontWeight: 700 }}
                className="index__container-top-title"
              >
                Invite Friends To Filtroo & Earn $10 Each!
              </h1>

              <p className="index__container-mid-subtitle">
                Joining Filtroo's Referral Program is quick and easy.
              </p>
            </motion.div>
          </motion.div>
          {download && (
            <div className="index__container-QR">
              <p className="index__container-QR-title">
                Download the Filtroo App
              </p>
              <p className="index__container-QR-subtitle">
                Scan the QR code to download the app
              </p>
              <div className="index__container-QR-img">
                <img className="index__container-QR-img-qr" src={QR} />
              </div>
              <div className="index__container-QR-links">
                <a href="https://apple.co/3UCUUdt">
                  <img
                    className="index__container-QR-links-image"
                    src={apple}
                  />
                </a>
                <a href="https://bit.ly/3BCFkWJ">
                  <img
                    className="index__container-QR-links-image google"
                    src={google}
                  />
                </a>
              </div>
            </div>
          )}
          {!download && (
            <div className="index__container__buttons">
              <div>
                <Input
                  value={state.code}
                  onChange={(e) => {
                    setState((prev) => ({
                      ...prev,
                      code: e.target.value,
                    }));
                  }}
                  placeholder="Code"
                  extendedProps={{ maxLength: 10 }}
                />
                {state.code.length === 10 ? (
                  <>
                    <PhoneInput
                      placeholder="Phone number"
                      value={state.phone}
                      onChange={handleChange}
                      className="index__container__phone__input"
                    />
                  </>
                ) : null}
              </div>
              <PrincipalButton
                id="2"
                style={{ width: 350 }}
                onClick={handleJoin}
                disabled={!isPossiblePhoneNumber(state.phone ?? "")}
              >
                Step Inside
              </PrincipalButton>
            </div>
          )}
          {/* <p
            className="index__container-bottom"
            style={{ textAlign: "center" }}
          >
            We will share very limited information about your account set-up
            and activity with the person who referred you to Filtroo. This
            ensures that the appropriate parties can receive referral rewards
            if applicable.
          </p> */}
        </section>
        <section className="index__container-section">
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="index__container-section"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              style={{ top: "-18vw" } as any}
              className="index__container-subtitle"
            >
              Invite your friends and start earning rewards today!
            </motion.h1>
          </motion.div>
          <div className="index__items">
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              style={{ flex: 1 }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="index__items-card"
                style={{ flex: 1 }}
              >
                <img
                  src={flyIcon}
                  alt="flyIcon"
                  className="index__items-icon"
                />
                <h6 className="index__items-title">Earn $10 Now!</h6>
                <p className="index__items-text">
                  Invite friends using your exclusive referral link. When they
                  register, both of you get 100 points ($10)! Unlock rewards
                  together!
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              style={{ flex: 1 }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="index__items-card"
              >
                <img
                  src={arrowsIcon}
                  alt="statisticsIcon"
                  className="index__items-icon"
                />
                <h6 className="index__items-title">
                  Share and Earn on TikTok!
                </h6>
                <p className="index__items-text">
                  For every friend who joins and shares TikTok videos, you earn
                  an additional 100 points ($10). Keep inviting, keep earning!
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="index__items-card"
              >
                <img
                  src={vaultIcon}
                  alt="vaultIcon"
                  className="index__items-icon"
                />
                <h6 className="index__items-title">
                  Join a Community of Creativity and Fun!
                </h6>
                <p className="index__items-text">
                  Filtroo is more than just rewards; it's a creative community.
                  Explore a world of fun and endless possibilities with AR
                  filters. Join the Most Creative Community today!
                </p>
              </motion.div>
            </motion.div>
            {/* <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="index__items-card"
              >
                <img
                  src={arrowsIcon}
                  alt="arrowsIcon"
                  className="index__items-icon"
                />
                <h6 className="index__items-title">
                  Send & request money globally
                </h6>
                <p className="index__items-text">
                  Banks will charge you when you transfer money abroad. We're
                  not about that! Instantly send and request money from your
                  friends in Europe, U.S. and Australia at the touch of a
                  button, and use GIFs to make things a little more interesting.{" "}
                </p>
              </motion.div>
            </motion.div> */}
          </div>
        </section>
      </div>
    </>
  );
}
