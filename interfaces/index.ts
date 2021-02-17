// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface IProduct {
  id: string;
  title: string;
  picture: string;
  price: IPrice;
  city: string;
  condition: string;
  free_shipping: boolean;
}

export interface IPrice {
  amount: number;
  currency: string;
  decimals: number;
}
