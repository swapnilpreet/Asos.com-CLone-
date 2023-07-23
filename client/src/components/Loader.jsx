import React from 'react'
import loadergif from '../gif/1492.gif'
import { Image} from '@chakra-ui/react'
import style from './loader.module.css'

const Loader = () => {
  return (
      <div className={style.preloader}>
        <div className={style.continer}>
             <Image src={loadergif} alt="gif"/>
        </div>
      </div>
  )
}

export default Loader;