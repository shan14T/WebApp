import React, { Suspense } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import DesignTokenColors from '../Style/DesignTokenColors';
import ChallengeParticipantList from './ChallengeParticipantList';
import SearchBar2024 from '../../../components/Search/SearchBar2024';
import ChallengeParticipantStore from '../../stores/ChallengeParticipantStore';
import FirstChallengeParticipantListController from './FirstChallengeParticipantListController';

// const FirstChallengeParticipantListController = React.lazy(() => import(/* webpackChunkName: 'FirstChallengeParticipantListController' */ './FirstChallengeParticipantListController'));
const participantListDummyData = [
  { rank: 5340, participant_name: 'Melina H.', points: 142, friends_who_joined: 3, friends_invited: 10, friends_who_viewed: 8, friends_who_viewed_plus: 21, voter_we_vote_id: 'wv02voter1238' },
  { rank: 5341, participant_name: 'David N.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter1237' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter1236' },
  { rank: 5340, participant_name: 'Melina H.', points: 142, friends_who_joined: 3, friends_invited: 10, friends_who_viewed: 8, friends_who_viewed_plus: 21, voter_we_vote_id: 'wv02voter1235' },
  { rank: 5341, participant_name: 'David B.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter1234' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter123' },
  { rank: 5340, participant_name: 'Melina H.', points: 142, friends_who_joined: 3, friends_invited: 10, friends_who_viewed: 8, friends_who_viewed_plus: 21, voter_we_vote_id: 'wv02voter12333' },
  { rank: 5341, participant_name: 'David A.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12344' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12355' },
  { rank: 5341, participant_name: 'David B.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12366' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12377' },
  { rank: 5340, participant_name: 'Melina H.', points: 142, friends_who_joined: 3, friends_invited: 10, friends_who_viewed: 8, friends_who_viewed_plus: 21, voter_we_vote_id: 'wv02voter12388' },
  { rank: 5341, participant_name: 'David A.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12399' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12390' },
  { rank: 5341, participant_name: 'David B.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12312' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12314' },
  { rank: 5340, participant_name: 'Melina H.', points: 142, friends_who_joined: 3, friends_invited: 10, friends_who_viewed: 8, friends_who_viewed_plus: 21, voter_we_vote_id: 'wv02voter12315' },
  { rank: 5341, participant_name: 'David A.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12316' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12317' },
  { rank: 5341, participant_name: 'David B.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12318' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12319' },
  { rank: 5340, participant_name: 'Melina H.', points: 142, friends_who_joined: 3, friends_invited: 10, friends_who_viewed: 8, friends_who_viewed_plus: 21, voter_we_vote_id: 'wv02voter12323' },
  { rank: 5341, participant_name: 'David A.', points: 121, friends_who_joined: 1, friends_invited: 7, friends_who_viewed: 3, friends_who_viewed_plus: 18, voter_we_vote_id: 'wv02voter12324' },
  { rank: 5342, participant_name: 'Anusha G.', points: 118, friends_who_joined: 1, friends_invited: 5, friends_who_viewed: 2, friends_who_viewed_plus: 15, voter_we_vote_id: 'wv02voter12325' },
];

function clearSearchFunction () {
  // This is just a stub
  return true;
}

function searchFunction () {
  // This is just a stub
  return true;
}


const ChallengeParticipantListRoot = ({ challengeWeVoteId, classes, uniqueExternalId }) => {
  // eslint-disable-next-line no-unused-vars
  const [latestParticipants, setLatestParticipants] = React.useState([]);

  const onChallengeParticipantStoreChange = () => {
    setLatestParticipants(ChallengeParticipantStore.getChallengeParticipantList(challengeWeVoteId));
  };

  React.useEffect(() => {
    // console.log('Fetching participants for:', challengeWeVoteId);
    const storeListener = ChallengeParticipantStore.addListener(onChallengeParticipantStoreChange);
    onChallengeParticipantStoreChange();

    return () => {
      storeListener.remove();
    };
  }, [challengeWeVoteId]);
  return (
    <ChallengeParticipantListRootContainer>
      <TopSection>
        <ButtonAndSearchWrapper>
          <ButtonWrapper>
            <Button
              classes={{ root: classes.buttonDesktop }}
              color="primary"
              id="challengeLeaderboardYouButton"
              onClick={() => console.log('You button clicked', challengeWeVoteId)}
              variant="outlined"
            >
              You
            </Button>
            <Button
              classes={{ root: classes.buttonDesktop }}
              color="primary"
              id="challengeLeaderboardTop50Button"
              onClick={() => console.log('Top 50 button clicked')}
              variant="outlined"
            >
              Top&nbsp;50
            </Button>
          </ButtonWrapper>
          <SearchBarWrapper>
            <SearchBar2024
              clearButton
              searchButton
              placeholder="Search by rank or name"
              searchFunction={searchFunction}
              clearFunction={clearSearchFunction}
              searchUpdateDelayTime={500}
            />
          </SearchBarWrapper>
        </ButtonAndSearchWrapper>
        <LeaderboardInfoWrapper>
          <RankContainer>
            <RankText>You&apos;re</RankText>
            {' '}
            <RankNumber>#5341</RankNumber>
            {' '}
            <RankDetails>(of 6441)</RankDetails>
          </RankContainer>

        </LeaderboardInfoWrapper>
        <LeaderboardTableHeader>
          <HeaderGroup gap="32px">
            <HeaderItem>RANK</HeaderItem>
            <HeaderItem>NAME</HeaderItem>
          </HeaderGroup>
          <HeaderGroup gap="25px">
            <HeaderItem>POINTS</HeaderItem>
            <HeaderItem>FRIENDS JOINED</HeaderItem>
          </HeaderGroup>
        </LeaderboardTableHeader>
      </TopSection>
      <ChallengeParticipantList
        // participantList={latestParticipants}
        participantList={participantListDummyData}
        uniqueExternalId={uniqueExternalId}
      />
      <Suspense fallback={<></>}>
        <FirstChallengeParticipantListController challengeWeVoteId={challengeWeVoteId} searchText="SEARCH TEXT HERE" />
      </Suspense>
    </ChallengeParticipantListRootContainer>
  );
};
ChallengeParticipantListRoot.propTypes = {
  classes: PropTypes.object.isRequired,
  // clearSearchFunction: PropTypes.func.isRequired,
  // searchFunction: PropTypes.func.isRequired,
  challengeWeVoteId: PropTypes.string,
  uniqueExternalId: PropTypes.string,
};

const styles = () => ({
  buttonDesktop: {
    padding: '2px 6px',
    borderRadius: 5,
    fontSize: 14,
  },
  searchButton: {
    borderRadius: 50,
  },
});

const ChallengeParticipantListRootContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: sticky;
  top: 0;
`;

const ButtonAndSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const LeaderboardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const SearchBarWrapper = styled('div')`
  // margin-top: 14px;
  // margin-bottom: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const LeaderboardTableHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  color: #333;
`;

const HeaderGroup = styled.div`
  display: flex;
  gap: ${(props) => props.gap || '32px'}; /* Default gap of 32px, adjustable via props */
`;

const HeaderItem = styled.p`
  margin: 0;  /* Reset default margins */
`;

const RankContainer = styled.p`
  font-size: 16px;
  color: ${DesignTokenColors.neutral900}; /* Default color */
`;

const RankText = styled.span`
  font-weight: bold;
  color: ${DesignTokenColors.neutral900};  /* Color for "You're" */
`;

const RankNumber = styled.span`
  font-weight: bold;
  color: ${DesignTokenColors.accent500};  /* Accent color for the rank number */
`;

const RankDetails = styled.span`
  color: ${DesignTokenColors.neutral600};  /* Subdued color for "(of 6441)" */
`;

export default withStyles(styles)(ChallengeParticipantListRoot);
