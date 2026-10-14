import { Box, Grid, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import Banner from '../banner/Banner';
import Posts from './post/Posts';

const Wrapper = styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px 80px;
`;

const Toolbar = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;

const Title = styled('h2')`
    font-size: 28px;
    font-weight: 600;
    color: #0f172a;
    margin: 0;
`;

const CreateButton = styled(Button)`
    text-transform: none;
    background: #0f172a;
    color: #fff;
    padding: 10px 22px;
    border-radius: 8px;
    font-weight: 500;
    &:hover {
        background: #1e293b;
    }
`;

const Home = () => (
    <>
        <Banner />
        <Wrapper>
            <Toolbar>
                <Title>Latest Posts</Title>
                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <CreateButton variant="contained" disableElevation>
                        + Create Blog
                    </CreateButton>
                </Link>
            </Toolbar>
            <Grid container spacing={2}>
                <Posts />
            </Grid>
        </Wrapper>
    </>
);

export default Home;
