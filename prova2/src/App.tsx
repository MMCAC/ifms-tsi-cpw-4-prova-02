import { useState } from 'react';

import styles from "./App.module.css";
import ColorPanel from './components/ColorPanel';
import RGBAPanel from './components/RGBAPanel';

const App = () => {
  const [redValue, setRedValue] = useState<number>(0);
  const [greenValue, setGreenValue] = useState<number>(0);
  const [blueValue, setBlueValue] = useState<number>(0);
  const [alphaValue, setAlphaValue] = useState<number>(0.5);

  return (
    <div className={styles.container}>
      <ColorPanel red={redValue} green={greenValue} blue={blueValue} alpha={alphaValue} />
      <RGBAPanel red={redValue} green={greenValue} blue={blueValue} alpha={alphaValue} setRedValue={setRedValue} setGreenValue={setGreenValue} setBlueValue={setBlueValue} setAlphaValue={setAlphaValue}></RGBAPanel>
    </div>
  );
}

export default App;
