import { createStore } from 'redux';

const initialState = {
  user: null,
  companies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, user: action.payload };
    case 'ADD_COMPANY':
      return { ...state, companies: [...state.companies, action.payload] };
    // ... other reducers
    default:
      return state;
  }
};

const store = createStore(reducer);