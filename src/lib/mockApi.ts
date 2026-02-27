export interface ConversionResult {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
  platform: string;
  formats: FormatOption[];
}

export interface FormatOption {
  format: string;
  quality: string;
  fileSize: string;
  downloadUrl: string;
}

const mockDatabase: Record<string, Omit<ConversionResult, "formats">> = {
  youtube: {
    id: "yt-abc123",
    title: "Lofi Hip Hop Radio — Beats to Relax/Study To",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
    duration: "3:42",
    author: "ChillBeats",
    platform: "YouTube",
  },
  tiktok: {
    id: "tt-xyz789",
    title: "Viral Dance Challenge #trending 🔥",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop",
    duration: "0:34",
    author: "@dancequeen",
    platform: "TikTok",
  },
  instagram: {
    id: "ig-def456",
    title: "Travel Vlog — Hidden Gems of Bali 🌴",
    thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=225&fit=crop",
    duration: "1:15",
    author: "@wanderlust",
    platform: "Instagram",
  },
};

const formatOptions: Record<string, FormatOption[]> = {
  MP3: [
    { format: "MP3", quality: "320kbps", fileSize: "8.6 MB", downloadUrl: "#" },
    { format: "MP3", quality: "192kbps", fileSize: "5.2 MB", downloadUrl: "#" },
    { format: "MP3", quality: "128kbps", fileSize: "3.4 MB", downloadUrl: "#" },
  ],
  MP4: [
    { format: "MP4", quality: "720p", fileSize: "24.1 MB", downloadUrl: "#" },
    { format: "MP4", quality: "480p", fileSize: "14.7 MB", downloadUrl: "#" },
    { format: "MP4", quality: "360p", fileSize: "8.3 MB", downloadUrl: "#" },
  ],
  "1080p": [
    { format: "MP4", quality: "1080p", fileSize: "52.4 MB", downloadUrl: "#" },
    { format: "MP4", quality: "720p", fileSize: "24.1 MB", downloadUrl: "#" },
  ],
  "4K": [
    { format: "MP4", quality: "4K (2160p)", fileSize: "186.2 MB", downloadUrl: "#" },
    { format: "MP4", quality: "1080p", fileSize: "52.4 MB", downloadUrl: "#" },
  ],
};

function detectPlatform(url: string): string {
  if (url.includes("tiktok")) return "tiktok";
  if (url.includes("instagram") || url.includes("insta")) return "instagram";
  return "youtube";
}

export function mockConvertVideo(url: string, format: string): Promise<ConversionResult> {
  return new Promise((resolve) => {
    const platform = detectPlatform(url);
    const video = mockDatabase[platform];
    setTimeout(() => {
      resolve({
        ...video,
        formats: formatOptions[format] || formatOptions["MP3"],
      });
    }, 1800 + Math.random() * 1200);
  });
}
