// import React, { useMemo, useState } from 'react';
// import { PATH } from '../../constant/constant';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const Topbar = () => {
//     const [currentPath, setCurrentPath] = useState({});
//     let location = useLocation()
//     let navigate = useNavigate()

//     const pageName = useMemo(() => {
//         let temp = {}
//         Object.values(PATH).filter(x => x.private).forEach(portal => {
//             console.log('portal', portal)
//             const obj = Object.values(portal.children).find(pathData => pathData.path)
//             console.log('obj', obj)
//             if (obj)
//                 temp = obj
//         })
//         setCurrentPath(temp)
//         console.log('temp', temp)
//         return (temp?.pageName || "")

//     }, [location]);
//     console.log('pageName', pageName)
//     return (
//         <>
//             <div>
//                 <p>{pageName}</p>
//             </div>
//         </>
//     )
// }

// export default Topbar


import React, { useMemo } from 'react';
import { PATH } from '../../constant/constant';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
    let location = useLocation();

    const pageName = useMemo(() => {
        // Find the path that matches the current location
        const matchingPath = Object.values(PATH).find(pathData => pathData.path === location.pathname);

        // Extract the pageName from the matching path
        return matchingPath ? matchingPath.pageName : "";
    }, [location.pathname]);

    return (
        <div>
            <p>{pageName}</p>
        </div>
    );
}

export default Topbar;
