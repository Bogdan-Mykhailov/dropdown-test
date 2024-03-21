import { Data } from "../data/Data.tsx";
import {Option} from "../data/type.ts";

export const handleSearch = (
  query: string,
  setFilteredOptions: (options: Option[]) => void
) => {
  const filteredOptions = Data.filter((option) =>
    option.name.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredOptions(filteredOptions);
};
