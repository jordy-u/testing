module.exports = {
  reverseString: function (stringToReverse) {
	  var sizeOfString = stringToReverse.length;
	  var reversedString = "";
	  for (var i=0; i<sizeOfString; i++) {
		  reversedString += stringToReverse[sizeOfString-i-1];
	  }
   return reversedString;
}
};
