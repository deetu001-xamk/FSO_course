


const Filters = ({showWhere, filterInputHandler}) => {



    return (
        <div>
            filter shown with <input    placeholder="search..." 
                                        value={showWhere} 
                                        onChange={filterInputHandler}/>
        </div>
    )

}

export default Filters;