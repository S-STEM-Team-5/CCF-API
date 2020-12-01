
const axios = require('axios').default;


// //Get example
// async function getAccount() {
//   await axios.get('http://localhost:3013/rest/account/')
//   .then(response => {
//     console.log(response.data);
//   });
// }
var body = {
  accType: "Volunteer",
  email: "kevinwwweeweqweqwe@appstate.edu",
  password: "password",
  name: {
    fname: "Keveeeein",
    lname: "Kevin"
  }
};

const getRequestAccount = async () => {
  try {
    const response = await axios.get('http://localhost:3013/rest/account/');
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const postRequestAccount = async () => {
  try {
    const response = await axios.post('http://localhost:3013/rest/account/', body);
  } catch (err) {
    console.log(err);
  }
};

//Post example
// function createAccount() {
//   var body = {
//     accType: "Volunteer",
//     email: "kevin@appstate.edu",
//     password: "password",
//     name: {
//       fname: "Kevin",
//       lname: ""
//     }
//   };
//   axios.post('http://localhost:3013/rest/account/', body);
// }

//postRequestAccount();
getRequestAccount();
