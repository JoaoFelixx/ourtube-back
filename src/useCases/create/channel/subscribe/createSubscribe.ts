import { Enrolled } from '../../../../models';
import { EnrolledProps } from '../../../../interfaces';

export async function createSubscribe(subscribe: EnrolledProps): Promise<Error | EnrolledProps> {
  try {
    const result = await Enrolled.create<EnrolledProps>(subscribe);

    return result;
  } catch (error) {
    return new Error('Error subscribing');
  }
}