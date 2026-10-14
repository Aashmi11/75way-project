import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 24px;
    background: #fff;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease;
    &:hover {
        box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
        transform: translateY(-2px);
        border-color: #cbd5e1;
    }
`;

const Heading = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.3;
`;

const Details = styled(Typography)`
    font-size: 14px;
    color: #475569;
    line-height: 1.5;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Author = styled(Typography)`
    font-size: 12px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 16px;
`;

const addEllipsis = (str, limit) =>
    str && str.length > limit ? str.substring(0, limit) + '…' : str || '';

const Post = ({ post }) => (
    <Container>
        <Box>
            <Heading>{addEllipsis(post.title, 50)}</Heading>
            <Details>{post.description}</Details>
        </Box>
        <Author>By {post.username}</Author>
    </Container>
);

export default Post;
