import { ChangeEvent, forwardRef } from "react";
import './Search.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Search = forwardRef<HTMLInputElement, Props>(({placeholder, onChange, value}, ref) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});
