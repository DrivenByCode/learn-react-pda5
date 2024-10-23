import Button from 'react-bootstrap/Button';
export default function ColorComponent({ prop }) {
  const colors = ['grey', 'red', 'yellow', 'pink'];
  return (
    <>
      {colors.map((ele) => {
        <>
          <Button
            className="rounded-circle"
            style={{ backgroundColor: ele }}
            onClick={(e) => setColor(e.target.style.backgroundColor)}
          />
        </>;
      })}
    </>
  );
}
