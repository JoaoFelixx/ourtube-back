import { Channel } from "../../../../interfaces";
import { Channels } from "../../../../models";

export async function getChannelByName(name: string): Promise<Error | Channel[]> {
  try {
    const channel = await Channels.find({ name: { $regex: name, $options: 'i' } })
      .limit(5);

    return channel;

  } catch (error) {
    return new Error('Error getting channel');
  }
}