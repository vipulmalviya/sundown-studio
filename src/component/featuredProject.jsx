import React, { useState } from 'react'
import Button from './Button'

const projectDetails = [

    {
        projectTitle: 'Air Force 12021',
        projectBy: 'NIKE',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 1.webp',
    },
    {
        projectTitle: 'Play New Kidvision',
        projectBy: 'NIKE',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 1.webp',
    },
    {
        projectTitle: 'SOHO 2023',
        projectBy: 'converse',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 3.webp',
    },
    {
        projectTitle: '50th Anniversary',
        projectBy: 'NIKE',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 4.webp',
    },
    {
        projectTitle: 'SOHO NYC',
        projectBy: 'arcteryx',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 5.webp',
    },
    {
        projectTitle: 'NYFW Popup',
        projectBy: 'afterpay',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 6.webp',
    },
    {
        projectTitle: 'Makers Studio HOI',
        projectBy: 'nike',
        projectCate: 'Enviroment',
        projectUrls: 'public/assets/asset 7.webp',
    }
]



const FeaturedProject = () => {


    const [img, setImg] = useState();

    const handleProjectRowHover = (url) => {
        setImg(url);
    };

    const handleMouseLeave = () => {
        setImg();
    };

    return (
        <>
            {img && <div className="projectShowCase" >
                <img width="100%" height="100%" src={img} alt="project demo" />
            </div>}
            <section className="page3">
                <div className="container">
                    {projectDetails.map((elem, index) => (
                        <div
                            className="projectRow flex"
                            key={index}
                            onMouseEnter={() => handleProjectRowHover(elem.projectUrls)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h2 className="projectTitle">{elem.projectTitle}</h2>
                            <span>
                                <h6 className="projectBy">{elem.projectBy}</h6>
                                <p className="category">{elem.projectCate}</p>
                            </span>
                        </div>
                    ))}
                </div>
                <div className='projectsSpacing'>
                    <Button>
                        <a href="#">All Projects &#x2192;</a>
                    </Button>
                </div>
            </section>
        </>
    );
}

export default FeaturedProject;
