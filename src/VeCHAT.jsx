import { useState } from 'react'
import logo from './imagenes/Desing Logo.jpg'
export function VeCHAT ({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[VeCHAT] render with userName: ', userName)
   
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'vc-followCard-button is-following'
    : 'vc-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='vc-followCard'>
            <header className='vc-followCard-header'>
                <img 
                className='vc-followCard-logo'
                alt="Logo VeCHAT" 
                src={logo} />
                <div className='vc-followCard-info'>
                    <strong>{children}</strong>
                    <span className="vc-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='vc-followCard-text'>{text}</span>
                    <span className='vc-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}