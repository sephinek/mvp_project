import Text from '../../atoms/Text';

const TabContent = ({ type }) => {
  if (type === 0) {
    return <Text>타입 {type}</Text>;
  } else if (type === 1) {
    return <Text>타입 {type}</Text>;
  } else {
    return <Text>타입 {type}</Text>;
  }
};

export default TabContent;
