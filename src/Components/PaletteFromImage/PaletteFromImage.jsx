import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './PaletteFromImage.module.sass'
import DisplayImage from './DisplayImage'
import ColorThief from 'colorthief'
import { event } from 'jquery'

export default function PaletteFromImage() {

  useEffect(() => {
    document.title = "CLOWI / Palette From Image";
  }, []);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader()

    reader.onload = async (event) => {
      const img = new Image();
      
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 5);
        setUploadedImage(event.target.result);
        setColorPalette(colorPalette);
      };

      img.src = event.target.result;

    };

    reader.readAsDataURL(file);

  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Create palette from photo
      </h1>
      <form action="" className={s.form}>
          <label className={s.labelFile} htmlFor="file"></label>
          <input className={s.inputFile} type="file" id='file' accept='image/*' hidden onChange={uploadImage}/>
          <div className={s.iconWrapper}>
            <svg className={s.icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1875 10.9375V9.375C42.1839 8.13291 41.6889 6.94272 40.8106 6.06442C39.9323 5.18613 38.7421 4.69111 37.5 4.6875H6.25C5.00791 4.69111 3.81772 5.18613 2.93942 6.06442C2.06113 6.94272 1.56611 8.13291 1.5625 9.375V34.375C1.56611 35.6171 2.06113 36.8073 2.93942 37.6856C3.81772 38.5639 5.00791 39.0589 6.25 39.0625H7.8125" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M43.9463 12.5H13.8662C11.3858 12.5 9.375 14.5108 9.375 16.9912V40.8213C9.375 43.3017 11.3858 45.3125 13.8662 45.3125H43.9463C46.4267 45.3125 48.4375 43.3017 48.4375 40.8213V16.9912C48.4375 14.5108 46.4267 12.5 43.9463 12.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M36.418 24.4326C38.0775 24.4326 39.4229 23.0969 39.4229 21.4492C39.4229 19.8015 38.0775 18.4658 36.418 18.4658C34.7584 18.4658 33.4131 19.8015 33.4131 21.4492C33.4131 23.0969 34.7584 24.4326 36.418 24.4326Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
              <path d="M33.4131 36.3447L24.9023 27.9082C24.3583 27.3707 23.6306 27.0596 22.8661 27.0376C22.1015 27.0157 21.3572 27.2846 20.7832 27.7901L9.375 37.8555M25.9014 45.3125L37.4824 33.8154C38.0153 33.2899 38.724 32.9804 39.4718 32.9466C40.2195 32.9129 40.9532 33.1574 41.5312 33.6328L48.4375 39.3467" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className={s.iconText}>
              drop or upload image here
            </p>
          </div>
          <div className={s.image}>
            <DisplayImage 
              uploadedImage={uploadedImage} 
              colorPalette={colorPalette}
            />
          </div>
      </form>
    </div>
  )
}