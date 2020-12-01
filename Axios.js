
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

async function postRequest() {
  var data = {
    email : 'joe@appstate.edu',
    password: 'password'
  }
  const resonse  = await axios.post('http://localhost:3013/rest/account/signin', data);
  console.log(resonse.data);
}

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

//getRequestAccount()
postRequest();
