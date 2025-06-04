
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import CircleButton from "../Components/Shared/Button";
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
      <Box
          sx={{
            mt: {
              xs: '20%',   
              md: '10%',    
            },
          display: 'flex',
          flexDirection: {
            xs: 'column',  
            md: 'row',     
          },
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
          justifyContent: 'space-between',
          gap: { xs: 4, md: 8 }, 
        }}
      >
        <Box sx={{ maxWidth: '600px', textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="textPreset8" gutterBottom>
            SO YOU WANT TO TRAVEL TO
          </Typography>
          <Typography variant="h1" >
            SPACE
          </Typography>
          <Typography variant="textPreset9">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </Typography>
        </Box>

        <Box
          sx={{
              alignSelf: { xs: 'center', md: 'flex-end' },
           
          }}
        >
          <CircleButton>EXPLORE</CircleButton>
        </Box>
      </Box>
      </Container>
      </Box>
  );
}

export default Home;
