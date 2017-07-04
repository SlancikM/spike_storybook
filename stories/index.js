import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import BadassComponent from '../src/components/hsbc-ui/BadassComponent';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('BadassComponent')} />);

storiesOf('HSBC UI components', module)
  .add('Badass component', () => <BadassComponent name="anybody" actionClick={action('clicked')} />);
