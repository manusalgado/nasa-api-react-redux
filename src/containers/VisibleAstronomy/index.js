import Astronomy from '../../components/Astronomy'
import React from 'react'
import { getData } from '../../actions'
import { connect } from 'react-redux'

class VisibleAstronomy extends React.Component {
    componentDidMount(){
        this.props.getData()
    }
    render(){
        const {astronomy} = this.props
        return (
            <Astronomy astronomy={astronomy}/>
        )
    }
}

const mapStateToProps = state => ({
    astronomy: state.astronomy,
})

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleAstronomy)