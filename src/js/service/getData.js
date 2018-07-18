/**
 * Created by ninghai on 2018/7/18
 */
import doRequest from './fetch';
import {
    RANK_API
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