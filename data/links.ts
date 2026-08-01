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
    url: "https://wa.me/6285286197108",
    icon: "/icons/whatsapp.webp",
  },
  {
    title: "TikTok",
    url: "https://vt.tiktok.com/ZS4kK6uDe/?page=Mall",
    icon: "/icons/tiktok.png",
  },
  {
    title: "Tokopedia",
    url: "https://tk.tokopedia.com/ZS4kEeUdj/",
    icon: "/icons/tokopedia.png",
  },
];

export default links;
