export async function  getTokenAndLogin(uname,pass){
    const apiUrl = 'https://nvback.newvative.com/auth/jwt/create/';
    const postData = {
        username: uname,
        password: pass
      };
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };
      try {
      const response= await fetch(apiUrl, requestOptions);
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      const data = await response.json();
        // Handle the response data (assuming the response contains a JWT token)
        const jwtToken = data.access;
        console.log({success: true, token : jwtToken})
        return {success: true, token : jwtToken}
        }     
        catch(error) {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
        return {success: false, token : null}
      };
}

export async function getUsernameFromToken(token){
  const api_url= "https://nvback.newvative.com/auth/users/me/";
  token = 'JWT ' + token; 
  console.log("TOKen is ",token)
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : token
    },  
  };
  try {
    const response= await fetch(api_url, requestOptions);
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    const data = await response.json();
      console.log(data)
      // Handle the response data (assuming the response contains a JWT token)
      return {success: true, user : data}
      }     
      catch(error) {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
      return {success: false, user : null}
    };
}

// const postData = {
//     username: 'example_username',
//     password: 'example_password'
//   };
  
//   // URL of the API endpoint
//   const apiUrl = 'http://159.65.155.186/auth/jwt/create/';
  
//   // Construct the request options
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   };
  
//   // Make the POST request using Fetch
//   fetch(apiUrl, requestOptions)
//     .then(response => {
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       // Parse the response as JSON
//       return response.json();
//     })
//     .then(data => {
//       // Handle the response data (assuming the response contains a JWT token)
//       const jwtToken = data.jwt;
//       console.log('JWT Token:', jwtToken);
//       // You can do further processing here, like storing the token in local storage or cookies
//     })
//     .catch(error => {
//       // Handle any errors that occur during the fetch
//       console.error('Error:', error);
//     });