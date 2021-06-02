import { useState } from "react"


export default function Form () { 

    // const [operation , setOperation] = useState('Add') ;

    const [year , setyear] = useState('');
    const [make , setmake] = useState('');
    const [model , setmodel] = useState('');

    const addData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                year : year,
                make : make ,
                model : model ,
            })
        };
        fetch('http://localhost:8001/add', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div className="col-md-12">
            <form>
                <div className="form-group">
                    <label for="year">Year :</label>
                    <input className="form-control" 
                        type="text"
                        name="year" 
                        value={year}
                        onChange={(e) => setyear(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label for="year">Make :</label>
                    <input className="form-control"
                        type="text"
                        name="make" 
                        value={make}
                        onChange={(e) => setmake(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label for="year">Model :</label>
                    <input className="form-control" 
                        type="text"
                        name="model" 
                        value={model}
                        onChange={(e) => setmodel(e.target.value)}
                        required />
                </div>
                <button type="button" className="btn btn-primary col-md-3" onClick={addData}> Add </button>
            </form>
        </div> 
    )
}