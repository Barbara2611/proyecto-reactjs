import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemComponents/ItemCount';
import { UseCart } from '../CartContexs/CartContex';

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
                     } }>
        <CardMedia
            component="img"
            alt= {item.category}
            height="400"
            src = {item.image}
            
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ ml: 10,}}>
            {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.price}
            </Typography> 
            <Typography>
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
