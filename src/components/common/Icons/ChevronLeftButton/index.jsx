import styles from './index.module.css';
import chevronLeftIcon from '../../../../assets/icons/humble/chevron-left.svg';
import IconButton from '../../../atoms/IconButton';

export default function ChevronLeftButton({ alt, onClick }) {
  return <IconButton icon={chevronLeftIcon} alt={alt} onClick={onClick} />;
}
