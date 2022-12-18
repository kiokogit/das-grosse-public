import { useState } from "react"

import './about.css'

export const AboutUs = ({about_info=[]}) => {
    
    return (
        <div className="centered_div">
            <h4>ABOUT DAS GROSSE ARBENTEUR</h4>
            <div>
                {about_info.length > 0 && 
                about_info.map(info => (
                    <div key={info.id} className='about_container'> 
                    <AboutQsn info={info} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}


const AboutQsn = ({info}) => {

    const [showAbout, setShowAbout] = useState(false)

    return (
        <div>
<div className="about_qsn flex_row_about" onClick={e=> setShowAbout(!showAbout)}>
                    <div>
                        {info.title}
                    </div>
                    <div>
                        {showAbout? '-':"+"}
                        </div>
                    </div>
                <div className={`about_ans ${showAbout? '':'hidden_about'}`}>
                    {info.text}
                    </div>
        </div>
    )
}
