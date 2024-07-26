export async function getTotalDevicesInACompany(token) {
    const api_url = "https://nvback.newvative.com/manage/company/devices";
    const result = "JWT ".concat(token.replace(/"/g, ' '));
    console.log("Token is HERE:", result);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': result
      },
    };
    console.log("Request Options In Devices:", requestOptions);
    try {
      const response = await fetch(api_url, requestOptions);
      const data = await response.json(); 
      // console.log("Devices Data:", data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      // return { success: false, devices: 0 };
      return error;
    }
  }
export async function getTotalBranches(token) {
    const api_url = "https://nvback.newvative.com/manage/company/branches";
    const result = "JWT ".concat(token.replace(/"/g, ' '));
    console.log("Token is HERE:", result);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': result
      },
    };
    // console.log("Request Options In Devices:", requestOptions);
    try {
      const response = await fetch(api_url, requestOptions);
      const data = await response.json(); // Use await here
      // console.log("Devices Data:", data);
      return data;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
      // return { success: false, devices: 0 };
      return 0;
    }
  }


  export async function getDeviceData(token,spot_id='jPvq4pQcle') {
    const api_url = `https://nvback.newvative.com/manage/data/${spot_id}`;
    const result = "JWT ".concat(token.replace(/"/g, ' '));
    console.log("Token is HERE:", result);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': result
      },
    };
    // console.log("Request Options In Devices:", requestOptions);
    try {
      const response = await fetch(api_url, requestOptions);
      const data = await response.json(); // Use await here
      // console.log("Devices Data:", data);
      return data;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('No device Data Found:', error);
      // return { success: false, devices: 0 };
      return null;
    }
  }

export async function getTotalFaultyDevices(token) {
    const api_url = "https://nvback.newvative.com/manage/faultydevices/";
    // const api_url = "http://localhost:8000/manage/offlinedevices/";
    const result = "JWT ".concat(token.replace(/"/g, ' '));
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': result
      },
    };
    // console.log("Request Options In Devices:", requestOptions);
    try {
      const response = await fetch(api_url, requestOptions);
      const data = await response.json(); // Use await here
      return data.faultydev;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
      // return { success: false, devices: 0 };
      return 0;
    }
  }

  export async function getTotalOfflineDevices(token) {
    const api_url = "https://nvback.newvative.com/manage/offlinedevices/";
    const result = "JWT ".concat(token.replace(/"/g, ' '));
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': result
      },
    };
    // console.log("Request Options In Devices:", requestOptions);
    try {
      const response = await fetch(api_url, requestOptions);
      const data = await response.json(); // Use await here
      return data.offlinedev;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
      // return { success: false, devices: 0 };
      return 0;
    }
  }