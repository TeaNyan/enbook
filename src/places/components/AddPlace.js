import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ImageUpload from "../components/ImageUpload";

import {
  Container,
  Input,
  StyledForm,
  Area,
} from "../../shared/components/Auth/style";

const AddPlace = ({ isLoading, addPlace, onCloseModal }) => {
  const [file, setFile] = useState();
  const [errorMessage, setNewErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (d) => {
    const formData = new FormData();
    formData.append("title", d.title);
    formData.append("description", d.description);
    formData.append("blog", d.blog);
    formData.append("image", file);

    setNewErrorMessage("");
    addPlace(formData)
      .then(onCloseModal)
      .catch((error) => {
        setNewErrorMessage(error.error.title);
      });
  };

  return (
    <React.Fragment>
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="title"
            inputRef={register}
            placeholder="Enter a title"
            type="text"
            style={{
              backgroundColor: "#021839",
              border: 0,
              borderBottom: "2px solid #fd953c",
              color: "#fff",
            }}></Input>
          <Input
            name="description"
            inputRef={register}
            placeholder="Enter a short description"
            type="text"
            style={{
              backgroundColor: "#021839",
              border: 0,
              borderBottom: "2px solid #fd953c",
              color: "#fff",
            }}></Input>
          <Area
            className="bp3-fill"
            inputRef={register}
            placeholder="Write about your journey"
            name="blog"
            style={{
              backgroundColor: "#021839",
              border: 0,
              borderBottom: "2px solid #fd953c",
              color: "#fff",
              height: "100px",
              marginBottom: 10,
            }}></Area>
          {errorMessage && <div>{errorMessage}</div>}
          <ImageUpload
            file={file}
            setFile={setFile}
            id="image"
            isLoading={isLoading}
          />
        </StyledForm>
      </Container>
    </React.Fragment>
  );
};

export default AddPlace;
