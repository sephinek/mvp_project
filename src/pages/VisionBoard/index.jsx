import ReflectionEmptyState from '../../components/atoms/ReflectionEmptyState';
import ReflectionVisionBoard from '../../components/atoms/ReflectionVisionBoard';
import ReflectionPlusButton from '../../components/atoms/ReflectionPlusButton';

export default function VisionBoard() {
  return (
    <>
      {/* <ReflectionEmptyState></ReflectionEmptyState> */}
      <ReflectionVisionBoard></ReflectionVisionBoard>
      <ReflectionPlusButton></ReflectionPlusButton>
    </>
  );
}
