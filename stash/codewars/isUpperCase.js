String.prototype.isUpperCase = function () {
	const pattern = /^[A-Z\s]+$/;
	return pattern.test(this);
};

console.log('BOB WALKS HIS DOG EVEsRY DAY'.isUpperCase());
