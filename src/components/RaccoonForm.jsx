import { useState } from "react"

function RaccoonForm({createRaccoon}){

    const [name, setName] = useState()
    const [img_url, setImgURL] = useState()

    function handleSubmit(event){
        event.preventDefault()
        createRaccoon(name, img_url)
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* <p onClick={() => ("")}> Clear Forms</p> */}

            <input onChange={event => setName(event.target.value)} 
            value={name}
            placeholder="name" />

            {/* <p>{name}</p> */}

            <input onChange={event => setImgURL(event.target.value)} 
            value={img_url}
            placeholder="img_url"/>
            
            {/* <p>{img_url}</p> */}

            <input type="submit" value="Create New Raccoon" />
        </form>
    )
}

export default RaccoonForm