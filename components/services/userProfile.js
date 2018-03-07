import * as baseService from './base';

function all() {
<<<<<<< HEAD
    return baseService.get('/api/users/selfies');
}

function getUser(id) {
    console.log(`/api/users/selfies/${id}`);
    return baseService.get(`/api/users/selfies/${id}`);
=======
    return baseService.get('/api/userProfile/:id/selfies');
>>>>>>> b5be99d66b71598596ee795fa734046d2e800d4c
}

function one(id) {
    return baseService.get(`/api/userProfile/${id}`);
}

export { all, one, getUser };