import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="header">
            <div className="logo">
                <Link to="/">☁ Mausam</Link>
            </div>
            <div className="links">
                <button className="btn">
                    <Link to="/about">About</Link>
                </button>
                <button className="btn btn-github">
                    <span className="github-star">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                    </span>
                    &nbsp;
                    <a 
                        href="https://github.com/AyushSaini00/Mausam" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </button>
            </div>
        </header>
    );
}
 
export default Header;