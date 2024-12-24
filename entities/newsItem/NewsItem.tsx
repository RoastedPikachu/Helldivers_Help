import React from "react";

import "./newsItem.css";

interface NewsItemProps {
  title: string;
  createdAt: string;
  cover: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, createdAt, cover }) => {
  const formatDate = () => {
    const date = new Date(createdAt);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const formattedMonth = monthNames[month];

    return `${day} ${formattedMonth} ${year}`;
  };
  return (
    <div className="newsItem">
      <span className="newsItem-head">
        <h4 className="newsItem-head-title">{title}</h4>

        <p className="newsItem-head-date">{formatDate()}</p>
      </span>

      <img src={cover} alt={title} className="newsItem-cover" />
    </div>
  );
};

export default NewsItem;
