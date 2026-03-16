import {Component, computed, OnInit, signal} from '@angular/core';
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

    products = signal<ProductModel[]>([]);
    productsSubscription: Subscription | undefined;
    favoriteProducts = computed(() => this.products().filter((product: ProductModel) => product.isFavorite));

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productsSubscription = this.productService.getData().subscribe(products => {
            this.products.set(products);
        })
    }

    delete(id: number){
        this.products.set(this.products().filter(item => item.id !== id));
    }

    select(s: number){
        this.products.set(this.productService.getDataByCategory(s));
    }

    addFavorite(id: number){
       this.products.update((currentProducts: ProductModel[]) => {
           let updatedProducts: ProductModel[] = currentProducts;
           updatedProducts.map(item => {
               if(id === item.id){
                   item.isFavorite = !item.isFavorite;
               }
           })
           return updatedProducts;
       })
    }

    addLiked(id: number){
        this.products.update((currentProducts: ProductModel[]) =>{
            let updatedProducts: ProductModel[] = currentProducts;
            updatedProducts.map(item => {
                if(id === item.id){
                    item.likes = item.likes + 1;
                }
            })
            return updatedProducts;
        })
    }

}
