import { Checkbox as CheckboxBase } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface CheckboxProps {
  name: string;
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

function Checkbox({ name, checked, label, onChange, ...rest }: CheckboxProps) {
  return (
    <div>
      <div className='flex items-center space-x-2'>
        <CheckboxBase
          id={name || 'example'}
          checked={checked}
          onCheckedChange={onChange}
          {...rest}
        />
        {label && <Label htmlFor={name || 'example'}>{label}</Label>}
      </div>
    </div>
  );
}

export default Checkbox;
