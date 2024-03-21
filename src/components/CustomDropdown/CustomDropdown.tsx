import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './CustomDropdown.scss';
import {Data} from "../../data/Data.tsx";
import {Button} from "../Button";
import {DropdownOption} from "../DropdownOption";
import {Search} from "../Search";
import {Option} from "../../data/type.ts";
import {handleSearch} from "../../utils/helpers.ts";

interface Props {
  placeholder: string;
  onSearchData?: (query: string, setFilteredOptions: (options: Option[]) => void) => void;
}

export const CustomDropdown: React.FC<Props> = ({placeholder, onSearchData}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(Data);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearchData) {
      onSearchData(query, setFilteredOptions);
    } else {
      handleSearch(query, (options: Option[]) => setFilteredOptions(options));
    }
  };


  return (
    <div className="dropdown" ref={dropdownRef}>
      <Button
        selectedOption={selectedOption ? selectedOption.name : ''}
        title={placeholder}
        isOpen={isOpen}
        onToggleDropdown={handleDropdownToggle}
      />

      {isOpen && (
        <div className="dropdown__menu">
          <Search
            placeholder='Пошук...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <ul className="dropdown__options-list">
            {filteredOptions.map((option, index) => (
              <DropdownOption
                key={`${option.id}-${index}`}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
