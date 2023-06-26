import axios from "axios";
const {REACT_APP_API_URL} = process.env;

export const handlePostPrompt = (message) => {
    return new Promise((resolve,reject)=> {
      axios({
        url:`${REACT_APP_API_URL}/createOnlineTest`,
        method:'POST',
        data: {
            promptMessage: message
        }
      }).then((res)=>{
        resolve(res)
      }).catch((err)=>{
        reject(err)
      })
    })
}