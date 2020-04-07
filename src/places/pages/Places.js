import React, { useState, useCallback, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";

import * as Actions from "../../redux/actions";
import { selectGetPlacesRequest } from "../../redux/selectors";
import { Column } from "../../shared/layouts/Column";
import { AddNewButton } from "./style";
import PlaceList from "../components/PlaceList";
import Modal from "../../shared/Modal";
import AddPlace from "../components/AddPlace";
import { Spinner } from "@blueprintjs/core";
import Header from "../../shared/components/Header";

const Places = ({ getPlaces, userId, places, request }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    try {
      console.log(userId);
      if (userId) {
        getPlaces(userId);
      }
    } catch (e) {
      console.log(e);
    }
  }, [userId, getPlaces]);

  if (request.isLoading) return <Spinner></Spinner>;

  return (
    <Column>
      <Header></Header>
      {isModalOpen && (
        <Modal onCloseModal={handleCloseModal}>
          <AddPlace onCloseModal={handleCloseModal}></AddPlace>
        </Modal>
      )}
      <h2>A place to remember your journeys</h2>
      <AddNewButton onClick={handleOpenModal}>
        <AddIcon></AddIcon>
        Add Place
      </AddNewButton>
      <PlaceList places={places}></PlaceList>
    </Column>
  );
};

export default connect((state) => {
  return {
    request: selectGetPlacesRequest(state),
    userId: state.me.data.userId,
    places: state.getPlaces.places,
  };
}, Actions)(Places);
