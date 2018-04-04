const initialState = {
                        error: null,
                        data: []
                    };

function addData(state=initialState, data) {
    let newStateData = state.data.slice(0);
    newStateData = data;
    for (let i=0; i<newStateData.length; i++) {
        newStateData[i].episodes = [];
        newStateData[i].image = "http://www.contactyellowpages.com/images/no_image.jpg";
    }
    return {
        ...state,
        error: null,
        data: newStateData
    }
}

function addImage(state=initialState, image) {
    let newStateData = state.data.slice(0);
    for (let i=0; i<newStateData.length; i++) {
        if (newStateData[i].image_urls.length>0) {
            if (newStateData[i].self === image.content_url) {
                newStateData[i].image = image.url;
            }
        } 
    }
    return {
        ...state,
        error: null,
        data: newStateData
    }
}

function addEpisode(state=initialState, episode) {
    let newStateData = state.data.slice(0);
    for (let i=0; i<newStateData.length; i++) {
        if (newStateData[i].items.length>0) {
            for (let j=0; j<newStateData[i].items.length; j++) {
                if (newStateData[i].items[j].content_url === episode.self) {
                    newStateData[i].episodes.push(episode);
                }
            }
        } 
    }
    return {
        ...state,
        error: null,
        data: newStateData
    }
}

function addEpisodeImage(state=initialState, episodeImage) {
    let newStateData = state.data.slice(0);
    for (let i=0; i<newStateData.length; i++) {
        if(newStateData[i].episodes.length>0) {
            for (let j=0; j<newStateData[i].episodes.length; j++) {
                if(newStateData[i].episodes[j].image_urls[0] === episodeImage.self) {
                    newStateData[i].episodes[j].image = episodeImage.url;
                } else {
                    newStateData[i].episodes[j].image = "http://www.contactyellowpages.com/images/no_image.jpg";
                }
            }
        }
    }
    return {
        ...state,
        error: null,
        data: newStateData
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SETS':
            return addData(state, action.data);
        case 'GET_IMAGE':
            return addImage(state, action.data);
        case 'GET_EPISODE':
            return addEpisode(state, action.data);
        case 'GET_EPISODE_IMAGE':
            return addEpisodeImage(state, action.data);
        case 'IMAGE_ERROR':
            return {
                ...state,
                error: true,
                data: []
            };
        case 'EPISODE_ERROR':
            return {
                ...state,
                error: true,
                data: []
            };
        case 'EPISODE_IMAGE_ERROR':
            return {
                ...state,
                error: true,
                data: []
            };
        case 'SETS_ERROR':
            return {
                ...state,
                error: true,
                data: []
            };
        default:
            return state;
    }
}