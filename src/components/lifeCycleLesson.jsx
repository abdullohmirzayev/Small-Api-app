import { Component } from "react";


class LifeCycleLesson extends Component {

    state = { 
        user: []
    }
     
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            this.setState({user: data})
        })
    }
    
    render() { 
        return (
            <>
                {/* <Container>
                    <Row></Row>
                </Container>    */}
            </>
        );
    }
}
 
export default LifeCycleLesson;