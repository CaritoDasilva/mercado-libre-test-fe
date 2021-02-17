
export interface IProduct {
  id?: string;
  title?: string;
  picture?: string;
  price?: IPrice;
  city?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
}

export interface IPrice {
  amount: number;
  currency: string;
  decimals: number;
}

export interface ICategories {
  name: string;
}
