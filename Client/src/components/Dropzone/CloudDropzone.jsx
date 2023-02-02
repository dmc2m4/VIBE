import React, { useState } from "react";
import Dropzone from "react-dropzone";
import folder from "../../assets/icon-open-file-folder.png";
import addImage from "../../redux/actions/addImage";
import { useDispatch, useSelector } from "react-redux";
import "./CloudDropzone.css";
import setLoading from "../../redux/actions/setLoading";
import stopLoading from "../../redux/actions/stopLoading";
import gifLoading from "../../assets/loading.gif";

const CloudDropzone = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Loading);
  const uploadImage = async (files) => {
    try {
      dispatch(setLoading());
      const file = files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("tags", "vibes");
      data.append("upload_preset", "images");
      const result = await fetch(
        "https://api.cloudinary.com/v1_1/dszbddysk/image/upload",
        {
          method: "POST",
          body: data,
        }
      ).then((res) => res.json());
      dispatch(stopLoading());
      dispatch(addImage(result.url));
    } catch (error) {
      return { error: error.message };
    }
  };
  return (
    <div>
      <Dropzone
        className="dropzone"
        onDrop={uploadImage}
        onChange={uploadImage}
        disabled={loading}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {loading ? <img src={gifLoading} className="gif-loading" /> : <img src={folder} className="folder"/>}
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default CloudDropzone;
