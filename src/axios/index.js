import JsonP from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let baseApi = 'https://www.easy-mock.com/mock/5bd67efe441b485820767219/ItemApi'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params)||''
            }).then((response)=>{
                if(response.status ==200){
                    let data = response.data;
                    if(data.code == 0){
                        resolve(data);
                    }else{
                        Modal.info({
                            title:'提示',
                            content:data.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}