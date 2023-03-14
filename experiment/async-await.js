async function myFunction() {
    try {
        let response = await fetch('/experiment/data.json');
        let data = response.json();
        console.log(data)

        // Loop all the firstname
        // for (const key in data) {
        //   console.log(data[key])
        // }
        // return false;
        // data.map(value => console.log(value))
    } catch (err) {
        console.log(err); // TypeError: failed to fetch
    }
}

myFunction();