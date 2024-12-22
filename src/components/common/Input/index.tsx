/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input as InputBase } from '@/components/ui/input';
import React from 'react';

interface IProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function Input(props: IProps) {
  return <InputBase {...(props as any)} />;
}

export default Input;
