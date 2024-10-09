import React from 'react';
import { Button } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import JoinChallengeButton from './JoinChallengeButton'

const JoinChallengeAndLearnMoreButtons = ({ classes }) => {
  return (
    <JoinChallengeButtonWrapper>
      <Button
        classes={{ root: classes.joinChallengeButton }}
        color="primary"
        variant="contained"
      >
       Join Challenge
      </Button>
      <Button
        classes={{ root: classes.learnMoreButton }}
        color="primary"
        variant="contained"
      >
        Learn More
      </Button>
    </JoinChallengeButtonWrapper>
  );
};

const styles = () => ({
  joinChallengeButton: {
    borderRadius: 45,
    maxWidth: '300px',
    background: 'var(--Primary-600, #0858A1)',
    border: ' 1px solid var(--Primary-400, #4187C6)',
    color: 'var(--WhiteUI, #FFFFFF)',
    marginRight: '10px',
    marginTop: '10px'
  },
learnMoreButton:{
    borderRadius: 45,
    maxWidth: '300px',
    background: 'white',
    border: ' 1px solid var(--Primary-400, #4187C6)',
    color: 'var(--Neutral-900, #2A2A2C)',
    marginTop: '10px'
  },
});

const JoinChallengeButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex;
`;

JoinChallengeAndLearnMoreButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinChallengeAndLearnMoreButtons);


