export function isLogin() {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}

export function setToken(val) {
  localStorage.setItem('token', val);
}

export function remoToken() {
  localStorage.removeItem('token');
}
