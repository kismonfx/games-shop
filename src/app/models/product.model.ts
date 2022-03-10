export interface Product{
  _id: string;
  rating: number;
  price: number;
  title: string;
  image?: string;
  genre: string;
  developer: string;
  platform: string;
  description: string;
  release: Date;
  uploadImage?: File;
}
