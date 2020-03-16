import React from 'react';

import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';
import { checkPropTypes } from 'prop-types';

const footer = () => {
  return(
    <footer className={classes.Footer}>
      <Logo colorScheme='dark' clicked={checkPropTypes.onClickHandler} />
      <div className={classes.Separator}></div>
    </footer>
  );
}

export default footer;
