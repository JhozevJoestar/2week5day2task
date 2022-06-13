function generatePassword(length, difficult, number) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPassword = '';
  let arr1 = [];

  
if(number === undefined){
  for(let i = 0; i < length; i++) {
    if(difficult === 'easy'){
    const randomSymbol = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    newPassword += randomSymbol;
    } else if(difficult === 'medium'){
    const randomSymbol = digits[Math.floor(Math.random() * alphabet.length)];
    newPassword += randomSymbol;
    
  } else if(difficult === 'hard'){
    const randomSymbol = symbols[Math.floor(Math.random() * alphabet.length)];
    newPassword += randomSymbol;
    }
  }
  return newPassword;
} else {
    for (let i = 0; i < number; i++) {
      arr1.push(generatePassword(length, difficult))
}
  return arr1
}
}
    console.log(generatePassword(10, 'hard', 3))