import {FC} from "react";
import caret from '../../assets/caret-down-solid.svg'
import './Button.scss';

interface Props {
  isOpen: boolean;
  title: string;
  onToggleDropdown: () => void
  selectedOption: string | null
}

export const Button: FC<Props> = (
  {
    isOpen,
    title,
    onToggleDropdown,
    selectedOption,
  }) => {
  return (
    <button
      className={`dropdown-button ${
        isOpen
          ? 'dropdown-button--opened'
          : ''
      }`}
      onClick={onToggleDropdown}>
      {selectedOption || <span>{title}</span>}
      <img className='dropdown-button__icon' src={caret} alt="Caret"/>
    </button>
  );
};
