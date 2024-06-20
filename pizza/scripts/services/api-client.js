//logic
//Network call code
import URL from "../utils/constants.js"
async function makenetworkcall(){
    try{
        const response= await fetch(URL);
        const object= await response.json();
        return object; //wrap in promise
    }
    catch(error){
        console.log("some errror",error); 
        throw error;
    }
    /*const promise = fetch(URL); //assign to thread
    console.log(promise);
    promise.then((response)=>{
        console.log(response);
        const p=response.json(); //deserialization json to object
    }).then(data=>{
            console.log(data);
    }).catch((error)=>{
            console.log(error);
    });*/ 
}
export default makenetworkcall; 