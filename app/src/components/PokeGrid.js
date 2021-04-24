import { connect } from "react-redux";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pkmnList }) => {
  return (
    <div className="poke-grid">
      {pkmnList.map((pkmn) => {
        return <PokeCard key={pkmn.url} pkmn={pkmn} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pkmnList: state.pkmnList,
  };
};

export default connect(mapStateToProps, {})(PokeGrid);
