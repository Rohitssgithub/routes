import React, { useMemo, useState } from 'react'
import styles from './SidebarNavigation.module.scss';
import { Navigations } from '../../Component/sideBarNavigation/Navigations'
import { useLocation, NavLink } from 'react-router-dom';
import { PORTALS } from '../../constant/constant';
import { combineClasses } from '../../utils';
// import styles from './HomeLayout.module.scss'

const SidebarNavigation = () => {

    const location = useLocation();
    const sidebarObj = useMemo(() => {
        const temp = Object.keys(PORTALS)
        return temp?.length && temp.reduce((acc, item) => {
            acc[item] = false
            return acc
        }, {})
    }, [])
    const [sidebarItemsOpen, setSidebarItemsOpen] = useState(sidebarObj);

    return (
        <>
            {/* <div className={styles.mainContainer}> */}
            {/* <ul>
                    <NavLink
                        className={styles.navLink}
                        to="/"
                    >
                        home
                    </NavLink >
                    <NavLink className={styles.navLink} to="/about">about</NavLink>
                    <NavLink className={styles.navLink} to="/userList">user</NavLink>
                    <NavLink className={styles.navLink} to="/login">login</NavLink>
                    <NavLink className={styles.navLink} onClick={() => localStorage.clear()} to="/login">Logout</NavLink>
                </ul> */}
            {/* </div> */}
            <div className={styles.mainContainer}>

                <div className={styles.leftSideContainer}>
                    <div className={styles.navContainer}>
                        {Object.entries(PORTALS).length && Object.entries(PORTALS).map(([key, value]) => {
                            return (
                                <div key={key} className={styles.linksDiv}>
                                    <NavLink
                                        to={location.pathname}
                                        className={({ isActive }) =>
                                            combineClasses(styles.portalNavLink, isActive ? styles.portalLinkactive : "")}
                                        onClick={() => setSidebarItemsOpen({ ...sidebarItemsOpen, [key]: !sidebarItemsOpen?.[key] })}
                                    >
                                        <p style={styles.portalName}>{key}</p>
                                        {/* <img src={rightIcon} alt="expand menu" className={`${styles.iconArrowImage} ${styles.iconArrowImage} ${sidebarItemsOpen?.[key] && styles.animatIcon}`} /> */}
                                    </NavLink>
                                    {sidebarItemsOpen?.[key] && Navigations?.[key].map((data) => (
                                        <NavLink
                                            key={data.id}
                                            className={({ isActive }) =>
                                                `${styles.navLink} ${!isActive && styles.linkHoverEffect} ${isActive && styles.activeLink}`
                                            }
                                            to={data.path}
                                            state={{ previousPath: location.pathname }}
                                        >
                                            <img src={data?.icon} alt="" className={styles.icon} />
                                            <p className={styles.pageli}>{data.pageName}</p>
                                        </NavLink>
                                    ))}
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarNavigation