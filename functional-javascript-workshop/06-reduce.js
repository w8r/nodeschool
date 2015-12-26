function countWords(inputWords) {
  return inputWords.reduce(function(obj, word) {
  	obj[word] = (obj[word] || 0) + 1;
  	return obj;
  }, {});
}
    
module.exports = countWords;
