import React, { useEffect } from "react";
import { connect } from "react-redux";
import { giveAdvice } from "../actions/adviceActions";

const Advice = (props) => {
  // useEffect goes here

  useEffect(() => {
    const pause = setTimeout(() => {
      props.giveAdvice(pause);
    }, 1000);
  }, []);

  if (props.loading) {
    return (
      <>
        <p>Here comes another fabulous piece of advice</p>
      </>
    );
  }
  return (
    <section className="adviceSection">
      <div className="adviceCard flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>Revealing...</h2>
          </div>
          <div className="flip-card-back">
            <h2>{props.advice}</h2>
          </div>
        </div>
      </div>
      <button onClick={() => props.giveAdvice()} className="button">
        Get Advice!
      </button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
    loading: state.loading,
  };
};

const mapDispatchToProps = { giveAdvice };

export default connect(mapStateToProps, mapDispatchToProps)(Advice);
