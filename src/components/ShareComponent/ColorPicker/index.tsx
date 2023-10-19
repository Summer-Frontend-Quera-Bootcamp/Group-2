import React, { useState } from "react";
import { ChromePicker } from "react-color";

interface IColorProps {
  color: string;
  onChange: (color: string) => void;
  children: React.ReactNode
}

const ColorPicker: React.FC<IColorProps> = ({ color, onChange,children }): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState(color);
  const [isColorPickerVisible, setColorPickerVisible] = useState(false);

  const handleColorChange = (selectedColor: any) => {
    setSelectedColor(selectedColor.hex);
    onChange(selectedColor.hex);
    setColorPickerVisible(false);
  };

  return (
    
    <div onClick={() => setColorPickerVisible(true)} >                      
        
      {isColorPickerVisible && <ChromePicker color={selectedColor} onChange={handleColorChange} />}
      {children} 
    </div>
  
  
  );
};

export default ColorPicker;
