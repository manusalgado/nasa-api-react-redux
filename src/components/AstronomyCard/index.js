import React from 'react'
import { AstronomyCardWrapper } from './styles'

const AstronomyCard = (props) => {
    const { title, url, hdurl, explanation, date, copyright, media_type } = props.data
    return (
        <AstronomyCardWrapper>
            {media_type === "video" 
                ? 
                <iframe src={url} height='200' width='300' title='video'></iframe>
                : 
                <a href={hdurl} className='AstronomyCardWrapper__image-container'>
                <img src={url} alt={title}/>
                </a>}
            <h3>{title}</h3>
            <p>{explanation}</p>
            <span>{date}</span>
            <article>{copyright}</article>
        </AstronomyCardWrapper>
    )
}

export default AstronomyCard