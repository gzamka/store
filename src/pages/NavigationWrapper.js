import { Outlet } from 'react-router-dom';

import { Fixedbottomnavigation } from '../components/Navigation';

export const NavigationWrapper = () => {
    return (
        <>
            <Outlet />
            <Fixedbottomnavigation/>

        </>
    )
}