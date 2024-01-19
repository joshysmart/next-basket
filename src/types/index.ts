export type TItem = {
  id: number | null;
  thumbnail: string | null;
  title: string | null;
  price: number | null;
  quantity: number | null;
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
