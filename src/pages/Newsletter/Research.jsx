import React from 'react'
import './Newsletter.scss';
import Footer from '../../components/Footer/Footer';
import BannerHeading from '../../components/BannerHeading/Banner';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPage4 } from '@fortawesome/free-brands-svg-icons'

const activities = [
    {
        id: 1,
        logo: faPage4,
        content: "Neuroprotective and Antioxidant Effect of Ginkgo biloba Extract Against AD and Other Neurological Disorders",
        link: "https://link.springer.com/article/10.1007%2Fs13311-019-00767-8"
    },
    {
        id: 2,
        logo: faPage4,
        content: "Oxidative stress and Neurodegenerationis now accepted as responsible for redox regulation.",
        link: "https://www.hilarispublisher.com/open-access/oxidative-stress-and-neurodegeneration-2157-7099-1000e119.pdf"
    },
    {
        id: 3,
        logo: faPage4,
        content: "Drosophila melanogaster: Key Model Organism for the Study of Alzheimer’s Disease",
        link: "https://www.ecronicon.com/ecne/pdf/ECNE-11-00491.pdf"
    },
    {
        id: 4,
        logo: faPage4,
        content: "Different Therapeutic Approaches Against Alzheimer’s Disease and Usefulness of Drosophila.",
        link: "https://www.ecronicon.com/ecne/pdf/ECNE-03-000049.pdf"
    },
    {
        id: 5,
        logo: faPage4,
        content: "Alzheimer’s Disease and Immune Response: A Brief Overview",
        link: "https://www.semanticscholar.org/paper/Alzheimer%27s-Disease-and-Immune-Response%3A-A-Brief-Mishra-Singh/c02965fbe87dc7ef264b8740fe45bf2a3d2f2ba9?p2df"
    }
]

const Research = () => {
    return (
        <div>
            <BannerHeading title="Research Activity" />
            <section>
                <Container>
                    <Row>
                        {
                            activities.map(activity => {
                                return (
                                    <Col key={activity.id} lg='4' sm='12' xs='12'>
                                        <div className="research-card">
                                            <FontAwesomeIcon icon={activity.logo} />
                                            <p>{activity.content}</p>  
                                            <a href={activity.link} target="_blank" rel="noreferrer">
                                            Know More</a>
                                            
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        <Col xs='12'>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Research
