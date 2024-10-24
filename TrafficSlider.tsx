import { TrafficRange } from '@/types/pricing';

interface TrafficSliderProps {
  value: number;
  onChange: (value: number) => void;
  range: TrafficRange;
}

export default function TrafficSlider({ value, onChange, range }: TrafficSliderProps) {
  return (
    <div className="w-full space-y-2">
      <input
        type="range"
        min={range.min}
        max={range.max}
        step={range.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
      />
      <p className="text-sm text-gray-500 text-center">
        {(value / 1000)}k pageviews
      </p>
    </div>
  );
}