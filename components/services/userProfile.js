import * as baseService from './base';

function all() {
<<<<<<< HEAD
    return baseService.get(`/api/userProfile/${id}/selfies`);
=======
<<<<<<< HEAD
    return baseService.get('/api/users/selfies');
}

function getUser(id) {
    console.log(`/api/users/selfies/${id}`);
    return baseService.get(`/api/users/selfies/${id}`);
=======
    return baseService.get('/api/userProfile/:id/selfies');
>>>>>>> b5be99d66b71598596ee795fa734046d2e800d4c
>>>>>>> 5a6f4fb076d7f9e99d8847015700ce9d85ebbd3d
}

function one(id) {
    return baseService.get(`/api/userProfile/${id}`);
}

export { all, one, getUser };