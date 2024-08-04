import styles from "./styles.module.css";

type Props = {
    red: number;
    blue: number;
    green: number;
    alpha: number;
    setRedValue: (value: number) => void
    setBlueValue: (value: number) => void
    setGreenValue: (value: number) => void
    setAlphaValue: (value: number) => void
}

const RGBAPanel = ({red, blue, green, alpha, setRedValue, setBlueValue, setGreenValue, setAlphaValue}: Props) => {
    return (
        <div className={styles.container}>
            <label>Red</label>
            <input data-cy= "redValue" type="range" min="0" max="255" value={red} onChange={(e) => setRedValue(Number(e.target.value))} />
            <label>Green</label>
            <input data-cy= "greenValue" type="range" min="0" max="255" value={green} onChange={(e) => setGreenValue(Number(e.target.value))} />
            <label>Blue</label>
            <input data-cy= "blueValue" type="range" min="0" max="255" value={blue} onChange={(e) => setBlueValue(Number(e.target.value))} />
            <label>Alpha</label>
            <input data-cy= "alphaValue" type="range" min="0" max="1" step="0.01" value={alpha} onChange={(e) => setAlphaValue(Number(e.target.value))} />
        </div>
    )
}

export default RGBAPanel;