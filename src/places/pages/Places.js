import React, { useState, useCallback } from "react";
import AddIcon from "@material-ui/icons/Add";

import { Column } from "../../shared/layouts/Column";
import { AddNewButton } from "./style";
import PlaceList from "../components/PlaceList";
import Modal from "../../shared/Modal";
import AddPlace from "../components/AddPlace";

const Places = (props) => {
  const [isModalOpen, setIsModalOpen] = useState();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <Column>
      {isModalOpen && (
        <Modal onCloseModal={handleCloseModal}>
          <AddPlace onCloseModal={handleCloseModal}></AddPlace>
        </Modal>
      )}
      <h2>My places</h2>
      <AddNewButton onClick={handleOpenModal}>
        <AddIcon></AddIcon>
        Add Place
      </AddNewButton>
      <PlaceList></PlaceList>
    </Column>
  );
};

export default Places;
