import React from 'react'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import DdClass from './DdClass.js'
import styled from 'styled-components'
import {fetchData} from '../store'

const ListWrapper = styled.div`
display:grid;
grid-template-columns: repeat(6,1fr);
grid-template-rows: 1fr 1fr;`

const DdClassList = (props) => {

    const {fetchData,classes} = props
    
    useEffect(()=>{
        fetchData()
      },[fetchData])

    
          

    return(
        <div>
            {props.loading ? <p>Loading...</p>: null}
            {props.err ? <p>{props.err}</p> : null}
            {classes.length ? <ListWrapper>{classes.map(item => <DdClass key={item.index} class ={item}/> )}</ListWrapper> : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        loading: state.isLoading,
        classes: state.data,
        err: state.error
    }
}


export default connect (mapStateToProps,{fetchData})(DdClassList)