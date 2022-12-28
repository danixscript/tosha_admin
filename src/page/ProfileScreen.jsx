import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridS from "../components/grid/GridS";
import GridS_2 from "../components/grid/GridS_2";
import axiosConfig from '../config/AxiosConfig'
import { getMostBuyingProduct } from "../Redux/Actions/adminStatisticActions";
import { MSG } from "../Redux/constants/errConstant";

function ProfileScreen(props) {
  const dispatch = useDispatch();
  const adminProduct = useSelector((state) => state.adminproducts);
  const [statsState,setStateState] = useState([]);
  const [providersState,setProviders] = useState([]);
  const [topProducts,setTopProducts] = useState([]);
  const [mostOrderedProduct,setmostOrderedProduct] = useState([]);
  const [totalOrdersPrices,setTotalOrdersPrices] = useState([]);



  const [orderStats,setOrdersStats] = useState([]);

useEffect(()=>{
    getData()
  
    
},[])

   async function changeProvider(e){
    await axiosConfig
    .get("/adminstats/topproduct",{params:{id:e.target.value}})
    .then((res) => {
        if (res.data.err) {
            return dispatch({
                type: MSG,
                data: res.data.err
            })

        } else {
          setTopProducts(res.data.topProducts)


        }
    })
    .catch((err) => {

        dispatch({
            type: MSG,
            data: {
                type: 'bad',
                msg: err.message
            }
        })

    });
    //  dispatch(getMostBuyingProduct(e.target.value))

    }

    async function changeLimit(e){
      await axiosConfig
      .get("/adminstats/toporderedproduct",{params:{limit:e.target.value}})
      .then((res) => {
          if (res.data.err) {
              return dispatch({
                  type: MSG,
                  data: res.data.err
              })
  
          } else {
            setmostOrderedProduct(res.data.topProducts)
  
  
          }
      })
      .catch((err) => {
  
          dispatch({
              type: MSG,
              data: {
                  type: 'bad',
                  msg: err.message
              }
          })
  
      });
      //  dispatch(getMostBuyingProduct(e.target.value))
  
      }
  
async function getData(){
    await axiosConfig
        .get("/adminorder/getbunchstatistic",{params:{id:17,limit:2}})
        .then((res) => {
          if (res.data.err) {
         
  
          } else {
         
            setStateState(res.data.data)
            setOrdersStats(res.data.orders)
            setProviders(res.data.providers)
            setTopProducts(res.data.topProductStats)
            setmostOrderedProduct(res.data.mostBuyingProduct)
            setTotalOrdersPrices(res.data.getTotalPricesOrders)
            
          
          }
        })
        .catch((err) => {
            console.log(err)
        });
}

  return (
    <div className="App">
        <h1>פרופיל</h1>
        <div className="headers">
            <h4>ההזמנות שעשיתי לעומת המחירות שלי </h4>
            <p>כאן ניתן לראות את כל ההזמנות שעשיתי בתור מנהל ואת כל ההוצאות של החנות שלי</p>
        </div><br />
      <GridS changeProvider={changeProvider} topProducts={topProducts} providersState={providersState} orderStats={orderStats} statsState={statsState}/>
   <br /><br /><br /><br />
   <GridS_2 totalOrdersPrices={totalOrdersPrices} changeLimit={changeLimit} mostOrderedProduct={mostOrderedProduct} />
    </div>
  );
}

export default ProfileScreen;
