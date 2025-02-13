import styles from './index.module.css';
import chevronRightIcon from '../../../../assets/icons/humble/chevron-right.svg';
import IconButton from '../../../atoms/IconButton';

export default function ChevronRightButton({ alt, onClick }) {
  return <IconButton icon={chevronRightIcon} alt={alt} onClick={onClick} />;
}
