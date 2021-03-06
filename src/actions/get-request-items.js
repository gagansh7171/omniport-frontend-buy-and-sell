import axios from 'axios'
import { requestItemUrl } from '../constants/urls'
import {
  GET_REQUEST_ITEMS,
  UPDATE_REQUEST_ITEMS,
  REQUEST_PRODUCT_COUNT,
  SET_REQUEST_LIST_LOADER
} from '../constants/action-types'

export const getRequestItems = (param, page = 1, replace = false) => {
  return dispatch => {
    dispatch({
      type: SET_REQUEST_LIST_LOADER,
      payload: true
    })
    if (replace) {
      dispatch({
        type: GET_REQUEST_ITEMS,
        payload: []
      })
    }
    axios({
      method: 'get',
      url: requestItemUrl + param,
      params: {
        page: page
      }
    }).then(response => {
      let itemsNewList = response.data.results
      setTimeout(() => {
        if (replace) {
          dispatch({
            type: GET_REQUEST_ITEMS,
            payload: itemsNewList
          })
        } else {
          dispatch({
            type: UPDATE_REQUEST_ITEMS,
            payload: itemsNewList
          })
        }
        dispatch({
          type: REQUEST_PRODUCT_COUNT,
          payload: response.data.count
        })
        dispatch({
          type: SET_REQUEST_LIST_LOADER,
          payload: false
        })
      }, 300)
    })
  }
}
