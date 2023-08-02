

const Alert = ({alertName}) => {

    const alertStyle = {
        color: 'green',
        fontSize: '24px',
        fontStyle: 'bold',
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius: '10px',
        padding: '15px',
        maxWidth: '50%'

    }

    return (

        <p style={alertStyle}>Added {alertName}</p>

    )

}


export default Alert