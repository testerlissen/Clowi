import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './MainSection.module.sass'

export const cards = [
    {
        title: 'Palette Generator',
        text: 'generate your own individual palette',
        icon: '../../../public/Icon/Palette-icon.png',
        link: '/qwer',
    },
    {
        title: 'Gradient Generator',
        text: 'create your gradient in a second',
        icon: '../../../public/Icon/Gradient-icon.png',
        link: '/Gradient',
    },
    {
        title: 'Palette From Image',
        text: 'create your palette from an image',
        icon: '../../../public/Icon/Picker-icon.png',
        link: '/PaletteFromImage',
    },
    {
        title: 'Lorem Ipsum',
        text: 'create a stub text for your project',
        icon: '../../../public/Icon/Lorem-icon.png',
        link: '/LoremIpsum',
    },
    {
        title: 'Color picker',
        text: 'find the perfect color for yourself',
        icon: '../../../public/Icon/Color-icon.png',
        link: '/ColorPicker',
    }
]

function Card(props) {
    return (
        <NavLink to={props.link} className={s.linkCard}>
            <div className={s.textWrapper}>
                <h3 className={s.cardTitle}>
                    {props.title}
                </h3>
                <p className={s.cardText}>
                    {props.text}
                </p>
            </div>
            <div className={s.icon}>
                <img src={props.icon} />
            </div>
        </NavLink>
    )
}

export default function MainSection() {

    useEffect(() => {
        document.title = "CLOWI";
    }, []);

    return (
        <div className={s.mainSection}>
            <h1 className={s.mainTitle}>
                Unlock your <span className={s.color1}>creativity</span><span className={s.dot}>:</span> Free up time to innovate and create <span className={s.color2}>amazing</span> <span className={s.color3}>digital</span> creations.
            </h1>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    Tools:
                </h2>
                <div className={s.cardWrapper}>
                    {cards.map((card) => <Card key={card.title} {...card} />)}
                </div>
            </div>
        </div>
    )
}