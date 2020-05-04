import React from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ViewListOutlined from '@material-ui/icons/ViewListOutlined';
import ViewListRounded from '@material-ui/icons/ViewListRounded';
import { historyPush } from '../../utils/cordovaUtils';
import { Card, Icon, PercentComplete, StyledButton, StyledCheckbox, SubTitle, Title, TitleRowWrapper } from './ReadyTaskStyles';
// Hexagon,

class ReadyTaskBallot extends React.Component {
  static propTypes = {
    arrowsOn: PropTypes.bool,
    buttonText: PropTypes.string,
    completedTitle: PropTypes.string,
    completedSubtitle: PropTypes.string,
    completedButtonText: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  constructor (props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  goToNextStep = () => {
    historyPush('/ballot');
  }

  render () {
    const { arrowsOn, completedButtonText, completedTitle, title, completedSubtitle, subtitle, buttonText } = this.props;
    const { completed } = this.state;

    return (
      <Card completed={completed} className="card">
        <Icon className="u-cursor--pointer" completed={completed} onClick={this.goToNextStep}>
          {/* <Hexagon /> */}
          {completed ? <ViewListOutlined /> : <ViewListRounded />}
        </Icon>
        <div>
          <TitleRowWrapper>
            <Title
              className="u-cursor--pointer"
              onClick={this.goToNextStep}
            >
              {completed ? completedTitle || title : title}
            </Title>
            <PercentComplete completed={completed || undefined}>
              {completed ? '100%' : '0%'}
            </PercentComplete>
          </TitleRowWrapper>
          <SubTitle className="u-cursor--pointer" onClick={this.goToNextStep}>{completed ? completedSubtitle || subtitle : subtitle}</SubTitle>
          <StyledButton className="u-cursor--pointer" onClick={this.goToNextStep} completed={completed || undefined} variant="outlined" color="primary">
            <StyledCheckbox completed={completed} />
            {completed ? completedButtonText : (
              <span>
                {buttonText}
                {arrowsOn && <ArrowForwardIcon />}
              </span>
            )}
          </StyledButton>
        </div>
      </Card>
    );
  }
}

export default ReadyTaskBallot;
