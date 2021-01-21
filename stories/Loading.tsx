import { storiesOf } from '@storybook/react';
import React from 'react';
import { Loading } from "../src/ts/components/Loading";

const stories = storiesOf('Lading', module);

stories.add('default', () => (
  <Loading />
));
