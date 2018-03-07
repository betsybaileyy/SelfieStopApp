import * as baseService from './base';

function all() {
    return baseService.get('/api/users/selfies');
}

function getUser(id) {
    console.log(`/api/users/selfies/${id}`);
    return baseService.get(`/api/users/selfies/${id}`);
}

function one(id) {
    return baseService.get(`/api/userProfile/${id}`);
}

export { all, one, getUser };