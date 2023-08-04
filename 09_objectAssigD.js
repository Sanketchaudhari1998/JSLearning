let professor = {
  name: "Sanket",
  age: 35,
  gender: "Male",
  college: "COEP",
  designation: "Asst Professor",
  degrees: {
    engineering: "CSC",
    phd: "Adv Computing",
    masters: "Computer Science",
    certificates: [
      "Hacker Rank Participation",
      "Certificate in IFE Course",
      "Certificate in Adv Programming",
    ],
    teacherDegrees: function () {
      console.log(
        `Teacher Degrees : ${this.engineering}, ${this.phd}, ${this.masters}`
      );
    },
  },
};
console.log(professor);
console.log(professor.degrees.teacherDegrees());
let experience = (professor.totalExperience = "14 years");
console.log(experience);

professor.designation = "Sr Professor"; // update designation value
console.log(professor);

professor.degrees.certificates.push("Oracle Certified")
let lastCerti = professor.degrees.certificates.length - 1
console.log(professor.degrees.certificates[lastCerti]);

