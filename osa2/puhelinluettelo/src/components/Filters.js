


const Filters = ({showWhere, setShowWhere}) => {

    const handleOnChange = (e) => {
        
        setShowWhere(e.target.value)

    }

    return (
        <div>
            filter shown with <input placeholder="search..." value={showWhere} onChange={handleOnChange}/>
        </div>
    )

}

export default Filters;