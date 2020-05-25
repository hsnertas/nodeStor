// Require Axios Dependency
const axios = require("axios");

// GitHub API call using Axios to retrieve data and pass it in a callback
const api = {
  getUser(username, cb) {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        console.log(response.data);
    
        cb(response);

      })
  }
};

module.exports = api;