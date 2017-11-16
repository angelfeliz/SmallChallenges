import 'whatwg-fetch';


export const  getTopHundredUsers = (callback) => {
  let users = {
    recent:'',
    allTime:''
  }
   fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
   .then(function(response) {
     return response.json();
   })
   .then(data => {
    return data;
  })
   .then((data) => {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
   .then(function(response) {
     return response.json();
   })
   .then(allTimeData => {
        users.recent = data;
        users.allTime = allTimeData;

        callback(users);
  })
  })

return users;
}
