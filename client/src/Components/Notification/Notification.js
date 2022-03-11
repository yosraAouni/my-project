import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearErrors } from '../../JS/Actions/workers';
import {toast,ToastContainer } from 'react-toastify'

const Notification = ({error}) => {
    const [show, setShow]= useState(true);
    const dispatch= useDispatch();
    useEffect(()=>{
        setTimeout(()=>{
            setShow(false);
            dispatch(clearErrors());

        },3000);
    },[show, dispatch]);
    return (
        <div>
            {show && (
                <div>
                    {toast.error(error.msg)}
                    <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    </div>
            )}
        </div>
    );
}

export default Notification