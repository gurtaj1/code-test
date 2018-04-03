import axios from 'axios';

const baseURL = "http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000";

export default function getSets(){
    return (dispatch) => {
        return axios.get(baseURL+"/api/sets/")  //get sets
        .then(response => {
            let dataArr = []; //create array to hold sets-data and extra data to be retrieved below
            for (let i=0; i<response.data.objects.length; i++) { //for each set
                dataArr.push(response.data.objects[i]);
                if (response.data.objects[i].image_urls.length>0) { //if there are any images for the current set
                    axios.get(baseURL+response.data.objects[i].image_urls[0]) //get the first image
                    .then(response1 => {
                        dataArr[i].image = response1.data.url; //add that image to the data array
                    })
                } else {
                    dataArr[i].image = "http://www.contactyellowpages.com/images/no_image.jpg";
                }
                dataArr[i].episodes = [];
                if (response.data.objects[i].items.length>0) { //if the set has items (equivalent to episodes and dividers)
                    for (let j=0; j<response.data.objects[i].items.length; j++) {
                        if (response.data.objects[i].items[j].content_type !== "divider") { //for each item which is an episode
                            axios.get(baseURL+response.data.objects[i].items[j].content_url) //get the episode data
                            .then(response2 => {
                                dataArr[i].episodes.push(response2.data) //add the episode data to the data array
                                dispatch({
                                    type: "GET_SETS",
                                    data: dataArr
                                })
                            })
                        }
                    }
                }
            }
        })
        .catch((error) => {
            dispatch({
                type: "SETS_ERROR",
                payload: error
            })
        })
    }
}