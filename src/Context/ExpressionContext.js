import { createContext, useContext, useState } from "react";

const expressionContext = createContext()

function useValue(){
    const value = useContext(expressionContext)
    return value
}

function CustomExpressionContext({children}){
    const [rules, setRules] = useState([{
        "key": "Age",
        "output": {
            "value": 60,
            "operator": ">=",
            "score": 50
        }
    }])

    const [combinator,setCombinator]= useState('OR')

    const handleAddExpression = () => {
        setRules([...rules, { "key": 'Age', "output":{"operator": '>', "value": '', "score": '' }}]);
      };
    return(<expressionContext.Provider value={{rules, combinator,handleAddExpression,setRules, setCombinator}}>
        {children}
    </expressionContext.Provider>)
}

export {useValue}
export default CustomExpressionContext