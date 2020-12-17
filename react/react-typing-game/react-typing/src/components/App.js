import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { correctType, nextQuiz, resetQuiz } from '../actions'

class App extends Component {

  keydown(event) {
      const actions = this.props

      if (actions.quizSet[actions.quizNumber][actions.wordLocation] === event.key) {
          actions.correctType()

          if (actions.wordLocation === actions.quizSet[actions.quizNumber].length-1) {
              console.log("next quiz")

              if (actions.quizNumber === actions.quizSet.length-1) {
                  actions.resetQuiz()

              } else {
                  actions.nextQuiz()
              }
          }
      }
  }

  componentDidMount(){
      console.log("componentDidMount")
      window.addEventListener('keydown', this.keydown.bind(this))
  }

  render() {
      const props = this.props

    return (


      <React.Fragment>
          <div className="App">{props.quizSetBlank[props.quizNumber]}-{props.wordLocation}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ quizSet: state.quiz.quizSet, quizSetBlank:state.quiz.quizSetBlank, quizNumber: state.quiz.quizNumber, wordLocation: state.quiz.wordLocation }) 
const mapDispatchToProps = dispatch => ({
  correctType: () => dispatch(correctType()),
  nextQuiz: () => dispatch(nextQuiz()),
  resetQuiz: () => dispatch(resetQuiz()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
