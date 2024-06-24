"use client";
import React from "react";

import "./CodeRule.css";

interface CodeRuleProps {
  id: number;
  text: string;
}

const CodeRule: React.FC<CodeRuleProps> = ({ id, text }) => {
  return (
    <div className="codeRule">
      <p className="codeRule_Number">{id}.</p>

      <p className="codeRule_Text">{text}.</p>
    </div>
  );
};

export default CodeRule;
