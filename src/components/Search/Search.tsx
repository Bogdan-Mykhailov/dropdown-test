import {ChangeEvent, FC} from "react";
import './Search.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Search: FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
