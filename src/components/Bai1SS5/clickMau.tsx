import { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors: string[] = ['red', 'blue', 'green', 'yellow','coral'];

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    console.log(`Đã chọn màu: ${color}`);
  };

  return (
    <div>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleColorClick(color)}
          style={{
            backgroundColor: color,
            color: selectedColor === color ? 'white' : 'black',
            border: selectedColor === color ? '2px solid white' : '1px solid black',
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            borderRadius: '5px',
            display: 'inline-block',
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
