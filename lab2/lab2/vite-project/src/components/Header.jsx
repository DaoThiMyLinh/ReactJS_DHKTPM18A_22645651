import { useState } from 'preact/hooks'
import './Header.css'
function Header() {
    return (
        <>
            <header>
                <div className='header-left'>
                    <img src="src/img/chefify.png" alt="img-title" />
                    <input className='input-search' type="text" placeholder='cakescascsa' />
                </div>
                <div className="header-right">
                    <ul className='menu'>
                        <li><a href="#">What to cook</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Ingredients</a></li>
                        <li><a href="#">Occasions</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>

                    <div className='your-box'>
                        <div className='box'>
                            <img src="src/img/check.png" alt="" />
                            <div>Your recipes box</div>
                        </div>
                        <div>
                            <img src="src/img/avatar.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;