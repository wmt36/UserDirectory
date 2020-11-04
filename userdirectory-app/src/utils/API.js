import axios from 'axios';


const users = {
  getUsers: function() {
  return axios.get('https://randomuser.me/api/?results=30&nat=us');
}};

export default users;
