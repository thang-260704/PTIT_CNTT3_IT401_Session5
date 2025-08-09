"use strict";
(() => {
    const student = {
        email: "weanny2004@gmail.com",
        age: 18,
        name: "Nguyen Thang"
    };
    function introduce(student) {
        const message = `Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`;
        console.log(message);
    }
    console.log(introduce(student));
})();
