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

const Items = ({product}) => {

    const [enableBuy, setEnableBuy] = useState(false);
    const { getItemQuantity, isInCart } = UseCart();

    const handleAddTocart = () => {
  
        
        console.log(product)
  
      if (isInCart(parseInt(product.id))) {
        setEnableBuy((parseInt(product.stock) - getItemQuantity(parseInt(product.id))) < 1)
  
      }
  
    }
    useEffect(() => {
      setEnableBuy((parseInt(product.stock) - getItemQuantity(parseInt(product.id))) < 1)
  
    }, [])
  


        return (
               <div style={divStyle} >
                <Card key={ product.id} sx={{ width: 250,
                            margin: 5,
                            display: 'inline-block', } }>
                
                    <CardMedia
                        component="img"
                        alt= {product.category}
                        height="200"
                    src = {product.image} 
                    />
                
                <CardContent>
                <Link to={`item/${product.id}`} disabled={enableBuy} onClick={handleAddTocart}  style={{ textDecoration: 'none' }}> 
                        <Typography gutterBottom variant="h5" component="div" sx={{ ml: 7, color: '#EC7063', fontWeight: 'bold' }}>
                        {product.title}
                        </Typography>
                </Link>        
                    <Typography variant="body2" sx={{ ml: 7, color: '#F5B7B1', fontSize: 20}}>
                        {`$`}{product.price}
                    </Typography>                
                </CardContent>
        
                </Card>
            </div>

        );
}
export default Items;