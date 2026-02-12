let num = 0
let students = {
    Bob: "1",
    Beb: "2",
    Bab: "3"
};

console.log(students);


for (let key in students) {
    console.log("Name: " + key + ", Grade: " + students[key]);
}
