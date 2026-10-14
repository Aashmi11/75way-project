import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { API } from '../../../service/api';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const username = searchParams.get('username');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts(username ? { username } : {});
            if (response.isSuccess) {
                setPosts(response.data);
            }
        };
        fetchData();
    }, [username]);

    if (!posts?.length) {
        return (
            <Box style={{ color: '#64748b', margin: '40px auto', fontSize: 16, textAlign: 'center', width: '100%' }}>
                No posts yet — be the first to publish one.
            </Box>
        );
    }

    return (
        <>
            {posts.map(post => (
                <Grid item lg={4} md={6} sm={6} xs={12} key={post._id}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                        <Post post={post} />
                    </Link>
                </Grid>
            ))}
        </>
    );
};

export default Posts;
