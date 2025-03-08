import React from "react";

import { useParams } from "next/navigation";

interface NewsItemProps {
  text: string;
  date: any;
}

const NewsItem: React.FC<NewsItemProps> = ({ text, date }) => {
  const params = useParams();

  const getTitle = () => {
    const tagRegex = /<i=3>(.*?)<\/i>/g;

    let h3Content: any;

    let match;

    while ((match = tagRegex.exec(text)) !== null) {
      h3Content = match[0];
    }

    return h3Content;
  };

  const getText = () => {
    const tagRegex = /<i=3>.*?<\/i>/g;

    let content = text.replace(tagRegex, "").trim();

    return content.replace(/\n\n/g, "<br/><br/>");
  };

  const formatDate = () => {
    const initialDate = new Date(date);

    const day = initialDate.getDate();
    const month = initialDate.getMonth() + 1;
    const year = initialDate.getFullYear();

    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month).padStart(2, "0");

    const newYear = year + 160;

    return params.locale === "ru"
      ? `${formattedDay}/${formattedMonth}/${newYear}`
      : `${formattedMonth}/${formattedDay}/${newYear}`;
  };

  return (
    <div className="relative w-auto h-auto">
      <div className="flex justify-between items-center py-[10px] px-[20px] w-full h-auto bg-[#121c26]">
        <h3
          dangerouslySetInnerHTML={{ __html: getTitle() }}
          className="text-theme text-[1.25rem] mlarge:text-[1.125rem] text-left font-primary font-semibold"
        />

        <p className="text-theme text-[1rem] mlarge:text-[0.875rem] text-right font-primary font-medium">
          {formatDate()}
        </p>
      </div>

      <div className="py-[15px] px-[20px] w-full bg-[#213148]">
        <p
          dangerouslySetInnerHTML={{ __html: getText() }}
          className="text-white text-[1rem] mlarge:text-[0.875rem] text-left font-primary font-normal"
        ></p>
      </div>
    </div>
  );
};

export default NewsItem;
