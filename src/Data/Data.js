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

    const deleteData = (id) => {
        // console.log(id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id : id })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <div className="col-md-12">
            <button className="btn btn-success" onClick={fetchData}>Fetch Data</button>
            <ul className="col-md-12 m-3">
                { data.map( (item) => {
                    return (
                        <li key={item._id} className='row'>
                            <input className="form-control col-3 m-3" placeholder={item.year}></input>
                            <input className="form-control col-3 m-3" placeholder={item.make}></input>
                            <input className="form-control col-3 m-3" placeholder={item.model}></input>
                            <button className="btn btn-danger clo-3 m-3" onClick={() => deleteData(item._id)}>Delete</button>
                        </li>
                    )
                }) }
            </ul>
        </div>
    ) 
}