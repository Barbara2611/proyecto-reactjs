import Items from './Items'

const ItemsList = ({products, setProductid}) =>{
    
    return(
        <div>
       
          
            <Items products={products}
            setProductid={setProductid}
            />
           
        </div>
    )
}
export default ItemsList