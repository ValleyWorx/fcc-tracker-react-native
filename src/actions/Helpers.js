import {AsyncStorage} from 'react-native';
var jwtDecode = require('jwt-decode');
import { api, apiURL } from '../api';
import { NavigationActions } from 'react-navigation';

// Helper function to verify and/or refresh JWT
export const checkTokens = () => {
	return new Promise(async (resolve, reject) => {
			// Pull jwt and refresh token out of AsyncStorage
			let jwt = await AsyncStorage.getItem('jwt');
			let refreshToken = await AsyncStorage.getItem('refreshToken');
			if (jwt) {
				console.log('jwt', jwt);
				// Decode the JWT to obtain expire time
				let decoded = jwtDecode(jwt);
				// Get current time
				let time = Math.floor(Date.now() / 1000);
				// Check if time plus 50 is less than expire time
				if ((time + 50) < decoded.exp) {
						// JWT is still good, resolve promise with JWT
						console.log('jwt still good');
						resolve(jwt);
				} else {
						try {
								// JWT needs to be refreshed, fetch to endpoint for new JWT
								let resp = await fetch(
									apiURL + 'auth',
									{
											method: 'POST',
											body: JSON.stringify({
													"refreshToken": refreshToken,
											})
									}
								);
							if (resp.ok) {
									const respJson = await resp.json();
									// Store the JWT and refresh token in AsyncStorage
									await AsyncStorage.setItem('jwt', respJson.jwt);
									await AsyncStorage.setItem('refreshToken', respJson.refreshToken);
									// Resolve promise with new JWT
									resolve(jwt);
							} else {
								throw new Error();
							}
						} catch(e) {
							reject(`Refresh Token failed: ${e}`);
						}
				}
			} else {
				reject("JWT missing...");
			}
	})
}

export const resetNavigation = (navigation, route) => {
	const resetAction = NavigationActions.reset({
		index: 0,
		key: null,
		actions: [
			NavigationActions.navigate({ routeName: route })
		]
	});
	navigation.dispatch(resetAction);
}
