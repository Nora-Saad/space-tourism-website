
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import bgDesktop from '../assets/home/background-home-desktop.jpg';
import bgTablet from '../assets/home/background-home-tablet.jpg';
import bgMobile from '../assets/home/background-home-mobile.jpg';

function Home() {
  const theme = useTheme();

  // Handle breakpoints
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundImage = isMobile
    ? `url(${bgMobile})`
    : isTablet
    ? `url(${bgTablet})`
      : `url(${bgDesktop})`;
  
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        pt: '120px', 
      }}
    >
    <Container >
      <Typography variant="h1">Heading 1</Typography>
<Typography variant="textPreset7">Navigation Item</Typography>
<Typography variant="textPreset9">Body Text</Typography>
      </Container>
      </Box>
  );
}

export default Home;
