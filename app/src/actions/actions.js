import axios from 'axios';


//Define and export getMonster function
export const getMonster = () =>
{
    //REturn, pass in the dispatch()
    return (dispatch) => 
    {
        
        //Call dispatch, pass in fetchStart()
        dispatch(fetchStart());
        //Get the monsters
        axios.get("https://www.dnd5eapi.co/api/monsters/")


            //Then set the data
            .then(res=>
            {
                //Generate a random number to randomly choose a monster
                var randomNumber = Math.floor(Math.random() * 300);

                dispatch(fetchSuccess(res.data.results[`${randomNumber}`]));
                //dispatch(fetchSuccess(res.data.results[100]));
                console.log("NAMEEEEE>>>>",res.data.results[`${randomNumber}`].name);
                console.log(res.data.results[`${randomNumber}`].url);
                console.log("RESULTS>>>>", res.data.results);
                const monsterName = res.data.results[`${randomNumber}`].index;
                console.log("NEWMONSTERNAME", monsterName);
                
                //axios.get(`https://www.dnd5eapi.co/api/monsters/${randomNumber}.name`)

                axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterName}`)
                .then(res =>
                    {
                        console.log("url >>>>>",res.data.special_abilities, "<<<")
                        //console.log("url >>>>>",res.data.special_abilities[0].name, "<<<")
                        dispatch(fetchSuccess(res.data))
                    })
                   
               
            })

           
            

            //Or catch the error and log
            .catch(err => 
            {
                dispatch(fetchFail(err));
            });
    }
}

//Define and export fetchStart
export const FETCH_START = "FETCH_START";
export const fetchStart = ()=> 
{
    return({type: FETCH_START});
}

//Define and export fetchSuccess
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (monster)=> 
{
    return({type: FETCH_SUCCESS, payload: monster});
}

//Define and export fetchFail
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> 
{
    return({type: FETCH_FAIL, payload: error});
}