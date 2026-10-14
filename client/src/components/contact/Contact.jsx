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
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 24px 80px;
    text-align: center;
`;

const Heading = styled(Typography)`
    font-size: 28px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 20px;
`;

const Text = styled(Typography)`
    font-size: 17px;
    line-height: 1.75;
    color: #475569;
    margin-bottom: 32px;
`;

const EmailBox = styled(Box)`
    display: inline-block;
    padding: 14px 28px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 16px;
    color: #0f172a;
    background: #f8fafc;
    letter-spacing: 0.3px;
`;

const Contact = () => (
    <Box>
        <Hero>
            <HeroTitle>Contact</HeroTitle>
        </Hero>
        <Wrapper>
            <Heading>Say hello</Heading>
            <Text>
                Have a question, feedback, or just want to chat? Drop a line any time.
            </Text>
            <EmailBox>hello@blog.local</EmailBox>
        </Wrapper>
    </Box>
);

export default Contact;
