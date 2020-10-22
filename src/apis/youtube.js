import axios from "axios";

const key = "AIzaSyARbhqgP14vwHI_kxlfdzEmSNXuXNiwED0";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      part: "snippet",
      maxResults: 10,
      key
   }
});
