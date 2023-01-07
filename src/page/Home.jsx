import { useState } from "react";
import { useEffect } from "react";
import GridHome from "../components/grid/GridHome";
import axiosConfig from './../config/AxiosConfig'
import { useDispatch, useSelector } from "react-redux";
import { MSG } from "../Redux/constants/errConstant";
import GridHomeS from "../components/grid/GridHomeS";


function Home() {
  const [ordersStats,setOrdersState] = useState([])
  const [mostPopularState,setmostPopularState] = useState([])
  const [TASit,setTAsit] = useState([])
  const [numberOfSells,setNumberOfSells] = useState("")
  const [totalCountOfOrders33,setTotalCountOforders] = useState(0)

  const dispatch = useDispatch();
  

  useEffect(()=>{
    getStats()
  },[])


  async function getStats(){
    await axiosConfig
    .get("/admin/getallstats")
    .then((res) => {
        if (res.data.err) {
            return dispatch({
                type: MSG,
                data: res.data.err
            })

        } else {
          
          setOrdersState(res.data.allUserOrders)
          setmostPopularState(res.data.getMostBuyingProducts)
          setTAsit(res.data.TAvsSit)
          setNumberOfSells(res.data.allStoreSells)
          setTotalCountOforders(res.data.totalCountOfOrder)
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


  } 



  
  async function getAllDohh(){

    try{
        await
        axiosConfig
        .get("/admin/getdohh"
       
        ) 
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
      
          }else{
           if(res.data){
            
            dispatch({type:MSG,data:res.data.msg})


         
            
           }
  
      
          }
        })
        .catch((err) => {
          dispatch({type:MSG,data:{msg:"somthing wrong",type:"bad"}})
        });
  
    }catch(e){
        dispatch({
            type:MSG,
            data:{msg:'errrrrrrr',type:'bad'},
        })
    }
  }

 

  return (
    <div className="App">
            <h1> דף הבית  אברי המלךךךךך </h1>

      <h1>פרטים על החנות שלך</h1>
     


      <GridHomeS getAllDohh={getAllDohh} mostPopular={mostPopularState}  TASit={TASit} totalCountOfOrders={totalCountOfOrders33} numberOfSells={numberOfSells} />

      
 

 
    </div>
  );
}

export default Home;
