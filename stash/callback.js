function process(callback) {
	setTimeout(function () {
		console.log('Step One');

		setTimeout(function () {
			console.log('Step Two');

			setTimeout(function () {
				console.log('Step Three');

				setTimeout(function () {
					console.log('All steps completed');
					callback();
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}

process(function () {
	console.log('Callback hell completed');
});
