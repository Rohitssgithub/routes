import { PATH,PORTALS_NAMES } from '../../constant/constant';

// console.log('PATH', PATH)
// console.log('PORTALS_NAMES', PORTALS_NAMES)

export const Navigations = Object.values(PORTALS_NAMES).reduce((acc, portalName) => {
    console.log('portalName', portalName);
    acc[portalName] = Object.values(PATH[portalName].children)
        .filter(x => x.sidebar)
        .map((pageData, index) => ({
            id: index + 1,
            path: pageData.path,
            pageName: pageData.sidebar.name || pageData.pageName
        }))
    return acc
    // console.log('acc', acc)
}, {})