import { UPDATE_SORT_FIELDS } from '../actions/actions';

const initialState = {
	sortBy: "desc"
}


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