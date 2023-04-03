import { Component } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";


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
                <Container>
                    <Row>
                        {this.state.user.map((users) => (
                            <Col md='4'>
                                <Card key={users.id} style={{marginTop: '25px'}} >
                                    <CardHeader>
                                        <h2>
                                            {users.name}
                                        </h2>
                                    </CardHeader>
                                    
                                    <CardBody>
                                        <h3>{users.phone}</h3>
                                        <p>{users.username}</p>
                                        <h4>{users.email}</h4>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default LifeCycleLesson;