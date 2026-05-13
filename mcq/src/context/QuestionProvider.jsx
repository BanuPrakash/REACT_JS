import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

const QuestionContext = createContext();
export {
    QuestionContext
}

export default function QuestionContextProvider({ children }) {
    let [questions, setQuestions] = useState();
    let [currentIndex, setCurrentIndex] = useState(0);
    let [currentQuestion, setCurrentQuestion] = useState();
    let [correct, setCorrect] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    function answerSelect(questionId, answer) {
        setSelectedAnswers(prevAnswers => {
            return { ...prevAnswers, [questionId]: answer };
        });
    }

    useEffect(() => {
        if (!questions) return;

        let totalCorrect = 0;
        Object.keys(selectedAnswers).forEach((index) => {
            //    console.log(selectedAnswers[index], questions[index-1].correct_answer);
            if (selectedAnswers[index] === questions[index - 1].correct_answer) {
                totalCorrect++;
            }
        });
        setCorrect(totalCorrect);
    }, [selectedAnswers, questions])

    useEffect(() => {
        async function fetchData() {
            let response = await axios.get("http://localhost:1234/questions");
            let questions = response.data;
            setQuestions(questions);
            setCurrentQuestion(questions[0]);
        }
        fetchData();
    }, [])


    function nextQuestion() {
        const lastIndex = (questions?.length ?? 1) - 1;
        if (currentIndex < lastIndex) setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        if (!questions) return;
        setCurrentQuestion(questions[currentIndex]);
    }, [currentIndex, questions])

    function prevQuestion() {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }

    // not working, fix this function
    function answerQuestion(qid, selectedOption) {
        if (questions[qid - 1].correct_answer === selectedOption) {
            setCorrect(correct + 1);
        }
    }
    return <QuestionContext.Provider value={{
        currentQuestion,
        nextQuestion,
        prevQuestion,
        currentIndex,
        total: questions ? questions.length : 0,
        answerSelect,
        selectedAnswers,
        correct
    }}>
        {children}
    </QuestionContext.Provider>
}