import React,{Component} from 'react';

class Error extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Why in this world do you guys type a wrong URL! </h1>
                <h2>The URL you have typed doesn't exist</h2>
            </div>

        )
    }
}

export default Error;