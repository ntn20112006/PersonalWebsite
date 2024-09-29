import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import { ReactComponent as GitHubIcon } from './images/githubIcon.svg';
import { ReactComponent as LinkedInIcon } from './images/linkedinIcon.svg';
import React from 'react';


function ContactBar() {
    const githubIconClicked = () =>{ 
        window.location.href = 'https://github.com/ntn20112006';
    }

    //Remember to change link
    const linkedinIconClicked = () =>{ 
        window.location.href = 'https://www.example.com';
    }

    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <MDBContainer className='p-2'>
                <MDBRow>
                    <MDBCol lg='4' md='12' className='mb-4 mb-md-0'>
                        <h5>Phone</h5>
                        <p>
                            (647) 859-4536
                        </p>
                    </MDBCol>

                    <MDBCol lg='4' md='12' className='mb-4 mb-md-0'>
                        <h5>Email</h5>
                        <p>
                            ntn20112006@gmail.com
                        </p>
                    </MDBCol>

                    <MDBCol lg='4' md='12' className='mb-4 mb-md-0'>
                        <h5>Follow Me</h5>
                        <MDBRow className='mb-4 mb-md-0'>
                            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
                                <div onClick={githubIconClicked} style={{textAlign: 'right'}}>
                                    <GitHubIcon/>
                                </div>
                            </MDBCol>
                            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
                                <div onClick={linkedinIconClicked} style={{textAlign: 'left'}}>
                                    <LinkedInIcon/>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default ContactBar;
