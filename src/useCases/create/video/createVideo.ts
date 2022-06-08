import { Photo, Video } from "../../../interfaces";
import { Photos, Videos } from "../../../models";

interface VideoProps {
  photo: Photo;
  video: Video;
}

export async function createVideo({ photo, video }: VideoProps): Promise<VideoProps> {
  const [videoCreated, photoCreated] = await Promise.all([
    Videos.create<Video>(video),
    Photos.create<Photo>(photo),
  ])

  return { video: videoCreated, photo: photoCreated };
}