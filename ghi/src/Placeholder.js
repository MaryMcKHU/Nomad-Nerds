import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Loading() {
    const dummyBusinessList = [0,1,2,3,4]
    const dummyBusinessInfoList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    
    return (
    <ul>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: 15,
          marginTop: 110,
        }}
      ></h1>
        <Placeholder xs={10} animation="glow"/>
      
      {dummyBusinessList.map((business, index) => (
        <div key={index}>
          <Container className="container-fluid font-link2">
            <h1
              className="card-title"
              style={{
                fontWeight: "bolder",
                paddingTop: 25,
                marginTop: 50
              }}
            >
              <Placeholder xs={6} animation="glow" />
            </h1>
            <Row
              className="flex-nowrap flex-row"
              style={{ overflowX: "auto" }}
            >
              {dummyBusinessInfoList
                .map((dummy, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "16rem", border:'none', marginTop:15 }}>
                      <Card.Img
                        variant="top"
                        height={250}
                        style={{objectFit:'cover', borderRadius:10}}
                      />
                      <Card.Body>
                        <Placeholder as={Card.Title} animation="glow" style={{ fontWeight: "bold", fontSize:'18px' }}>
                          <Row>
                            <div><Placeholder xs={6} animation="glow" /></div>
                          </Row>
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                          <Placeholder xs={7} /> 
                          <Placeholder xs={4} /> 
                          <Placeholder xs={4} />{' '}
                          <Placeholder xs={6} /> 
                          <Placeholder xs={8} />
                        </Placeholder>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      ))}
    </ul>
    )
}

export default Loading;