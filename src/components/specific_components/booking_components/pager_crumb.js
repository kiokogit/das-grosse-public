
import './pager_crumb.css'

export const PagerCrumbs = ({page_no, setPage_no}) => {

    return (
        <div className="flex_row_crumbs">
            <div className={page_no===1? 'enabled_page':'disabled_page'} onClick={()=>setPage_no(1)}>
                <div className="page_number">1</div>
                <div>Package Details</div>
            </div>
            <div><hr/></div>
            <div className={page_no===2? 'enabled_page':'disabled_page'} onClick={()=>setPage_no(2)}>
                <div className="page_number">2</div>
                <div>Personal Details</div>
            </div>
            <div><hr/></div>
            <div className={page_no===3? 'enabled_page':'disabled_page'} onClick={()=>setPage_no(3)}>
                <div className="page_number">3</div>
                <div>Verify Contact Details</div>
            </div>
            <div><hr/></div>
            <div className={page_no===4? 'enabled_page':'disabled_page'} onClick={()=>setPage_no(4)}>
                <div className="page_number">4</div>
                <div>Confirm Booking Details</div>
            </div>
        </div>
    )
}