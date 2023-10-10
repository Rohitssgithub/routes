import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import SidebarNavigation from '../sideBarNavigation/SidebarNavigation';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
    return (
        <>
            <div className={styles.mainbodyContainer}>
                <SidebarNavigation />
                <div className={styles.contentDiv}>
                    <Outlet />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout