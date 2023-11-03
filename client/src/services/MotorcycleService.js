import Api from '@/services/Api';

export default {
  index() {
    return Api().get('motorcycles'); 
  },
  show(motorcycleId) {
    return Api().get('motorcycle/' + motorcycleId); 
  },
  post(motorcycle) {
    return Api().post('motorcycle', motorcycle); 
  },
  put(motorcycle) {
    return Api().put('motorcycle/' + motorcycle.id, motorcycle); 
  },
  delete(motorcycle) {
    return Api().delete('motorcycle/' + motorcycle.id); 
  },
};
