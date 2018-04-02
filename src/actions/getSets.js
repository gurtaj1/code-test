import axios from 'axios';

const baseURL = "http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000";

export default function getSets(){
    return (dispatch) => {
        return axios.get(baseURL+"/api/sets/")
        .then((response) => {
            let dataArr = [];
            for (let i=0; i<response.data.objects.length; i++) {
                dataArr.push(response.data.objects[i]);
                if (response.data.objects[i].image_urls.length>0) {
                    axios.get(baseURL+response.data.objects[i].image_urls[0])
                    .then((response1) => {
                        dataArr[i].image = response1.data.url;
                    })
                } else {
                    dataArr[i].image = null;
                }
            }
            console.log(dataArr)
            dispatch({
                type: "GET_SETS",
                data: dataArr
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

// function combineImageAndSet(response) {
//     let dataArr = [];
//     let imageArr = [];
//     for (let i=0; i<response.data.objects.length; i++) {
//         dataArr.push(response.data.objects[i]);
//         if (response.data.objects[i].image_urls.length>0) {
//             axios.get(baseURL+response.data.objects[i].image_urls[0])
//             .then((response1) => {
//                 imageArr.push(response1.data.url);
//             })
//         } else {
//             imageArr.push(undefined);
//         }
//     }
//     console.log(dataArr);
//     console.log(imageArr);
// }