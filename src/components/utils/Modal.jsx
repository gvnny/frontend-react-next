import '@/components/utils/Modal.css'
import { Children } from 'react'

const Modal = ({ children, Isopen, changeOpen}) => {
    
    if (!Isopen) return (<></>)
    return (
        <>
            <div className='modal'>
                <main>
                    {children}
                    <br/>
                    <button onClick={() => changeOpen(false)}>Cancelar</button>
                </main>
            </div>
        </>

    )
}

export default Modal