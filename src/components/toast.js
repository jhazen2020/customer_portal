import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

/**
 * Component for a successful toast.
 * @date 7/31/2023 - 3:18:48 PM
 *
 * @export
 * @returns {*}
 */
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

const toastConfig = {
    position: "bottom-right",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    };

/**
 * Toast hook for a successful action.
 * @date 7/31/2023 - 3:19:56 PM
 *
 * @param {*} message What is displayed on the toast.
 * @returns {*}
 */
export const ToastSuccess = (message)=> toast.success(message, {...toastConfig, autoClose: 2000,});

/**
 * Toast hook for an action error.
 * @date 7/31/2023 - 3:21:00 PM
 *
 * @param {*} message What is displayed on the toast.
 * @returns {*}
 */
export const ToastError = (message)=> toast.error(message, toastConfig);
