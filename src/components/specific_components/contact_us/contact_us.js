import { CancelBtn, SubmitBtn } from '../../sharable_components/small_components/buttons/buttons'
import { InputText, RadioInput, TextArea } from '../../sharable_components/small_components/input_boxes/input_boxes'
import './contact.css'

export const ContactForm = () => {

    return (
        <div className="contact_body">
            <div>
                <h4>
                    Contacts
                </h4>
                <div className="contact_form contacts">
                    <div className='table_all'>
                        <div className="table_header">
                            Phone Number
                        </div>
                        <div className="table_content">
                            <div>
                                {"07036177877"}
                            </div>
                            <div>
                                {"097873445"}
                            </div>
                        </div>
                    </div>
                    <div className='table_all'>
                        <div className="table_header">
                            Email
                        </div>
                        <div className="table_content">
                            {"Sugarific@email.com"}
                        </div>
                    </div>
                
                </div>
            </div>
            <div>
                <h4>
                    Query form
                </h4>
                <div className="contact_form query form">
                    <InputText placeholder={'Full Names'} />
                    <InputText placeholder={'Email'} />
                    <InputText placeholder={'Phone Number (optional)'} />
                    <div>
                        <i>Help us categorize your query</i>
                    </div>
                    <div className='flex_to_row'>
                                <RadioInput 
                                    name='query_type' 
                                    type='radio' 
                                    value='complaint' 
                                    label='I have a Complaint'
                                    />
                                <RadioInput 
                                    name='query_type' 
                                    type='radio' 
                                    value='query' 
                                    label='I have an Inquiry' 
                                    />
                                <RadioInput 
                                    name='query_type' 
                                    type='radio' 
                                    value='Compliment' 
                                    label='I have a General Comment/Compliment' 
                                    />
                            </div>
                    <TextArea placeholder={'Type Your Query, Comment or Compliment...'} />
                    <div className='align_right'>
                        <SubmitBtn className={"submit_btn2"}/>
                        <CancelBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}