// glue between view and model
//controller--> UI to I/O

import productoperation from "../services/product-operations.js"

async function loadpizza(){
    const pizza= await productoperation.loadproducts();
    for(let p of pizza){
        preparepizzacard(p);
    }
}
loadpizza();


function addtocart(){
    const pizzaid=this.getAttribute("product-id"); //this--> button
    productoperation.searchedproducts(pizzaid);
    printbasket();
}
function printbasket(){
    const pizzafi= productoperation.getproducts();
    const ul=document.querySelector("#basket");
    basket.innerText=" ";
    for(let p of pizzafi){
        const carddiv= document.createElement("div");
        carddiv.className="cardtotal";
        carddiv.style="width: 20rem;";
        ul.appendChild(carddiv);
        const img= document.createElement("img");
        img.src= `${p.url}`;
        img.className="card-img-top";
        carddiv.appendChild(img);
        const idiv=document.createElement("div");
        idiv.className="card-body";
        carddiv.appendChild(idiv);
        const h5= document.createElement("h5");
        h5.className="card-title";
        h5.innerText= `${p.name} ${p.price}`;
        idiv.appendChild(h5);
    }
}
function totalsum(){
    const arraypizza= productoperation.getproducts();
    let sum=0;
    for(let p of arraypizza){
        sum=sum+parseFloat(p.price);
    }
    let gst=sum*0.13;
    sum=sum+gst;
    let final=sum.toFixed(3);
    document.getElementById("put").value=final;
}


function totalsection(){
    const total=document.querySelector("#total");
    const Button=document.createElement("button");
    Button.addEventListener("click",totalsum);
    Button.className="btn btn-danger";
    Button.innerText="TOTAL";
    total.appendChild(Button);
    const br= document.createElement("br");
    br.id="break";
    total.appendChild(br);
    const input= document.createElement("input");
    input.innerText="pay Bill";
    input.id="put";
    total.appendChild(input);
}
totalsection();

function preparepizzacard(pizza){
    const output= document.querySelector("#output");
    const coldiv=document.createElement("div");
    coldiv.className="col-6";
    output.appendChild(coldiv);
    const carddiv= document.createElement("div");
    carddiv.className="card";
    carddiv.style="width: 24rem;";
    coldiv.appendChild(carddiv);
    const img= document.createElement("img");
    img.src= pizza.url;
    img.className="card-img-top";
    carddiv.appendChild(img);
    const idiv=document.createElement("div");
    idiv.className="card-body";
    carddiv.appendChild(idiv);
    const h5= document.createElement("h5");
    h5.className="card-title";
    h5.innerText= pizza.name;
    idiv.appendChild(h5);
    const p= document.createElement("p");
    p.className="card-text";
    p.innerText= pizza.desc.slice(0,45)+"...";
    idiv.appendChild(p);
    const button= document.createElement("button");
    button.setAttribute("product-id",pizza.id);
    button.addEventListener("click",addtocart);
    button.className="btn btn-danger";
    button.innerText="add to cart";
    idiv.appendChild(button);
}