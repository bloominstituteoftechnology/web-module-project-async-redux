import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./../Store/Actions/index";
import styled from "styled-components"

const STDIV = styled.div`
    display: flex wrap;
    align-content: center;
    border: blue 2px solid;
    border-radius: 20px;
    height: fit-content;
    width: 20%;
    padding: 1%;
    margin: 1%;
    background-color: #FFA500;
`

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    font-family: consolas;
    color: navy;
`

const AnimeList = (props) => {
    const { fetchData } = props;

    useEffect(()=>{
        fetchData()
    },[fetchData]);

    return (
        <Wrapper className="anime-wrapper">
            {props.loading ? <h2>Loading anime... UwU</h2> : null}
            {props.error ? <p className="error">{props.error}</p> : null}
            {props.anime.map((ani)=>{
                return(
                    <STDIV className="ani-wrapper">
                        <img src={ani.image_url} alt="DragonBall" />
                        <h3>{ani.title}</h3>
                        <p>{`Airing: ${ani.airing===false? "Completed" : "Airing"}`}</p>
                        <p>{`Aired from: ${`${new Date(ani.start_date).toISOString().slice(0,10)} to ${new Date(ani.end_date).toISOString().slice(0,10)}`}`}</p>
                        <p>{`Type: ${ani.type}`}</p>
                        <p>{`Age Rating: ${ani.rated}`}</p>
                        <p>{`Score: ${ani.score}`}</p>
                        <p>{ani.synopsis}</p>
                        <a href={ani.url}>Info</a>
                    </STDIV>
                )
            })}
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
      loading: state.loading,
      anime: state.anime,
      error: state.error
    };
  };

  export default connect(mapStateToProps, {fetchData})(AnimeList)