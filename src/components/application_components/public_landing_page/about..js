
const about_info2 = [
    {
        "id":235,
        "title":"History",
        "text":"This is the history of Das Arbenteur"
    }
]

export const AboutUs = ({about_info =about_info2}) => {
    
    return (
        <div className="centered_div">
            <h4>ABOUT DAS GROSSE ARBENTEUR</h4>
            <div>
                {about_info.length > 0 && 
                about_info.map(info => (
                    <div key={info.id}> 
                        <h5>{info.title}</h5>
                        <p>{info.text}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

