import {useEffect} from"react";
import {connect} from"react-redux";
import {fetchData} from"../action/actions";

const KanyeSaid = (props) =>{
    useEffect(()=>{
        props.fetchData();
    },[])
    
    return(
        <div>
            {props.isLoading ? <h3> loading data...</h3>:null}
            {props.error ? <h3>{props.error}</h3>:null}
            <p> Kanye said: {props.quotes}</p>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        isLoading:state.isLoading,
        quotes:state.quotes
    }
}
export default connect(mapStateToProps,{fetchData})(KanyeSaid);