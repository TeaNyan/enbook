import React from 'react';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import { Overlay } from '@blueprintjs/core';

import { HomeBg, BgText, GetStartedButton, HomeTags, TagText } from './style';
import { Column } from '../../shared/layouts/Column';
import { Row } from '../../shared/layouts/Row';
import Modal from '../../shared/Modal';

const Home = () => {
  return (
    <Column>
      <HomeBg>
        <Modal i>Overlaid contents...</Modal>
        <BgText className={'bgText'}>
          <h1>Do you like to travel and take photos?</h1>
        </BgText>
        <BgText className={'bgTexth2'}>
          <h2>Sign up now and write your own travel blogs.</h2>
          <h2>Discover new places by following other travelers.</h2>
        </BgText>
        <GetStartedButton>Get started</GetStartedButton>
      </HomeBg>
      <HomeTags>
        <Row justifyContent={'center'}>
          <Row width={'50%'}>
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
          <Row width={'50%'}>
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
        <Row justifyContent={'center'}>
          <Row width={'50%'}>
            <PhotoCameraOutlinedIcon
              style={{ fontSize: 60, marginRight: 20 }}
            />
            <TagText>
              They say that a photo is worth a thousand words. But can you
              really describe the place to someone in a thousand words? Maybe.
              But why would you waste your time describing it, when you can show
              a picture of it? We live in a digital world after all.
            </TagText>
          </Row>
          <Row width={'50%'}>
            <GroupAddOutlinedIcon style={{ fontSize: 60, marginRight: 20 }} />
            <TagText>
              Traveling alone can be relaxing, but 83% of people say that they
              rather travel with someone else. Follow other travelers to find
              out where have they been and learn more about popular destinations
              through their journeys.
            </TagText>
          </Row>
        </Row>
      </HomeTags>
    </Column>
  );
};

export default Home;
