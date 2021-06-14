class Question{
    constructor(){

    }
    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(150, 80);
        this.option1.html("1: Everyone ");
        this.option1.position(150, 100);
        this.option2.html("2: Envelop ");
        this.option2.position(150, 120);
        this.option3.html("3; Estimate ");
        this.option3.position(150, 140);
        this.option4.html("4: Example ");
        this.option4.position(150, 160);

        
        this.input1.position(150, 230);

    }
}