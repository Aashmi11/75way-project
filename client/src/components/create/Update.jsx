import React, { useState, useEffect } from 'react';

import { Box, styled, TextareaAutosize, Button, InputBase } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { API } from '../../service/api';

const Container = styled(Box)`
    max-width: 820px;
    margin: 60px auto;
    padding: 0 24px;
`;

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
`;

const PageTitle = styled('h2')`
    font-size: 24px;
    font-weight: 600;
    color: #0f172a;
    margin: 0;
`;

const UpdateButton = styled(Button)`
    text-transform: none;
    background: #0f172a;
    color: #fff;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 500;
    &:hover { background: #1e293b; }
`;

const TitleInput = styled(InputBase)`
    width: 100%;
    font-size: 32px;
    font-weight: 600;
    color: #0f172a;
    padding: 16px 0;
    border-bottom: 1px solid #e2e8f0;
`;

const BodyArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 24px;
    font-size: 17px;
    font-family: inherit;
    line-height: 1.7;
    color: #334155;
    resize: vertical;
    min-height: 240px;
    &:focus-visible { outline: none; }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: 'All',
    createdDate: new Date()
};

const Update = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState(initialPost);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, [id]);

    const updateBlogPost = async () => {
        await API.updatePost(post);
        navigate(`/details/${id}`);
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Header>
                <PageTitle>Edit post</PageTitle>
                <UpdateButton onClick={updateBlogPost} variant="contained" disableElevation>
                    Update
                </UpdateButton>
            </Header>
            <TitleInput
                onChange={handleChange}
                value={post.title}
                name="title"
                placeholder="Title"
            />
            <BodyArea
                minRows={10}
                placeholder="Tell your story..."
                name="description"
                onChange={handleChange}
                value={post.description}
            />
        </Container>
    );
};

export default Update;
