import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import ItemsList from './ItemsList'


const ItemListContainer = () => {

  const { id } = useParams();

  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    if (id === undefined) {
      getDocs(itemsCollection).then(snapshot => {

        SetProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
    } else {
      let q = query(itemsCollection, where("category", "==", id));
      getDocs(q).then(snapshot => {
        SetProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
    }
  }, [id])

console.log(products)
  if (products.length > 0) {
    return (

      <ItemsList products={products} />
    );
  }
  {
    return (
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <CircularProgress sx={{mt: 20}}/>
      </Box>
    );
  }

};

export default ItemListContainer;