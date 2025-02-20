import ReflectionPlanCheckState from '../../components/atoms/ReflectionPlanCheckState';
import ReflectionPlansList from '../../components/atoms/ReflectionPlansList';

export default function PlansReview() {
  return <section>
    <ReflectionPlanCheckState></ReflectionPlanCheckState>
    <ReflectionPlansList></ReflectionPlansList>
  </section>;
}
