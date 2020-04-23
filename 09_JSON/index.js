let jsonobj = {
    "username": "Savannah",
    "firstName": "Sav",
    "lastName": "Vaith",
    "email": "sav.vaith@gmail.com",
    "Classroom": [
        { "student": "Billy", "age": 32 },
        {
            "student": "bob", "children": [
                { "name": "luke" },
                { "name": "leia" }
            ]
        }
    ]
}
console.log(jsonobj);
console.log(JSON.stringify(jsonobj));