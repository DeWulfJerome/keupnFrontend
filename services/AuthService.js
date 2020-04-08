class AuthService {
  getToken() {}

  setToken() {}

  logIn(username, password, dispatch) {
    return new Promise((resolve, reject) => {
      if (username && password) {
        setTimeout(() => {
          dispatch(this.loginSuccess());
          resolve();
        }, 2500);
      } else {
        reject();
      }
    });
  }

  loginSuccess() {
    return dispatch => {
      dispatch({type: 'LOG_IN_SUCCESS', payload: true});
    };
  }

  checkUsernameUnique(username) {
    return new Promise((resolve, reject) => {
      if (username) {
        setTimeout(() => {
          resolve();
        }, 1000);
      } else {
        reject();
      }
    });
  }

  checkEmailUnique(email) {
    return new Promise((resolve, reject) => {
      if (email) {
        setTimeout(() => {
          resolve();
        }, 1000);
      } else {
        reject();
      }
    });
  }

  checkPasswordsMatch(password, repassword) {
    return new Promise((resolve, reject) => {
      if (password === repassword && password) {
        resolve();
      } else {
        reject();
      }
    });
  }

  createAccount(formData) {
    return new Promise((resolve, reject) => {
      if (formData) {
        setTimeout(() => {
          resolve();
        }, 1000);
      } else {
        reject();
      }
    });
  }
}

export default AuthService;
