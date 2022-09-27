import React from 'react'
import Logo from '../assets/icons/LogoApp.png';
import {BsTwitter, BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'


function FooterView(props) {
    return (
        <div className='ContainerFooter'>
            <img src={Logo}></img>
            <div className='ContainerContactListIcon'>
                <BsTwitter className='item'></BsTwitter>
                <GrFacebook className='item'></GrFacebook>
                <BsLinkedin className='item'></BsLinkedin>
            </div>
            <div className='ContainerCopyRightMobile'>Just type what's on your mind and we'll </div>
            <div className='ContainerCopyRightDesktop'>Copyright 2020 Bella Onojie.com</div>
        </div>
    );
}

export default FooterView;