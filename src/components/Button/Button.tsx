import React from 'react';
import { Pressable, PressableProps } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props & PressableProps) => (
  <Pressable hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} {...props}>
    {children}
  </Pressable>
);

export default Button;
