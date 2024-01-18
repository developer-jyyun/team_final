import "./RangeSlider.css";

interface Prop {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  min?: number;
  step?: number;
  mark?: "show" | "hidden";
  unit?: string;
}

const RangeSlider = ({
  value,
  onChange,
  max = 5,
  min = 0,
  step = 1,
  mark = "hidden",
  unit = "",
}: Prop) => {
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
        list="options"
      />
      {mark === "show" && (
        <div className="relative w-full text-black-9 text-xs font-normal leading-normal">
          <span className="absolute">{min + unit}</span>
          <span
            className={`absolute left-[${progressPercentage}%] text-pink font-medium`}
          >
            {value + unit}
          </span>
          <span className="absolute right-0">{max + unit}</span>
        </div>
      )}
    </div>
  );
};

export default RangeSlider;
