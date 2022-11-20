import React, {useContext} from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Button from 'react-bootstrap/Button';
import RightArrowIcon from '../images/right-arrow.png';
import LeftArrowIcon from '../images/left-arrow.png';


function Loading() {
    const dummyBusinessList = [0,1,2,3,4]
    const dummyBusinessInfoList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  
    const LeftArrow = () => {
      const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  
      return (
          <Button disabled={isFirstItemVisible} variant='outline-secondary' style={{borderRadius:30, marginTop:120, borderWidth:2, paddingRight:15}} onClick={() => scrollPrev()} className='right-arrow'>
              <img src={LeftArrowIcon} height={20} alt='right-arrow' />
          </Button>
      );
    }
  
    const RightArrow = () => {
        const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
        return (
            <Button disabled={isLastItemVisible} variant='outline-secondary' style={{borderRadius:30, marginTop:120, borderWidth:2, paddingLeft:15}} onClick={() => scrollNext()} className='left-arrow'>
                <img src={RightArrowIcon} height={20} alt='right-arrow' />
            </Button>
        )
    }
    
    return (
    <ul>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: 15,
          marginTop: 150,
        }}
      ></h1>
      <p aria-hidden="true">
        <Placeholder xs={10} animation="glow"/>
      </p>
      {dummyBusinessList.map((business, index) => (
        <div key={index}>
          <Container className="container-fluid font-link2" style={{maxWidth:1215}}>
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
            <Row>
            <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
              {dummyBusinessInfoList
                .map((dummy, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "16rem", border:'none', marginTop:15, marginRight:25 }}>
                      <Card.Img
                        variant="top"
                        height={250}
                        style={{objectFit:'cover', borderRadius:10}}
                      />
                      <Card.Body>
                        <Placeholder as={Card.Title} animation="glow" style={{ fontWeight: "bold", fontSize:'18px' }}>
                            <Placeholder xs={10} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                          <Placeholder xs={5} /> 
                          <Placeholder xs={8} /> 
                          <Placeholder xs={10} />
                        </Placeholder>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </ScrollMenu>
            </Row>
          </Container>
        </div>
      ))}
    </ul>
    )
}

export default Loading;