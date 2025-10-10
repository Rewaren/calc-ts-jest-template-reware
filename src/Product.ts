export class Product{
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        if(price < 0){
            this.price = 0;
        }
        else{this.price = price;}
    }

    setPrice(price: number) {
        this.price = price;
    }
    getPrice(): number {
        return this.price;
    }
}