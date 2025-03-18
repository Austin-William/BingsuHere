// Products type
interface LabelProduct {
  title: string;
  classname: string;
}

interface OptionProduct {
  id: number;
  title: string;
  value: string;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: number;
  featured: boolean;
  available: boolean;
  labels: LabelProduct[],
  ingredients: string[],
  kcal: number,
  options: OptionProduct[]
}

// Spinner types
export type SpinnerSizeType = 'sm' | 'md' | 'lg';

// Navbar types
export interface NavbarListProduct { name: string, path: string };
export interface NavbarListButton { name: string, icon: string, path: string };
export interface NavbarListSocial { name: string, iconPath: string, url: string };
export interface NavbarListLanguage { text: string, code: string, iconPath: string };

// Card types
export interface CardOptionType {
  id: number;
  title: string;
  value: string; // set to s, m, l
  price: number;
}

export interface CardLabelsType {
  title: string;
  classname: string;
}

export interface NotFoundButtonLinks {
  title: string;
  description: string;
  url: string;
}