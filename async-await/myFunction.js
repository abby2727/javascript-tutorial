async function myFunction() {
  try {
    let response = await fetch('/experiment/data.json');
    let data = await response.json();

    data.map(val => console.log(val.lastname));
    // for (const key in data) {
    //   console.log(data[key].firstname)
    // }
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

myFunction();