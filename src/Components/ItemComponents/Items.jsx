import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UseCart } from '../CartContexs/CartContex';


const divStyle = {
  
    display: "inline-block",
    
}

const Items = ({products}) => {

    const [enableBuy, setEnableBuy] = useState(false);
    const { addItemCart, getItemQuantity, isInCart } = UseCart();

    const handleAddTocart = () => {
  
        addItemCart(products, 1)
  
      if (isInCart(parseInt(products.id))) {
        setEnableBuy((parseInt(products.stock) - getItemQuantity(parseInt(products.id))) < 1)
  
      }
  
    }
    useEffect(() => {
      setEnableBuy((parseInt(products.stock) - getItemQuantity(parseInt(products.id))) < 1)
  
    }, [])
  


        return (
            <div >
            {products.map(product =>{
               return (
               <div style={divStyle} >
                <Card key={product.id} sx={{ width: 250,
                            margin: 5,
                            display: 'inline-block', } }>
                
                    <CardMedia
                        component="img"
                        alt= {product.category}
                        height="140"
                    src = {product.image} 
                    />
                
                <CardContent>
                <Link to={`item/${product.id}`} disabled={enableBuy} onClick={handleAddTocart}> 
                        <Typography gutterBottom variant="h5" component="div" sx={{ ml: 10,}}>
                        {product.title}
                        </Typography>
                </Link>        
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>                
                </CardContent>
        
                </Card>
            </div>
            )
            })}
            </div>
        );
}
export default Items;