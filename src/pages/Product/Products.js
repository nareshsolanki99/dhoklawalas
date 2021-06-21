import React, { useContext,useEffect } from "react"
import Card from "../../components/Resuable/Card";
import "../../styles/main.scss";
import ProductContext from "../../context/product-context";

function Products(){
    const productCtx = useContext(ProductContext);

    useEffect(()=>{

        return ()=>{
            productCtx.clearSearch();
        }

    },[])

    return(
        <div className="prod">
                {productCtx.newList && productCtx.newList.map(product=>{
             return <Card key={product.id} id={product.itemid} imgSrc={product.image} className="product-card" name={product.name} price={product.price}/>})}
        </div>
    )
}

export default Products