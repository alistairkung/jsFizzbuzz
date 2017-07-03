function FizzBuzz() {}
FizzBuzz.prototype.play = function(number) {
	if (this._isDivisibleBy(3, number)) {
		return "Fizz";
	} 
}
