import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (): ReactElement => {
    return (
        <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
        </nav>
        );
    };

export default Navigation;
