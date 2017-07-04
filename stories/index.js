import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import SpecialNotification from '../src/components/hsbc-ui/SpecialNotification';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('HSBC UI components', module)
  .add('Badass component', () => <SpecialNotification name="anybody" actionClick={action('clicked')} />);
