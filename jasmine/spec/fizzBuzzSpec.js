describe("FizzBuzz", function() {
	var fizzbuzz;

	beforeEach(function() {
		fizzbuzz = new FizzBuzz();
	});

	it("returns 'Fizz' for multiples of 3", function() {
		fizzbuzz.play(3);
		expect(fizzbuzz).toEqual("Fizz");

	})
})