import {Story} from '@storybook/react/types-6-0';
import {Button} from '.';

const Template: Story = ({children, ...args}) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'クリック',
};

const Config = {
  component: Button,
  title: 'Button',
};

export default Config;
