import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormComponent from './Components/FormComponent/FormComponent';
import styles from './App.module.css'
import JsonOutput from './Components/JsonOutput/JsonOutput';
import CustomExpressionContext from './Context/ExpressionContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="text-center">Expression Engine</h1>
      </header>
      <Container fluid>
        <Row className={styles.expressionContainer}>
        <CustomExpressionContext>

          <Col>
            <Container className={styles.formContent}>
              <FormComponent/>
            </Container>
          </Col>
          <Col> 
          <Container>
          <JsonOutput/>
            </Container></Col>
            </CustomExpressionContext>
        </Row>

      </Container>
    </div>
  );
}

export default App;
