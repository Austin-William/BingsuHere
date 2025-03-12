// Products type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Navbar types
export interface NavbarListProduct { name: string, path: string };
export interface NavbarListButton { name: string, icon: string, path: string };
export interface NavbarListSocial { name: string, iconPath: string, url: string };
export interface NavbarListLanguage { text: string, code: string, iconPath: string };

// Card types
export interface CardOptionType {
  id: number;
  title: string;
  value: string; // set to "s", "m", "l"
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