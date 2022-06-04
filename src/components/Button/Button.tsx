import React from 'react';
import { Pressable, PressableProps } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props & PressableProps) => (
  <Pressable {...props}>{children}</Pressable>
);

export default Button;
