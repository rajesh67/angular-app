import { Offer } from "./offer";

export interface Category{
    pk : string;
    categoryName : string;
    offers : Offer[];

    
}