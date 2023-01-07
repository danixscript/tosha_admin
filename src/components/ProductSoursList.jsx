import { Link } from "react-router-dom";
import ProductSourceTable from "./productsource/ProductSourceTable";



function ProductSoursList(props){

    return(
        <div className=" grid-3">

            {props.list.length>0? 
           <div className="grid-3">
           
                    <div className="">
                        <ProductSourceTable removeProduct={props.removeProduct} products={props.list} permissions={props.permissions} />
                    </div>
              
             
           </div> 
        :"no items"}
           

        </div>
    )
}

export default  ProductSoursList