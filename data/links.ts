export interface LinkItem {
  title: string;
  subtitle?: string;
  url: string;
  icon?: string;
}

const links: LinkItem[] = [
  {
    title: "Our Profile",
    url: "https://Our-profile-kamu.com",
  },
  {
    title: "Chat WhatsApp",
    url: "https://wa.me/6285813095675",
    icon: "/icons/whatsapp.webp",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@username",
    icon: "/icons/tiktok.png",
  },
  {
    title: "Tokopedia",
    url: "https://www.tokopedia.com/username_toko",
    icon: "/icons/tokopedia.png",
  },
];

export default links;
