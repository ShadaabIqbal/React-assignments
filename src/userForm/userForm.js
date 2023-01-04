import React from "react";
import './userForm.css'

class UserFormData extends React.Component{

    OnClicked(e){
        e.preventDefault()

        let firstname=document.querySelector("#firstname").value
        let lastname=document.querySelector("#lastname").value
        let gender=document.querySelector("#gender").value
        let country=document.querySelector("#country").value
        let email=document.querySelector("#email").value
        let file=document.querySelector("#file").value

        if(firstname==="" || lastname==="" ||gender==="" || country==="" || email==="" || file==="" ){
            alert("All fields are mandatory")
        } 

        console.log(firstname)
        console.log(lastname)
        console.log(gender)
        console.log(country)
        console.log(email)
        console.log(file)

    }
    
    render(){
        return(
            <div>
                <h2 id='head1'>User Registration Form</h2>
                <form className="UserForm">
                    <input id="firstname" className="inpheight" placeholder="firstname"  type={"text"}/>
                    <input id="lastname" className="inpheight" placeholder="lastname" type={"text"}/>
                    <select id="gender" className="inpheight" >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    </select>
                    <input id="country" className="inpheight" placeholder="country" type={"text"}/>
                    <input id="email" className="inpheight" placeholder="email" type={"email"}/>
                    <input id="file" className="inpheight" type="file"/>
                    <button id='but' className="inpheight" onClick={(event)=>this.OnClicked(event) }>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default UserFormData;