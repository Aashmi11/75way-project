import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

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

const PublishButton = styled(Button)`
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

const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState(initialPost);
    const { account } = useContext(DataContext);

    useEffect(() => {
        setPost(prev => ({ ...prev, username: account.username }));
    }, [account.username]);

    const savePost = async () => {
        if (!post.title.trim()) return;
        await API.createPost(post);
        navigate('/');
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Header>
                <PageTitle>Write a new post</PageTitle>
                <PublishButton onClick={savePost} variant="contained" disableElevation>
                    Publish
                </PublishButton>
            </Header>
            <TitleInput
                onChange={handleChange}
                name="title"
                placeholder="Title"
                value={post.title}
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

export default CreatePost;
