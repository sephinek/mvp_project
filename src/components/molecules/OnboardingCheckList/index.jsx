import { useState } from 'react';
import OnboardingCheck from '../../atoms/OnboardingCheck';

const OnboardingCheckList = ({ name, choice = 'single', items }) => {
  const [selected, setSelected] = useState(choice === 'multiple' ? [] : null);

  const selectHandler = (value) => {
    if (choice === 'single') {
      setSelected(value);
    } else {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div
      style={{
        padding: '16px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {items.map(({ value, icon, targetFn, children }, idx) => (
        <OnboardingCheck
          key={`${name}-${idx}`}
          id={`${name}-${idx}`}
          name={name}
          value={value}
          icon={icon}
          targetFn={() => {
            targetFn();
            selectHandler(value);
          }}
          isSelected={
            choice === 'single' ? selected === value : selected.includes(value)
          }
        >
          {children}
        </OnboardingCheck>
      ))}
    </div>
  );
};

export default OnboardingCheckList;
