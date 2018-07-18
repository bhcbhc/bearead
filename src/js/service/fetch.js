/**
 * Created by ninghai on 2018/7/18
 */
import axios from 'axios';

axios.defaults.timedOut = 1000;

axios.interceptors.response.use(
  res => res.data.data,
  err=> {console.log(err)}
);

export default ({ method = 'GET', url, data, params }) => axios({ method, url, data, params });
