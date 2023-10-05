function lowerCaseWords(mixedArray) {
    // Check if the input is an array
    if (!Array.isArray(mixedArray)) {
      return Promise.reject('Input is not an array');
    }
  
    // Use Promise to handle operations
    return new Promise((resolve, reject) => {
      const lowercaseWords = mixedArray.filter(item => typeof item === 'string');
  
      if (lowercaseWords.length === 0) {
        reject('No words found in the input array');
      } else {
        resolve(lowercaseWords.map(word => word.toLowerCase()));
      }
    });
  }
  
  // Testing
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log('Lowercase words:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  