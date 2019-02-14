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

//https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}