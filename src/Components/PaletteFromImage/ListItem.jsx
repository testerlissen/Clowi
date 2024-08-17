import React, { useState } from "react"
import s from './ListItem.module.sass'

export default function ListItem({ rgb, hex }) {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = (e) => {
        const color = e.target.innerText;
        navigator.clipboard.writeText(color);
    };

    return (
        <li className={s.colorName} 
            style={{background: rgb}}
            onClick={(e) => {
                copyToClipboard(e);
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 500);
            }}>
            <span className={s.span}
                onClick={(e) => {
                    copyToClipboard(e);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 500);
                }}>
                {copied ? "Copied!" : hex}
            </span>
        </li>
    )
}