import { Enrolled } from '../../../models';

interface Params {
  user_id: string;
  id: string;
}

export async function deleteEnrolled({ id, user_id }: Params): Promise<Error | void> {
  try {
    await Enrolled.deleteOne({ channel_id: id, user_id });
  } catch (error) {
    return new Error('Error deleting enrolled');
  }
}