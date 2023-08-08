import React, { useState } from "react";
import { Upload, Button } from "antd";
import axios from "axios";

const FormComponent = ({ userId }) => {
  const [fileList, setFileList] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("userId", userId);

    try {
      const response = await axios.post(
        "https://attendance.gratiatechnology.com/api/upload-documents",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle API response here if needed
      console.log(response);

      // Clear uploaded files
      setFileList([]);
    } catch (error) {
      // Handle error
    }
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };
  return (
    <div>
      <Upload multiple fileList={fileList} onChange={handleChange}>
        <Button>Select Files</Button>
      </Upload>
      <Button onClick={handleUpload} disabled={fileList.length === 0}>
        Upload
      </Button>
    </div>
  );
};

export default FormComponent;
