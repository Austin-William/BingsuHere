// Products type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Navbar types
export type NavbarListProduct = { name: string, path: string }[];
export type NavbarListButton = { name: string, icon: string, path: string }[];
export type NavbarListSocial = { name: string, iconPath: string, url: string }[];
export type NavbarListLanguage = { text: string, code: string, iconPath: string }[];

// Card types
export type CardOptionType = {
  id: number;
  title: string;
  value: string; // set to "s", "m", "l"
  price: number;
}

export type CardLabelsType = {
  title: string;
  classname: string;
}

export type NotFoundButtonLinks = {
  title: string;
  description: string;
  url: string;
}