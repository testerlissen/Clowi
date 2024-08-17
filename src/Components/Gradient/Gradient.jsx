import { useEffect, useState } from 'react'
import SyntaxHighlighter from "react-syntax-highlighter" 
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import s from './Gradient.module.sass'
import randomColor from 'randomcolor'

export default function Gradient() {

    useEffect(() => {
        document.title = "CLOWI / Gradient";
    }, []);

    const [color1, setColor1] = useState(randomColor());
    const [color2, setColor2] = useState(randomColor());
    const [output, setOutput] = useState("");
    const [output2, setOutput2] = useState("");
    const [output3, setOutput3] = useState("");

    useEffect(() => {
        const gradient = `linear-gradient(90deg, ${color1}, ${color2})`;
        const gradient1 = `linear-gradient(90deg, ${color1}, ${color2});`;
        const gradient2 = `-webkit-linear-gradient(90deg, ${color1}, ${color2});`;
        const gradient3 = `-moz-linear-gradient(90deg, ${color1}, ${color2});`;
        document.getElementById("gradient").style.background = gradient;
        setOutput(`background: ${gradient1}`);
        setOutput2(`background: ${gradient2}`);
        setOutput3(`background: ${gradient3}`);
    }, [color1, color2]);

    const handleChangeColor = (e) => {
        const { name, value } = e.target;
        if (name === "color1") {
          setColor1(value);
        } else if (name === "color2") {
          setColor2(value);
        }
    };
    
    const handleRandomClick = () => {
        setColor1(randomColor());
        setColor2(randomColor());
    };

    const customStyle = {
        fontSize: '1.6rem',
        backgroundColor: '#10100E',
        paddingLeft: '0',
    };

    return (
        <div className={s.section}>
            <div className={s.wrapper}>
                <div className={s.colorWrapper}>
                    <div className={s.firstColor}>
                        <div className={s.colorPicker}>
                            <div className={s.border}>
                                <input className={s.colorPicker_control} 
                                    type='color'
                                    name='color1'
                                    value={color1}
                                    onChange={handleChangeColor} 
                                />
                            </div>
                            <p className={s.colorText}>
                                {color1}
                            </p>
                        </div>
                    </div>
                    <div className={s.firstColor}>
                        <div className={s.colorPicker}>
                            <div className={s.border}>
                                <input className={s.colorPicker_control} 
                                    type='color'
                                    name='color2'
                                    value={color2}
                                    onChange={handleChangeColor} 
                                />
                            </div>
                            <p className={s.colorText}>
                                {color2}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.gradient} id='gradient'></div>
                <div className={s.btnWrapper}>
                    <button className={`${s.btnBeige} ${s.btn1} ${s.btn}`} id='generateBtn' onClick={handleRandomClick} >
                        <span>
                            Generate gradient
                        </span>
                    </button>
                    <CopyToClipboard text={`${output} \n${output2} \n${output3}`}>
                        <button className={`${s.btnBlack} ${s.btn2}`} >
                            Copy CSS
                        </button>
                    </CopyToClipboard>
                    {/* <div className={s.arrows}>
                        <button className={`${s.arrow} ${s.active}`} >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L21 11M21 11L11.0833 1M21 11L11.0833 21" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.87446 0.928932L14.9085 15.0711M14.9085 15.0711L14.967 0.987857M14.9085 15.0711L0.932934 15.13" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L11 21M11 21L21 11.0833M11 21L1 11.0833" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.267 0.928978L1.23296 15.0711M1.23296 15.0711L15.2086 15.13M1.23296 15.0711L1.17449 0.987903" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11L1 11M1 11L10.4208 21M1 11L10.4208 1" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4849 15.0711L1.45084 0.928932M1.45084 0.928932L1.39237 15.0121M1.45084 0.928932L15.4264 0.870007" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 21L11 0.999999M11 0.999999L1 10.9167M11 0.999999L21 10.9167" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={s.arrow}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.948783 15.2131L14.9829 1.07098M14.9829 1.07098L1.00726 1.01205M14.9829 1.07098L15.0413 15.1542" stroke="#F1EFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div> */}
                </div>

                <div className={s.codeWrapper}>
                    <div className={s.output}>
                        <SyntaxHighlighter className={s.code} language='css' style={vs2015} customStyle={customStyle}>
                            {`${output}`}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='css' style={vs2015} customStyle={customStyle}>
                            {`${output2}`}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='css' style={vs2015} customStyle={customStyle}>
                            {`${output3}`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}