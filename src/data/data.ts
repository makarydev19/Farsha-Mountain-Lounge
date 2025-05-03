// data.ts

import { Link, Guideline, GalleryItem, HistoryItem } from '@/types/types'

// Direct path to assets in the public directory
export const links: Link[] = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'History', path: 'history' },
  { name: 'Features', path: 'features' },
  { name: 'Guidelines', path: 'guidelines' },
  { name: 'Gallery', path: 'gallery' },
  { name: 'Contact Us', path: 'footer' }
]

export const guidelinesML: Guideline[] = [
  {
    id: 1,
    img: '/assets/farshaLounge6.jpg', // Direct path to the image in the public directory
    color: '#0e0e0e',
    title: 'GROUPS OF 8 PERSONS OR MORE',
    description:
      'All groups of 8 persons or more must reach us through our Instagram or Facebook to check for availability prior to arrival'
  },
  {
    id: 2,
    img: '/assets/farshaLounge7.jpg',
    color: '#ffffff',
    title: 'MIXED GROUPS & COUPLES ONLY',
    description:
      'Farsha Mountain Lounge welcomes Mixed groups and Couples Only. No Kids are allowed. No Pets are allowed'
  },
  {
    id: 3,
    img: '/assets/farshaLounge1.jpg',
    color: '#ffffff',
    title: 'SHARED TABLES SEATING',
    description:
      'Farsha Mountain Lounge welcomes you on a unique table sharing experience. Please be aware you may be seated next to other customers. No Private Tables'
  }
]

export const guidelinesBeach: Guideline[] = [
  {
    id: 1,
    img: '/assets/beach6.jpg',
    color: '#ffffff',
    title: 'REQUIRED RESERVATIONS',
    description:
      'Farsha Beach Lounge requires reservations a day in advance to ensure availability of sun beds, day and time of desired booking on Instagram or Facebook for confirmations'
  },
  {
    id: 2,
    img: '/assets/beach4.jpg',
    color: '#ffffff',
    title: 'ENTRANCE FEES',
    description:
      'Adults have an entrance fee of 200 LE per person, towel use included. No entrance fees applied on children'
  },
  {
    id: 3,
    img: '/assets/food.jpg',
    color: '#ffffff',
    title: 'NO OUTSIDE FOOD OR DRINKS ALLOWED',
    description:
      'Farsha offers a variety of fresh juices, cocktails, tea, coffee, shisha, alcoholic and non alcoholic beverages. Regarding snacks and food we offers nuts, fruit bowls, pizza and burgers.'
  }
]

export const gallery: GalleryItem[] = [
  { id: 1, img: '/assets/farshaimg.jpg' },
  { id: 2, img: '/assets/farshaLounge7.jpg' },
  { id: 3, img: '/assets/farshaimg3.jpg' },
  { id: 4, img: '/assets/farshaimg4.jpg' },
  { id: 5, img: '/assets/farshaLounge5.jpg' },
  { id: 6, img: '/assets/farshaLounge2.jpg' },
  { id: 7, img: '/assets/farshaLounge3.jpg' },
  { id: 8, img: '/assets/farshaLounge6.jpg' },
  { id: 9, img: '/assets/e7na asl el7akaya.jpg' },
  { id: 10, img: '/assets/farshaLounge4.jpg' },
  { id: 11, img: '/assets/beach6.jpg' }
]

export const history: HistoryItem[] = [
  {
    id: 1,
    img: '/assets/history2.jpg',
    title: 'Farsha... Its sweetness in its simplicity',
    description:
      'The name quickly caught on and became synonymous with my sitting areas. People would come to Sharm El-Sheikh and ask where they could find Farsha. My friend would point them in my direction, and they would spend their afternoons lounging on my comfortable cushions and mats, enjoying the beautiful view of the Red Sea. As time went on, I became more than just a sitting area. I started offering shisha, drinks, and snacks to my guests. My name became well-known among the locals, and I became a landmark in the city. I am proud to have made a name for myself in Sharm El-Sheikh, and I will continue to welcome guests from all over the world to experience the simplicity and tranquility of Farsha.'
  },
  {
    id: 2,
    img: '/assets/IMG_0258.jpg',
    title: 'My Antiques',
    description:
      'Recognizing the value of antiques, I decided that all my components would be various antiques, including everything old and valuable. My friend traveled across cities, villages, and deserts, collecting these antiques. Periodically, he brings a selection of these antiques and arranges them harmoniously... My goal is to bring joy to people in a simple manner. I remain happy when you feel the place as you would your drink or the food served to you.'
  },
  {
    id: 3,
    img: '/assets/history4.jpg',
    title: 'My Components',
    description:
      "Key components include an original goat-hair tent from my hometown of Rafah and El-Arish, alongside various-shaped trays repurposed as tables, sourced from rural areas. Additionally, there are tools, bottles, motorcycles, cars, paintings, and antique frames, each with its own story. Noteworthy is an antique door my friend bought, originally from a famous church. My fame stems from our friendly and polite service, diverse sessions, and the incorporation of beloved proverbs like Patience is the key to relief, reflecting my friend's vision for the future."
  },
  {
    id: 4,
    img: '/assets/history6.jpg',
    title: 'And the dream continues',
    description:
      'I am Farsha, an organized randomness... an expression coined by my friend Alfred, a lover of nature and beauty, who emphasizes that he has not yet achieved his main dream.'
  }
]
