import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { UseCart } from '../CartContexs/CartContex';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { getFirestore, collection, doc, addDoc, updateDoc } from "firebase/firestore";

export default function Cart() {

  const { cart, removeItemCart, getTotalPrice, clearCart } = UseCart();
  console.log(cart)
  const inputs = [
    {
      label: "nombre y apellido",
      name: "name"
    },
    {
      label: "correo",
      name: "email"
    },
    {
      label: "telefono",
      name: "phone"
    }
  ];

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const updateDB = () => {
    const db = getFirestore();


    cart.map((prod) => {

      updateDoc(doc(db, "items", `${prod.item.Id}`), { Stock: prod.item.Stock - prod.quantity })
    })



  }
  const onChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const [confirmation, setConfirmation] = React.useState(true);
  const [orderId, setOrderId] = useState();


  const db = getFirestore();
  const addOrderToDb = () => {
    var date = new Date();
    const orderCollection = collection(db, "Orders")
    const data =
    {
      buyer:
      {
        name: formFields.name,
        phone: formFields.phone,
        email: formFields.email
      },
      date: date,
      items: cart,
      total: getTotalPrice()
    }
    addDoc(orderCollection, data).then((data) => {
      setOrderId(data.id)
    })

  }


  const handleFormSubmit = () => {
    addOrderToDb();
    updateDB();
    clearCart();
    setConfirmation(true);

  }

  if (cart.length > 0) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10, mr: 15}}>
          <Box sx={{ display: "flex", justifyContent: "center", marginRight: 10, flexDirection: "column", boxShadow: 1 }}>
            <List dense sx={{ maxWidth: 600, bgcolor: 'background.paper', boxShadow: 1 }}>
              {cart.map((value) => {

                return (
                  <ListItem
                    key={value.item.Id}

                    disablePadding
                  >
                    <ListItemAvatar sx={{ marginLeft: 1 }}>
                      <Avatar
                        sx={{ width: 70, height: 70 }}
                        src={value.item.image}
                      />
                    </ListItemAvatar>

                    <Typography
                      component="h3"
                      color="text.secondary"
                      sx={{ width: 150, textAlign: "center", fontSize: 18 }}
                    >{value.quantity}

                    </Typography>

                    <Typography
                      component="h3"
                      color="inherit"
                      sx={{ width: 250, textAlign: "center", fontSize: 18 }}
                    > USD{value.item.price}

                    </Typography>
                    <IconButton color="inherit" onClick={() => removeItemCart(value.item.id)} >
                      <DeleteIcon ></DeleteIcon>
                    </IconButton>
                  </ListItem>
                );
              })}
              <Box sx={{ display: "flex", marginTop: 3, justifyContent: "flex-end" }}>
                <Typography >
                  Precio total: $
                </Typography>
                <Typography sx={{ marginRight: 3 }}>
                  {getTotalPrice()}
                </Typography>
              </Box>
            </List>

          </Box>
          <Box sx={{ marginRight: 10 }}>
            <FormControl sx={{ position: "fixed" }}>

              {inputs.map(({ name, label }) => (


                <TextField
                  id="outlined-textarea"
                  label={label}
                  value={formFields[name]}
                  name={name}
                  onChange={onChange}
                  sx={{ margin: 2 }}

                />))}


              <Button
                onClick={handleFormSubmit}
              >realizar orden </Button>
            </FormControl>
          </Box>
        </Box>





      </>

    );

  } else {

    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

        <Typography color="text.secondary" sx={{ fontSize: 22, textAlign: "center", mt: 8 }}

        > ¡Tu carrito esta vacío!</Typography>
        <Button sx={{ maxWidth: 500, fontSize: 15, marginRight: "auto", marginLeft: "auto", mt: 10, backgroundColor: "#EC7063" }} variant="contained"

        >   <Link to={`/`} style={{ textDecoration: 'none', color: "white" }} >
            IR AL LISTADO DE PRODUCTOS</Link>
        </Button>
        <Collapse in={confirmation} sx={{ marginTop: 10, maxWidth: 800, marginRight: "auto", marginLeft: "auto" }}>
          {orderId !== undefined &&
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setConfirmation(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Su orden fue ejecutada con exito, el numero de orden es {orderId}
            </Alert>
          }

        </Collapse>

      </Box>

    )
  }




}