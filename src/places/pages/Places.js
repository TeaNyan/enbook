import React, { useState, useCallback, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";

import * as Actions from "../../redux/actions";
import {
  selectGetPlacesRequest,
  selectAddPlaceRequest,
  selectMe,
  selectPlaces,
} from "../../redux/selectors";
import { Column } from "../../shared/layouts/Column";
import { AddNewButton } from "./style";
import PlaceList from "../components/PlaceList";
import Modal from "../../shared/Modal";
import AddPlace from "../components/AddPlace";
import SpinScreen from "../../shared/components/SpinScreen";
import Header from "../../shared/components/Header";
import { Spinner } from "@blueprintjs/core";

const Places = ({
  getPlaces,
  userId,
  places,
  getPlacesRequest,
  addPlaceRequest,
  addPlace,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (userId) getPlaces(userId);
  }, [userId, getPlaces]);

  return (
    <Column>
      <Header></Header>
      {isModalOpen && (
        <Modal onCloseModal={handleCloseModal}>
          <AddPlace
            onCloseModal={handleCloseModal}
            isLoading={addPlaceRequest.isLoading}
            addPlace={addPlace}></AddPlace>
        </Modal>
      )}
      <h2>A place to remember your journeys</h2>
      <AddNewButton onClick={handleOpenModal}>
        <AddIcon></AddIcon>
        Add Place
      </AddNewButton>
      {!getPlacesRequest.isLoading ? (
        <PlaceList places={places} request={getPlacesRequest}></PlaceList>
      ) : (
        <Spinner></Spinner>
      )}
    </Column>
  );
};

export default connect((state) => {
  return {
    getPlacesRequest: selectGetPlacesRequest(state),
    addPlaceRequest: selectAddPlaceRequest(state),
    userId: selectMe(state).userId,
    places: selectPlaces(state),
  };
}, Actions)(Places);
