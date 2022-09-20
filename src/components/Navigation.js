import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav style={{ display: 'flex', flexDirection: 'row'}}>
            <Link to="/shop"> <h1> Shop </h1> </Link>
            <Link to="/explore"> <h1> Explore </h1> </Link>
            <Link to="/cart"> <h1> Cart </h1> </Link>
            <Link to="/fav"> <h1> Favourite </h1> </Link>
            <Link to="/acc"> <h1> Account </h1> </Link>
        </nav>
    )
}