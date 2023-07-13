import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export function ToastSuccessContainer(){
    return (
        <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
   ></ToastContainer> 
    )
}
export function ToastSuccess(message){
    const toastConfig = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        };
    return toast.success(message, toastConfig)
}