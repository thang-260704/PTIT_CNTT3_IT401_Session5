(() => {
    interface Student {
        name: string;
        age: number;
        email: string;
    }

    const student: Student = {
        email: "weanny2004@gmail.com",
        age: 18,
        name: "Nguyen Thang"
    };

    function introduce(student: Student): void {
        const message = `Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`;
        console.log(message);
    }

    console.log(introduce(student));
})();