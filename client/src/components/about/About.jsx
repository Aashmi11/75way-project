import { Box, styled, Typography } from '@mui/material';

const Hero = styled(Box)`
    width: 100%;
    height: 32vh;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

const HeroTitle = styled(Typography)`
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 1px;
`;

const Wrapper = styled(Box)`
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 24px 80px;
`;

const Heading = styled(Typography)`
    font-size: 28px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 24px;
`;

const Text = styled(Typography)`
    font-size: 17px;
    line-height: 1.75;
    color: #475569;
    margin-bottom: 20px;
`;

const About = () => (
    <Box>
        <Hero>
            <HeroTitle>About</HeroTitle>
        </Hero>
        <Wrapper>
            <Heading>A place for stories & ideas</Heading>
            <Text>
                This blog is a space to share thoughts, long-form writing, and
                anything worth saying slowly. No feeds, no algorithms — just posts
                you can read, comment on, and come back to.
            </Text>
            <Text>
                Writers publish, readers respond, and conversations happen in the
                open. Simple as that.
            </Text>
        </Wrapper>
    </Box>
);

export default About;
