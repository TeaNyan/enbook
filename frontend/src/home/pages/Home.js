import React from 'react';

import { HomeBg, BgText } from './style';
import { Column } from '../../shared/layouts/Column';

const Home = () => {
  return (
    <Column>
      <HomeBg>
        <BgText>
          <h1>This is a sample</h1>
        </BgText>
        <button>Get started</button>
      </HomeBg>
    </Column>
  );
};

export default Home;
