export function responseData(res) {
  localStorage.setItem("users", JSON.stringify(res));
}
