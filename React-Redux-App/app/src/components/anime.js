import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./../Store/Actions/index";
import styled from "styled-components"

const STDIV = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    border: blue 2px solid;
    border-radius: 20px;
    height: fit-content;
    width: 20%;
    padding: 1%;
    margin: 1%;
    background-color: #FFA500;
`

const STH2 = styled.h2`
   margin:0;
   padding: 1%;
   font-size: 3rem;
   font-family: 'Franklin Gothic Medium';
   color: navy;
`

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    font-family: sans-serif;
    color: navy;
`

const STIMG = styled.img`
    border: blue 2px solid;
    border-radius: 20px;

`

const STButtonDiv = styled.div`
    display: flex;
    flex-flow: wrap row;
    height: 40px;
    width: 120px;
    justify-content: center;
    align-content: center;

`

const STA = styled.a`
    display: flex;
    width: 100%;
    height: 100%;
    border: solid white 3px;
    border-radius: 20px;
    text-decoration:none;
    align-items:center;
    justify-content: center;
    color: yellow;
    background-color: navy;
    transition: 250ms;

    &:hover {
        background-color: white;
        border: solid black 3px;
        color: black;
        font-weight: bold;
        font-size: 1.25rem;
    }
`

const AnimeList = (props) => {
    const { fetchData } = props;

    useEffect(()=>{
        fetchData()
    },[fetchData]);

    return (
        <Wrapper className="anime-wrapper">
            {props.loading ? <STH2>Loading anime... UwU</STH2> : null}
            {props.error ? <p className="error">{props.error}</p> : null}
            {props.anime.map((ani)=>{
                if (ani.title.includes("Dragon Ball")){
                    return(
                        <STDIV className="ani-wrapper">
                            <STIMG src={ani.image_url} alt="DragonBall" />
                            <h3>{ani.title}</h3>
                            <p>{`Airing: ${ani.airing===false? "Completed" : "Airing"}`}</p>
                            <p>{`Aired from: ${`${new Date(ani.start_date).toISOString().slice(0,10)} to ${new Date(ani.end_date).toISOString().slice(0,10)}`}`}</p>
                            <p>{`Type: ${ani.type}`}</p>
                            <p>{`Age Rating: ${ani.rated}`}</p>
                            <p>{`Score: ${ani.score}`}</p>
                            <p>{ani.synopsis}</p>
                            <STButtonDiv>
                                <STA href={ani.url}>More Info</STA>
                            </STButtonDiv>
                        </STDIV>
                    )
                }
                else{
                    return(null)
                }
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