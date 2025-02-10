import { useState } from 'react';
import Input from '../../atoms/Input';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import styles from './index.module.css';

const LoginForm = ({ idRef, passwordRef, onClick, ...rest }) => {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('support');

  return (
    <form {...rest} className={styles.wrap}>
      <Title>Login Form</Title>
      <fieldset className={styles.radios_wrap}>
        <Text>Department:</Text>

        <div>
          <input
            type="radio"
            id="support"
            name="support"
            value="support"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            checked={department === 'support'}
          />
          <label htmlFor="Support">Support</label>
        </div>
        <div>
          <input
            type="radio"
            id="support"
            name="support"
            value="sales"
            onChange={(e) => setDepartment(e.target.value)}
            checked={department === 'sales'}
          />
          <label htmlFor="Sales">Sales</label>
        </div>
      </fieldset>

      <div>
        <div className={styles.input_wrap}>
          <Input
            type="text"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={styles.input_wrap}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input_wrap}>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className={styles.input_wrap}>
          <Input
            type="text"
            name="id"
            ref={idRef}
            placeholder="Enter your id"
          />
        </div>
        <div className={styles.input_wrap}>
          <Input
            type="text"
            name="password"
            ref={passwordRef}
            placeholder="Enter your passsword"
          />
        </div>
      </div>

      <Button onClick={onClick}>Browse</Button>
    </form>
  );
};

export default LoginForm;
