import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';

export default function CustomModal({ isShow, handleClose, handleOpen }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Button variant="primary" onClick={handleOpen}>
          로그인
        </Button>
      </div>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onHide={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
