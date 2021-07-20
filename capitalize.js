const capitalize = (string) => {
    if (typeof string !== 'string') {
      return 'Please provide a string'
    }
    const strArr = string.split(' ');
  
    let newString = [];
    for (let i = 0; i < strArr.length; i += 1) {
      const firstChar = strArr[i][0].toUpperCase();
      const str = firstChar + strArr[i].substring(1,);
      newString.push(str)
    }
    return newString.join(' ');
  }

module.exports = capitalize;