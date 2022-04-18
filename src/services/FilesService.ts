import '../models/Files';
import { model } from 'mongoose';
import { FilesProps, FilesDoc } from '../interfaces';

const Files = model('files')

class FilesService {
  static async create(file: FilesProps): Promise<FilesDoc> {
    return await Files.create(file) as FilesDoc;
  }

  static async get(_id: string): Promise<FilesDoc | null> {
    const result = await Files.findById<FilesDoc>(_id);

    return result;
  }
}

export default FilesService;