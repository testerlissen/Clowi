import { NavLink } from 'react-router-dom'
import s from './NotFound.module.sass'

export default function NotFound() {
  return (
    <div className={s.section} >
      <div className={s.wrapper}>
        <p className={s.text}>
          Page not found
        </p>
        <h1 className={s.title} >404</h1>
        <div className={s.btnWrapper}>
          <NavLink className={s.btnBlack} to="/">
            Back to main page
          </NavLink>
        </div>
      </div>
    </div>
  )
}