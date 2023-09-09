// SearchContext.tsx
import { createContext } from 'react';

export interface SearchContextType {
	camera: string;
	setCamera: React.Dispatch<React.SetStateAction<any>>;
	startDate: string;
	setStartDate: React.Dispatch<React.SetStateAction<any>>;
	dateType: string;
	setDateType: React.Dispatch<React.SetStateAction<any>>;
	rover: string;
	setRover: React.Dispatch<React.SetStateAction<any>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
