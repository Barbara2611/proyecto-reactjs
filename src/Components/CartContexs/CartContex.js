import {  createContext, useContext, useState } from "react";

export const cartContext = createContext();

export const UseCart = () => useContext(cartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        // está el item en el carrito ? true : false
        const producto = cart.find(item => item.id === id);

        if(producto != null)
            return true;
        else
            return false;
    };

    const addItemCart = (item, quantity) => {
        // busca item en el carrito ? actualiza la cantidad : agrega el item y su cantidad al carrito
        setCart(cart.filter(item => item !== undefined ))
        if(isInCart(item.id)){
         
            let index =  cart.findIndex((prod) => prod.item.Id === item.id)
            let PosibleQuantity = cart[index].quantity + quantity;
            cart[index].quantity = PosibleQuantity
            
        }else{
        setCart([...cart,{item, quantity}]);
        }
    };

    const getItemQuantity = (id) => { 
        let quant = 0
          cart.map(product =>{
            
               if(product.item.Id === id) {
               
                        quant = (product.quantity)
               }   
        });
        
        return quant
        }

    const removeItemCart = (id) => {
        // sacar item del carrito
        setCart(cart.filter(item => item.item.id !== id ))

      };

    const clearCart = () => {
        //limpiar carrito
        setCart([]);
    };
    const getTotalPrice = () => { 
        let newcart = 0;
           cart.map(item =>{
            newcart = newcart + (item.item.price * item.quantity) ;
       
           }  )
           return newcart;
       }

    const countItemsCart = () => {
        // cuenta la cantidad de items que hay en el carrito
        const count = 0;

        cart.reduce((count, prod) => count + prod.cantidad, 0);

        return count;
    };




  
    return (
        <cartContext.Provider
            value={{ cart, setCart, isInCart, addItemCart, removeItemCart, clearCart, countItemsCart, getItemQuantity, getTotalPrice }}
        >
            {children}
        </cartContext.Provider>
    );
};

