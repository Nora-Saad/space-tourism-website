import Navbar from '../Navbar/Navbar';
import { Box } from '@mui/material';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box component="main" >
          {children}
      </Box>
    </>
  );
};

export default Layout;
