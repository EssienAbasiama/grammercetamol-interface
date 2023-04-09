export function responseData(res) {
  localStorage.setItem("id", res.id);
  localStorage.setItem("firstname", res.firstName);
  localStorage.setItem("lastname", res.lastName);
  localStorage.setItem("othername", res.otherName);
  localStorage.setItem("token", res.token);
  localStorage.setItem("refreshToken", res.refreshToken);
  localStorage.setItem("roles", res.roles);
  localStorage.setItem("users", JSON.stringify(res));
}
