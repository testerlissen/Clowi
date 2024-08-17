import s from './Lorem.module.sass'
import {data} from './Constant'
import { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

export default function Lorem() {

    useEffect(() => {
        document.title = "CLOWI / Lorem Ipsum";
    }, []);

    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if (amount < 0) amount = 1;
        if (amount > 20) amount = 20;
        setText(data.slice(0, amount));
        return;
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>
                Lorem Ipsum
            </h1>
            <form className={s.btnWrapper} onSubmit={handleSubmit}>
                <label className={s.label}>
                    Paragraphs
                </label>
                <input 
                    className={s.number} 
                    type="text" 
                    maxLength={2} 
                    name='amount' 
                    id="numInput" 
                    value={count} 
                    onChange={(e) => setCount(e.target.value)} 
                />
                <button className={`${s.btnBeige} ${s.btn1}`} >
                    Generate
                </button>
                <CopyToClipboard text={`${data}`}>
                    <button className={s.btnBlack}>
                        Copy
                    </button>
                </CopyToClipboard>
            </form>
            <article>
                {text.map((data, index) => (
                    <p className={s.text} key={index}>
                        {data}
                    </p>
                ))}
            </article>
        </div>
    )
}