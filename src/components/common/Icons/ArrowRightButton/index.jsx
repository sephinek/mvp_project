import styles from './index.module.css';
import ArrowRightIcon from '../../../../assets/icons/humble/arrow-right-up.svg';
import IconButton from '../../../atoms/IconButton';

export default function ArrowRightButton({ alt, onClick }) {
  return <IconButton icon={ArrowRightIcon} alt={alt} onClick={onClick} />;
}
