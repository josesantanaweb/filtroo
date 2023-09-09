import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api/api";
// @ts-ignore
import Referrals from "../assets/video.mp4";
import Mobile from "../assets/mobile.png";
import Input from "../base/Input.base";
import PrincipalButton from "../base/PrincipalButton.base";
import Modal from "../components/Modal";
import { useLoader } from "../contexts/LoaderContext";
import "../styles/pages/index.scss";


export default function Index() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ref = useRef<any>();
  const validationRef = useRef<any>();
  const { setLoading } = useLoader();

  const [state, setState] = useState({
    email: "",
    username: "",
  });

  useEffect(() => {
    if (searchParams.get("v")) {
      validationRef.current.open();
      const code = searchParams.get("code");
      api
        .post("/referrals/verify", {
          code,
        })
        .then(({ data }) => {
          validationRef.current.close();
          navigate(`/invite?user=${data.code}&&points=${data.points}`);
        })
        .catch((err) => {
          validationRef.current.close();
        });
    }
  }, []);

  const handleSubscribe = () => {
    setLoading(true);
    api
      .post("/referrals", state)
      .then(({ data }) => {
        setLoading(false);
        if (data.code) {
          navigate(`/invite?user=${data.code}&&points=${data.points}`);
        } else {
          ref.current.open();
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <>
      <Modal title="" ref={validationRef}>
        <h1>Please wait</h1>
      </Modal>
      <Modal title="" ref={ref}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: 25 }}>Please verify your email address</h1>
          <PrincipalButton id="__confirm__" onClick={() => ref.current.close()}>
            Verify
          </PrincipalButton>
        </div>
      </Modal>
      <div className="index__container">
        <section>
          <div>
            <div>
              <h1 style={{ fontWeight: 800 }} className="index__container-top">
                Earn points and get rewards!
              </h1>
              <p className="index__container-mid">
                You can earn points by sharing AR filters on TikTok, and by
                inviting your friends to Filtroo.
              </p>

              <p className="index__container-mid">
                <span className="index__container-bottom">
                  Now for the best part: rewards!
                </span>{" "}
                Check out what inviting your friends will get you.
              </p>
            </div>
            <div className="index__container__buttons">
              <div>
                <Input
                  onChange={(e) => {
                    setState((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  placeholder="Email"
                />
                <Input
                  onChange={(e) => {
                    setState((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }));
                  }}
                  placeholder="TikTok username"
                />
              </div>
              <PrincipalButton
                id="2"
                style={{ width: 250 }}
                onClick={handleSubscribe}
              >
                <span className="step-inside-button">Get started</span>
              </PrincipalButton>
            </div>
          </div>
        </section>
        <section>
          {/* <video autoPlay loop playsInline muted id="referrals-video">
            <source src={Referrals} type="video/mp4" />
          </video> */}
          <img id="referrals-video" src={Mobile} style={{}} />
        </section>
      </div>
    </>
  );
}
