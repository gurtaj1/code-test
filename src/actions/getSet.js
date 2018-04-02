import axios from 'axios';

const baseURL = "http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000";

export default function getSet(uid){
    return (dispatch) => {
        return axios.get(baseURL+"/api/sets/"+uid+"/")
        .then((response) => {
            dispatch({
                type: "GET_SET",
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: "SET_ERROR",
                payload: error
            })
        })
    }
}