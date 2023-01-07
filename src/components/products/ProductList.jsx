import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";
import '../../css/grid.css'


function ProductList(props){

    return(
        <div className=" grid-3">

            {props.list.length > 0 ? 
            
                props.list.map((e)=>{
                    return(
                     <div key={e.productid} className="">
                           <CardProduct getSum={props.getSum} addProduct={props.addProduct} item={e} />
                     </div>
                    )
                })
          
        :"no items yet"}
    
        </div> 
    )
}

export default  ProductList