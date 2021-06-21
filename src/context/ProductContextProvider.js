import React, { useState, useEffect } from 'react'
import ProductContext from "./product-context"
import Fuse from "fuse.js"

const ProductContextProvider = props =>{
    
    const [productList,setProductList] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        fetch("/productDetails.json")
        .then(res => res.json())
        .then(setProductList);
    },[])

    const options = {
        keys: ['name']
    }
    const fuse = new Fuse(productList, options)

    const result = fuse.search(search);
    const newList = search? result.map(product => product.item):productList;

    
    const updatedList = (name) =>{
        setSearch(name);
    }
    const clearSearch = () =>{
        setSearch("");
    }


    const list = {
        newList,
        search,
        clearSearch,
        setProductList,
        updatedList
    }




    return <ProductContext.Provider value={list}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductContextProvider