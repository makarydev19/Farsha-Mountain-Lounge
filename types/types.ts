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

export type HistoryData = {
  image: string | StaticImageData
  title: string
  content: string
}

export type Field = {
  id: string
  label: string
  placeholder?: string
  type:
    | 'text'
    | 'textarea'
    | 'email'
    | 'tel'
    | 'date'
    | 'time'
    | 'number'
    | 'password'
    | 'rating'
  required?: boolean
}

export type SignUpPayload = {
  email: string
  password: string
  name?: string
  image?: string
}
