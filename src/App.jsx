import React, { useEffect, useRef, useState } from 'react';
import './index.css'
import Navbar from './component/Navbar';
import ScrollingText from './component/scrollingText';
import FeaturedProject from './component/featuredProject';
import LocomotiveScroll from 'locomotive-scroll'
import SwiperComponent from './component/swiperComponent';
import Loder from './component/loder';




const data = [
  {
    "menuItem": "Design",
    "projectDetail": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Soluta At Animi Aut Perspiciatis, Quam Nam Ad Sunt Illum Numquam Dolores Adipisci, Odit, Quos Inventore Minima Accusamus Voluptatem! Delectus, Dolorem Iusto!",
    "projectImg": "public/64d3dd9edfb41666c35b15d0_Project.webp"
  },
  {
    "menuItem": "Project",
    "projectDetail": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit",
    "projectImg": "public/64d3dd9edfb41666c35b15e1_Project-p-1080.webp"
  },
  {
    "menuItem": "Execution",
    "projectDetail": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Soluta At Animi Aut Perspiciatis, Quam Nam Ad Sunt Illum Numquam Dolores Adipisci, Odit, Quos Inventore",
    "projectImg": "public/64d3dd9edfb41666c35b15cd_Execution-p-1080.webp"
  }
]

const App = () => {

  const [addClass, setAddClass] = useState(0)
  const handleclass = (name) => {
    setAddClass(name)
  }
  const containerRef = useRef(null)
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);






  return (
    <>
      <Loder />
      <main className="scroll-container" ref={containerRef}>
        {/* navbar  */}
        <Navbar />
        {/* page1 */}
        <section className='page1' >
          <div className="container ">
            <div className='center flex'>
              <div className="page1Left flex">
                <h4>Sundown is a multi-disciplinary <br /> studio focused on creating <br /> unique, end-to-end experiences <br /> and environments.</h4>
              </div>
              <div className="page1Right">
                <h1>
                  SPACES <br />
                  THAT <br />
                  INSPIRE
                </h1>
              </div>
            </div>
            <div className='circleEffects'>
              <div className='circle1  '></div>
              <div className='circle2 '></div>
              <div className='circle3 '></div>
            </div>
            <div className='video '>
              <video width="100%" height="100%" loop muted autoPlay src="public/assets/66fa855f-fc0d4198.mp4"></video>
            </div>
          </div>
        </section>
        {/* page1 end */}

        {/* page2*/}

        <ScrollingText />


        <section className='page2'>
          <div className="container flex">
            <div className="page2Left">
              <h4>We are a group of design-<br />driven, goal-focused creators,<br /> producers, and designers<br />who believe that the details<br />make all the difference.</h4>
              <div className='page2Circle'></div>
            </div>
            <div className="page2Right">
              <div className="card flex">
                <img width="100%" height="100%" src="public/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.webp" alt="cardImg" />
                <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
              </div>
            </div>
          </div>
          <p className='flex '><span className='golaSm'></span>FEATURED PROJECTS</p>
        </section>

        {/* page2 end */}

        {/* page3  */}

        <FeaturedProject />

        {/* page3 end */}

        {/* page4  */}

        <section className="page4">
          <div className="container flex">
            <div className="page4Left flex">
              <div className="gallery flex">
                <h3 className={addClass === 0 ? "active" : ""} onClick={() => handleclass(0)} >Design</h3>
                <h3 className={addClass === 1 ? "active" : ""} onClick={() => handleclass(1)} >Project</h3>
                <h3 className={addClass === 2 ? "active" : ""} onClick={() => handleclass(2)} >Execution</h3>
              </div>
              <p>{data[addClass].projectDetail}</p>
            </div>
            <div data-scroll data-scroll-speed={-1.5} className="page4Right" style={{ background: `url(${data[addClass].projectImg})` }}>
            </div>
          </div>
        </section>

        {/* page4 end */}

        {/* page5*/}

        <section className="page5 flex">
          <div className="container flex">
            <p className='flex '><span className='golaSm'></span>WHO WE WORK WITH</p>
            <SwiperComponent />
          </div>
        </section>
        {/* page5 end */}

        {/* page6 end */}
        <section className="page6">
          <div className="container flex">

          </div>
        </section>
        {/* page6 end */}


      </main>
      <section className="footer flex">
        <div className='effect flex'>
          <div className="fc"></div>
          <div className="fc"></div>
        </div>
        <div className="container flex">
          <div className="footerContainer flex">
            <div className="footerLeft flex">
              <li>work</li>
              <li>studio</li>
              <li>contact</li>
            </div>
            <div className="footerRight flex">
              <p>Get industry insights and creative  <br /> inspiration straight to your inbox.</p>
              <form action="">
                <input type="text" placeholder='email address' />
                <button>
                  <img src="public/assets/asset 22.svg" alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <h1>
          Sundown
        </h1>
        <div className="footerMenu flex">
          <p>Copyright © Sundown Studio</p>
          <p>Brooklyn, NY</p>
          <p>instagram</p>
          <p>Linkedin</p>
        </div>
      </section>
    </>
  );
};

export default App;
