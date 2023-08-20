import { Modal } from '@mui/material';

export default function MuiModal({ children, open, setOpen }) {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            disableScrollLock
        >
          {children}
        </Modal>
    )
}
