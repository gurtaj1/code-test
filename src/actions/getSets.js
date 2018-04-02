import axios from 'axios';

const baseURL = "http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000";

export default function getSets(){
    return (dispatch) => {
        return axios.get(baseURL+"/api/sets/")
        .then((response) => {
            console.log(response.data.objects)
            dispatch({
                type: "GET_SETS",
                payload: response.data.objects
            })
        })
        .catch((error) => {
            dispatch({
                type: "SETS_ERROR",
                payload: error
            })
        })
    }
}