import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';


class About extends Component{

  render(){
    const props = this.props

  return (
      <React.Fragment>
          <h1>About</h1>
          <div>{props.phraseJa}</div>
          <div>{props.phraseQuiz}</div>
      </React.Fragment>
  );
  }
}


const mapStateToProps = state => ({ phraseQuiz:state.quiz.phraseQuiz, phraseJa:state.quiz.phraseJa, quizSet: state.quiz.quizSet, quizSetBlank: state.quiz.quizSetBlank, quizNumber: state.quiz.quizNumber, wordLocation: state.quiz.wordLocation, messages: state.quiz.messages, isFetching: state.quiz.isFetching })

export default connect(mapStateToProps)(About)