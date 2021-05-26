import React from 'react'
import banner from '../../assets/img/banners/about_bg.jpg';
import { Container } from 'reactstrap';
import './Banner.scss'

const Banner = (props) => {
    return (
        <div>
            <div className="banner-heading"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize:"100%",
                    backgroundPosition: "center",
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Container>
                <h1 style={{
                    color: '#fff'
                }}>{props.title}</h1>
                </Container>
            </div>
        </div>
    )
}

export default Banner
