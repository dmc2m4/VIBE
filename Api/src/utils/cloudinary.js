/* const cloudinary = require('cloudinary').v2
require('dotenv').config()
const { API_KEY, CLOUD_NAME, API_SECRET } = process.env;


cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY, 
  api_secret: API_SECRET,
  secure: true
});

 async function uploadImage(filePath) {   //funcion para subir imagenes
  return await cloudinary.uploader.upload(filePath,{
    folder: 'replit'
  })
}

module.exports = {uploadImage}
 */
