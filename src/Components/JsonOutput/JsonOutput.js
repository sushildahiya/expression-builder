import { useState } from "react";
import { useValue } from "../../Context/ExpressionContext"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import styles from './JsonOutput.module.css';

export default function JsonOutput() {
  const { rules, combinator } = useValue();
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const expression = {
    "rules": rules,
    "combinator": combinator
  }

  return (
    <div className={`${styles.outputContainer} p-2` }>
      <h3>JSON Output</h3>
      <div className={styles.outputContent}>
        <div className={styles.copyBtn}>
          <CopyToClipboard text={JSON.stringify(expression, null, 2)} onCopy={handleCopyClick}>
            <Button className={`${styles.button} d-flex`} variant="outline-secondary" size="sm">
              {copied ? <box-icon name='check' color="green"></box-icon> : <box-icon className="bx bxs-like bx-tada" type='solid' name='copy' color="grey"></box-icon>}
            </Button>
          </CopyToClipboard>
        </div>
        <div className={styles.outputBox}>
          <pre>{JSON.stringify(expression, null, 2)} </pre>
        </div>
      </div>
    </div>
  );
}
