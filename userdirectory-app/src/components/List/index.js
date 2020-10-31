// import React, { useEffect }from 'react';
// import API from '../../utils/API'

// const DatatablePage = () => {

//     useEffect(() => {
//         API.getUsers()
//           .then((res) => console.log(res.data.results))
//           .catch((err) => console.log(err));
//       }, []);
      
//   const data = {
//     columns: [
//       {
//         label: 'Picture',
//         field: 'picture',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Name',
//         field: 'name',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Email',
//         field: 'email',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'D.O.B',
//         field: 'dob',
//         sort: 'asc',
//         width: 100
//       }
//     ],
//     rows: [
//       {
//         image: 'System Architect',
//         name: 'Tiger Nixon',
//         email: 'Edinburgh',
//         dob: '61'
//       },
//       {  
//         image: 'Accountant',
//         name: 'Garrett Winters',
//         email: 'Tokyo',
//         dob: '63'
//       },
//       {
//         image: 'Junior Technical Author',
//         name: 'Ashton Cox',
//         email: 'San Francisco',
//         dob: '66'
//       },
//       {
//         image: 'Senior Javascript Developer',
//         name: 'Cedric Kelly',
//         email: 'Edinburgh',
//         dob: '22'
//       },
//       {
//         image: 'Accountant',
//         name: 'Airi Satou',
//         email: 'Tokyo',
//         dob: '33'
//       },
//       {
//         image: 'Integration Specialist',
//         name: 'Brielle Williamson',
//         email: 'New York',
//         dob: '61'
//       },
//     ]
// };

// export default DatatablePage ;