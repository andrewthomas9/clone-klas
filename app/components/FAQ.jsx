"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const AccordionSummaryStyles = {
    padding: "15px",
    marginLeft: "20px",
    marginRight: "20px",
    fontFamily: "DM sans, sans-serif"
}

const AccordionSummaryTypo = {
    fontWeight: 700,
    fontSize: "18px"
}

const AccordionDetailsTypo = {
    fontWeight: 300,
    fontSize: "16px",
    color: "rgba(0,0,0,.741)",
    paddingLeft: "15px",
    paddingRight: "15px",
}

const FrequentlyAskedQuestions = ({ data }) => {
  return (
    <section className="py-[80px]">
      <div className="container">
        <div className="max-md:mb-[40px] mb-[100px]">
          <h2 className="text-5xl leading-[62px] max-md:text-[32px] max-md:leading-[42px] text-black text-center font-bold">
            Frequently asked questions
          </h2>
        </div>
        <div className="box-shadow">
          {data.map((accordion) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={AccordionSummaryStyles}
              >
                <Typography 
                sx={AccordionSummaryTypo}
                >
                  {accordion.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                // className="font-[300] text-[rgba(0,0,0,.741)] text-[16px] leading-[18px]"
                sx={AccordionDetailsTypo}
                >
                  {accordion.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;

const ExpandMoreIcon = () => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.23332 0.741797L4.99998 3.97513L1.76665 0.741797C1.44165 0.416797 0.91665 0.416797 0.59165 0.741797C0.26665 1.0668 0.26665 1.5918 0.59165 1.9168L4.41665 5.7418C4.74165 6.0668 5.26665 6.0668 5.59165 5.7418L9.41665 1.9168C9.74165 1.5918 9.74165 1.0668 9.41665 0.741797C9.09165 0.42513 8.55832 0.416797 8.23332 0.741797Z"
        fill="black"
      ></path>
    </svg>
  );
};
