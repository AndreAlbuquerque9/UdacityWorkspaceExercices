import React, { Component } from "react";
import Score from "./Score";

class Game extends Component {
    constructor(props) {
        super(props);
        const valueArray = this.makeNewQuestion();
        this.state = {
            value1: valueArray[0],
            value2: valueArray[1],
            value3: valueArray[2],
            proposedAnswer: valueArray[3],
            numQuestions: 0,
            numCorrect: 0
        };
    }

    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer =
            Math.floor(Math.random() * 3) + value1 + value2 + value3;

        return [value1, value2, value3, proposedAnswer];
    };

    upadateState = newValueArray => {
        this.setState(currentState => ({
            value1: newValueArray[0],
            value2: newValueArray[1],
            value3: newValueArray[2],
            proposedAnswer: newValueArray[3]
        }));
    };

    handleAnswer = event => {
        const newValueArray = this.makeNewQuestion();
        this.upadateState(newValueArray);
        const anwswerWasCorrect = this.evaluateAnswer(event.target.name);
        this.checkAwnser(anwswerWasCorrect);
    };

    evaluateAnswer = givenAnswer => {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const correctAnswer = value1 + value2 + value3;

        return (
            (correctAnswer === proposedAnswer && givenAnswer === "true") ||
            (correctAnswer !== proposedAnswer && givenAnswer === "false")
        );
    };

    checkAwnser = anwswerWasCorrect => {
        if (anwswerWasCorrect) {
            this.setState(currentState => ({
                numCorrect: currentState.numCorrect + 1
            }));
        }
        this.setState(currentState => ({
            numQuestions: currentState.numQuestions + 1
        }));
    };

    render() {
        const { value1, value2, value3, proposedAnswer } = this.state;
        return (
            <div>
                <h2>Mental Math</h2>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button onClick={this.handleAnswer} name="true">
                    True
                </button>
                <button onClick={this.handleAnswer} name="false">
                    False
                </button>
                <Score
                    numCorrect={this.state.numCorrect}
                    numQuestions={this.state.numQuestions}
                />
            </div>
        );
    }
}

export default Game;
