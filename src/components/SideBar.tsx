import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './SideBar.css';

export function SideBar() {
    const location = useLocation();
    const isHome = location.pathname === '/';
return (
        <aside >
            {isHome ? (
                        <>
                            <a target="_blank" className="sidebar-link" href="https://www.linkedin.com/in/agustina-scapusio/">LinkedIn</a>

                            <a target="_blank" className="sidebar-link" href="https://github.com/AgustinaScapusio">GitHub</a>
                        </>
                    ) : (
                        <Link to="/">Home</Link>
                    )}
                    <hr className={`${isHome ? '' : 'home'}`}/>
                    <p >©/2024</p>
        </aside>
    );

}