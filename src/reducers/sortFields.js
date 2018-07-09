import { UPDATE_SORT_FIELDS, REMOVE_DATA } from '../actions/actions';

const initialState = localStorage.getItem('sortFields') ? JSON.parse(localStorage.getItem('sortFields')) : { sortField: "", sortBy: "" };

const sortFields = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_SORT_FIELDS : 
			return {
				...state,
				sortField: action.sortField,
				sortBy: action.sortBy
			};
		case REMOVE_DATA :
			return 	{ 
				sortField: "",
				sortBy: "" 
			}
	}	
	return state;
}

export default sortFields