import { useState } from "react"

import './about.css'
const about_info2 = [
    {
        "id":235,
        "title":"History",
        "text":"This is the history of Das Arbenteur"
    },
    {
        "id":236,
        "title":"Location",
        "text":"We are located at the base of the fire for the sake of making everything hot. \n We are quite friendly. Come to Kayole for better deals every day for all the good that can be. Enjoy on your coming"
    }
]

export const AboutUs = ({about_info =about_info2}) => {
    
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
