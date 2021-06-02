import { useState } from "react"


export default function Form () { 

    const [operation , setOperation] = useState('Add') ;

    const addData = () => {
        // console.log(id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( 
                [
                    {
                        year : '2000',
                        make : 'India',
                        model : 'Daman',
                    }
                ]
            )
        };
        fetch('http://localhost:8001/add', requestOptions)
            .then(response => response.json())
            .then(response => console.log(response));
    }

    return (
        <div className="col-md-12">
            <form>
                <div className="form-group">
                    <label for="year">Year :</label>
                    <input className="form-control" name="year"></input>
                </div>
                <div className="form-group">
                    <label for="year">Make :</label>
                    <input className="form-control" name="make"></input>
                </div>
                <div className="form-group">
                    <label for="year">Model :</label>
                    <input className="form-control" name="model"></input>
                </div>
                <button type="button" className="btn btn-primary col-md-3" onClick={addData}> {operation} </button>
            </form>
        </div> 
    )
}