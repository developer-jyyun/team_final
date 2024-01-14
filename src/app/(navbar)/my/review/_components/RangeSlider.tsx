import "./RangeSlider.css";

interface Prop {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  min?: number;
  step?: number;
}

const RangeSlider = ({ value, onChange, max = 5, min = 0, step = 1 }: Prop) => {
  const progressPercentage = (value / max) * 100;

  const progressStyle = {
    background: `linear-gradient(to right, #FF748A 0%, #FF3D73 ${progressPercentage}%, #FFEFEF ${progressPercentage}%)`,
  };

  return (
    <div>
      <input
        className="range-input h-3 appearance-none w-full cursor-pointer outline-none rounded-lg    "
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        style={progressStyle} // 임시 css 적용
      />
    </div>
  );
};

export default RangeSlider;
