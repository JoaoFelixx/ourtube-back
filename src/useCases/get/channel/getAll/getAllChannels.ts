import { Channel } from "../../../../interfaces"
import { Channels } from "../../../../models"

export async function getAllChannels(): Promise<Channel[] | Error> {
  try {
    return await Channels.find<Channel>()

  } catch (error) {
    return new Error('Error getting channels')
  }
}