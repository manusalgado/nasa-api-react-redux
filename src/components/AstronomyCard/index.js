import React from 'react'
import { AstronomyCardWrapper } from './styles'

const AstronomyCard = (props) => {
    return (
        <AstronomyCardWrapper>
            <span>{props.date}</span>
        </AstronomyCardWrapper>
    )
}

export default AstronomyCard