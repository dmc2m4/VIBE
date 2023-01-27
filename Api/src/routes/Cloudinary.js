//app
import fileUpload from "express-fileupload";
import { express } from "express";

const server = express()

server.use(fileUpload({     //middleware
  useTempFiles: true,
  tempFileDir: './uploads'
}))

//console.log(req.files) objeto con propiedades, image: {name, data, size, encoding, tempfilepath, truncated, mimetype, mw, md5}
//multipart/form-data en insomnia
//en ruta del product:
if(req.files?.image){

}

//cloudinary.js
import {v2 as cloudinary} from 'cloudinary'

// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

export async function uploadImage(filePath) {   //funcion para subir imagenes
  return await cloudinary.uploader.upload(filePath,{
    folder: 'replit'
  })
}






