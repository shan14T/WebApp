import Dispatcher from '../dispatcher/Dispatcher';

export default {
  challengeInviteeListRetrieve (challengeWeVoteId, searchText = '') {
    Dispatcher.loadEndpoint('challengeInviteeListRetrieve',
      {
        challenge_we_vote_id: challengeWeVoteId,
        search_text: searchText,
      });
  },

  challengeInviteeRetrieve (challengeWeVoteId) {
    Dispatcher.loadEndpoint('challengeInviteeRetrieve',
      {
        challenge_we_vote_id: challengeWeVoteId,
      });
  },

  challengeInviteeSave (challengeWeVoteId, inviteeName = '', inviteeNameChanged = false, inviteTextFromInviter = '', inviteTextFromInviterChanged = false, inviteeUrlCode = '', inviteeUrlCodeChanged = false) {
    // console.log('challengeInviteeSave called with challengeWeVoteId: ', challengeWeVoteId, ' and inviteeName: ', inviteeName);
    Dispatcher.loadEndpoint('challengeInviteeSave',
      {
        challenge_we_vote_id: challengeWeVoteId,
        invitee_name: inviteeName,
        invitee_name_changed: inviteeNameChanged,
        invitee_text_from_inviter: inviteTextFromInviter,
        invitee_text_from_inviter_changed: inviteTextFromInviterChanged,
        invitee_url_code: inviteeUrlCode,
        invitee_url_code_changed: inviteeUrlCodeChanged,
      });
  },

  shareButtonClicked (value) {
    Dispatcher.dispatch({ type: 'shareButtonClicked', payload: value });
  },

  inviteeEndorsementQueuedToSave (inviteeEndorsement) {
    Dispatcher.dispatch({ type: 'inviteeEndorsementQueuedToSave', payload: inviteeEndorsement });
  },

  visibleToPublicQueuedToSave (visibleToPublic) {
    Dispatcher.dispatch({ type: 'visibleToPublicQueuedToSave', payload: visibleToPublic });
  },

  inviteeEndorsementSave (challengeWeVoteId, inviteeEndorsement, visibleToPublic, visibleToPublicChanged) { // challengeInviteeSave
    // console.log('inviteeEndorsementSave: ', inviteeEndorsement);
    Dispatcher.loadEndpoint('challengeInviteeSave',
      {
        challenge_we_vote_id: challengeWeVoteId,
        invitee_endorsement: inviteeEndorsement,
        invitee_endorsement_changed: true,
        visible_to_public: visibleToPublic,
        visible_to_public_changed: visibleToPublicChanged,
      });
  },
};
