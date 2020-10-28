import axios from 'axios';

const KEY = 'AIzaSyCDpyGi80idI9MrbviVGyTXnLk7isDkD5Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: KEY
    }
});