import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';

const ThanksForJoiningChallenge = ({ userName, challengeOwner, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <ThanksForJoiningOuterWrapper isClosing={isClosing}>
      <ThanksForJoiningInnerWrapper isClosing={isClosing}>
        <ThankYouMessageWrapper>
          <ThankYouMessage>
            Thanks for joining&nbsp;
            {challengeOwner}
            &apos;s challenge,&nbsp;
            {userName}
            !
          </ThankYouMessage>
          <CloseMessageIconWrapper>
            <IconButton
              aria-label="Close"
              onClick={() => setIsClosing(true)}
              size="large"
            >
              <span className="u-cursor--pointer">
                <Close sx={{ color: '#999', width: 24, height: 24 }} />
              </span>
            </IconButton>
          </CloseMessageIconWrapper>
        </ThankYouMessageWrapper>
        <RankMessageWrapper>Insert Rank Message Here</RankMessageWrapper>
        <RankListOuterWrapper>Insert Rank List Here</RankListOuterWrapper>
      </ThanksForJoiningInnerWrapper>
    </ThanksForJoiningOuterWrapper>
  );
};
ThanksForJoiningChallenge.propTypes = {
  userName: PropTypes.string.isRequired,
  challengeOwner: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const CloseMessageIconWrapper = styled.div`
  background: none;
  border: none;
  display: flex;
  justify-content: flex-end;
`;

const RankListOuterWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RankMessageWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ThanksForJoiningInnerWrapper = styled.div`
  width: 500px;
  max-height: ${(props) => (props.isClosing ? '0' : '300px')};
  border-radius: 20px;
  filter: drop-shadow(4px 4px 10px rgba(222,222,222,2));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  padding: ${(props) => (props.isClosing ? '0' : '0px 10px 20px 20px')};
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (props.isClosing ? 0 : 1)};
  transform: ${(props) => (props.isClosing ? 'translateY(-20px)' : 'translateY(0)')};
`;

const ThanksForJoiningOuterWrapper = styled.div`
  max-height: ${(props) => (props.isClosing ? '0' : '400px')};
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.isClosing ? '0' : '30px 0px 30px')};
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              margin-bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (props.isClosing ? 0 : 1)};
  margin-bottom:  ${(props) => (props.isClosing ? '0' : '-50px')};
  z-index: 100;
  position: relative;
`;

const ThankYouMessage = styled.p`
  font-size: large;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  text-decoration: none;
`;

const ThankYouMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export default ThanksForJoiningChallenge;
