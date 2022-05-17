import '../models/Photos';
import { model } from 'mongoose';
import { PhotosDoc, PhotosProps } from '../interfaces';

const Photos = model('photos');

export class PhotoRepository {
  static async create(photo: PhotosProps): Promise<PhotosDoc> {
    return await Photos.create(photo) as PhotosDoc;
  }

  static async getPhotoById(_id: string): Promise<PhotosDoc | null> {
    return await Photos.findById<PhotosDoc>(_id);
  }
}