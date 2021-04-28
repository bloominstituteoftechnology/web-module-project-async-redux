import React from 'react'
import {fetchApi} from '../actions/apiAction'


const Api =(props) =>{

    useEffect(()=> {
        props.fetchApi();

    }, [props.fetchapi])

    if (props.loading) {
        return (
            <p>getting another joke for ya..</p>
        )
    }

    return (
        <>
        <h2>{props.cat}</h2>


        <button onClick={() => props.fetchapi()}>get kitty pic</button>

        </>
    )
}

const mapStateToProps =(state) =>{
    return {
        cat: state.cat,
        loading: state.loading
    }
}

const mapDispatchToProps = {fetchApi}

export default connect(mapStateToProps, mapDispatchToProps)(Api)