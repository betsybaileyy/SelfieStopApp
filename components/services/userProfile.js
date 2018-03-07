import * as baseService from './base';

function all() {
    return baseService.get(`/api/userProfile/${id}/selfies`);
}

function one(id) {
    return baseService.get(`/api/userProfile/${id}`);
}

<<<<<<< HEAD
export { all, one }; //insert, update, destroy 
=======
export { all, one, };
>>>>>>> ddc98dab7ddf62adee41a69bc209a5d05f6563bd
