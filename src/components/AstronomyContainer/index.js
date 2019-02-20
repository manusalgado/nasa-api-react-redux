import React from 'react'
import axios from 'axios'
import AstronomyCard from './../AstronomyCard'


class AstronomyContainer extends React.Component {
    state = {astronomy: []}

    componentDidMount () {
        const API_KEY = 'q6OsSmMTqLJIT5cxFFtqf0bZoUCvh9pK10Sfouqu'
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

        axios.get(END_POINT+API_KEY)
                .then(response => {

                    this.setState({
                        astronomy: response.data
                    })
                    console.log(this.state.astronomy)
                })
                .catch(error => {
                    console.log(error)
                    
                })
    }

    render () {

        const { astronomy } = this.state
        return (
            <div>
                <AstronomyCard data={astronomy}/>
            </div>
        )
    }
}

export default AstronomyContainer