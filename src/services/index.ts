import { Banners } from "./banners";
import { Categories } from "./categories";
import { Cities } from "./cities";
import { Partner } from "./partner";
import { Partners } from "./partners";
import { Subcategories } from "./subcategories";
import { Unit } from "./unit";
import { Contact } from "./contact";
export class BeneficiarApi {
    public partners: Partners;
    public categories: Categories;
    public subcategories: Subcategories;
    public partner: Partner;
    public cities: Cities;
    public unit: Unit;
    public banners: Banners;
    public contact : Contact


    constructor() {
        this.partners = new Partners();
        this.categories = new Categories();
        this.subcategories = new Subcategories();
        this.partner = new Partner();
        this.cities = new Cities();
        this.unit = new Unit();
        this.banners = new Banners();
        this.contact = new Contact();
    }
}