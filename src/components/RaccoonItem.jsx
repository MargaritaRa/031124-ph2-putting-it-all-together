function RaccoonItem({ raccoon }) {

    return (
        <ul>
            <li>{ raccoon.name } 
            <img style={ {width:"200px"} } src={raccoon.img_url} alt={raccoon.name} /> 
        </li>
        </ul>
    )
    
}

export default RaccoonItem