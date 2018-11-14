import React,{Component} from 'react';

export default class Menu extends Component{
    render(){
       // copying the entire array
       const menus = [...this.props.menus];
       console.log(menus);
        return(
            <div>
                <h1>In the Menu Component</h1>
                <ul className="list-group">
                    {
                            menus.map((menu,index)=>{
                            return (
                               <li className="list-group-item">{menu}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}