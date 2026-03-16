import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {ProductComponent} from "../product-component/product-component";
import {NgForOf} from "@angular/common";
import {ProductModel} from "../../models/product.model";

@Component({
    selector: 'app-product-list-component',
    templateUrl: './product-list-component.html',
    imports: [
        ProductComponent,
        NgForOf
    ],
    styleUrls: ['product-list-component.css'],
})
export class ProductListComponent {
    @Input() productList: ProductModel[] = [];
    @Output() favorite = new EventEmitter<number>();
    @Output() like = new EventEmitter<number>();

    addFavorite(id: number){
        this.favorite.emit(id)
    }

    addLiked(id: number){
        this.like.emit(id)
    }

    productId = output<number>()

    delete(id :number){
        this.productId.emit(id);
    }
}
