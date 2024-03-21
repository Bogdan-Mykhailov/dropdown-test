import {FC} from "react";
import './DropdownOption.scss';
import {Option} from "../../data/type.ts";

interface Props {
  option: Option;
  onClick: (option: Option) => void;
}

export const DropdownOption: FC<Props> = ({ option, onClick }) => {
  return (
    <li className="option-item" onClick={() => onClick(option)}>
      {option.name}
    </li>
  );
};
