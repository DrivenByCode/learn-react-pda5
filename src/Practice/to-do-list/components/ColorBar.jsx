import styles from '../Styles';

export default function Colorbar({ colors, selectedColor, onSelectColor }) {
  return (
    <div style={styles.colorSelector}>
      {colors.map((color, index) => (
        <button
          key={index}
          style={{ ...styles.colorButton, backgroundColor: color }}
          onClick={() => onSelectColor(color)}
          className={color === selectedColor ? 'selected' : ''}
        />
      ))}
    </div>
  );
}
