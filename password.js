const passwordArray = process.argv[2].split("");

const passwordGen = function(password) {

  if(passwordArray.length > 2){
    return "to many args";
  }
  for (let i = 0; i < password.length; i++) {
    if(password[i] === "a") {
      password[i] = '4';
    } else if(password[i] === "e") {
      password[i] = '3';
    } else if(password[i] === 'o') {
      password[i] = '0';
    } else if (password[i] === 'l') {
      password[i] = '1';
    }
  }
  return password;
};
const newPassword = passwordGen(passwordArray).join("");
console.log(newPassword);
