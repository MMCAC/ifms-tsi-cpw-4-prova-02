import styles from "./styles.module.css";

type Props = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }

  export const ColorPanel = ({red, green, blue, alpha}: Props)  => {
    const backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    return (
        <div className={styles.colorPanel}  data-cy="colorPanel" style={{backgroundColor: backgroundColor}}>
            <p data-cy="panelText">{`<ColorPanel red={${red}} green={${green}} blue={${blue}} alpha={${alpha}} />`}</p>
        </div> 
    )
  }

export default ColorPanel; 