function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);

  if (username == "ahmad2017" && password == "integrity") {
    window.location.replace("sukses.html");
  } else {
    window.alert("username atau password anda salah!");
  }
}
