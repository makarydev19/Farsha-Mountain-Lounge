import { StaticImageData } from 'next/image'

export type Link = {
  name: string
  path: string
}

export type Guideline = {
  id: number
  img: string | StaticImageData
  color: string
  title: string
  description: string
}

export type GalleryItem = {
  id: number
  img: string | StaticImageData
}

export type HistoryItem = {
  id: number
  img: string | StaticImageData
  title: string
  description: string
}
