const authReducer = (
  state = {
    auth: {
      token: '',
      loggedIn: true,
    },
  },
  action,
) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.token,
        },
      };

    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        auth: {
          ...state.auth,
          loggedIn: action.payload,
        },
      };
  }

  return state;
};

export default authReducer;
