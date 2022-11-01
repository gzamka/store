import { Outlet } from 'react-router-dom';

import { Navigation, FixedBottomNavigation } from '../components/Navigation';

export const NavigationWrapper = () => {
    return (
        <>
            <Outlet />
            <FixedBottomNavigation/>

        </>
    )
}