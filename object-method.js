const student = {
    id: 101,
    name: 'Shakib Al Hasan',
    major: 'Cricket',
    subjects: ['Bangla', 'Engilish', 'Math'],
    money: 5000,
    isRich: false,
    marks: 69,
    //method
    treatDey: function (expenses) {
        this.money = this.money - expenses;
        return this.money;
    },
    isPassed: function(){
        if(this.marks>60){
            console.log(this.name, 'has passed in the exam');
        }
        else{
            console.log(this.name, 'has failed in the exam');
        }
    }
}
const remaining = student.treatDey(1205);
console.log(remaining);
student.isPassed();