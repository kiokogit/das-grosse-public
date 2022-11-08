
export const BookingPageFour = ({booking_details = {}}) => {

    return (
        <div className='align_all_left spacing_between_elements'>
            <div className="spacing_between_elements">
                <hr />
                Travel Destination Details
                <hr />
                <div className="column_grids_partition_equal_2">
                    <div className="spacing_between_elements">
                        Destination: {'Destination here'}
                    </div>
                    <div className="spacing_between_elements">
                        No of persons: {'no of adults'} adults, {'no of children'} children
                    </div>
                    <div className="spacing_between_elements">
                        Preferred mode of transport {'mode of transport'}
                    </div>
                    <div className="spacing_between_elements">
                        Dates and length: from {'from date'} to {'to_date'}
                        {'total_days'} days, {'total_nights'} nights
                    </div>
                </div>

            </div>
            <div className="spacing_between_elements">
                <hr />
                Applicant's Details
                <hr />
                <div className="column_grids_partition_equal_2">

                    <div className="spacing_between_elements">
                        Full names: {'Names'}
                    </div>
                    <div className="spacing_between_elements">
                        Phone number: {'Phone num'}
                        <div>
                            Verified? : {'true or false'}
                        </div>
                    </div>
                    <div className="spacing_between_elements">
                        Email address: {'Email address'}
                        <div>
                            Verified? {'true or false'}
                        </div>
                    </div>
                </div>
                <div className="spacing_between_elements">
                    <hr/>
                    Current Location
                    <hr/>
                    <div className="column_grids_partition_equal_2">

                        <div className="spacing_between_elements">
                                Country: {'Kenya?'}
                        </div>
                        <div className="spacing_between_elements">
                            County: {'Kirinyaga'}
                        </div>
                        <div className="spacing_between_elements">
                            City/Town: {'My city'}
                        </div>
                    </div>
                    </div>
            </div>
            <div className="spacing_between_elements">

            </div>
        </div>
    )
}