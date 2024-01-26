import React from 'react';
import {  Form, Button, FormControl,Col,Row } from 'react-bootstrap';

function ExpressionInput({expression,onChange, onDelete}) {
 return (
    <div className="mb-3">
        <Row>
        <Col xs lg="4">
        <Form.Group>
        
          <Form.Select
          
          value={expression.key || ''}
           onChange={(e) => onChange('key', e.target.value)} 
        >
          <option value="Age">{'Age'}</option>
          <option value="Credit Score" >{'Credit Score'}</option>
          <option value="Account Balance">{'Account Balance'}</option>
         
        </Form.Select>
      </Form.Group>
      </Col>
      
<Col>
<Form.Group>

        <Form.Select
          
          value={expression.output.operator || ''}
          placeholder="Operator" onChange={(e) => onChange('operator', e.target.value)}
        >
          <option value=">">{'>'}</option>
          <option value="<" >{'<'}</option>
          <option value=">=">{'>='}</option>
          <option value="<=">{'<='}</option>
          <option value="=">{'='}</option>
        </Form.Select>
      </Form.Group>
</Col>
<Col>
<Form.Group>
        <FormControl
          type="number"
          value={expression.output.value || ''} min={0} max={expression.key === "Age" ? 120 : undefined} placeholder='Value'
          onChange={(e) => onChange('value', e.target.value)}
        />
      </Form.Group>
</Col>      
      
<Col>
<Form.Group>
        <FormControl
          type="number"
          value={expression.output.score || ''}
          onChange={(e) => onChange('score', e.target.value)}
          placeholder='Score'
        />
      </Form.Group>
</Col>
      
<Col><Button variant="danger" className="d-flex justify-content-center" onClick={onDelete}>
<box-icon name='x'></box-icon>
      </Button></Col>
      </Row>
    </div>
  );
}

export default ExpressionInput