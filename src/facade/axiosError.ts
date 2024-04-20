import { AxiosError } from "axios";
import { toast } from "react-toastify";

const errorAxios = (error: AxiosError) => {
    
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error("Response Error :" +JSON.stringify(error.response.data), {
          position: "top-right",
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser 
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
        toast.error("Request Error :" +JSON.stringify(error.request), {
            position: "top-right",
          });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        toast.error("Error :" +JSON.stringify(error.message), {
            position: "top-right",
          });
      }
}


export default errorAxios;