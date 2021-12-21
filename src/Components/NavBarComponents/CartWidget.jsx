import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UseCart } from '../CartContexs/CartContex';


const CartWidget = () => {

  const { itemSumatory } = UseCart();
  if (itemSumatory() > 0) {
    return (
      
        <IconButton color="inherit" >
          <Badge badgeContent={itemSumatory()} color="error">
            <ShoppingCartIcon
              fontSize="large" />
          </Badge>

        </IconButton>

     
    )
  } else {
    return (
      null)
  }
}

export default CartWidget;