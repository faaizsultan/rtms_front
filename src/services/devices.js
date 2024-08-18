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


  export async function getDeviceData(token, spot_id = 'jPvq4pQcle', start_time = null, end_time = null) {
    // If start_time or end_time is not provided, use defaults
    const now = new Date();
    
    if (!start_time) {
        start_time = new Date(now);
        start_time.setDate(start_time.getDate() - 1);  // Set start_time to 1 day before current date
    }

    if (!end_time) {
        end_time = new Date(now);
        end_time.setDate(end_time.getDate() + 1);  // Set end_time to 1 day after current date
    }

    // Format start_time and end_time to ISO string (e.g., 'YYYY-MM-DDTHH:MM:SSZ')
    const formattedStartTime = start_time.toISOString();
    const formattedEndTime = end_time.toISOString();

    console.log("Start time: " + formattedStartTime);
    console.log("End time: " + formattedEndTime);

    const api_url = `https://nvback.newvative.com/manage/data/${spot_id}?start_time=${formattedStartTime}&end_time=${formattedEndTime}`;
    console.log(api_url);

    const result = "JWT ".concat(token.replace(/"/g, ' '));
    console.log("Token is HERE:", result);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': result
        },
    };

    try {
        const response = await fetch(api_url, requestOptions);
        
        if (response.status === 204) {
            return { success: false, message: 'No Data found in specified Range' };
        } else if (response.status === 400) {
            return { success: false, message: 'Invalid Dates Filter' };
        }
        
        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('Error fetching device data:', error);
        return { success: false, message: 'Error fetching device data.', error };
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