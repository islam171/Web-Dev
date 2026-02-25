import {Component, OnInit} from '@angular/core';
import {ProductListComponent} from "../product-list-component/product-list-component";
import {ProductService} from "../../services/product/product.service";
import {Sidebar} from "../sidebar/sidebar";
import {ProductModel} from "../../models/product.model";
import {Subscription} from "rxjs";
import {Header} from "../header/header";

@Component({
  selector: 'app-app-component',
    imports: [
        ProductListComponent,
        Sidebar,
        Header
    ],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent implements OnInit {

    products: ProductModel[] = [];
    productsSubscription: Subscription | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productsSubscription = this.productService.getData().subscribe(products => {
            this.products = products;
        })
    }


    delete(id: number){
        this.products = this.products.filter(item => item.id !== id);
    }

    select(s: number){
        this.products = this.productService.getDataByCategory(s);
    }

    search(query: string){
        this.products = this.products.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }
}
