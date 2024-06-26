import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  // {
  //   id: "2",
  //   title: "How to use",
  //   url: "#how-to-use",
  // },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Up To 100 Calls Per Month.",
    price: "79",
    priceInstead: "99",
    features: [
      "24/7 Answering",
      "Answer multiple calls simultaneously",
      "Personalized Guest Interaction",
      "Custom Business Knowledge Database",
      "Choice Of 2 Distinct Voices"
    ],
  },
  {
    id: "1",
    title: "Pro",
    description: "Up To 300 Calls Per Month.",
    price: "199",
    priceInstead: "229",
    features: [
      "Everything In Basic Plan",
      "An Analytics Dashboard To Track Incoming Calls",
      "Choice Of 5 Distinct Voices",
      "Takeout orders"
    ],
  },
  {
    id: "2",
    title: "Advanced",
    description: "Up To 1000 Calls Per Month.",
    price: "429",
    priceInstead: "469",
    features: [
      "Everything In Pro Plan",
      "Personalized recommendations based on your preferences",
      "Outbound Texts",
      "Custom Integrations"
    ],
  },
  {
    id: "3",
    title: "Enterprise",
    description: "Custom Solution For Your Needs. Unlimited Calls.",
    price: null,
    features: [
      "Integration Plugins",
      "Premium Voices",
      "Advanced Analytics"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Effortless Order Management",
    text: "Streamline your restaurant's ordering process with ShortCall's intelligent handling. Say goodbye to missed orders and human errors",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },

  {
    id: "1",
    title: "24/7 Customer Service",
    text: "Keep your doors open around the clock, virtually. ShortCall bots never sleeps, ensuring your customers can place orders, make reservations, or get answers to their questions anytime.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Personalized Guest Interaction",
    text: "Deliver tailored conversations with ShortCall's AI that learns from each interaction.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Reduced Wait Times",
    text: "Minimize on-hold times with ShortCall's quick and efficient call handling.your staff can focus on delivering exceptional in-person experiences.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Cost-Effective Operations",
    text: "Reduce overheads with ShortCall by automating receptionist tasks. Lower labor costs and redirect your savings into growing your business.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Easy Integration with Existing Systems",
    text: "ShortCall seamlessly integrates with your current POS and reservation systems, making setup a breeze.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#pricing",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#pricing",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#pricing",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#pricing",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#pricing",
  },
];
