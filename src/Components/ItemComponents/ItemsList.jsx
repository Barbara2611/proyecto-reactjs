import Box from '@mui/material/Box';
import Items from './Items'


const ItemsList = ({products}) =>{
    
    return(
        <Box >
        {products.map(product => {
           return (
              <Items 
                
                 product={product}
               
              />

           )
        })}
     </Box>
    )
}
export default ItemsList