export type Room = {
  id: string;
  name: string;
  slug: string;
  type: string;
  price: number;
  size: number;
  capacity: number;
  pets: boolean;
  breakfast: boolean;
  featured: boolean;
  description: string;
  extras: string[];
  images: string[];
};
