function gradeCalculation(marks) {
  var markValue = +marks;
  if (marks <= 0 || marks > 100 || isNaN(markValue)) {
    console.log(`Your marks "${marks}" is invalid`);
  } else {
    if (marks >= 90) {
      console.log(`Funtastic marks : ${marks}, Your grade is A+`);
    }

    if (marks >= 75 && marks < 90) {
      console.log(`Excellent marks : ${marks}, Your grade is A`);
    }

    if (marks >= 50 && marks < 75) {
      console.log(`Good marks : ${marks}, Your grade is B`);
    }

    if (marks >= 35 && marks < 50) {
      console.log(` marks is : ${marks}, Your grade is C, Need improvement`);
    }
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
