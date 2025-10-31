


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../styles/Sharing.css";

const Sharing = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  // שליפת כל התגובות מהשרת
  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:9000/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // טעינה ראשונית
  useEffect(() => {
    fetchComments();
  }, []);

  // שליחת תגובה
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await axios.post("http://localhost:9000/comments", {
        name,
        text,
      });
      setName("");
      setText("");
      fetchComments(); // רענון התגובות
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "right" }}>
      <div className="last-text">
        <p>{t("sharing.text1")}</p>
        <p>{t("sharing.text2")}</p>

        <span className="image5">
          <img src="image5.png" alt="profile" width="250" height="250" />
        </span>
      </div>

      <h2>{t("sharing.title")}</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder={t("sharing.namePlaceholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder={t("sharing.textPlaceholder")}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {t("sharing.sendButton")}
        </button>
      </form>

      <h3>{t("sharing.recentComments")}</h3>
      <ul>
        {comments.map((c, i) => (
          <li
            key={i}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <strong>{c.name || t("sharing.anonymous")}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sharing;
