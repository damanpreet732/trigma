import { useState } from "react"


export default function Data () {

    const [data, setdata] = useState([])

    const fetchData = () => {
        fetch('http://localhost:8001/fetch')
            .then(response => response.json())
            .then((result) => {
                // console.log(result);
                setdata(result);
            })
            .catch(err => console.log(err))
    }

    const deleteDataId = (id) => {
        // console.log(id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ id : id })
            body: JSON.stringify({id : id })
        };
        fetch('http://localhost:8001/delete', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    // const deleteData = () => { }

    return(
        <div className="col-md-12">
            <div className="row" > 
                {/* <input className="form-control col-md-7 m-3" placeholder="Filter"></input> */}
                <button className="btn btn-success col-md-3 m-3" onClick={fetchData}>Fetch Data</button>
            </div>
            <ul className="col-md-12 m-3">
                { data.map( (item) => {
                    return (
                        <li key={item._id} className='row'>
                            <input className="form-control col-3 m-3" placeholder={item.year}></input>
                            <input className="form-control col-3 m-3" placeholder={item.make}></input>
                            <input className="form-control col-3 m-3" placeholder={item.model}></input>
                            <button className="btn btn-danger clo-3 m-3" onClick={() => deleteDataId(item._id)}>Delete</button>
                        </li>
                    )
                }) }
            </ul>
            {/* <button className="btn btn-danger col-md-6 offset-3" onClick={() => deleteData()}>Delete All</button> */}
        </div>
    ) 
}