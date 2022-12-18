
import { useState } from 'react'
import './faqs.css'

export const Faqs = ({qsns}) => {

    return (
        <div>
            <div className="centered_div">
                {qsns.length > 0 && 
                    qsns.map(q=> 
                        <div key={q.question}>
                             <FaqsComponent q={q}/>
                        </div>
                        )
                }
            </div>

        </div>
    )
}

const FaqsComponent = ({q}) => {

    const [showAns, setShowAns] = useState(false)


    return (
        <div className="faq_container">
            <div className="faq_qsn flex_row_qsn"  onClick={e=>setShowAns(!showAns)}>
                <div id='question'>
                    {q.question}
                </div>
                <div>
                    {showAns? '-':'+'}
                </div>
            </div>
            <div className={`faq_ans ${showAns? '':'hidden_ans'}`}>
                {q.answer}
            </div>
        </div>
    )
}