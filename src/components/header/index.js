import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import styles from "./header.module.scss";

const Header = () => {
    const [isMenuHidden, setMenuVisibility] = useState(true);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/logomark.svg" alt="logo" />
                    <h4>sumitkpandit</h4>
                </div>
                <nav>
                    <SwitchTransition>
                        <CSSTransition
                            key={isMenuHidden}
                            timeout={{
                                enter: 150,
                                exit: 150
                            }}
                            classNames={{
                                enter: styles.slideIn,
                                exit: styles.slideOutFast
                            }}
                            mountOnEnter
                            unmountOnExit
                        >
                            <FontAwesomeIcon className={styles.icon} icon={isMenuHidden ? faBars : faTimes} size="lg" onClick={() => setMenuVisibility(!isMenuHidden)} />
                        </CSSTransition>
                    </SwitchTransition>
                    <CSSTransition
                        in={!isMenuHidden}
                        timeout={{
                            enter: 300,
                            exit: 300
                        }}
                        classNames={{
                            enter: styles.slideIn,
                            exit: styles.slideOut
                        }}
                        mountOnEnter
                        unmountOnExit
                    >
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/resume/">Resume</Link></li>
                            <li><Link to="/about/">About</Link></li>
                            <li><Link to="/contact/">Contact</Link></li>
                        </ul>
                    </CSSTransition>
                </nav>
            </div>
        </header>
    );
};

export default Header;