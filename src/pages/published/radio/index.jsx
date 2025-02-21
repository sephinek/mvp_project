import Radio from '../../../components/atoms/Radio';

const PublihsedRadio = ({ onClick }) => {
  const colors = ['orange', 'lemon', 'green-apple', 'blueberry', 'grape'];

  return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          gap: '8px',
          marginTop: '12px',
        }}
      >
        {colors.map((color) => (
          <Radio
            onClick={() => onClick(color)}
            key={color}
            color={color}
            name='publish'
            id={`publish-${color}`}
          />
        ))}
      </div>
  );
};

export default PublihsedRadio;
