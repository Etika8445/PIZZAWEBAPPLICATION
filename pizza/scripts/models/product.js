//product model(blue print)

class product{
    constructor(id, name, desc, price , url){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isaddtocart=false;
    }
}

export default product;