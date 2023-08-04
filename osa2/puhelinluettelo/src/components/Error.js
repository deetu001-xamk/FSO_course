

const Error = ({errorMsg}) => {

    const errorStyle = {
        color: 'red',
        fontSize: '24px',
        fontStyle: 'bold',
        borderStyle: 'solid',
        borderColor: 'red',
        borderRadius: '10px',
        padding: '15px'
    }


    return(
        <p style={errorStyle}>{errorMsg}</p>
    )
}



export default Error;