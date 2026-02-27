export interface Product {
    id?:number,
    name:string,
    price:number,
};

export interface Material {
    id?:number,
    name:string,
    quantity:number,
};

export interface ProductMaterial {
    id?:number,
    product_id?:number,
    material_id:number,
    quantity:number,
};

export interface DetailedProductMaterial {
    id?:number,
    product_name:string,
    material_name:string,
    quantity:number,
};

export interface CalculateProductXMaterial {
    product_id?:number,
    product_name:string,
    quantity:number,
}

export interface ButtonProps {
  id?: number;
  url: string;
  content: string;
}
