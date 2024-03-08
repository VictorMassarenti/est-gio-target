function reverseString(string) {
  let stringReverse = "";
  for (let index = 0; index < string.length; index++) {
    stringReverse += string[string.length - index - 1];
  }
  return stringReverse;
}

console.log(reverseString("esse arara ama anilina"));
