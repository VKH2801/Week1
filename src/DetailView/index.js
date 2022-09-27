import React from 'react';
import imgPhone3 from '../assets/images/imgPhone3.png';
import imgPhone4 from '../assets/images/imgPhone4.png';
import imgPhone5 from '../assets/images/imgPhone5.png';


function DetailView(props) {
    const list = [
        {
            title: "Create an account",
            subTitle: "Create/login to an existing account to get started",
            describe: "An account is created with your email and a desired password",
            imgSrc: imgPhone3
        },
        {
            title: "Explore while shopping",
            subTitle: "Shop for your favorites meal as e dey hot.",
            describe: "Shop for your favorite meals or drinks and enjoy while doing it.",
            imgSrc: imgPhone4
        },
        {
            title: "Checkout",
            subTitle: "When you done check out and get it delivered.",
            describe: "When you done check out and get it delivered with ease.",
            imgSrc: imgPhone5
        }
    ]


    const Listed = list.map((e, index) => {
        return <div className={`ContainerItem ${index % 2 == 0 ? 'RowReverseItem' : ''}`}>
            <div className='ContainerInfo'>
                <h2 className='DetailOrangeTitle'>{e.title}</h2>
                <h1>{e.subTitle}</h1>
                <h2>{e.describe}</h2>
            </div>
            <img src={e.imgSrc}></img>
        </div>
    })
    return (
        <div className='ContainerContent'>
            {Listed}
        </div>
    );
}

export default DetailView;