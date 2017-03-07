class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }
  static get(route) {
    return this.xhr(route);
  }
  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }
  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }
  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }
  static xhr(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });<span class="curicon cur-cur-amd"></span>
    
  }
}
export default Api