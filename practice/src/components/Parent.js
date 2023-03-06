import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Data from parent'
        }
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <Child dataParentToChild = {data}/>
            </div>
        )
    }
}
export default Parent