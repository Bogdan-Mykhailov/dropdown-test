import './App.scss'
import {CustomDropdown} from "./components";

export const App = () => {
  // const customSearch = async (query: string, setFilteredOptions: (options: Option[]) => void) => {
  //   try {
  //     const response = await fetch(`YOUR_API_ENDPOINT?q=${query}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await response.json();
  //
  //     setFilteredOptions(data.options);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div className='app'>
      <CustomDropdown placeholder="Оберіть вашу країну" />
      <CustomDropdown placeholder="Оберіть ваше місто" />
    </div>)
};
