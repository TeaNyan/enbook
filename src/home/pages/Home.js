import React, { useState, useCallback, useEffect } from "react";
import FlightTakeoffOutlinedIcon from "@material-ui/icons/FlightTakeoffOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import { connect } from "react-redux";

import { HomeBg, BgText, GetStartedButton, HomeTags, TagText } from "./style";
import SignIn from "../../shared/components/Auth/SignIn";
import SignUp from "../../shared/components/Auth/SignUp";
import Header from "../../shared/components/Header";
import { Column } from "../../shared/layouts/Column";
import { Row } from "../../shared/layouts/Row";
import Modal from "../../shared/Modal";

import * as Actions from "../../redux/actions";
import { selectLoginRequest, selectSignupRequest } from "../../redux/selectors";

const Home = ({ login, loginRequest, signupRequest, signup }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleToggleSignIn = useCallback(() => {
    const nextIsSignIn = !isSignIn;

    setIsSignIn(nextIsSignIn);
  }, [isSignIn]);

  useEffect(() => {
    loginRequest.success && handleCloseModal();
  }, [loginRequest]);

  useEffect(() => {
    signupRequest.success && handleCloseModal();
  }, [signupRequest]);

  return (
    <React.Fragment>
      <Header onOpenModal={handleOpenModal} />
      <Column>
        {isModalOpen && (
          <Modal
            onCloseModal={handleCloseModal}
            onToggleSignIn={handleToggleSignIn}>
            {isSignIn ? (
              <SignIn
                onToggleSignIn={handleToggleSignIn}
                request={loginRequest}
                login={login}
              />
            ) : (
              <SignUp
                onToggleSignIn={handleToggleSignIn}
                request={signupRequest}
                signup={signup}
              />
            )}
          </Modal>
        )}
        <HomeBg>
          <BgText className={"bgText"}>
            <h1>Do you like to travel and take photos?</h1>
          </BgText>
          <BgText className={"bgTexth2"}>
            <h2>Sign up now and write your own travel blogs.</h2>
            <h2>Discover new places by following other travelers.</h2>
          </BgText>
          <GetStartedButton>Get started</GetStartedButton>
        </HomeBg>
        <HomeTags>
          <Row justifyContent={"center"}>
            <Row width={"50%"}>
              <FlightTakeoffOutlinedIcon
                style={{ fontSize: 60, marginRight: 20 }}
              />
              <TagText>
                If you like to travel, you want to never forget your journeys.
                Enbook will help you keep records of all your destinations. You
                just have to add your journey here with a couple of photos and
                text and you're all set.
              </TagText>
            </Row>
            <Row width={"50%"}>
              <MenuBookOutlinedIcon style={{ fontSize: 60, marginRight: 20 }} />
              <TagText>
                Many people remember their journeys only through photos. All the
                good memories will fade away after some time and they will only
                remember the moments captured on photos. Here you can write all
                the little things that happened on your journey so you can
                remember them forever.
              </TagText>
            </Row>
          </Row>
          <Row justifyContent={"center"}>
            <Row width={"50%"}>
              <PhotoCameraOutlinedIcon
                style={{ fontSize: 60, marginRight: 20 }}
              />
              <TagText>
                They say that a photo is worth a thousand words. But can you
                really describe the place to someone in a thousand words? Maybe.
                But why would you waste your time describing it, when you can
                show a picture of it? We live in a digital world after all.
              </TagText>
            </Row>
            <Row width={"50%"}>
              <GroupAddOutlinedIcon style={{ fontSize: 60, marginRight: 20 }} />
              <TagText>
                Traveling alone can be relaxing, but 83% of people say that they
                rather travel with someone else. Follow other travelers to find
                out where have they been and learn more about popular
                destinations through their journeys.
              </TagText>
            </Row>
          </Row>
        </HomeTags>
      </Column>
    </React.Fragment>
  );
};

export default connect((state) => {
  return {
    loginRequest: selectLoginRequest(state),
    signupRequest: selectSignupRequest(state),
  };
}, Actions)(Home);
