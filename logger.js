function student(name,age, grades = [],) {
  this.name = name;
  this.age = age;
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

   this.student_grade = sum / grades.length;
  
    if (this.student_grade<60){
        console.log("faile");
    }
    else{
        console.log("pass");
    }
 console.log("student_grade",this.student_grade);
}   
exports.student = student;
