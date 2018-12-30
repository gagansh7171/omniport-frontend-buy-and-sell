import { combineReducers } from 'redux';
import SaleItems from './sale-items'
import RequestItems from './request-items'
import Categories from './categories'
import PaymentModes from './payment-modes'
import saleItemDetail from './sale-item-detail'
import requestItemDetail from './request-item-detail'
import getUser from './get-user'
import setItemType from './set-item-type';
import { setCategory, setSubCategory } from './set-category';

const rootReducer = combineReducers({
    saleItems: SaleItems,
    requestItems: RequestItems,
    categories: Categories,
    paymentModes: PaymentModes,
    saleItemDetail: saleItemDetail,
    requestItemDetail: requestItemDetail,
    user: getUser,
    itemType: setItemType,
    activeCategory: setCategory,
    activeSubCategory: setSubCategory,
})
export default rootReducer;