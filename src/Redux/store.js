import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Loader from './reducers/LoaderReducer'
import ErrorReducer from './reducers/errReducer'
import adminReducer from './reducers/adminReducer'
import productsReducer from './reducers/productsReducer';
import orderReducer from './reducers/orderReducer';
import updateReducer from './reducers/updateReducer'
import adminregister from './reducers/adminRegisterReducer'
import providerReducer from './reducers/providerReducer'
import ProductSourceReducer from './reducers/productSourceReducer'
import adminOrderReducer from './reducers/adminOrdersReducer'
import adminProductReducer from './reducers/adminProductReducer'
import adminCartReducer from './reducers/adminCartReducer'
import materialReducer from './reducers/adminMaterialReducer'
import usersOrdersReducer from './reducers/usersOrdersReducer'
import alertsReducer from './reducers/alertsReducer'

import usersReducer from './reducers/usersReducer'


const reducer = combineReducers({
    Loader: Loader,
 
    err:ErrorReducer,
    admin:adminReducer,
    providers:providerReducer,
    adminregister:adminregister,
    productSource:ProductSourceReducer,
    products:productsReducer,
    materials:materialReducer,
    adminorder:adminOrderReducer,
    adminproducts:adminProductReducer,
    admincart:adminCartReducer,
    orders:orderReducer,
    updateState:updateReducer,
    usersorders:usersOrdersReducer,
    alertstable:alertsReducer,
    users:usersReducer
   
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store