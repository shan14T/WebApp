import { $, $$ } from '@wdio/globals';
import Page from './page';

class PrivacyPage extends Page {
  constructor () {
    super().title = 'Privacy Policy - We Vote';
  }

  async load () {
    await super.open('/more/privacy');
    await super.maximizeWindow();
    await super.rerender();
  }

  get weVoteUSLink () {
    return $('#wevote');
  }

  get campaignsWeVoteUSLink () {
    return $('#weVoteCampaigns');
  }

  get helpCenterLink () {
    return $('#wevotePrivacy');
  }

  get findSubmittingRequestHereLink () {
    return $('#weVoteContactUsPage');
  }

  get privacyHeader () {
    return $('.ContentTitle-sc-aac96k-0 MAaSL=WeVote.US Privacy Policy');
  }

  get deleteYourAccountLink () {
    return $('#deleteAllAccountDataLink');
  }

  get googleApiUserDataPolicyLink () {
    return $('#googleLimitedUse');
  }

  get googleAnalyticsLink () {
    return $('#googleAnalytics');
  }

  get openReplayPrivacyLink () {
    return $('#openReplayPrivacy');
  }

  get elementOfCampaignPage () {
    return $('//div/h1[text() = "Helping the best candidates win votes"]');
  }

  get emailLink () {
    return $$('//a[text() = "info@WeVote.US"]');
  }

  get deleteYourAccountButton () {
    return $('#deleteAllAccountDataButton');
  }

  get cancelOfDeleteYourAccountButton () {
    return $('#deleteAllAccountDataCancelButton');
  }

  async getTextFromEmailLinks () {
    const selectorToGetElements = '//a[text() = "info@WeVote.US"]';
    const arrOfElements = [];
    for (let i = 1; i <= $$(selectorToGetElements).length; i++) {
      const textFromElement = $(`(${selectorToGetElements})[${i}]`).getText();
      arrOfElements.push(textFromElement);
    }

    return arrOfElements;
  }
}

export default new PrivacyPage();
