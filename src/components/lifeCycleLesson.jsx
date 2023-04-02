import { Component } from "react";

class LifeCycleLesson extends Component {

    constructor(props) {
        super(props)
        console.log('working');
    }

    state = {  } 
    render() { 
        return (
            <div>
                hi
            </div>
        );
    }
}
 
export default LifeCycleLesson;