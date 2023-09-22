//function to give the grade of the student depending on the marks.
function getGrade (mark){
    if (mark >79){
        return "A";
    } else if (mark>=60 &&mark<=79){
        return "B";
    }else if (mark>=50 && mark<=59){
        return "C";

    }else if (mark>=40 && mark<=49){
        return "D";

    }else {
        return "E";
    }
}
//Exporting get grade so it can be used in other files.
module.exports= getGrade;