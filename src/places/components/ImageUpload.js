import React, { useRef, useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";
import ImageIcon from "@material-ui/icons/Image";
import AddIcon from "@material-ui/icons/Add";

import { ImagePreview } from "../pages/style";

const ImageUpload = (props) => {
  const { file, setFile, request } = props;
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        id={props.id}
        ref={props.register}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div>
        <ImagePreview>
          {previewUrl && <img src={previewUrl} width={"100%"} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </ImagePreview>
        {!file && (
          <Button
            intent="warning"
            onClick={pickImageHandler}
            style={{
              marginTop: 10,
            }}>
            <AddIcon></AddIcon>
            <ImageIcon></ImageIcon>
          </Button>
        )}
        {file && (
          <Button
            intent="warning"
            type="submit"
            loading={request && request.isLoading}
            style={{
              marginTop: 10,
            }}>
            Add place
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
