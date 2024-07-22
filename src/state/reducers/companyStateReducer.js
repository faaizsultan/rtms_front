const initialState = {
    devices: null,
    branches: null,
  };
  
  const companyDataReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'set_devices':
        return { ...state, devices: action.payload };
      case 'set_branches':
        return { ...state, branches: action.payload };
      default:
        return state;
    }
  };

  export default companyDataReducers;
  