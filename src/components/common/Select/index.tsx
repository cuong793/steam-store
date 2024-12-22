/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import {
  Select as SelectProvider,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { IOption } from '@/variables/interface';
import CONSTANT from '@/variables/constant';

interface IProps {
  label: string;
  value: string;
  placeholder: string;
  options: IOption[] | any[];
  onChange: (value: string) => void;
  className: string;
}
function Select({ label, options, ...props }: IProps) {
  const getLabel = (value: string) => {
    const item = CONSTANT.LABEL?.find((option) => option?.key === value);
    return item?.label || value;
  };
  return (
    <SelectProvider onValueChange={props.onChange} value={props.value}>
      <SelectTrigger className={`w-full ${props?.className}`}>
        <SelectValue placeholder={label || ''} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options?.map((option) => (
            <SelectItem
              key={option?.value || option}
              value={option?.value || option}
            >
              {getLabel(option?.value || option)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectProvider>
  );
}

export default Select;
