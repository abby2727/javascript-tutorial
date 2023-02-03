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
    ]
}`;

const jsonDecoded = JSON.parse(json);

for (const key in jsonDecoded.address) {
    console.log(key);
    // console.log(jsonDecoded.address[key]);
}