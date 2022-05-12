import axios from 'axios';

const URL = 'http://localhost:8000';

export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/Donate`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}
export const createPosts = async (post) => {
    try {
        return await axios.post(`${URL}/Request`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllPosts = async () =>  {
    try {
        let response = await axios.get(`${URL}/posts`);
        return response.data;
    } catch(error) {
        console.log('Error while calling getAllPosts API', error);
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}

export const deletePost = async (id) => {
    try {
        return await axios.delete(`${URL}/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}

export const getAllDonors = async () => {
    try {
        let response = await axios.get(`${URL}/data`);
        return response.data;
    } catch (error) {
        console.log('Error while calling donate API ', error);
    }
}


export const getAllBloodbanks = async () => {
    try {
        let response = await axios.get(`${URL}/bldbank`);
        return response.data;
    } catch (error) {
        console.log('Error while calling donate API ', error);
    }
}