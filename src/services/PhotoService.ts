import '../models/Photos';
import { model } from 'mongoose';
import { PhotosDoc, PhotosProps } from '../interfaces';

const Photos = model('photos');

class PhotoService {
  static async create(photo: PhotosProps): Promise<PhotosDoc> {
    const result = await Photos.create(photo) as PhotosDoc;

    return result;
  }
}

export default PhotoService;