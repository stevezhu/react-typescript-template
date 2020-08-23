import React, {FC} from 'react';

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({label, onClick}) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};
