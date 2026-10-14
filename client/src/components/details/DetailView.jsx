import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';

const Container = styled(Box)`
    max-width: 820px;
    margin: 60px auto;
    padding: 0 24px 80px;
`;

const Actions = styled(Box)`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 16px;
`;

const IconWrap = styled(Box)`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s ease;
    &:hover { background: #f1f5f9; }
`;

const Heading = styled(Typography)`
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: #0f172a;
    margin-bottom: 24px;
`;

const Meta = styled(Box)`
    display: flex;
    justify-content: space-between;
    color: #64748b;
    font-size: 14px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 32px;
`;

const Body = styled(Typography)`
    font-size: 18px;
    line-height: 1.8;
    color: #334155;
    white-space: pre-wrap;
`;

const DetailView = () => {
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) setPost(response.data);
        };
        fetchData();
    }, [id]);

    const deleteBlog = async () => {
        await API.deletePost(post._id);
        navigate('/');
    };

    return (
        <Container>
            {account.username === post.username && (
                <Actions>
                    <Link to={`/update/${post._id}`}>
                        <IconWrap><Edit fontSize="small" color="primary" /></IconWrap>
                    </Link>
                    <IconWrap onClick={deleteBlog}>
                        <Delete fontSize="small" color="error" />
                    </IconWrap>
                </Actions>
            )}
            <Heading>{post.title}</Heading>
            <Meta>
                <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    By <span style={{ fontWeight: 600, color: '#0f172a' }}>{post.username}</span>
                </Link>
                <span>{post.createdDate && new Date(post.createdDate).toDateString()}</span>
            </Meta>
            <Body>{post.description}</Body>
            <Comments post={post} />
        </Container>
    );
};

export default DetailView;
