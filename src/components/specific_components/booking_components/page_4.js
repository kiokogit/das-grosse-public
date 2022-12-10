
export const BookingPageFour = ({booking_details}) => {

    return (
        <div className='spacing_between_elements'>
            <h3>Confirm Booking Details</h3>
            <div className="align_all_left spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Travel Details</h5>
                </div>
                <div className="column_grids_partition_equal_2">
                <div>
                <div className="table_all">
                    <div className="table_header">
                        PACKAGE TYPE
                    </div>
                    <div className="table_content">
                        {"PREDEFINED"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        TITLE
                    </div>
                    <div className="table_content">
                        {"TITLE"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        DESCRIPTION:
                    </div>
                    <div className="table_content">
                        {"DESCRIPTION HERE"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        DETAILS
                    </div>
                    <div className="table_content">
                        {"DETAILS HERE"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        DATES
                    </div>
                    <div className="table_content">
                        {"DATES"}
                    </div>
                </div>
                </div>
                <div>
                    {"COVER IMAGE, IF AVAILABLE, OR MAP"}
                </div>   
                </div>
            </div>
            <div className="align_all_left spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Applicant's Details</h5>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        FRST NAME
                    </div>
                    <div className="table_content">
                        {booking_details?.contacts?.first_name}
                    </div>
                    <div className="table_header">
                        OTHER NAMES
                    </div>
                    <div className="table_content">
                        {booking_details?.contacts?.last_name}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        PHONE NUMBER
                    </div>
                    <div className="table_content">
                    {booking_details?.contacts?.phone_number}
                    </div>
                    <div className="table_header">
                        PHONE NUMBER IS VERIFIED
                    </div>
                    <div className="table_content">
                        {"NO"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        EMAIL
                    </div>
                    <div className="table_content">
                    {booking_details?.contacts?.email}
                    </div>
                    <div className="table_header">
                        EMAIL IS VERIFIED
                    </div>
                    <div className="table_content">
                        {"yes"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        ALREADY HAVE A DGA ACCOUNT?
                    </div>
                    <div className="table_content">
                        {"NO"}
                    </div>
                    <div className="table_header">
                        CREATE ACCOUNT UPON SUBMISSION?
                    </div>
                    <div className="table_content">
                        {"YES"}
                    </div>
                </div>
                <div className="align_all_left spacing_between_elements">
                <div className='subsection_header'>
                    <h5>Location Details</h5>
                </div>
                    <div className="table_all">
                    <div className="table_header">
                        COUNTRY
                    </div>
                    <div className="table_content">
                        {"Location"}
                    </div>
                </div>
                        <div className="table_all">
                    <div className="table_header">
                        COUNTY
                    </div>
                    <div className="table_content">
                        {"My County"}
                    </div>
                </div>
                <div className="table_all">
                    <div className="table_header">
                        LOCATION
                    </div>
                    <div className="table_content">
                        {"My Location"}
                    </div>
                </div>
                </div>
            </div>
            <div className="align_all_left spacing_between_elements">

            </div>
        </div>
    )
}