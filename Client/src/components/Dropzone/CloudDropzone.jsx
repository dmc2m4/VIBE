import React, { useState } from "react";
import Dropzone from "react-dropzone";
import folder from "../../assets/icon-open-file-folder.png";
import axios from "axios";
import "./CloudDropzone.css";

const CloudDropzone = (props) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileRender = new FileReader();
      fileRender.readAsDataURL(file);

      fileRender.onload = () => {
        resolve(fileRender.result);
      };

      fileRender.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (files) => {
    console.log(files)
    const file = files[0];
    const base64 = await convertBase64(file);
    setLoading(true);
    axios
      .post("http://localhost:3001/upload-images", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        alert("Image upload succesfolly");
      })
      .then(() => setLoading(false))
      .catch((error) => {
        return { error: error.message };
      });
  };
  return (
    <div>
      <Dropzone
        className="dropzone"
        onDrop={uploadImage}
        onChange={uploadImage}
        // value={image}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <img src={folder} />
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default CloudDropzone;
