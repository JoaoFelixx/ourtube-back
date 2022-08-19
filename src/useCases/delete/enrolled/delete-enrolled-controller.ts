import { Request, Response } from 'express';
import { decodeId } from '../../../utils';
import { deleteEnrolled } from './delete-enrolled';

export async function deleteEnrolledController(request: Request, response: Response) {
  try {
    const { id } = request.params as { id: string };

    const IDs = await decodeId(request.headers.authorization);

    if (IDs instanceof Error)
      return response.sendStatus(401);

    const { user_id } = IDs;

    const result = await deleteEnrolled({ id, user_id });

    if (result instanceof Error)
      return response.status(400).json(result.message);

    response.sendStatus(204);
  } catch (error) {
    response.status(400).json('Error deleting user');
  }
}