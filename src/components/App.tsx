import React, {useState} from 'react';
import imge from '../assets/img/img1.svg'
import imf from '../assets/img/imf2.jpg'
// import * as React from 'react'





export default function App (){
    const [git, setGit] = useState('hhh')
    console.log(git);


    return<div>
        <img src={imf} alt='fff'/>
        <h1>Работате fgdfgfgfg</h1>
    </div>
}