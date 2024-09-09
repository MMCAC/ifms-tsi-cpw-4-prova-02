import styles from "./App.module.css";
import RGBAPanel from './components/RGBAPanel';

const App = () => {


  return (
    <div className={styles.container}>
      <RGBAPanel />
    </div>
  );
}

export default App;
