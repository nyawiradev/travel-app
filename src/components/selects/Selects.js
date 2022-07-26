import React from 'react'
import './SelectsStyles.css'

import Malindi from '../../assets/malindi.jpg'
import Amboseli from '../../assets/amboseli.jpg'
import Maasai from '../../assets/maasai.jpg'
import Tsavo from '../../assets/tsavo.jpg'
import Nairobi from '../../assets/nairobi.jpg'
import Naivasha from '../../assets/naivasha.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='tours' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Malindi} text='Malindi Island' />
                <SelectsImg bgImg={Amboseli} text='Amboseli' />
                <SelectsImg bgImg={Maasai} text='Masai Mara' />
                <SelectsImg bgImg={Tsavo} text='Tsavo National Park' />
                <SelectsImg bgImg={Nairobi} text='Nairobi National Park' />
                <SelectsImg bgImg={Naivasha} text='Lake Naivasha' />
            </div>

        </div>
    )
}

export default Selects
