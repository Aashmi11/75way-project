import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06);
`;

const Container = styled(Toolbar)`
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
`;

const Brand = styled(Link)`
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
    text-decoration: none;
    letter-spacing: 1px;
`;

const Nav = styled('nav')`
    display: flex;
    gap: 8px;
    & > a {
        padding: 8px 16px;
        color: #475569;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        border-radius: 6px;
        transition: all 0.15s ease;
    }
    & > a:hover {
        color: #0f172a;
        background: #f1f5f9;
    }
`;

const Header = () => (
    <Component elevation={0}>
        <Container>
            <Brand to="/">BLOG</Brand>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/account">Logout</Link>
            </Nav>
        </Container>
    </Component>
);

export default Header;
