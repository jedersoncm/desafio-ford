const decript = (key, internalKey, vinNumber) => {
  const splitedKey = key.split('');
  const splitedInternalKey = internalKey.split('');
  const result = []
  for (let i = 0; i < vinNumber.length; i++) {
    let match = false;
    for(let j = 0; j < key.length; j++) {
      if (vinNumber[i] === splitedInternalKey[j]) {
        match = true;
        result.push(splitedKey[j])
      }
    }
    if (!match) result.push(vinNumber[i])
  }

  return result.join('');
}
// exemplo
console.log(decript("abc01", "ahb50", "0hgbm82633a554352"));