class API {
    baseURL = "http://matakansenturk.com:4000/api";

    //projects component use
    async getProjects() {
        var result = 
            fetch(this.baseURL+"/projects")
              .then((response) => response.json())
              .then((a) => a);
        return result;
    }
}

export default API;