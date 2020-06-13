import axios from 'axios'


// Set config defaults when creating the instance
const instance = axios.create({
  /**http://axistelcom.selfip.org:8010/marketplace/public/index.php/api/product/create */
    baseURL: 'http://axistelcom.selfip.org:8040/marketplace/marketplace/public/index.php/api',
    headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'content-type': 'application/x-www-form-urlencoded'
    }
  });


// instance.defaults.headers.common['Authorization'] = `Bearer`;
instance.defaults.headers.post['Content-Type'] = 'application/json';

  
export default instance;  