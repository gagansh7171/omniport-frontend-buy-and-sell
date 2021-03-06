import axios from 'axios'
import { requestProductUrl, saleProductUrl } from '../constants/urls'
import {
  DELETE_REQUEST_ITEM,
  DELETE_SALE_ITEM
} from '../constants/action-types'

import { toast } from 'react-semantic-toasts'

import { getCookie } from 'formula_one/src/utils'

export const deleteItem = (id, type) => {
  let headers = {
    'Content-Type': 'multipart/form-data',
    'X-CSRFToken': getCookie('csrftoken')
  }
  return dispatch => {
    if (type === 'request') {
      axios.delete(requestProductUrl + id, { headers: headers }).then(res => {
        dispatch({
          type: DELETE_REQUEST_ITEM,
          payload: id
        })
      })
    } else if (type === 'buy') {
      axios.delete(saleProductUrl + id, { headers: headers }).then(res => {
        toast({
          type: 'success',
          title: 'Item deleted succesfully',
          animation: 'fade up',
          icon: 'smile outline',
          time: 4000
        })
        dispatch({
          type: DELETE_SALE_ITEM,
          payload: id
        })
      })
        .catch(err => {
          toast({
            type: 'error',
            title: 'Error occured, please try again',
            description: err.response.data.error,
            animation: 'fade up',
            icon: 'frown outline',
            time: 4000
          })
        })
    }
  }
}
