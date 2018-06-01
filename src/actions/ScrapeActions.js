import {
  SCRAPE_SUCCESS
} from './types';
import { api } from '../api';

export const scrape = () => {
  return async (dispatch) => {
      const response = await api({
          endpoint: 'user/scrape',
          method: 'GET',
      });
      const payload = response.result.reduce((acc, statItem) => {
        return { ...acc, [statItem.type.toLowerCase()]: statItem }
      }, {});
      dispatch({ type: SCRAPE_SUCCESS, payload });
      //console.log('scrape results: ', response);
  }
}
