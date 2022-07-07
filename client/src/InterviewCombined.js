import React, { useEffect, useState } from 'react'
import { Prompt } from 'react-router';
import InterviewCoomplete from './InterviewCoomplete';
import InterviewQuestion1 from './InterviewVideo 1';
import InterviewQuestion2 from './InterviewVideo 2';
import InterviewQuestion3 from './InterviewVideo 3';
import InterviewQuestion4 from './InterviewVideo 4';
import InterviewQuestion5 from './InterviewVideo 5';
import InterviewQuestion6 from './InterviewVideo 6';
import InterviewQuestion7 from './InterviewVideo 7';
import InterviewQuestion8 from './InterviewVideo 8';
import InterviewQuestion9 from './InterviewVideo 9';
import InterviewQuestion10 from './InterviewVideo 10';
import InterviewQuestion11 from './InterviewVideo 11';
import InterviewQuestion12 from './InterviewVideo 12';

export const InterviewCombined = () => {
    // const location = useLocation();
    const [currentQuestion, setCurrentQuestion] = useState(1);


    return (
        <div>
            {
                currentQuestion === 1 ?
                    <InterviewQuestion1 />
                    :
                    currentQuestion === 2 ?
                        <InterviewQuestion2 />
                        :
                        currentQuestion === 3 ?
                            <InterviewQuestion3 />
                            :
                            currentQuestion === 4 ?
                                <InterviewQuestion4 />
                                :
                                currentQuestion === 5 ?
                                    <InterviewQuestion5 />
                                    :
                                    currentQuestion === 6 ?
                                        <InterviewQuestion6 />
                                        :
                                        currentQuestion === 7 ?
                                            <InterviewQuestion7 />
                                            :
                                            currentQuestion === 8 ?
                                                <InterviewQuestion8 />
                                                :
                                                currentQuestion === 9 ?
                                                    <InterviewQuestion9 />
                                                    :
                                                    currentQuestion === 10 ?
                                                        <InterviewQuestion10 />
                                                        :
                                                        currentQuestion === 11 ?
                                                            <InterviewQuestion11 />
                                                            :
                                                            currentQuestion === 12 ?
                                                                <InterviewQuestion12 />
                                                                :
                                                                currentQuestion === 13 ?
                                                                    <InterviewCoomplete />
                                                                    :
                                                                    null

            }
            <div style={{ display: 'flex', justifyContent: 'end', paddingRight: '100px' }}>
                <button style={{ cursor: 'pointer' }} onClick={() => setCurrentQuestion(currentQuestion + 1)} className="button" style={{ width: "100px" }}>Next</button>
            </div>
        </div>
    )
}
