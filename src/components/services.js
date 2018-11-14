import React,{Component} from 'react';

// To throw an error I will create one Test Component and throw error externally

class Test extends Component{
    constructor(props){
        super(props);

        throw new Error();
    }
}

export default class Blog extends Component{
    constructor(props){
        super(props);

        this.state = {
            isError:false
        }
    }
    
    componentDidCatch(){
        // Whenever an error will occur within Services component or within the children of services, an error will be thrown

        this.setState({
            isError:true
        })
    }

    render(){

        if(this.state.isError){
            return (
                <h1>An Error occurred which stopped the rendering of services component</h1>
            )
        }

        return(
            <div>
                <h1>Our Services</h1>
                <p>
                  Web Development is such fun ! we must play around it
                </p>

                <ul>
                    <li>git and github</li>
                    <li>webpack,babel</li>
                    <li>HTML5</li>
                    <li>Sass</li>
                    <li>ES6</li>
                </ul>

                <Test />
            </div>
        )
    }
}