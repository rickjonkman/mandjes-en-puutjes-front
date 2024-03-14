
import axios from "axios";
import {_imageEncode} from "../utilities/imageEncoder.js";

const useFetchImage = (url, setImage) => {

    const fetchImage = async () => {

        try {
            const response = await axios.get(url, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'image/jpeg',
                }
            });
            setImage(_imageEncode(response.data));
            console.log(response)
        } catch (e) {
            console.error(e);
        }
    }

    return {fetchImage};
}

export default useFetchImage;