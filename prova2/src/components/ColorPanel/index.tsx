import {Panel} from "./styles";

type Props = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }

  const ColorPanel = ({red, green, blue, alpha}: Props)  => {
    const backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    return (
        <Panel style={{ backgroundColor }}  data-cy="colorPanel">
            <p data-cy="panelText">{`<ColorPanel red={${red}} green={${green}} blue={${blue}} alpha={${alpha}} />`}</p>
        </Panel> 
    )
  }

export default ColorPanel;