import Wrapper from '../assets/wrappers/SmallSidebar.js'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo' 
import NavLinks from './NavLinks.js'

const SmallNavbar = () => {
    const { showSidebar, toggleSidebar } = useAppContext()
    return <Wrapper>
        <div 
          className={
            showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
          }
        >
            <div className='content'>
                <button className='close-btn' onClick={toggleSidebar}>
                    <FaTimes />
                </button>
                <header>
                    <Logo />
                </header>
                <NavLinks toggleSidebar={toggleSidebar} />
            </div>
        </div>
    </Wrapper>
}
 
export default SmallNavbar;