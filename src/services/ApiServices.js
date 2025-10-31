import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const addComment = async (comment) => {
    try {
        const response = await axios.post(`${BASE_URL}/comments`, comment);
        return response.data;
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error;
    }
};

export const getComments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/comments`);
        return response.data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
};