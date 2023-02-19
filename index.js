const json = `{
    "name": "Muhammad Ishaq",
    "gender": "Male",
    "age": 23,
    "address": {
        "street": "87",
        "city": "Gultari Matyal Skardu",
        "state": "Gilgit Baltistan",
        "postalCode": "16350"
    },
    "phoneNumber": [
        { 
            "type": "personal", 
            "number": "116263747" 
        }
    ],
    "hobby": ["Basketball", "Guitar", "Coding"]
}`;

const jsonDecoded = JSON.parse(json);

for (const key in jsonDecoded.address) {
    console.log(jsonDecoded.address[key]);
}

// for (const key in jsonDecoded) {
//     let data = jsonDecoded[key];
//     if (Array.isArray(data)) {
//         for (let i = 0; i < data.length; i++) {
//             console.log(typeof data[i]);
//         }
//     }
// }

// jsonDecoded.hobby.forEach((value) => {
//     console.log(value);
// });

// for (let i = 0; i < jsonDecoded.hobby.length; i++) {
//     console.log(jsonDecoded.hobby[i]);
// }