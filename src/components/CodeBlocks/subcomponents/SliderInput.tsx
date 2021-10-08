import { Form, Slider, InputNumber } from 'antd';
import styled from 'styled-components';
import { breakpoints } from '~/components/layout';

interface ISliderInput {
  label: string;
  name: string;
  id?: string;
  disabled?: boolean;
  onChange: (val: number) => void;
  value: number;
  min: number;
  max?: number;
  step?: number;
  tipFormatter?: (val: number) => string;
}
export const SliderInput: React.FC<ISliderInput> = (props) => {
  const { label, name, id, onChange, value, min, max, step, tipFormatter, disabled } = props;
  return (
    <Form.Item label={label} name={[name, id]} style={{ width: '100%', margin: 0 }}>
      <SliderAndInput>
        <SliderContainer>
          <Slider
            tipFormatter={tipFormatter}
            step={step}
            min={min}
            max={max}
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        </SliderContainer>
        <InputNumber
          step={step}
          style={{ margin: '0 16px' }}
          min={min}
          value={value}
          onChange={onChange}
          formatter={tipFormatter}
          disabled={disabled}
        />
      </SliderAndInput>
    </Form.Item>
  );
};

const SliderContainer = styled.div`
  width: 40%;
  @media screen and (max-width: ${breakpoints.md - 1}px) {
    width: 100%;
  }
`;

const SliderAndInput = styled.div`
  display: flex;
  margin: 3px 0;
`;
