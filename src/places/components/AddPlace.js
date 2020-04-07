import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import * as Actions from "../../redux/actions";
import { selectAddPlaceRequest } from "../../redux/selectors";
import ImageUpload from "../components/ImageUpload";

import {
  Container,
  Input,
  StyledForm,
  Area,
} from "../../shared/components/Auth/style";

const AddPlace = ({ request, addPlace, onCloseModal }) => {
  const [file, setFile] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    console.log(request);
    const formData = new FormData();
    formData.append("title", d.title);
    formData.append("description", d.description);
    formData.append("blog", d.blog);
    formData.append("image", file);

    try {
      addPlace(formData);
    } catch (e) {
      console.error(e);
    }
  };

  if (request.success) onCloseModal();

  return (
    <React.Fragment>
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="title"
            inputRef={register}
            placeholder="Enter the title"
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
          <ImageUpload
            file={file}
            setFile={setFile}
            id="image"
            register={register}
            request={request}
          />
        </StyledForm>
      </Container>
    </React.Fragment>
  );
};

export default connect((state) => {
  return {
    request: selectAddPlaceRequest(state),
  };
}, Actions)(AddPlace);