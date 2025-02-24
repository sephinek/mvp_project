import TrashIcon from '../../../../assets/icons/humble/trash.svg';
import IconButton from '../../../atoms/IconButton';

export default function DeleteButton({ alt, onClick }) {
  return (
    <IconButton icon={TrashIcon} alt={alt} onClick={onClick} type='delete' />
  );
}
