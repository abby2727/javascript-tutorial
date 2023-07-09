function isTriangle(a,b,c) 
{
	// let isTriangle = false;
	if (a + b > c && a + c > b && b + c > a) {
		return true;
	}
	
	return false;
}

console.log(isTriangle(1, 2, 3));