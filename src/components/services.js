import React,{Component} from 'react';

export default class Blog extends Component{
    render(){
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
            </div>
        )
    }
}