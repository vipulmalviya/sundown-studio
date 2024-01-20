import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { useGSAP } from "@gsap/react"

const loder = () => {

    const loder = useRef()
    useEffect(() => {
        gsap.registerPlugin();
    }, []);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(".div", {
            y: "0vh",
            duration: 1,
            delay: 1.5
        }).to(".div", {
            y: "-10vh",
            duration: 1.5
        }).to(".div", {
            y: "-20vh",
            duration: 1.5
        }).to(".loderBody", {
            y: "-100vh",
            duration: 1,
            delay: 1
        })
    }, { scope: loder })

    return (
        <div ref={loder}>
            <div className='loderBody flex' >
                <div className='loderContainer'>
                    <div className='div'>
                        <div className='text text1'>Experiences</div>
                        <div className='text text2'>Environments</div>
                        <div className='text text3'>content</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loder
