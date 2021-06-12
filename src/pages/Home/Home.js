import React, { useEffect, useState } from "react"
import MyCarousal from "../../components/Resuable/MyCarousal";
import image1 from "./images/dhokla-home.jpg"
import image2 from "./images/patra-home.jpg"
import image3 from "./images/vadi-home.jpg"
import Card from "../../components/Resuable/Card"
import FeatureCard from "../../components/Resuable/FeatureCard";
import "../../styles/main.scss"


function Home(){

    const items = [
        {
          src: image1,
          altText : 'Slide 1',
          key: '1',
          link: ""
        },
        {
          src: image2,
          altText :'Slide 2',
          key: '2',
          link:""
        },
        { 
          src:image3,
          altText: 'Slide 3',
          key: '3',
          link:""
        }
      ];


      const [topProducts,setTopProducts] = useState();

      useEffect(()=>{
        fetch("./topProducts.json")
        .then(res => res.json())
        .then(setTopProducts);

      },[])
      
      console.log(topProducts);

    return(
      <div className="home-div">
       {/* <div className="carousal-div"><ImageCarousal items={items} /></div> */}
       
       <MyCarousal items={items} />
       <h4 className="top-product-heading"><span>----------------</span>  Top Selling Products  <span>----------------</span></h4>
       <div className="top-product-div">
           {topProducts && topProducts.map(product=>{
             return <Card key={product.id} imgSrc={product.image} name={product.name} price={product.price}/>})}
           </div>
           <div className="features-div"> 
              <FeatureCard icon="fas fa-truck truck" description="We ensure quick delivery" heading="On-Time Delivery"/>
              <FeatureCard icon="fas fa-cheese cheese" description="The food is prepared daily as per orders" heading="Fresh Food Always"/>
              <FeatureCard icon="fas fa-handshake" description="We maintain good relationship with our Customers" heading="Customer Bonding"/>
           </div>
       </div>

    )
}

export default Home