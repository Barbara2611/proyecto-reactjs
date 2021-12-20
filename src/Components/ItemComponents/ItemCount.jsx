import React from 'react';
import { CardActions } from '@mui/material';
import { Box, width } from '@mui/system';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { UseCart } from '../CartContexs/CartContex';


const ItemCount = ({item, setQuantity, initial}) => {

    const { stock, id } = item
    const { getItemQuantity, isInCart } = UseCart();
    const [cardItems, setCardItems] = useState(initial);
    const[enableBuy, setEnableBuy]= useState(false);


     
     const addItem = () => {
         const newCard = cardItems + 1;
         if (newCard <= stock) {
            setCardItems(newCard);
        
         }
       };
 
       const quitItem = () => {
         const newCard = cardItems - 1;
         if (newCard >= initial) {
            setCardItems(newCard);
          
         }
        
       };
     
       const onAdd = () =>{
         setQuantity(cardItems);
         
       }
       useEffect(() => {
        if(isInCart(id) ){
           setEnableBuy((stock - getItemQuantity(parseInt(id)))<cardItems)
          }
       },[cardItems])

   
   
    return (
     
            <CardActions sx={{ display: "flex", flexDirection: "column", position: 'relative'}} >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                    m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="outlined button group" >
                    <Button onClick= {quitItem}>-1</Button>
                    <Button > {cardItems} </Button>
                    <Button onClick= {addItem}>+1</Button>
                </ButtonGroup>
            </Box>
                <Button size="medium" variant="contained" fullWidth="true" disabled={enableBuy}  onClick={onAdd}> Agrega al carrito</Button>
                <Button size="large" variant="contained" fullWidth="false" 
                sx={{ marginTop: 20,
                      marginRight: 19,
                      position: 'absolute',
                      width: 300
                     }}>
                    <Link to="/Cart" 
                    sx={{ textDecoration: 'none', color: "white" }}> Finalizar mi compra </Link>  </Button>
            </CardActions>
            
      
    )
}

export default ItemCount
