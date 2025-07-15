import React from "react";

interface ColorFilterProps {
  colors: { name: string; hex: string }[];
  selectedColors: string[];
  onChange: (selected: string[]) => void;
}

export default function ColorFilter({
  colors,
  selectedColors,
  onChange,
}: ColorFilterProps) {
  const toggleColor = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      onChange(selectedColors.filter((c) => c !== colorName));
    } else {
      onChange([...selectedColors, colorName]);
    }
  };

  return (
    <div>
      <p className="font-semibold mb-2">Colors</p>
      <div className="grid grid-cols-2 gap-2">
        {colors.map((color, idx) => (
          <label
            key={idx}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedColors.includes(color.name)}
              onChange={() => toggleColor(color.name)}
              className="form-checkbox"
            />
            <div
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-sm">{color.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
