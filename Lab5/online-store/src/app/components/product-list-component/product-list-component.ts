import {Component} from '@angular/core';
import {ProductModel} from "../../models/product-model";
import {ProductComponent} from "../product-component/product-component";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-product-list-component',
    template: `
        <div class="wrapper">
            <div class="product">
                <div class="product__list" >
                    <div class="product__item" *ngFor="let product of productList; let i = index">
                        <app-product-component [product]="product" />
                    </div>
                </div>
            </div>
        </div>


    `,
    imports: [
        ProductComponent,
        NgForOf
    ],
    styleUrls: ['product-list-component.css'],
})
export class ProductListComponent {
    productList: ProductModel[] = [
        {
            id: 1,
            name: "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
            price: 763903,
            description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",
        },
        {
            id: 2,
            name: "Смартфон Apple iPhone 15 128Gb черный",
            price: 385447,
            description: "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
        },
        {
            id: 3,
            name: "Смартфон Apple iPhone 13 128Gb черный",
            price: 322236,
            description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов.",
            rating: 4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium"

            ],
            links: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
        },
        {
            id: 4,
            name: "Смартфон Samsung Galaxy S25+ 5G 12 ГБ/256 ГБ синий",
            price: 462799,
            description: "Samsung Galaxy S25+ 5G — мощный и стильный смартфон с передовыми технологиями, созданный для тех, кто ценит безупречное качество и непревзойденную производительность.",
            rating: 4.2,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p12/p11/20115802.png?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/p12/p11/20115802.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pda/p10/20115804.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pa1/p10/20115806.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133433811/?c=750000000",
        },
        {
            id: 5,
            name: "Смартфон OPPO A31 6 ГБ/128 ГБ черный",
            price: 47029,
            description: "Представляем OPPO A31 — смартфон, который сочетает в себе высокую производительность, стильный дизайн и доступную цену. С ним вы сможете наслаждаться яркими изображениями и быстрой работой приложений.✨",
            rating: 3,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pfd/pc4/15961672.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/pfd/pc4/15961672.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p1a/pc5/15961673.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p36/pc5/15961674.jpg?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133433811/?c=750000000",
        },
        {
            id: 6,
            name: "Смартфон Samsung Galaxy S25+ 5G 12 ГБ/256 ГБ зеленый",
            price: 49.99,
            description: "1080p webcam with auto focus",
            rating: 4.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p7a/pee/57089197.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/p7a/pee/57089197.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/p96/pee/57089198.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pb3/pee/57089199.png?format=gallery-medium"
            ],
            links: "https://example.com/product/6",
        },
        {
            id: 7,
            name: "Смартфон Xiaomi 13 12 ГБ/256 ГБ зеленый",
            price: 574500,
            description: "Смартфон Xiaomi 13 оборудован 6.36-дюймовым дисплеем с едва различимыми взглядом рамками. Вы удивитесь охвату широкого спектра оттенков и детализации мельчайших элементов. Эти характеристики достигаются использованием AMOLED-технологии и увеличенным до 2400x1080 пикселей разрешением. Чувствительный датчик определит степень внешней освещенности и автоматически изменит яркость. Комфортный просмотр роликов теперь возможен и в солнечную погоду.",
            rating: 5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hdd/h50/86009484148766.png?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/hdd/h50/86009484148766.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/ha1/h66/86009484181534.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h50/h3b/86009484214302.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/xiaomi-13-12-gb-256-gb-zelenyi-109329846/?c=750000000",
        },
        {
            id: 8,
            name: "Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный",
            price: 572873,
            description: "Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.",
            rating: 4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium"
            ],
            links: "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000",
        },
        {
            id: 9,
            name: "Смартфон Samsung Galaxy A07 4 ГБ/64 ГБ черный",
            price: 54999,
            description: "Samsung Galaxy A07 4 ГБ/64 ГБ — это универсальный смартфон для тех, кто ценит функциональность и стильный дизайн.\n" +
                "\n" +
                "✨ Особенности:\n" +
                "- ✅ Емкий аккумулятор 5000 мА·ч — для длительного использования без подзарядки.\n" +
                "- 🧱 Оперативная память 4 ГБ — обеспечивает плавную работу приложений.\n" +
                "- 🌱 Двойная камера 50 Мп + 2 Мп — для ярких и четких снимков.",
            rating: 3.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/ped/p1d/61292380.jpg?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/ped/p1d/61292380.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pbc/p1a/61292372.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/pd8/p1a/61292373.jpg?format=gallery-medium"
            ],
            links: "https://example.com/product/9",
        },
        {
            id: 10,
            name: "Смартфон Realme C71 8 ГБ/256 ГБ зеленый",
            price: 92712,
            description: "Realme C71 идеально подходит для тех, кто ищет надёжный смартфон для работы, развлечений и повседневного общения. Поддержка двух SIM-карт позволит всегда оставаться на связи, а яркий IPS-экран с разрешением FHD+ подарит незабываемые впечатления от просмотра контента.",
            rating: 4.5,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/57994064.png?format=gallery-medium",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/57994064.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p51/pc4/57994073.png?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p58/pc1/57994067.png?format=gallery-medium"],
            links: "https://example.com/product/10",
        }
    ]

}
