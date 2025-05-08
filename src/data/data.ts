// data.ts

import { Link, Guideline, GalleryItem, HistoryData } from '@/types/types'

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

export const historyData: HistoryData[] = [
  {
    image: '/assets/IMG3.jpg',
    title: 'Our Origins',
    content:
      'Farsha started as a small antique collection nestled in the heart of Sinai, capturing the spirit of Bedouin tradition and desert mystique.'
  },
  {
    image: '/assets/IMG5.jpg',
    title: 'Evolution Over Time',
    content:
      'Over the years, we evolved into a one-of-a-kind destination, harmonizing ancient relics with stunning Red Sea views and ambient vibes.'
  },
  {
    image: '/assets/IMG4.jpg',
    title: 'The Farsha Experience',
    content:
      'Every corner of Farsha tells a story. From handpicked antiques to cozy lounges, our mission is to bring history and hospitality together.'
  }
]
