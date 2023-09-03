import React from "react";

import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name: "Dummy",
                location: "Default"
            }
        }
        console.log("child constructor")
    }
    async componentDidMount(){
        console.log("child componentDidMount")
        // API call
        const response = await fetch("https://api.github.com/users/kurr2410")
        const json = await response.json();
        console.log(json,"=========")
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("it is called after updating the data with new data, i.e. after calling the componentDidMount");
        this.timer = setInterval(()=>{
            console.log("this is class timer");
        },1000)
    }
    componentWillUnmount(){
        console.log("this will be called while closing/removing this component from DOM")
        clearInterval(this.timer)
    }
    render(){
        console.log("child render")
        const { name, location}= this.state.userInfo;
        return (
            <div className="user-card">
               <UserContext.Consumer>
                    {(data)=>{
                        return (<h4>LoggedIn User: {data.loggedInUser}</h4>) // return is used because we have used {} brackets.
                    }}
                </UserContext.Consumer>
                
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h3>Count1: {this.state.count1}</h3>
                <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1 +1
                    })
                }}> Increment</button>
            </div>
        ) 
    }
}

export default UserClass;