import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (): ReactElement => {
    return (
        <nav className="navigation">
            <Link to="/"><img src="favicon-32x32.png"/></Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
        </nav>
        );
    };

export default Navigation;
