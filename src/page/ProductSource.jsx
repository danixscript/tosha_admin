import { useEffect } from "react";
import ProductSoursList from "../components/ProductSoursList";
import {useDispatch,useSelector} from "react-redux";
import { getProductsSource } from "../Redux/Actions/productSourceAction";

function ProductSource() { 
    const dispatch = useDispatch();
    const productSource = useSelector((state) => state.productSource);

    useEffect(()=>{
dispatch(getProductsSource())
    },[]) 



    // לבדוק אם אני משתמש בזה 
    return (
      <div className="App">
        <h1>test</h1>
   {/* <ProductSoursList list={productSource.products} /> */}
      </div>
    );
  }
  
  export default ProductSource;
  