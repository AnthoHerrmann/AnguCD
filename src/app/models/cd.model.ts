export class CD {
    id! : Number;
    title! : String;
    author! : String;
    price! : Number;
    thumbnail! : String;
    dateDeSortie! : Date;
    quantite! : Number;
    onSale? : Boolean;

    constructor(id : Number, title : String, author : String, price : Number, thumbnail : String, dateDeSortie : Date, quantite : Number, onSale? : Boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.thumbnail = thumbnail;
        this.dateDeSortie = dateDeSortie;
        this.quantite = quantite;
        if (onSale !== undefined)
            this.onSale = onSale;
    }
}