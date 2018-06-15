import {
  SCRAPE_SUCCESS
} from '../../actions/types';

const initialState = {
  fccUserStats: {
    challenges: {},
    projects: {}
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SCRAPE_SUCCESS:
          return { ...state, fccUserStats: action.payload }
      default:
          return state;
  }
}