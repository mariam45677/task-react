import React, { useState } from "react";

// function Form(){
//     const[Name,setname] = useState('');
//     const[pass,setpass] = useState('');
//     const[gender,setgender] = useState('');

    // const nameHandler  =(value) =>{
    //     setname(value)
    // }
    
    // const passHandler  =(value) =>{
    //     setpass(value)
    // }
    // const ganderHandler  =(value) =>{
    //     setgender(value)
    // }
//     return(
//         <form onSubmit={ (e) =>  {
//             e.preventDefault()
//             console.log("submit");
//             console.log(Name);
//             console.log(pass);
//             console.log(gender);
//         }} >
//             <label>Name</label>
//             <input type= 'text' onChange={(event) =>{
//                 nameHandler(event.target.value)
//             }} ></input>
//             <br></br>
//             <label>pass</label>
//             <input type= 'password'  onChange={(event) =>{
//                 passHandler(event.target.value)
//             }}></input>
//             <br></br>
//             <label>gender</label>
//             <select onChange={(event) =>{
//                 ganderHandler(event.target.value)
//             }}>
//                 <option value="male">male</option>
//                 <option value="female">female</option>
//             </select>
//             <button type="submit">submit</button>
//         </form>

//     )

// }
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: '',
            pass:'',
            gender: ''

        }

    }
     nameHandler  =(value) =>{
        this.setState({name:value})
    }
    
     passHandler  =(value) =>{
        this.setState({pass:value})
    }
     ganderHandler  =(value) =>{
        this.setState({gender:value})
    }
    render(){
        return(
            <form onSubmit={ (e) =>  {
                e.preventDefault()
                console.log("submit");
                console.log(this.state);
            }} >
                <label>Name</label>
                <input type= 'text' onChange={(event) =>{
                   this.nameHandler(event.target.value)
                }} ></input>
                <br></br>
                <label>pass</label>
                <input type= 'password'  onChange={(event) =>{
                   this.passHandler(event.target.value)
                }}></input>
                <br></br>
                <label>gender</label>
                <select onChange={(event) =>{
                  this.ganderHandler(event.target.value)
                }}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type="submit">submit</button>
            </form>
    
        )
       

        
        
    }
}
export default Form;