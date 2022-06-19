import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function About(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ mt: 5, display: 'flex', width: '100%', maxWidth: 640, mx: 'auto'  }}>
          {[...new Array(1)]
            .map(
              () => `Веб-додаток , з можливістю створення користувача, в якого буде особисий кабінет 
              з переглядом минулих результатів по проходженню. Також після закінчення проходження тесту, 
              буде підрахунок набраних балів, час затрачений на проходження, можливість перегляду де були 
              допущені помилки та функція з перескладанням тесту.(Стек технологій: front end: ReactJS + Material UI, back-end: C#.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
