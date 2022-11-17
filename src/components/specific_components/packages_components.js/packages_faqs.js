
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

    return (
        <div className="faq">
            <div className="faq_qsn">
                {q.question}
            </div>
            <div className="faq_ans">
                {q.answer}
            </div>
        </div>
    )
}