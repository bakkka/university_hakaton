import React, {FC, useState} from 'react';
import styles from './QuestionComponent.module.scss'

interface props{
    type:"test" | "text"
    key:number
    onAnswersChange: (id: string, selectedAnswers: string[]) => void
    data:
        {
            id: string,
            question: string,
            answers: [
                {
                    answer: string
                }
            ],
            testId: string
        },
}
const QuestionComponent:FC<props> = ({type,data, key, onAnswersChange}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const handleCheckboxChange = (answer: string) => {
        if (selectedAnswers.includes(answer)) {
            // Если ответ уже включен, уберите его из selectedAnswers
            setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
        } else {
            // Если ответ не включен, добавьте его в selectedAnswers
            setSelectedAnswers([...selectedAnswers, answer]);
        }
        onAnswersChange(data.id, selectedAnswers);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.number}>
                        {key + 1}
                    </div>
                    <p className={styles.question}>{data.question}</p>
                </div>
                {type === 'test' ? (
                    <div className={styles.answers}>
                        {data.answers.map((answer, index) => (
                            <div key={index} className={styles.answerTest}>
                                <input
                                    type="checkbox"
                                    checked={selectedAnswers.includes(answer.answer)} // Определить, выбран ли этот ответ
                                    onChange={() => handleCheckboxChange(answer.answer)}
                                />
                                <p className={styles.text}>{answer.answer}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.answers}>
                        <div className={styles.answerText}>
                            <input/>
                            <div className={styles.sendBlock}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M3.41663 8.08325L5.74996 10.4166L11.5833 4.58325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionComponent;