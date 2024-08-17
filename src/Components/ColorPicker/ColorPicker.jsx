import { useEffect, useState } from 'react'
import s from './ColorPicker.module.sass'
import randomColor from 'randomcolor'
import {CopyToClipboard} from 'react-copy-to-clipboard'
// import './ntc.js'
// import './colorName.js'

export default function ColorPicker() {

    useEffect(() => {
        document.title = "CLOWI / Color";
    }, []);

    const [color1, setColor1] = useState(randomColor());

    useEffect(() => {
        const colorr = `${color1}`;
        document.getElementById("color").style.background = colorr;
    }, [color1]);

    const handleChangeColor = (e) => {
        const { name, value } = e.target;
        if (name === "color1") {
          setColor1(value);
        } else if (name === "color1") {
          setColor1(value);
        }
    };
    
    const handleRandomClick = () => {
        setColor1(randomColor());
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
                </div>
                <div className={s.color} id='color'>
                    {/* <h2 className={s.colorName}>
                        Black
                    </h2> */}
                </div>
                <div className={s.btnWrapper}>
                    <button className={`${s.btnBeige} ${s.btn1} ${s.btn}`} id='generateBtn' onClick={handleRandomClick} >
                        <span>
                            Generate
                        </span>
                    </button>
                    <CopyToClipboard text={`${color1}`}>
                        <button className={`${s.btnBlack} ${s.btn2}`} >
                            Copy HEX
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    )
}