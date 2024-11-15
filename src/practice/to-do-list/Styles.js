const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0000FF',
    minHeight: '100vh',
    padding: '2em',
    color: '#FFF',
  },
  title: {
    fontSize: '2em',
    marginBottom: '1em',
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1em',
    marginBottom: '1em',
    width: '35%',
  },
  input: {
    padding: '0.5em',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  searchInput: {
    padding: '0.5em',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '35%',
    marginBottom: '1em',
  },
  button: {
    padding: '0.5em 1em',
  },
  colorSelector: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5em',
    marginBottom: '2em',
  },
  colorButton: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2em',
  },
  todoTitle: {
    fontSize: '1.5em',
    marginBottom: '1em',
  },
  todoList: {
    width: '100%',
    maxWidth: '35%',
  },
  todoItem: {
    padding: '1em',
    marginBottom: '0.5em',
    borderRadius: '5px',
    color: '#000',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default styles;
