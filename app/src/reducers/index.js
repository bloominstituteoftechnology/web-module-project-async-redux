import { FETCH_TERMS_FAIL, FETCH_TERMS_SUCCESS, FETCH_TERMS_LOADING } from "../actions";

const initialState = {
    termResults: [{
        artistName: "Sure Sure",
        country: "USA",

        artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/16/d9/77/16d9774c-07fd-88a7-e9cd-f6a784c44391/source/100x100bb.jpg",
        artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/16/d9/77/16d9774c-07fd-88a7-e9cd-f6a784c44391/source/60x60bb.jpg",
        artworkUrl30: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/16/d9/77/16d9774c-07fd-88a7-e9cd-f6a784c44391/source/30x30bb.jpg",

        artistViewUrl: "https://music.apple.com/us/artist/sure-sure/1087919613?uo=4",
    }, {
        artistName: "Drake",
        country: "USA",

        artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/b2/31/57/b23157b2-2194-467c-d9ad-a40f8fa4a383/source/100x100bb.jpg",
        artworkUrl60: "",
        artworkUrl30: "",

        artistViewUrl: "https://music.apple.com/us/artist/drake/271256?uo=4",
    }],
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TERMS_LOADING:
            return ({
                ...state,
                error: '',
                isFetching: true,
            })
        case FETCH_TERMS_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                termResults: action.payload,
            })
        case FETCH_TERMS_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            })
        default:
            return state;
    }
};