import { AsyncStorage } from 'react-native';
const AUTH_TOKEN_KEY = 'authtoken';
<<<<<<< HEAD
const BASE_URL = 'https://cagjdlkoqc.localtunnel.me';
=======
<<<<<<< HEAD
const BASE_URL = 'https://tjjfcgkhnw.localtunnel.me';
=======
const BASE_URL = 'https://hikarscxuk.localtunnel.me/';
>>>>>>> 82ba52a6b08bcded8dfd0c3a9d46b20a3f6a9f1c
>>>>>>> 50cd880f7c9d287d2d8c7a51601f6f8613add1f9

async function setAuthToken(token) {
    return await AsyncStorage.setItem(AUTH_TOKEN_KEY, `Bearer ${token}`);
}

async function clearAuthToken() {
    return await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
}

async function getAuthToken() {
    return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
}

async function makeFetch(url, info) {
    return fetch(`${BASE_URL}${url}`, info);
}

async function json(url, method = 'GET', payload = {}) {
    const authToken = await getAuthToken();
    const headers = {
        'Content-Type': 'application/json',
    };

    if (!!authToken) {
        headers.Authorization = authToken;
    }

    const data = {
        method,
        body: JSON.stringify(payload),
        headers,
    };

    if (method === 'GET') {
        delete data.body;
    }

    const response = await makeFetch(url, data);
    const contentType = response.headers.get('Content-Type');

    if (response.ok) {
        if (contentType.indexOf('application/json') > -1) {
            return await response.json();
        } else if (response.statusText) {
            return response.statusText;
        } else if (response.status) {
            return response.status;
        }
    } else {
        if (contentType.indexOf('application/json') > -1) {
            throw await response.json();
        } else if (response.statusText) {
            throw response.statusText;
        } else if (response.status) {
            throw response.status;
        }
    }

    throw response;
}

async function form(url, method = 'GET', payload = {}) {
    const authToken = await getAuthToken();
    const headers = {



    };

    if (!!authToken) {
        headers.Authorization = authToken;
    }

    const data = {
        method,
        body: payload,
        headers,
    };

    if (method === 'GET') {
        delete data.body;
    }

    const response = await makeFetch(url, data);
    const contentType = response.headers.get('Content-Type');

    if (response.ok) {
        if (contentType.indexOf('application/json') > -1) {
            return await response.json();
        } else if (response.statusText) {
            return response.statusText;
        } else if (response.status) {
            return response.status;
        }
    } else {
        if (contentType.indexOf('application/json') > -1) {
            throw await response.json();
        } else if (response.statusText) {
            throw response.statusText;
        } else if (response.status) {
            throw response.status;
        }
    }

    throw response;
}

async function get(url) {
    return json(url);
}

async function post(url, payload) {
    return json(url, 'POST', payload);
}

async function postForm(url, payload) {
    return form(url, 'POST', payload);
}

async function put(url, payload) {
    return json(url, 'PUT', payload);
}

async function destroy(url, payload) {
    return json(url, 'DELETE', payload);
}

export {
    setAuthToken,
    getAuthToken,
    clearAuthToken,
    get,
    post,
    put,
    destroy,
    makeFetch,
    postForm,
};
