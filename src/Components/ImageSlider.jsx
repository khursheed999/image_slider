import React from "react";
import Slider from "react-slick";
import { PRODUCTS } from "../products";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
const ImageSlider=()=>{
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        
    };

    return <div className="container1">
     <Slider className="imageslider1"  {...settings} >
     {PRODUCTS.map((item)=>(
       <div key={item.id}>
        <img  
        src={item.productImage}
         alt={item.productName} /> 
       </div>
     ))}
     </Slider>
    </div>
}
export default ImageSlider;