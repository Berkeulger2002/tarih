function Question(text,choices,answer){
    this.text= TextEvent;
    this.choices= choices;
    this.answer= answer;
}
Question.prototype.checkAnswer = function(answer){
    return this.answer===answer;
}
function Quiz(questions){
    his.questions= questions;
    this.score= 0;
    this.questionIndex= 0;
}
Quiz.prototype.getQuestion =function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.isfinish =function(){
    return this.questions.lenght ===
    this.questionIndex;
}

Quiz.prototype.guess=function(answer){
    var question= this.getQuestion;
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question("Hangisi Yıldırım Beyazıt'ın yönettiği savaştır?"
,["Kosova savaşı","Niğbolu Savaşı","Mohaç Savaşı"] ,"Niğbolu Savaşı");

var q2 = new Question("Rurik Hanedanı'nın son hükümdari kimdir?"
,[  "Korkunç İvan","I. Katerina","III. Fyodor"],"Korkunç İvan");

var q3 = new Question("İspanya Veraset Savaşı'nı kim kazanmıştır?"
,[ "Fransa","Avusturya","İngiltere"],"Fransa");

    var questions =[q1,q2,q3]

    var quiz = new Quiz(questions);

  