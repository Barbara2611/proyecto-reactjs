import React from "react";
import Navbar from "./Components/NavBarComponents/Navbar";
import ItemDetailContainer from "./Components/DetailComponents/ItemDetailContainer";
import ItemListContainer from "./Components/ItemComponents/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/styled-engine";
import { CartProvider } from "./Components/CartContexs/CartContex";
import Cart from "./Components/NavBarComponents/Cart";




const App = () => {


  return (
   
      <BrowserRouter>
       <CartProvider>
       <StyledEngineProvider injectFirst> 
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/> } />         
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

        </StyledEngineProvider>
        </CartProvider>
      </BrowserRouter>
   
  );
}

export default App;
