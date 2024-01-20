import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <section>
            <nav>
                <div className="navLeft">
                    <img height="100%" width="100%" src="public/64d3dd9edfb41666c35b15c2_Sundown logo.svg" alt="site logo" />
                </div>
                <div className="navRight">
                    <Button>
                        <a href="#">work</a>
                    </Button>
                    <Button>
                        <a href="#">studio</a>
                    </Button>
                    <Button>
                        <a href="#">contact</a>
                    </Button>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
