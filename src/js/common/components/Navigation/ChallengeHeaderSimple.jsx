import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import withTheme from '@mui/styles/withTheme';
import withStyles from '@mui/styles/withStyles';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
// import { Link } from 'react-router-dom';
import { renderLog } from '../../utils/logging';
import {
  Candidate,
  CandidateNameAndPartyWrapper,
  CandidateNameH4,
  CandidateTopRow,
} from '../../../components/Style/BallotStyles';
import { cordovaBallotFilterTopMargin } from '../../../utils/cordovaOffsets';
import standardBoxShadow from '../Style/standardBoxShadow';
import normalizedImagePath from '../../utils/normalizedImagePath';
import JoinedAndDaysLeft from '../Challenge/JoinedAndDaysLeft';

const ImageHandler = React.lazy(() => import(/* webpackChunkName: 'ImageHandler' */ '../../../components/ImageHandler'));

// React functional component example
function ChallengeHeaderSimple(props) {
  renderLog('ChallengeHeaderSimple');  // Set LOG_RENDER_EVENTS to log all renders
  const { challengeTitle, challengeWeVoteId, classes, challengePhotoLargeUrl, goToChallengeHome } = props;

  return (
    <ChallengeHeaderSimpleOuterContainer id="politicianHeaderContainer">
      <ChallengeHeaderSimpleInnerContainer>
        <ChallengeHeaderSimpleContentContainer>
          <ChallengeTitleRow>
            <ChallengePhotoAndTitle
              id={`officeItemCompressedCandidateImageAndName-${challengeWeVoteId}`}
            >
              {/* Challenge Image */}
              {challengePhotoLargeUrl && (
                <ChallengeImageMedium src={challengePhotoLargeUrl} />
              )}
              {/* Title of the Challenge */}
              <CandidateNameAndPartyWrapper>
                <ChallengeNameH4>
                  {challengeTitle}
                </ChallengeNameH4>
                {/* Joined and Days Left Info */}
                <JoinedAndDaysLeft style={{ border: 'none' }}
                  challengeWeVoteId={challengeWeVoteId}
                  goToChallengeHome={goToChallengeHome}
                />
              </CandidateNameAndPartyWrapper>
            </ChallengePhotoAndTitle>
            <CloseDrawerIconWrapper>
              <div>
                <IconButton
                  aria-label="Close"
                  className={classes.closeButton}
                  id="goToChallengeHome"
                  onClick={goToChallengeHome}
                  size="large"
                >
                  <span className="u-cursor--pointer">
                    <Close classes={{ root: classes.closeIcon }} />
                  </span>
                </IconButton>
              </div>
            </CloseDrawerIconWrapper>
          </ChallengeTitleRow>
        </ChallengeHeaderSimpleContentContainer>
      </ChallengeHeaderSimpleInnerContainer>
    </ChallengeHeaderSimpleOuterContainer>
  );
}
ChallengeHeaderSimple.propTypes = {
  goToChallengeHome: PropTypes.func,
  challengeTitle: PropTypes.string,
  challengeWeVoteId: PropTypes.string,
  classes: PropTypes.object,
  challengePhotoLargeUrl: PropTypes.string,
};

const styles = () => ({
  closeButton: {
    marginRight: 'auto',
    padding: 6,
  },
  closeIcon: {
    color: '#999',
    width: 24,
    height: 24,
  },
});

const ChallengeHeaderSimpleContentContainer = styled('div')(({ theme }) => (`
  padding: 15px 15px 0 15px;
  margin: ${() => cordovaBallotFilterTopMargin()} auto 0 auto;
  position: relative;
  max-width: 650px;
  width: 100%;
  z-index: 0;
  ${theme.breakpoints.down('sm')} {
    min-height: 10px;
    //margin: 0 10px;
  }
`));

const ChallengeHeaderSimpleOuterContainer = styled('div')`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #aaa;
  // box-shadow: ${standardBoxShadow('wide')};
  // overflow: hidden;
  // position: fixed;
  z-index: 1;
  right: 0;
`;

const ChallengeHeaderSimpleInnerContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ChallengeImageMedium = styled('img')(({ theme }) => (`
  border-radius: 12px;
  height: 64px;
  margin-right: 10px;
  ${theme.breakpoints.up('sm')} {
    height: 100px;
  }
`));

const ChallengeNameH4 = styled('div')`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 0 !important;
  white-space: normal;
  border: none;
  background-color: transparent;
  padding: 0;
  text-align: left;
`;

const ChallengePhotoAndTitle = styled('div')`
  display: flex;
  flex-grow: 8;
`;

const ChallengeTitleRow = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CloseDrawerIconWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

export default withTheme(withStyles(styles)(ChallengeHeaderSimple));
