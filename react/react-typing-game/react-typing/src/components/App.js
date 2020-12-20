import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import About from './About.js'
// import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { correctType, nextQuiz, resetQuiz, initQuizData, fetchMessages } from '../actions'

class App extends Component {

  keydown(event) {
    const actions = this.props

    if (actions.quizSet[actions.quizNumber][actions.wordLocation] === event.key) {
      actions.correctType()

      if (actions.wordLocation === actions.quizSet[actions.quizNumber].length - 1) {
        console.log("next quiz")

        if (actions.quizNumber === actions.quizSet.length - 1) {
          actions.resetQuiz()

        } else {
          actions.nextQuiz()
        }
      }
    }
  }

  componentDidMount() {
    console.log("componentDidMount")
    window.addEventListener('keydown', this.keydown.bind(this))
    this.props.fetchMessages()
  }


  render() {
    const props = this.props

    if (props.isFetching) {
      return (
        <div className="App">loading...</div>
      )
    }

    return (
      <Router>
        <React.Fragment>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <div className="App">{props.phraseJa}</div>
              <div className="App">{props.phraseQuiz}</div>
              {props.messages.map((prop, index) => <div key={index}>{prop.phrase_en}</div>)}
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ phraseQuiz:state.quiz.phraseQuiz, phraseJa:state.quiz.phraseJa, quizSet: state.quiz.quizSet, quizSetBlank: state.quiz.quizSetBlank, quizNumber: state.quiz.quizNumber, wordLocation: state.quiz.wordLocation, messages: state.quiz.messages, isFetching: state.quiz.isFetching })
const mapDispatchToProps = dispatch => ({
  correctType: () => dispatch(correctType()),
  nextQuiz: () => dispatch(nextQuiz()),
  resetQuiz: () => dispatch(resetQuiz()),
  initQuizData: () => dispatch(initQuizData()),
  fetchMessages: () => dispatch(fetchMessages()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
