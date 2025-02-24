import Button from '../../../components/atoms/Button';

const PublihsedButton = () => {
  return (
    <div>
      <Button>Primary Default Large</Button>
      <Button disabled>Primary Default Large</Button>
      <Button type="outline">Primary Outline Large</Button>
      <Button type="outline" disabled>Primary Outline Large</Button>

      <Button size="medium">Primary Default Medium</Button>
      <Button size="medium" disabled>Primary Default Medium</Button>
      <Button size="medium" type="outline">Primary Outline Medium</Button>
      <Button size="medium" type="outline" disabled>Primary Outline Medium</Button>

      <Button size="small">Primary Default Small</Button>
      <Button size="small" disabled>Primary Default Small</Button>
      <Button size="small" type="outline">Primary Outline Small</Button>
      <Button size="small" type="outline" disabled>Primary Outline Small</Button>

      <Button theme='secondary'>Secondary Default Large</Button>
      <Button theme='secondary' disabled>Secondary Default Large</Button>
      <Button theme='secondary' type="outline">Secondary Outline Large</Button>
      <Button theme='secondary' type="outline" disabled>Secondary Outline Large</Button>

      <Button theme='secondary' size="medium">Secondary Default Medium</Button>
      <Button theme='secondary' size="medium" disabled>Secondary Default Medium</Button>
      <Button theme='secondary' size="medium" type="outline">Secondary Outline Medium</Button>
      <Button theme='secondary' size="medium" type="outline" disabled>Secondary Outline Medium</Button>

      <Button theme='secondary' size="small">Secondary Default Small</Button>
      <Button theme='secondary' size="small" disabled>Secondary Default Small</Button>
      <Button theme='secondary' size="small" type="outline">Secondary Outline Small</Button>
      <Button theme='secondary' size="small" type="outline" disabled>Secondary Outline Small</Button>

      <Button theme='tertiary'>Tertiary Default Large</Button>
      <Button theme='tertiary' disabled>Tertiary Default Large</Button>
      <Button theme='tertiary' type="outline">Tertiary Outline Large</Button>
      <Button theme='tertiary' type="outline" disabled>Tertiary Outline Large</Button>

      <Button theme='tertiary' size="medium">Tertiary Default Medium</Button>
      <Button theme='tertiary' size="medium" disabled>Tertiary Default Medium</Button>
      <Button theme='tertiary' size="medium" type="outline">Tertiary Outline Medium</Button>
      <Button theme='tertiary' size="medium" type="outline" disabled>Tertiary Outline Medium</Button>

      <Button theme='tertiary' size="small">Tertiary Default Small</Button>
      <Button theme='tertiary' size="small" disabled>Tertiary Default Small</Button>
      <Button theme='tertiary' size="small" type="outline">Tertiary Outline Small</Button>
      <Button theme='tertiary' size="small" type="outline"disabled>Tertiary Outline Small</Button>

    </div>
  );
};

export default PublihsedButton;
