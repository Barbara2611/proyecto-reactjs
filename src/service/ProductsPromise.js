const data = [
    {
        "id" : 1,
        "image" : "../imagenes/remera-tigresa.jpeg",
        "title" : "Remera Clara",
        "description" : " remera manga corta de algodon",
        "category": "Remeras",
        "price": "$2500",
        "stock": "15"
    },
    {
        "id" : 2,
        "image" : "../imagenes/jeanLoly.jpeg",
        "title" : "pantalon Loly",
        "description" : "jean tiro alto",
        "category": "Jeans",
        "price": "$4500",
        "stock": "10"
        
    },
    {
        "id" : 3,
        "image" : "../imagenes/chanclasBeige.jpeg",
        "title" : "Chanclas ",
        "description" : "Ojotas de verano",
        "category": "ojotas",
        "price": "$3500",
        "stock": "20"
    },
    {
        "id" : 4,
        "image" : "../imagenes/shortBaby.jpeg",
        "title" : "Short Baby",
        "description" : "short tiro alto de vestir",
        "category": "shorts",
        "price": "$2700",
        "stock": "10"
    },
    {
        "id" : 5,
        "image" : "../imagenes/blusaBresh.jpeg",
        "title" : "Blusa Bresh",
        "description" : "blusa estampada de vestir sin mangas",
        "category": "blusas",
        "price": "$2200",
        "stock": "12"
    }
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(
           data
        )
    }, 2000)
})

export default getProducts;