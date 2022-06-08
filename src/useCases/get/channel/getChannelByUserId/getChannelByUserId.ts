import { Channel } from "../../../../interfaces";
import { Channels } from "../../../../models";

export async function getChannelByUserId(user_id: string): Promise<Error | Channel | null> {
  try {
    const channel =  await Channels.findOne<Channel>({ user_id });
    
    return channel;

  } catch (error) {
    return new Error('Error getting channel');
  }
}