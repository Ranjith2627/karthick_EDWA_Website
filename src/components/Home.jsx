import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/1.png'
import img5 from '../assets/2.png'
import img6 from '../assets/3.png'
import img7 from '../assets/1.png'
import img8 from '../assets/2.png'
import img9 from '../assets/3.png'
import img10 from '../assets/1.png'
import img11 from '../assets/2.png'
import img12 from '../assets/3.png'
import img13 from '../assets/1.png'
import img14 from '../assets/2.png'

function Home() {
    let imgData = [
        {
            "id": 1,
            "url": img1,
            "interval": "1000"
        },
        {
            "id": 2,
            "url": img2,
            "interval": "2000"
        },
        {
            "id": 3,
            "url": img3,
            "interval": "3000"
        },
        {
            "id": 4,
            "url": img4,
            "interval": "4000"
        },
        {
            "id": 5,
            "url": img5,
            "interval": "5000"
        }
        // ,
        // {
        //     "id": 6,
        //     "url": img6,
        //     "interval": "2000"
        // },
        // {
        //     "id": 7,
        //     "url": img7,
        //     "interval": "2000"
        // },
        // {
        //     "id": 8,
        //     "url": img8,
        //     "interval": "2000"
        // },
        // {
        //     "id": 9,
        //     "url": img9,
        //     "interval": "2000"
        // },
        // {
        //     "id": 10,
        //     "url": img10,
        //     "interval": "2000"
        // },
        // {
        //     "id": 11,
        //     "url": img11,
        //     "interval": "2000"
        // },
        // {
        //     "id": 12,
        //     "url": img12,
        //     "interval": "2000"
        // },
        // {
        //     "id": 13,
        //     "url": img13,
        //     "interval": "2000"
        // },
        // {
        //     "id": 14,
        //     "url": img14,
        //     "interval": "2000"
        // }
    ]
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

                {
                    imgData.map((img) => {
                        return (
                            <div className="carousel-item" data-bs-interval={img.interval} key={img.id}>
                                <img src={img.url} className="d-block homeImage" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Heading</h1>
                                    <p>description</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <button className="carousel-control-prev text-wite" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon prevIcon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Home
