/**
 * Created by ninghai on 2018/7/18
 */
import qs from 'qs'
import doRequest from './fetch';
import {
    RANK_API,
    DETAIL_API
} from './serviceConstants';

export const getShare = (category, acid, page, pageSize) => doRequest({
  method: 'get',
  url: RANK_API,
    params: {
        category,
        acid,
        page,
        pageSize
    }
});

export const getDetail = acid => doRequest({
    method: 'post',
    url: DETAIL_API,
    data: qs.stringify({acid})
})