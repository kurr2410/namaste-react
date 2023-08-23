import React from "react";

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
    }
    componentWillUnmount(){
        console.log("this will be called while closing/removing this component from DOM")
    }
    render(){
        console.log("child render")
        const { name, location}= this.state.userInfo;
        return (
            <div className="user-card">
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