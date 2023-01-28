/* const uuid = require("uuid-v4");
const multer = require("multer"); */

const MPP = function (req, res, next) {
  const { name, img, size, color, category, gender, cost, season, stock } =
    req.body;
  if (!name) throw new Error("Missing name");
  if (!img) throw new Error("Missing image");
  if (!size) throw new Error("Missing size");
  if (!color) throw new Error("Missing color");
  if (!category) throw new Error("Missing category");
  if (!gender) throw new Error("Missing gender");
  if (!cost) throw new Error("Missing cost");
  if (!season) throw new Error("Missing season");
  if (!stock) throw new Error("Missing stock");
  
 /*  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      //seteo el nombre de las fotos, en este caso un uuid
      cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
    },
  });
  
  const mMulter = multer({
    storage: storage,
    limits: { fileSize: 4000000 }, //tamaño maximo de la imagen
    fileFilter: (req, file, cb) => {
      //aca checkeo de que sea un formato imagen
      const filetypes = /jpeg|jpg|png/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("error: el archivo debe ser una imagen valida");
    },
  }).single("image");

  mMulter()
 */
  next();
};

module.exports = { MPP };
