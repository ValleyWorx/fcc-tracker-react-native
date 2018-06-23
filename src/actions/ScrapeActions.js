import {
  SCRAPE_SUCCESS
} from './types';
import { api } from '../api';

export const scrape = () => {
  return async (dispatch) => {
      const certifications = await api({
          endpoint: 'user/scrape',
          method: 'GET',
      });
      const payload = certifications.map((cert) => {
         return {
           key: cert.id.toString(),
           title: cert.name
                      .replace(" Certification (300 hours)", "")
                      .replace(" (Thousands of hours of challenges)", ""),
           progress: cert.totalCompleted/cert.totalChallenges
        };
      });
      dispatch({ type: SCRAPE_SUCCESS, payload });
  }
}
