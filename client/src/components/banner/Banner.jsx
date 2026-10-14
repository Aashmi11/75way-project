import { styled, Box, Typography } from '@mui/material';

const Hero = styled(Box)`
    width: 100%;
    height: 42vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%);
    color: #fff;
    text-align: center;
    padding: 0 20px;
`;

const Heading = styled(Typography)`
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1.1;
    margin: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 16px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 12px;
    color: #cbd5e1;
`;

const Banner = () => (
    <Hero>
        <Heading>BLOG</Heading>
        <SubHeading>Thoughts, stories & ideas</SubHeading>
    </Hero>
);

export default Banner;
