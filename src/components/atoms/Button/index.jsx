import styles from './index.module.css'

const getClassName = ({theme, type, size}) => {
  return styles[`${theme}-${type}-${size}`];
}

const Button = ({
  children,
  theme='primary',
  type='default',
  size='large',
  ...rest
}) => {
  return <button {...rest} className={getClassName({theme, type, size})}>{children}</button>
}

export default Button
