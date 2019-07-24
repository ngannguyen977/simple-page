import axios from 'axios';
import * as config from './../constant/config';

export default function callApi(endpoint, method = "GET", body) {
    return axios({
            method: method,
            url: `${config.BASE_URL}/${endpoint}`,
            data: body
        }).then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
        });
}