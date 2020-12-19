import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
// import axios from 'axios'

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

    // var contents = [];
    // const actions = this.props

    // axios
    //   .get('http://localhost:8000/api/')
    //   .then(function (response) {

    //     let tmpData = []
    //     let contentsCount = response.data.length;
    //     //Quiz用のデータを作成する。
    //     for (let i = 0; i < contentsCount; i++) {
    //       var content = response.data[i]
    //       var word_en_begin = content.word_en.slice(0, 1);

    //       content.word_en_begin = word_en_begin
    //       content.word_blank = word_en_begin + '_'.repeat(content.word_en.length - 1)
    //       content.phrase_quiz = content.phrase_en.replace(content.word_en, '_'.repeat(content.word_en.length)) //英語のフレーズのなかで問題となる部分をを'_'で置き換える
    //       content.correct_answer_rate = (content.c_counter / content.s_counter) * 100
    //       tmpData.push(content)
    //     }
    //     tmpData.sort(function (a, b) { //正答率が低い順番に並び替える
    //       return a.correct_answer_rate - b.correct_answer_rate
    //     })
    //     // contents = tmpData
    //     // actions.initQuizData(tmpData)

    //   })
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
      <React.Fragment>
        <div className="App">{props.quizSetBlank[props.quizNumber]}-{props.wordLocation}</div>
        { props.messages.map((prop, index) => <div key={index}>{prop.phrase_en}</div>) }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ quizSet: state.quiz.quizSet, quizSetBlank: state.quiz.quizSetBlank, quizNumber: state.quiz.quizNumber, wordLocation: state.quiz.wordLocation, messages: state.quiz.messages, isFetching: state.quiz.isFetching })
const mapDispatchToProps = dispatch => ({
  correctType: () => dispatch(correctType()),
  nextQuiz: () => dispatch(nextQuiz()),
  resetQuiz: () => dispatch(resetQuiz()),
  initQuizData: () => dispatch(initQuizData()),
  fetchMessages: () => dispatch(fetchMessages()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
