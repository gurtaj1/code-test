import noImage from '../images/no_image.jpg';

const initialState = {
                        error: null,
                        sets: []
                    };

function addSets(state=initialState, sets) {
    let newStateSets = state.sets.slice(0);
    newStateSets = sets;
    for (let i=0; i<newStateSets.length; i++) {
        newStateSets[i].episodes = [];
        newStateSets[i].image = noImage;
    }
    return {
        ...state,
        error: null,
        sets: newStateSets
    }
}

function addImage(state=initialState, image) {
    let newStateSets = state.sets.slice(0);
    for (let i=0; i<newStateSets.length; i++) {
        if (newStateSets[i].image_urls.length>0) {
            if (newStateSets[i].self === image.content_url) {
                newStateSets[i].image = image.url;
            }
        } 
    }
    return {
        ...state,
        error: null,
        sets: newStateSets
    }
}

function addEpisode(state=initialState, episode) {
    let newStateSets = state.sets.slice(0);
    for (let i=0; i<newStateSets.length; i++) {
        if (newStateSets[i].items.length>0) {
            for (let j=0; j<newStateSets[i].items.length; j++) {
                if (newStateSets[i].items[j].content_url === episode.self) {
                    newStateSets[i].episodes.push(episode);
                }
            }
        } 
    }
    return {
        ...state,
        error: null,
        sets: newStateSets
    }
}

function addEpisodeImage(state=initialState, episodeImage) {
    let newStateSets = state.sets.slice(0);
    for (let i=0; i<newStateSets.length; i++) {
        if(newStateSets[i].episodes.length>0) {
            for (let j=0; j<newStateSets[i].episodes.length; j++) {
                if(newStateSets[i].episodes[j].image_urls[0] === episodeImage.self) {
                    newStateSets[i].episodes[j].image = episodeImage.url;
                } else {
                    newStateSets[i].episodes[j].image = noImage;
                }
            }
        }
    }
    return {
        ...state,
        error: null,
        sets: newStateSets
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SETS':
            return addSets(state, action.data);
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
                sets: []
            };
        case 'EPISODE_ERROR':
            return {
                ...state,
                error: true,
                sets: []
            };
        case 'EPISODE_IMAGE_ERROR':
            return {
                ...state,
                error: true,
                sets: []
            };
        case 'SETS_ERROR':
            return {
                ...state,
                error: true,
                sets: []
            };
        default:
            return state;
    }
}