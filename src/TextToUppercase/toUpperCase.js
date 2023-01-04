import React from "react";
import './toUpperCase.css'

class ToUpperCase extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: false,
            input: ''
        }
    }

    Value(e) {
        this.setState({
            input: e.target.value
        })
    }

    Clickedme() {
        this.setState({
            flag: true
        })
    }
    render() {
        return (
            <div className="uppercaseDiv">
                <input style={{ border: "2px solid black", height: "25px", borderRadius: "4px", fontSize: "18px" }} type="text" onChange={(e) => this.Value(e)} />
                <button id='but' onClick={() => this.Clickedme()}>ChangeToUpperCase</button>
                {this.state.flag ? <p>{this.state.input.toUpperCase()}</p> : <></>}
            </div>
        )
    }
}

export default ToUpperCase