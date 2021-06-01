import { useState } from "react"


export default function Form () { 

    const [operation , setOperation] = useState('Add') ;

    

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
                <button type="submit" className="btn btn-primary"> {operation} </button>
            </form>
        </div> 
    )
}