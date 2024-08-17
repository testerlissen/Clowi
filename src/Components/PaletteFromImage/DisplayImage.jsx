import React from "react"
import s from './DisplayImage.module.sass'
import ListItem from "./ListItem";

export default function DisplayImage({ uploadedImage, colorPalette }) {

    const toHex = (rgb) => {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }

        return hex;

    }

    return (
        <div className={s.content}>
            <div className={s.image}>
                {uploadedImage ? <img className={s.img} src={uploadedImage} alt="uploaded" /> : null}
            </div>
            {colorPalette && 
                <ul className={s.colors}>
                    {colorPalette.map((color, index) => {
                        const rgb = `rgb(${color.join(",")})`;
                        const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`
                        console.log(rgb, hex);
                        return <ListItem key={index} rgb={rgb} hex={hex} />
                    })}
                </ul>
            }
        </div>
    )
}