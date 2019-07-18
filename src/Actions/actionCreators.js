import { LOAD_LOCALITIES, SELECT_LOCATION, LOAD_SOCKET_RESPONSE } from '../Actions/actionTypes'
export function loadLocalities(localities) {
      /*alert('Action loadLocalities')
            console.log('Action loadLocalities');
            console.log(localities);  */
  return { type: LOAD_LOCALITIES, localities: localities }
}
export function updateSelectedLocation(idSelectedLocation) {
  return { type: SELECT_LOCATION, idSelectedLocation: idSelectedLocation }
}
export function loadSocketResopnse(socketResopnse) {
  return { type: LOAD_SOCKET_RESPONSE, socketResopnse: socketResopnse }
}