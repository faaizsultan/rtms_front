export const setUserName = (userNameToSet) => ({
    type: 'set_name',
    payload: userNameToSet
  });
  
  export const setEmail = (emailToSet) => ({
    type: 'set_email',
    payload: emailToSet
  });
  
  export const setToken = (tokenToSet) => ({
    type: 'set_token',
    payload: tokenToSet
  });
  export const setDevices = (devices) => ({
    type: 'set_devices',
    payload: devices
  });
  export const setBranches = (branches) => ({
    type: 'set_branches',
    payload: branches
  });