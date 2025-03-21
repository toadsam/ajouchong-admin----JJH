import React, { useState } from "react";
import axios from "axios";
import "./notice.css";

const Notice = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFiles, setImageFiles] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setImageFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    
    if (imageFiles) {
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("imageFiles", imageFiles[i]);
      }
    }

    try {
      console.log("보낼 데이터:", formData);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/notice`, formData, {
        withCredentials: true, // 쿠키 포함
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      

      console.log("서버 응답:", response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error("서버 요청 실패:", error);

      if (error.response) {
        console.log("서버 응답 상태 코드:", error.response.status);
        console.log("서버 응답 데이터:", error.response.data);
        setMessage(error.response.data.message || "업로드 실패");
      } else {
        setMessage("서버와의 통신에 실패했습니다.");
      }
    }
  };

  return (
    <div className="notice-container">
      <h2 className="notice-title">공지사항 업로드</h2>
      <form className="notice-form" onSubmit={handleSubmit}>
        <label className="notice-label">
          제목:
          <input className="notice-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label className="notice-label">
          내용:
          <textarea className="notice-textarea" value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <br />
        <label className="notice-label">
          이미지 업로드:
          <input className="notice-file" type="file" multiple onChange={handleFileChange} />
        </label>
        <br />
        <button className="notice-button" type="submit">업로드</button>
      </form>
      {message && <p className="notice-message">{message}</p>}
    </div>
  );
};

export default Notice;
