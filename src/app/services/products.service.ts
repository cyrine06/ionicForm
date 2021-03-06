import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

  constructor() { }

  productList() {
    this.products = [
      {
        id: 1,
        titre: "impacte des réseaux sociaux",
        categorieDeSondage: "culture",
        description: 'Ce sondage est dédié au genns qui utilisent les réseaux sociaux',
        dateDeCreation: '28/05/2021',
        dateDeFermuture:' 30/06/2021',
        dateDeModification:' 28/05/2021',
        images:["assets/images/products/product-1.1.jpg", "assets/images/products/product-1.2.jpg", "assets/images/products/product-1.3.jpg"],
        frais: 600,      
        nbParticipant:0,
        active: true,
        suspendu: false,
       
      },
      {
        id: 2,
        titre: "Vaccination de COVID",
        categorieDeSondage: "sport",
        description: 'Ce sondage est dédié aux gens qui ont idée sur la vaccination',
        dateDeCreation: '28/05/2021',
        dateDeFermuture:' 30/06/2021',
        dateDeModification:' 28/05/2021',
        images:["assets/images/products/product-1.2.jpg"],
        nbParticipant:0,
        active: true,
        suspendu: false,
        frais: 400,      
      },
      {
        id: 1,
        titre: "impacte des réseaux sociaux",
        categorieDeSondage: "sante",
        description: 'Ce sondage est dédié au genns qui utilisent les réseaux sociaux',
        dateDeCreation: '28/05/2021',
        dateDeFermuture:' 30/06/2021',
        dateDeModification:' 28/05/2021',
        images:["assets/images/products/product-1.1.jpg", "assets/images/products/product-1.2.jpg", "assets/images/products/product-1.3.jpg"],
        nbParticipant:0,
        active: true,
        suspendu: false,
        frais: 500,      
      }
    ];
    
 

     return this.products;
  }
}

