import multer, { diskStorage } from "multer";
import { join, extname } from 'path';
import { randomUUID as uuid } from 'crypto';

const destiny = join(__dirname, '..', 'public', 'files');

const storage = diskStorage({
  destination: function (req, file, cb) {

    cb(null, destiny);
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + uuid();

    const filename = `${uniqueSuffix + extname(file.originalname.toString())}`;

    cb(null, filename)
  },
});

const upload = multer({ storage });

export default upload;