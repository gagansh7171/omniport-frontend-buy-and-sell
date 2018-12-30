import { connect } from 'react-redux'
import { getSaleItems, sortSaleItems, setItemType } from '../../actions';
import Component from './renderer';

function mapStateToProps(state) {
    return {
        saleItems: state.saleItems,
        subCategory: state.activeSubCategory
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSaleItems: (param) => {
            dispatch(getSaleItems(param));
        },
        sortItems: (items) => {
            dispatch(sortSaleItems(items))
        },
        setItemType: (param) => {
            dispatch(setItemType(param))
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Component);