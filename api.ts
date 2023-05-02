import axios from "axios";
import { Answer } from "@/types/type";

const handleImageUpload = async (file: File, setData: (data:Answer)=>void): Promise<void> => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await axios.post("http://127.0.0.1:8000/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },  
    }).then((res) => {
      setData(res.data);
    });
  } catch (error) {
    console.error(error);
  }
};

export default handleImageUpload;