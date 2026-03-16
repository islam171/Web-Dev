import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {Star} from "../star/star";

import {MatIconModule} from '@angular/material/icon';
import {Title} from "../title/title";

@Component({
    selector: 'app-product-component',
    templateUrl: './product-component.html',
    imports: [Star, MatIconModule, Title],
    styleUrls: ['product-component.css'],
})
export class ProductComponent {
    @Input() product!: ProductModel;

    showWhatsapp = (link: string) => {
        return `https://wa.me/?text=Check out this product: {${encodeURIComponent(link)}}`
    }
    showTelegram = (link: string, name: string) => {
        return `https://t.me/share/url?url={${encodeURIComponent(link)}&text={${encodeURIComponent(name)}}`
    }

    @Output() favorite = new EventEmitter<number>();
    @Output() like = new EventEmitter<number>();

    addFavorite(id: number){
        this.favorite.emit(id)
    }

    addLiked(id: number){
        this.like.emit(id);
    }


    isLiked = false;

    // like() {
    //     if (!this.isLiked) {
    //         this.isLiked = true;
    //         this.product.likes = this.product.likes + 1;
    //     } else {
    //         this.isLiked = false;
    //         this.product.likes = this.product.likes - 1;
    //     }
    // }


    productId = output<number>()

    delete(id: number){
        this.productId.emit(id);
    }

}
