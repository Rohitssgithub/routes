import UserList from "../Component/UserList/UserList"
import UserProfile from '../Component/User/UserProfile'
import AdminList from "../Component/Admin/AdminList"
import Admin from '../Component/Admin/Admin'
export const PORTALS_NAMES = {
    "ADMIN": "admin",
    "USER": "user"
}

// portals paths
export const PORTALS = {
    [PORTALS_NAMES["USER"]]: "/user",
    [PORTALS_NAMES["ADMIN"]]: "/admin",
}

export const PATH = {
    DEFAULT: {
        path: "/",
        pageName: "Home",
    },
    LOGIN: {
        path: '/login',
        pageName: "Login",
    },
    [PORTALS_NAMES["USER"]]: {
        path: PORTALS[PORTALS_NAMES["USER"]],
        private: true,
        children: {
            USER_PROFILE: {
                path: PORTALS[PORTALS_NAMES["USER"]] + "/user",
                element: <UserProfile />,
                pageName: "user profile",
                logs: true,
                sidebar: {
                    show: true
                },
            },
            USER_LIST: {
                path: PORTALS[PORTALS_NAMES["USER"]] + "/userlist",
                element: <UserList />,
                pageName: "user list",
                logs: true,
                sidebar: {
                    show: true
                }
            },
        },
    },
    [PORTALS_NAMES["ADMIN"]]: {
        path: PORTALS[PORTALS_NAMES["ADMIN"]],
        private: true,
        children: {
            ADMIN_PROFILE: {
                path: PORTALS[PORTALS_NAMES["ADMIN"]] + "/profile",
                element: <Admin />,
                pageName: "Admin profile",
                logs: true,
                sidebar: {
                    show: true
                },
            },
            ADMIN_LIST: {
                path: PORTALS[PORTALS_NAMES["ADMIN"]] + "/adminlist",
                pageName: "Admin list",
                element: <AdminList />,
                logs: true,
                sidebar: {
                    show: true
                }
            },
        },
    },

}

export const PAGINATION = {
    ROWS_PER_PAGE: [10, 25, 50],
    DEFAULT_ROWS_PER_PAGE: 10,
    DEFAULT_CURRENT_PAGE: 1,
    NO_BREAK_PAGE: 4,
  };