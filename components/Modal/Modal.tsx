import { FC, ReactNode } from 'react'

interface ModalProps {
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (isOpen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-10" onClick={onClose}>
        <div className="absolute bottom-0 bg-white w-full max-w-[480px] h-[420px] rounded-lg p-4 animate-[bottom-sheet-up_200ms_ease-in-out]">
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default Modal
