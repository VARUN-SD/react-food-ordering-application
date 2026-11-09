import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserInfo:{
                name:"KV",
                location:"Local",
            }
        }
    }

async componentDidMount(){
    const data=await fetch("https://api.github.com/users/VARUN-SD");
    const json=await data.json();
    console.log(json);
    this.setState({
        UserInfo:json
    });
    
  }
    render(){
        const {name,location,avatar_url}=this.state.UserInfo;
        return(
            <div className="user flex  p-8 m-4 border-2 rounded-lg bg-black">
                <div>
                    <img className="  rounded-full w-48 m-2" src={avatar_url}></img>
                </div>
                <div className=" m-10 text-white">
                <h1 className="my-2">Name : {name}</h1>
                <h3 className="my-2">Phone : 9182367210</h3>
                <h4 className="my-2">Location : {location}</h4>
                </div>
            </div>
        )
    }
};

export default UserClass;