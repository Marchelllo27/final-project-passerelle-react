import React, { useRef, useState, useEffect } from "react";

import { Button } from "@mui/material";
import classes from "./ImageUpload.module.css";

const ImageUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(props.previewUrl || null);
  const [isValid, setIsValid] = useState();
  const filePickerRef = useRef();

  useEffect(() => {
    if (props.previewUrl) return;
    setPreviewUrl(null)
  }, [props.clearPreview, props.previewUrl])

  useEffect(() => {
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    };
    fileReader.readAsDataURL(file);
  }, [file])

  const pickedHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
       pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    props.onInput(pickedFile)
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        id={props.id}
        name={props.name}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div
        className={`${classes["image-upload"]} ${
          props.center && classes.center
        }`}
      >
        <div className={classes["image-upload__preview"]}>
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Choisissez une image!</p>}
        </div>
        <Button
          variant="contained"
          color="success"
          type="button"
          onClick={pickImageHandler}
        >
          Choisir une image
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
