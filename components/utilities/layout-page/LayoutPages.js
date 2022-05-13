import { Container, Row} from 'react-bootstrap';


function LayoutPage({children}) {
    return ( 
        
      
        <Container className="container-layout-page">
            <Row>
                <div className="container-column-layout">
                  <div className="card-central-page">
                    {children}
                  </div>
                </div>
                
            </Row>
        </Container>
     
     );
}

export default LayoutPage;