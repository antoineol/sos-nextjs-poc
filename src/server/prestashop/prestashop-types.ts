export interface Product {
  id: number;
  id_manufacturer: number;
  id_supplier: number;
  id_category_default: number;
  cache_default_attribute: number;
  id_default_image: number;
  id_default_combination: number;
  id_tax_rules_group: number;
  position_in_category: number;
  manufacturer_name: string;
  type: string;
  id_shop_default: number;
  reference: string;
  width: string;
  height: string;
  depth: string;
  weight: string;
  state: number;
  additional_delivery_times: number;
  product_type: string;
  ecotax: string;
  minimal_quantity: number;
  price: string;
  wholesale_price: string;
  unit_price: string;
  unit_price_ratio: string;
  additional_shipping_cost: string;
  active: string;
  redirect_type: string;
  available_for_order: string;
  available_date: string;
  condition: string;
  show_price: string;
  indexed: string;
  visibility: string;
  date_add: string;
  date_upd: string;
  pack_stock_type: number;
  link_rewrite: string;
  name: string;
  description: string;
  description_short: string;
  associations: {
    categories: unknown[][];
    images: unknown[][];
    combinations: unknown[][];
    product_option_values: unknown[][];
    product_features: unknown[][];
    stock_availables: unknown[][];
  };
}

export type ProductShort = Pick<Product, 'id'>;
