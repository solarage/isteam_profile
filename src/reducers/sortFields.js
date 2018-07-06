import { UPDATE_SORT_FIELDS } from '../actions/actions';

const initialState = localStorage.getItem('sortFields') ? JSON.parse(localStorage.getItem('sortFields')) : { sortBy: "desc" };

const sortFields = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_SORT_FIELDS : 
			return {
				...state,
				sortBy: action.sortBy
			};
	}	
	return state;
}

export default sortFields