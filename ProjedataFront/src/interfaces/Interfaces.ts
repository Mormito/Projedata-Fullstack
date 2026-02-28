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
    productID?:number,
    rawMaterialID:number,
    quantity:number,
};

export interface DetailedProductMaterial {
    id?:number,
    product_name:string,
    raw_material_name:string,
    quantity:number,
};

export interface CalculateProductXMaterial {
    product_id?:number,
    product_name:string,
    quantity:number,
};

export interface ButtonProps {
  id?: number;
  url: string;
  content: string;
  onDelete?: () => void;
};

export interface FormOptionProps {
  option: boolean;
};

export interface idGetter {
    id?:number;
};

export interface FormUpdateProps extends idGetter, FormOptionProps {};
