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

for (j in jsonDecoded.address) {
    const val = jsonDecoded.address[j];
    console.log(`${j}: ${val}`)
}