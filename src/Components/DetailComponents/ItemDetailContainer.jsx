import * as React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "items", id);
    getDoc(docRef).then((snapshot) => {

      setItem({ id: snapshot.id, ...snapshot.data() })

    })
  }, [])
  console.log(`item detail`, item)

  return ( 

     <ItemDetail item={item} />
    
);};


export default ItemDetailContainer;