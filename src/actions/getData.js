import axios from 'axios';

const baseURL = "http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000";

export default function getData(){
    return (dispatch) => {
        return axios.get(baseURL+"/api/sets/")  //get sets
        .then(response => {
            dispatch({
                type: "GET_SETS",
                data: response.data.objects
            })
            return response;
        })
        .then(response => {
            response.data.objects.forEach(object => {
                if (object.image_urls.length>0) {
                    return axios.get(baseURL+object.image_urls[0])  //get first image for each set which has image(s)
                    .then(res => {
                        dispatch({
                            type: "GET_IMAGE",
                            data: res.data
                        })
                    })
                    .catch(error => {
                        dispatch({
                            type: "IMAGE_ERROR",
                            payload: error
                        })  
                    })
                }
            })
            return response;
        })
        .then(response => {
            response.data.objects.forEach(object => {
                if (object.items.length>0) {
                    object.items.forEach(item => {
                        if (item.content_type === "episode") {
                            axios.get(baseURL+item.content_url)  //get each episode-item for each set which has items in it
                            .then(res => {
                                dispatch({
                                    type: "GET_EPISODE",
                                    data: res.data
                                })
                                return res;
                            })
                            .then(res => {
                                if (res.data.image_urls.length>0){
                                    axios.get(baseURL+res.data.image_urls[0])  //get first episode-image for each episode which has image(s)
                                    .then(res1 => {
                                        dispatch({
                                            type: "GET_EPISODE_IMAGE",
                                            data: res1.data
                                        })
                                    })
                                    .catch(error => {
                                        dispatch({
                                            type: "EPISODE_IMAGE_ERROR",
                                            payload: error
                                        })   
                                    })
                                }
                            })
                            .catch(error => {
                                dispatch({
                                    type: "EPISODE_ERROR",
                                    payload: error
                                })   
                            })
                        }
                    })
                }
            })
        })
        .catch(error => {
            dispatch({
                type: "SETS_ERROR",
                payload: error
            })
        })
    }
}


// .then(response => {
//     let dataArr = []; //create array to hold sets-data and extra data to be retrieved below
//     for (let i=0; i<response.data.objects.length; i++) { //for each set
//         dataArr.push(response.data.objects[i]);
//         if (response.data.objects[i].image_urls.length>0) { //if there are any images for the current set
//             axios.get(baseURL+response.data.objects[i].image_urls[0]) //get the first image
//             .then(response1 => {
//                 dataArr[i].image = response1.data.url; //add that image to the data array
//             })
//         } else {
//             dataArr[i].image = "https://canadatwoway.com/wp-content/uploads/2017/11/No_Image_Available.jpg";
//         }
//         dataArr[i].episodes = []; // create array within data array for storing episode data
//         if (response.data.objects[i].items.length>0) { //if the set has items (equivalent to episodes and dividers)
//             for (let j=0; j<response.data.objects[i].items.length; j++) {
//                 if (response.data.objects[i].items[j].content_type === "episode") { //for each item which is an episode
//                     axios.get(baseURL+response.data.objects[i].items[j].content_url) //get the episode data
//                     .then(response2 => {
//                         if (response2.data.image_urls.length>0){ //if there are any image api urls provoded
//                             axios.get(baseURL+response2.data.image_urls[0]) //make a call to the image api url
//                             .then(response3 => {
//                                 response2.data.image = response3.data.url; //add the direct image url to the episode data object
//                                 dataArr[i].episodes.push(response2.data); //add the episode data to the data array
//                                 dispatch({
//                                     type: "GET_SETS",
//                                     data: dataArr
//                                 })
//                             })
//                         } else {
//                             response2.data.image = "https://canadatwoway.com/wp-content/uploads/2017/11/No_Image_Available.jpg";
//                             dataArr[i].episodes.push(response2.data);
//                             dispatch({
//                                 type: "GET_SETS",
//                                 data: dataArr
//                             })
//                         }
//                     })
//                 }
//             }
//         }
//     }
// })