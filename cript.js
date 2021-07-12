const cript = (key, vinNumber) => {
  const internalKey = "abc01";
  const splitedKey = key.split('');
  const splitedInternalKey = internalKey.split('');
  const result = []
  for (let i = 0; i < vinNumber.length; i++) {
    let match = false;
    for(let j = 0; j < key.length; j++) {
      if (vinNumber[i] === splitedKey[j]) {
        match = true;
        result.push(splitedInternalKey[j])
      }
    }
    if (!match) result.push(vinNumber[i])
  }

  return result.join('');
}
// exemplo
console.log(cript("ahb50", "1hgcm82633a004352"));