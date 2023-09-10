// SearchContext.tsx
import { createContext } from 'react';

export interface SearchContextType {
	camera: string;
	setCamera: React.Dispatch<React.SetStateAction<any>>;
	camSelectedName: string;
	setCamSelectedName: React.Dispatch<React.SetStateAction<any>>;
	startDate: string;
	setStartDate: React.Dispatch<React.SetStateAction<any>>;
	dateType: string;
	setDateType: React.Dispatch<React.SetStateAction<any>>;
	rover: string;
	setRover: React.Dispatch<React.SetStateAction<any>>;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
	savedUrls: any[];
	setsavedUrls: React.Dispatch<React.SetStateAction<any>>;
	handleFetchUrlFromMemory: (URI: string) => void;
	handleLoadUrlFromMemory: (id: string) => void;
	handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteUrls: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSaveUrlFromMemory: (e: React.MouseEvent<HTMLButtonElement>) => void;
	deleteAllItems: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
