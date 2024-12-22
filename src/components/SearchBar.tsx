import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {

    const deboundRef = useRef<NodeJS.Timeout>();
    const { searchPlacesByTerm } = useContext(PlacesContext)

    const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        if( deboundRef.current ) {
            clearTimeout(deboundRef.current);
        }

        deboundRef.current = setTimeout(() => {
            // TODO: search something
            searchPlacesByTerm(event.target.value);
        }, 350)
    }

    return (
        <div className="search-container">
            <input
                type="text" 
                className="form-control"
                placeholder="Search places..."
                onChange={ onQueryChanged }
            />
            <SearchResults />
        </div>
    )
}
