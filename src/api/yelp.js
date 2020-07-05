import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer 1-70yBJFwGfUobUa6SjKeE6aMZpsIGQZgOwUrVHg8n7jCR_s3WWHGdaD5RsDbn15qVnbufxlayf9-O9pQvIqsqTUOrNoNuzOnrUOZbO4wHXOIyLmoDc6WS233snhXnYx'
    }
});


