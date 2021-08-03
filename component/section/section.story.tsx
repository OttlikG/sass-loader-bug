import React from 'react';
import { Meta } from '@storybook/react';
import Section from './section';

export default {
    title: 'Components/Section',
    component: Section
} as Meta;

export const Basic: React.VFC<{}> = () => <Section />;