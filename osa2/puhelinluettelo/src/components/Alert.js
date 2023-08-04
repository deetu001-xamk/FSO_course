

const Alert = ({alertMsg}) => {

    const alertStyle = {
        color: 'green',
        fontSize: '24px',
        fontStyle: 'bold',
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius: '10px',
        padding: '15px'

    }

    return (

        <p style={alertStyle}>{alertMsg}</p>

    )

}


export default Alert