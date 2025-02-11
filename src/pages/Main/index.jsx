import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import styles from './index.module.css';

export default function Main() {
  return (
    <div>
      <Goals />
      <Vision />
      <Plans />
    </div>
  );
}
