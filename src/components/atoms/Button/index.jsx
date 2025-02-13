import styles from './index.module.css'

const getClassName = ({theme, type, size}) => {
  if(theme === 'primary' && type === 'default' && size === 'medium') {
    return styles['primary-default-medium'];
  }
  if(theme === 'primary' && type === 'default' && size === 'small') {
    return styles['primary-default-small'];
  }
  if(theme === 'primary' && type === 'outline' && size === 'large') {
    return styles['primary-outline-large'];
  }
  if(theme === 'primary' && type === 'outline' && size === 'medium') {
    return styles['primary-outline-medium'];
  }
  if(theme === 'primary' && type === 'outline' && size === 'small') {
    return styles['primary-outline-small'];
  }

  if(theme === 'secondary' && type === 'default' && size === 'large') {
    return styles['secondary-default-large'];
  }
  if(theme === 'secondary' && type === 'default' && size === 'medium') {
    return styles['secondary-default-medium'];
  }
  if(theme === 'secondary' && type === 'default' && size === 'small') {
    return styles['secondary-default-small'];
  }
  if(theme === 'secondary' && type === 'outline' && size === 'large') {
    return styles['secondary-outline-large'];
  }
  if(theme === 'secondary' && type === 'outline' && size === 'medium') {
    return styles['secondary-outline-medium'];
  }
  if(theme === 'secondary' && type === 'outline' && size === 'small') {
    return styles['secondary-outline-small'];
  }
  
  if(theme === 'tertiary' && type === 'default' && size === 'large') {
    return styles['tertiary-default-large'];
  }
  if(theme === 'tertiary' && type === 'default' && size === 'medium') {
    return styles['tertiary-default-medium'];
  }
  if(theme === 'tertiary' && type === 'default' && size === 'small') {
    return styles['tertiary-default-small'];
  }
  if(theme === 'tertiary' && type === 'outline' && size === 'large') {
    return styles['tertiary-outline-large'];
  }
  if(theme === 'tertiary' && type === 'outline' && size === 'medium') {
    return styles['tertiary-outline-medium'];
  }
  if(theme === 'tertiary' && type === 'outline' && size === 'small') {
    return styles['tertiary-outline-small'];
  }

  return styles['primary-default-large'];
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
