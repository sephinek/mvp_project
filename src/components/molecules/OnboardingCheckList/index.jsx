import OnboardingCheck from "../../atoms/OnboardingCheck"

const OnboardingCheckPage = ({
  name,
  items
}) => {
  return <div style={{
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }}>
    {items.map(({
      value,
      children
    }, idx) =>  <OnboardingCheck key={`${name}-${idx}`} id={`${name}-${idx}`} name={`${name}[]`} value={value}>{children}</OnboardingCheck>)}
  </div>
}

export default OnboardingCheckPage;