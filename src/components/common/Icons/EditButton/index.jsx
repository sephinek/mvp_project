import EditIcon from '../../../../assets/icons/humble/edit.svg';
import IconButton from '../../../atoms/IconButton';

export default function EditButton({ alt, onClick }) {
  return <IconButton icon={EditIcon} alt={alt} onClick={onClick} type='edit' />;
}
