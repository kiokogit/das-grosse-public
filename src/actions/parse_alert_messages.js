
export const parse_alert_messages = (response) => {
    if (response.status===200){
        return response.data.details
    } else{
        throw Error('Not created')
    }
}