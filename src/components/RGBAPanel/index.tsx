import ColorPanel from "../ColorPanel";
import styles from "./styles.module.css";
import { useState } from 'react';


const RGBAPanel = () => {
    const [redValue, setRedValue] = useState<number>(0);
    const [greenValue, setGreenValue] = useState<number>(0);
    const [blueValue, setBlueValue] = useState<number>(0);
    const [alphaValue, setAlphaValue] = useState<number>(1);

    return (
        <div className={styles.container}>

            <ColorPanel red={redValue} green={greenValue} blue={blueValue} alpha={alphaValue} data-cy="colorPanel"/>
            
            <div className={styles.inputs}>
                <label>Red</label>
                <input data-cy= "redValue" type="range" min="0" max="255" value={redValue} onChange={(e) => setRedValue(Number(e.target.value))} />
                <label>Green</label>
                <input data-cy= "greenValue" type="range" min="0" max="255" value={greenValue} onChange={(e) => setGreenValue(Number(e.target.value))} />
                <label>Blue</label>
                <input data-cy= "blueValue" type="range" min="0" max="255" value={blueValue} onChange={(e) => setBlueValue(Number(e.target.value))} />
                <label>Alpha</label>
                <input data-cy= "alphaValue" type="range" min="0" max="1" step="0.01" value={alphaValue} onChange={(e) => setAlphaValue(Number(e.target.value))} />
            </div>
            
        </div>
    )
}

export default RGBAPanel;