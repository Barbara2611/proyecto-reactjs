import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemComponents/ItemCount';
import { UseCart } from '../CartContexs/CartContex';
import { positions } from '@mui/system';

const divStyle = {
    display: "inline-block",
}

const ItemDetail = ({item}) => {
   const { addItemCart } = UseCart();

    const [quantity, setQuantity] = useState(0)
   
    
    useEffect(() => {
      if (quantity !== 0) {
    
        addItemCart(item, quantity);
      }
    }, [quantity])
    

  return (
     <div style={divStyle}>
        
      <div >
    
        <Card sx={{ width: 700,
                    height: 500,
                    padding: 5,
                    marginLeft: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    mt: 5,
                    positions:'relative'
                     } }>
        <CardMedia
            component="img"
            alt= {item.category}
            height="400"
            src = {item.image}
            
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ ml: 1, mt: 0, positions: 'absolute'}}>
            {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize: 18}}>
                ${}{item.price}
            </Typography> 
            <Typography sx={{fontSize: 15}}>
            {item.description}    
            </Typography>               
        </CardContent>
        <ItemCount  
        
          item={item}
          initial={1}
          setQuantity={setQuantity}
          
           
         />
        </Card>

      </div>
      
     </div>
  );
}
export default ItemDetail;
