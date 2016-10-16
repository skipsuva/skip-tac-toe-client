import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Leaderboard from 'app/components/leaderboard/Leaderboard.js'

describe('<Leaderboard/>', function() {
  beforeEach(function() {
      this.LeaderboardStore = {
        loading: true
      };
  });

  it('renders the LoadingRow component', function() {
    const wrapper = shallow(<Leaderboard LeaderboardStore={this.LeaderboardStore}/>);
    expect(wrapper.find('LoadingRow').length).toEqual(1);
  });

  it('renders the LeaderboardItem component', function() {

  });

});
