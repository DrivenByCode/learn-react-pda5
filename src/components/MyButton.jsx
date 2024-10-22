export default function MyButton(props) {
  return (
    <div>
      <a
        href={props.clickUrl}
        target="_blank"
        style={{
          backgroundColor: props.color,
          border: '3px',
          borderRadius: '10px',
          color: 'white',
          padding: '5px',
          textDecoration: 'none',
        }}
      >
        {props.title}
      </a>
    </div>
  );
}
