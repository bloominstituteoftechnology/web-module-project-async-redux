import axios from "axios";


export const GET_DOG_FACTS = "Get Dog Facts";
export const GOT_DOG_FACTS = "Got Dog Facts";

export const getDogFacts = city => dispatch => {
    axios.get(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all`).then(res => {
        console.log(res);
        const fact = res.data.fact;
        dispatch(gotDogFacts(fact)) 
    })
}

export const gotDogFacts = (fact) => {
    console.log(fact)
    return {type: GOT_DOG_FACTS, fact}
}
