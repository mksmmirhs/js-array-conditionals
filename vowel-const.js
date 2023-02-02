const solution = (letter) => {
  //Write Your solution Here
  //dont forget to return
  letter = letter.toLowerCase();
  let vowelConst = "";
  switch (letter) {
    case "a":
      vowelConst = "VOWEL";
      break;
    case "e":
      vowelConst = "VOWEL";
      break;
    case "i":
      vowelConst = "VOWEL";
      break;
    case "o":
      vowelConst = "VOWEL";
      break;
    case "u":
      vowelConst = "VOWEL";
      break;
    default:
      vowelConst = "CONSONANT";
  }
  return vowelConst;
};
console.log(solution("a"));
