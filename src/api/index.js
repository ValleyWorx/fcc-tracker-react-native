const apiURL = 'https://fcctrackerapi.herokuapp.com/';     //change url to AWS

export const api = async ({endpoint, method, body}) => {
}
    const response = await fetch(apiURL + endpoint, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    return response.json();
};