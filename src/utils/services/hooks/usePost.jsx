import instanceAxios from "../axiosConfig";
import { LOCAL_URL } from "../constants";



const usePost = async ({ url, body, token }) => {

    try {
        const data = await instanceAxios.post(`${LOCAL_URL}/${url}`,body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return { data };

    } catch (error) {
        throw error
    }
  


};

export default usePost;
