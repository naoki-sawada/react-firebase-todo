import { storiesOf } from '@storybook/react';
import React from 'react';
import { Login } from "../src/ts/components/Login";

const stories = storiesOf('Login', module);

stories.add('default', () => (
  <Login />
));
