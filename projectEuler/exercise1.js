var multiple = function(n) {
	var number = 0;
	for(var i = 0; i < n; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			number += i;
		}
	}
	console.log(number);
}
multiple(1000);
