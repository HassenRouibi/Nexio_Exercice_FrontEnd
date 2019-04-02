import {Component, Input, OnInit} from '@angular/core';
import { ProductService } from "../../shared_service/product.service";
import { Product} from "../../product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  private products:Product[];
  total:number = 0;

  constructor(private _productService:ProductService, private modalService: NgbModal){ }

  // Initialisation
  ngOnInit() {
    this.sommePanier();
    this._productService.getProducts().subscribe((products)=>{
      this.products= products;
      console.log(products);
    }, (error) =>{
      console.log(error);
    })

  }

  afficherDetail(product_id){
    for(var i=0; i<this.products.length; i++){
      if(this.products[i].id === product_id)
      {
        // On peux rajouter un modal ici
        alert(this.products[i].detail);
      }
    }
  }

  // Calculer la somme des produits dans le panier
  sommePanier(){
    this.total = 0;
    if( this.products){
    for(var i=0; i<this.products.length; i++) {
      this.total += (this.products[i].price * this.products[i].quantite);
    }

    }
  }
  // Ajouter le produit au panier et calculer la somme
  ajouter(product_id){
    for(var i=0; i<this.products.length; i++){
      if(this.products[i].id === product_id)
      {
        this.products[i].quantite += 1;
      }
    }
    this.sommePanier();
    console.log(this.products);
  }

  // Supprimer le produit dans panier et recalculer la somme
  retirer(product_id){
    for(var i=0; i<this.products.length; i++){
      if(this.products[i].id === product_id)
      {
        this.products[i].quantite -= 1;
      }
    }
    this.sommePanier();
    console.log(this.products);
  }
}
