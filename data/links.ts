export interface LinkItem {
  title: string;
  url?: string;
  children?: {
    title: string;
    url: string;
  }[];
}

const links: LinkItem[] = [
  {
    title: "Our Profile",
    url: "https://our-company-seven.vercel.app/",
  },
  {
    title: "Chat WhatsApp",
    url: "https://wa.me/6285286197108",
  },
  {
    title: "TikTok",
    children: [
      {
        title: "BioPlant Official",
        url: "https://tiktok.com/@akun1",
      },
      {
        title: "BioPlant Garden",
        url: "https://tiktok.com/@akun2",
      },
      {
        title: "BioPlant Project",
        url: "https://tiktok.com/@akun3",
      },
      {
        title: "BioPlant Nursery",
        url: "https://tiktok.com/@akun4",
      },
    ],
  },
  {
    title: "Tokopedia",
    children: [
      {
        title: "Official Store",
        url: "#",
      },
      {
        title: "Tanaman Hias",
        url: "#",
      },
      {
        title: "Pot & Media",
        url: "#",
      },
      {
        title: "Project",
        url: "#",
      },
    ],
  },
];

export default links;