import { PRODUCTS } from "../products";
import React, {useState} from "react";
import './ImageSlider2.css';
const ImageSlider2=()=>{
     const [imageIndex,setImageIndex]=useState(0);
    function prevSlide(){
      
      if(imageIndex===0)return  setImageIndex(PRODUCTS.length-1);
      else return setImageIndex(imageIndex-1);
      
    }
    function nextSlide(){
    
        if(imageIndex===PRODUCTS.length-1)return setImageIndex(0);
        else return setImageIndex(imageIndex+1);

    }
 

 return <div className="container2">
    <div className="imageslider2">
      <button onClick={prevSlide}>L</button>
      
        <img 
        key={PRODUCTS[imageIndex].id}
        src={PRODUCTS[imageIndex].productImage} 
        alt={PRODUCTS[imageIndex].productName}/>
        
      <button onClick={nextSlide}>R</button>
      </div>
      <div className="radio">
        {PRODUCTS.map((item,index)=>(
            <input
             key={item.id}
              type="radio"
              color={index===imageIndex? '#ccc':'white'}
              disabled/>
        ))}
     
 </div>
 </div>
}
export default ImageSlider2;