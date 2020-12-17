import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { typing } from '../actions'

class App extends Component {


  // keyDown = (e) => {
  //     console.log(e.key)
  //     console.log(this.state.quizSet[this.state.quizNumber])

  //     if (this.state.quizSet[this.state.quizNumber][this.state.wordLocation] === e.key) { //正解のケース
  //         console.log("ok!")
  //         const wordLocation = this.state.wordLocation
  //         this.setState({ wordLocation: wordLocation + 1 }) //次のwordLocationへ行く。

  //         if(this.state.wordLocation === this.state.quizSet[this.state.quizNumber].length){  //タイプしている位置がクイズの長さと一致した場合、次の単語に行くか、最初の単語に戻る.
  //             const quizNumber = this.state.quizNumber 
  //             if(quizNumber === this.state.quizSet.length-1){ //最初の単語に戻る
  //                 this.setState({quizNumber:0}) 
  //             } else { //次の単語に行く
  //                 this.setState({quizNumber: quizNumber+1}) 
  //         } 
  //         this.setState({wordLocation: 0})
  //     }
  //   } else {
  //       console.log("ng!")
  //   }
  // }

  componentDidMount(){
      console.log("componentDidMount")
      const actions = this.props
      window.addEventListener('keydown', actions.typing)
  }

  render() {
      const props = this.props

    return (


      <React.Fragment>
          <div className="App">{props.quiz}-{props.wordLocation}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ quiz: state.quiz.quizSet[0], wordLocation: state.quiz.wordLocation }) 
const mapDispatchToProps = dispatch => ({
  typing: () => dispatch(typing()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
