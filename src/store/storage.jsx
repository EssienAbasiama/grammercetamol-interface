export function responseData(res) {
  localStorage.setItem("users", JSON.stringify(res));
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem("users"));
  return user;
}
