import React, { useReducer } from "react"
import CartContext from "./CartContext"

const defaultState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action) =>{
    let updatedItems;
    let newTotalAmount;
    let updatedItem;
    const {items,totalAmount} = state;
   
    if(action.type === "ADD"){
        const {item} = action;
        newTotalAmount = totalAmount+(item.qty*item.price);
        
        let itemIndex = items.findIndex((prod) => prod.id === item.id);
        let cartItem = items[itemIndex];
        
        if(cartItem){
            updatedItem = {...cartItem,qty:cartItem.qty+item.qty};
            updatedItems = [...items]
            updatedItems[itemIndex] = updatedItem;
        }else{
            updatedItems  = items.concat(item);
            
        }
        return {
            items:updatedItems,
            totalAmount:newTotalAmount
        }
        
    }else if(action.type === "REMOVE"){
        const{id} = action;
        const itemIndex = items.findIndex((item => item.id === id));
        const itemToBeRemoved = items[itemIndex];
        newTotalAmount = totalAmount - itemToBeRemoved.price;
        if(itemToBeRemoved.qty >1){
            updatedItem = {...itemToBeRemoved,qty:itemToBeRemoved.qty-1};
            updatedItems =[...items];
            updatedItems[itemIndex] = updatedItem;
        }else{
            updatedItems = items.filter(item => item.id !== id);
        }
        return {
            items:updatedItems,
            totalAmount:newTotalAmount
        }

    }else if(action.type === "DEL"){
        const{id,amount} = action;
        newTotalAmount = totalAmount - amount;
        updatedItems = items.filter(item => item.id !== id);

        return {
            items:updatedItems,
            totalAmount:newTotalAmount
        }

    }
    return defaultState
}
const CartContextProvider = props =>{

    const[cartState,dispatchAction] = useReducer(cartReducer,defaultState);
    

    const addItemToCart = item =>{
        dispatchAction({
            type:"ADD",
            item
        })
    }

    const removeItemFromCart = id =>{
        dispatchAction({
            type:"REMOVE",
            id
        })
    }

    const deleteItemFromCart = (id,amount) =>{
        dispatchAction({
            type:"DEL",
            id,
            amount
        })
    }
 
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemFromCart,
        delItem:deleteItemFromCart

    }


    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)



} 

export default CartContextProvider