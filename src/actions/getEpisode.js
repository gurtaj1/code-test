import axios from 'axios';

const baseURL = "http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000";

export default function getEpisode(uid){
    return (dispatch) => {
        return axios.get(baseURL+"/api/episodes/"+uid+"/items/")
        .then((response) => {
            dispatch({
                type: "GET_EPISODE",
                payload: response.data.objects
            })
        })
        .catch((error) => {
            dispatch({
                type: "EPISODE_ERROR",
                payload: error
            })
        })
    }
}