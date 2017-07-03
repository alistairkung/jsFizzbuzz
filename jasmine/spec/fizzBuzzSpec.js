describe("FizzBuzz", function() {
	var fizzbuzz;

	beforeEach(function() {
		fizzbuzz = new FizzBuzz();
	});

	describe('multiples of 3', function(){
		it("returns 'Fizz' for multiples of 3", function() {
			expect(fizzbuzz.play(3)).toEqual("Fizz");

		})
	})

	describe('multiples of 5', function(){
		it("returns Buzz", function(){
			expect(fizzbuzz.play(5)).toEqual("Buzz");
		})
	})

	describe('multiples of 5 and 3', function(){
		it("returns Buzz", function(){
			expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
		})
	})


})
