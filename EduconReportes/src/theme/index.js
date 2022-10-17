import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import { shadows } from './shadows';
import { typography } from './typography';

const negro = '#000000';
const amarillo = '#FFD600';

export const theme = createTheme({
  palette: {
    background: {
      paper: colors.common.white,
      default: '#F4F6F8'
    },
    primary: {
      contrastText: '#ffffff',
      main: `${negro}`
    },
    secondary: {
      main: `${amarillo}`,
      contrastText: '#ffffff'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  shadows,
  typography
});

// export default theme;
