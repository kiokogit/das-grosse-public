import { InvisibleBtn2 } from "../../sharable_components/small_components/buttons/buttons"

export const NextPreviousBtns = ({current_page, setPage_no, submit, last_page}) => {

    return (
        <div>
            {current_page !== 1 && 
            <InvisibleBtn2 value={'Previous'} className={'submit_btn'} onClick={()=>setPage_no(current_page-1)}/>
            }
            {current_page!==last_page?
                <InvisibleBtn2 value={'Next'} className={'submit_btn'} onClick={()=>setPage_no(current_page+1)}/>
                :
                <InvisibleBtn2 value={'Submit'} className={'submit_btn'} onClick={submit}/>
            }
        </div>
    )
}