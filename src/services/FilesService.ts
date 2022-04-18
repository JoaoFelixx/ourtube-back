import '../models/Files';
import { model, Document, Model } from 'mongoose';
import { FilesProps, FilesDoc } from '../interfaces';

const Files = model('files')

class FilesService {
  static async create(file: FilesProps) {
    return await Files.create(file);
  }

  static async get(id: string): Promise<FilesDoc | null> {
    const result = await Files.findOne<FilesDoc>({ id });
    
    return result; 
  }
}

export default FilesService;