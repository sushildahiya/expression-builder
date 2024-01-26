import { Form, Button, Col,Row } from 'react-bootstrap'
import { useValue } from "../../Context/ExpressionContext";
import ExpressionInput from "../ExpressionInput/ExpressionInput";

function FormComponent() {
   const{combinator,rules,handleAddExpression,setRules,setCombinator} = useValue()
   const handleExpressionChange = (index, field, value) => {

    const newExpressions = [...rules];
    if (field==='key'){
      newExpressions[index]['key'] = value;
      setRules(newExpressions);
    }else{
      if(newExpressions[index]['key']==='Age' && (value>120 || value<0)){
        alert("Age cannot be below 0 or greater than 120 years.")
      } else if ((newExpressions[index]['key']==='Credit Score'||newExpressions[index]['key']==='Account Balance') && value<0){
        alert ("Credit Score or Account Balance cannot be below 0.");
      }else{
      newExpressions[index]['output'][field] = value;
      setRules(newExpressions);
    }
  }
  };
  const handleDeleteExpression = (index) => {
    const newExpressions = [...rules];
    newExpressions.splice(index, 1);
    setRules(newExpressions);
  };
  const handleCombinatorChange = (value)=>{
    setCombinator(value)
  }
    return (
        <>
            <Form className="p-3">
            <Form.Group>
          <Form.Label>Connector Type</Form.Label>
          <Row className="mb-3">
            <Col><Form.Select
            value={combinator}  onChange={(e) => handleCombinatorChange( e.target.value)}
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </Form.Select></Col>
            <Col> <Button className="d-flex justify-content-center align-items-center" onClick={handleAddExpression}><box-icon type='solid' name='plus-square'></box-icon> Add Expression</Button></Col>
          </Row>
          
        </Form.Group>
       
            {rules.map((expression, index) => (
          <ExpressionInput
            key={index}
            expression={expression}
            onChange={(field, value) => handleExpressionChange(index, field, value)}
            onDelete={() => handleDeleteExpression(index)} className="p-2"
          />
        ))}
            

            </Form>
        </>
    )
}
export default FormComponent;