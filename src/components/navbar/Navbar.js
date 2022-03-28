import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from './Navbar.module.scss';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const history = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history("/iletisim");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <div className="left-top-logo">
                    <Link to="/" className={classes.header__content__logo}>                    
                    Kılıç | Çetinkaya 
                        <p>Hukuk Burosu</p>
                    </Link>
                </div>
                
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                Anasayfa
                            </Link>
                        </li>
                        <li>
                            <Link to="/faaliyet" onClick={menuToggleHandler}>
                                Faaliyet Alanlarimiz
                            </Link>
                        </li>
                        <li>
                            <Link to="/ekibimiz" onClick={menuToggleHandler}>
                                Ekibimiz
                            </Link>
                        </li>
                        <li>
                            <Link to="/etahsilat" onClick={menuToggleHandler}>
                                E-Tahsilat
                            </Link>
                        </li>
                        {/**
                         <li>
                            <Link to="/makaleler" onClick={menuToggleHandler}>
                                Makaleler
                            </Link>
                        </li>
                         */}
                        
                    </ul>
                    <button onClick={ctaClickHandler}>ILETISIM</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;