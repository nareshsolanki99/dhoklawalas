import React, { useEffect, useState } from "react"
import Card from "../../components/Resuable/Card";
import "../../styles/main.scss"

function Products(){
    const [productDetails,setProductDetails] = useState();

    useEffect(()=>{
        fetch("./productDetails.json")
        .then(res => res.json())
        .then(setProductDetails);
    },[])

    return(
        <div className="prod">
                {productDetails && productDetails.map(product=>{
             return <Card key={product.id} id={product.itemid} imgSrc={product.image} name={product.name} price={product.price}/>})}
        </div>
    )
}

export default Products