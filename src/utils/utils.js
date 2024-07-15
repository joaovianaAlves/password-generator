export function generatePassword(length, special) {
  let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890${
    special ? "~!@#$%^&*?" : ""
  }`.split("");

  let password = [];
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    let randomChar = chars[randomIndex];
    password.push(randomChar);
  }
  password = password.join("");
  return password;
}
