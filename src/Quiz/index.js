import React,{Component} from 'react';
import Levels from '../Levels/index';
import ProgressBar from '../ProgressBar/index';
import moncss from '../Quiz/index.css';
import QuizMarvel from '../QuizMarvel/index';


class Quiz extends Component {
  constructor(){
    super();
    this.state={
      levelNames : ["débutant","confirme","expert"],
      quizLevel : 0,
      maxQuestions : 10,
      storedQuestions : [],
      question : null,
      options : [],
      idQuestion : 0,
      btnDisabled: true,
      userAnswer:null
    }

  }
    
     loadQuestions = quizz =>{
      const fetchedArrayQuiz=QuizMarvel[0].quizz[quizz];
      console.log(fetchedArrayQuiz);
      if(fetchedArrayQuiz.length >= this.state.maxQuestions){
        const newArray=fetchedArrayQuiz.map(({réponse,...keepRest})=>keepRest);
        
      this.setState({
       storedQuestions : newArray
      })

      }else{
        console.log("Pas assez de questions");
      }
     }
     componentDidMount() {
       this.loadQuestions(this.state.levelNames[this.state.quizLevel]);
     }
     componentDidUpdate(prevProps,prevState){
       if(this.state.storedQuestions !==prevState.storedQuestions){
         console.log(this.state.storedQuestions[this.state.idQuestion]);
         this.setState({
          question : this.state.storedQuestions[this.state.idQuestion].question,
          options : this.state.storedQuestions[this.state.idQuestion].options
         })
       }
     }

     submitAnswer = selectedAnswer =>{
       this.setState({
         userAnswer : selectedAnswer,
         btnDisabled: false
       })
     }

    render(){
      const displayOptions=this.state.options.map((option,index)=>{
        return(
          <p  key={index} onClick={()=>this.submitAnswer(option)} className= {`qct$(this.state)`} > {option} </p>
        )
      })
    return(
        <div>
          <Levels />
          <ProgressBar />
          <h1> {this.state.question}  </h1>
          {displayOptions}
          
          <button  disabled={this.state.btnDisabled}> Suivant</button>
        </div>
    )
}
}

export default Quiz;