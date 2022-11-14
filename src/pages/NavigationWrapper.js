import { Outlet } from 'react-router-dom';

import { Navigation } from '../components';

export const NavigationWrapper = () => {
    return (
        <>
            <Outlet />
            <Navigation/>

        </>
    )
}