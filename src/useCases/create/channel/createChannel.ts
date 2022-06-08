import { Channel } from "../../../interfaces";
import { Channels } from "../../../models";

export async function createChannel(channel: Channel): Promise<Channel> {
  return await Channels.create<Channel>(channel)
}