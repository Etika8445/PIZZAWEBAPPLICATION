//logic
//products CRUD operation
import product from "../models/product.js";
import makenetworkcall from "./api-client.js";

const productoperation={
    products:[],//key:value
    async loadproducts(){
        const pizzas =await makenetworkcall();
        const pizzaArray= pizzas['Vegetarian'];
        const productarray= pizzaArray.map(pizza=>{
            const currentpizza= new product(pizza.id,pizza.name, pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
            return currentpizza;
        })
        this.products=productarray; //this-->productoperation
        return productarray; //wrap in promise
    },
    searchedproducts(pizza){
        const prod= this.products.find(currentproduct=> currentproduct.id==pizza);
        prod.isaddtocart= true;
    },
    getproducts(){
        const finalpizza= this.products.filter(isadd=>isadd.isaddtocart);
        return finalpizza;
    },

}
export default productoperation;