// client component
'use client';

// remote
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export const ColorPicker = () => {
    const [color, setColor] = useState('#aabbcc');
    return <HexColorPicker color={color} onChange={setColor} />;
};
