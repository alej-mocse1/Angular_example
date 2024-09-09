
export interface Products {
    title:       string;
    price:       number;
    description: string;
    image:       string;
    category:    string;
    id:          number;
}


export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }


  export type ProductDetailOrdNull = ProductDetail | null

  