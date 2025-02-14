import OnboardingCheckList from "../../../components/molecules/OnboardingCheckList"

const OnboardingCheckPage = () => {
  const items = [{
    value:'ant',
    children: '🐜 개미'
  }, {
    value:'mami',
    children: '👯 매미'
  }, {
    value:'realmi',
    children: '🌺 진미'
  }, {
    value:'mimi',
    children: '👸🏿 미미'
  }, {
    value:'mingmi',
    children: '❓ 밍미'
  }, ]

  return <OnboardingCheckList name="check-list" items={items}>
   
  </OnboardingCheckList>
}

export default OnboardingCheckPage;