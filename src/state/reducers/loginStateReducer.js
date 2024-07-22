const initialState = {
    email: 'example@example.com',
    firstName: 'Hello User',
    token: ''
  };
  
  const loginReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'set_email':
        return { ...state, email: action.payload };
      case 'set_name':
        return { ...state, firstName: action.payload };
      case 'set_token':
        return { ...state, token: action.payload };
      default:
        return state;
    }
  };

  export default loginReducers;
  