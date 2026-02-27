import { supabase } from "@/integrations/supabase/client";

export interface MediaItem {
  url: string;
  quality: string;
  extension: string;
  type: string;
}

export interface VideoResult {
  url: string;
  source: string;
  author: string;
  title: string;
  thumbnail: string;
  duration: string;
  medias: MediaItem[];
}

export async function fetchVideoInfo(videoUrl: string): Promise<VideoResult> {
  const { data, error } = await supabase.functions.invoke("download-video", {
    body: { url: videoUrl },
  });

  if (error) throw new Error(error.message || "Failed to fetch video info");
  if (data?.error) throw new Error(data.error);

  return data as VideoResult;
}
