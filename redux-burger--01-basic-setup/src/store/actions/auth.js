import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');

  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, Number(expirationTime) * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    const apiKey = 'AIzaSyAwfiYGYQ8IjAQR4fWwGqRkgG0XrAOlyIQ';
    let endpoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;

    if (!isSignup) {
      endpoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
    }

    axios
      .post(endpoint, authData)
      .then(response => {
        // console.log(response.data);
        const expirationDate = new Date(
          new Date().getTime() + Number(response.data.expiresIn) * 1000
        );
        localStorage.setItem('token', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);

        dispatch(authSuccess(response.data.idToken, response.data.localId));
        // 檢查登入是否過期
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        // err 會由 firebase 提供完整的錯誤訊息
        console.dir(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      } else {
        dispatch(logout());
      }
    }
  };
};
