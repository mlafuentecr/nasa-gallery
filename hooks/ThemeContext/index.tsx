import { createContext } from 'react';

export interface ThemeContextType {
	camera: string;
	setCamera: React.Dispatch<React.SetStateAction<any>>;
	camSelectedName: string;
	setCamSelectedName: React.Dispatch<React.SetStateAction<any>>;
	searchDate: string;
	setsearchDate: React.Dispatch<React.SetStateAction<any>>;
	dateType: string;
	setDateType: React.Dispatch<React.SetStateAction<any>>;
	rover: string;
	setRover: React.Dispatch<React.SetStateAction<any>>;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
	savedUrls: any[];
	setsavedUrls: React.Dispatch<React.SetStateAction<any>>;
	URI: string;
	setURI: React.Dispatch<React.SetStateAction<any>>;
	handleFetchUrlFromMemory: (URI: string) => void;
	handleLoadUrlFromMemory: (id: string) => void;
	handleSearch: (e: React.MouseEvent<HTMLButtonElement> | null, url: string) => void; // Updated the parameter list
	handleDeleteUrls: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handlesaveBookmarkFromMemory: (e: React.MouseEvent<HTMLButtonElement>) => void;
	deleteBookmark: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
