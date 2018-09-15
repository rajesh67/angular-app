import { Offer } from "./offer";

export interface Store{
    pk : string;
    storeName : string;
    storeAffName : string;
    logoUrl : string;
    affUrl : string;
    description : string;
    payouts : string;
    categoriesList : string;
    offers : Offer[];
}