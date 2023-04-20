import React from "react";
import PageHeaders from "../components/PageHeaders";
import { CaseStudiesData } from "@/data/Data";
import CaseStudyCard from "../components/CaseStudyCard";

const CaseStudiesPage = () => {
  return (
    <main>
      <PageHeaders
        textColor="black"
        paragraph="See how top communities, online schools, and brands globally are using Klas to power live learning for their students."
        text="Customer Case Studies"
      />

      <section className="pb-[120px] max-md:pb-[100px]">
        <div className="flex items-center justify-between max-[620px]:gap-[20px] max-[620px]:justify-center max-[620px]:flex-wrap gap-[25px] mt-[80px] mx-auto max-w-[700px]">
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <img
              src="images/casestudiespage/designpal-dark.svg"
              alt="design pal - useCases"
            />
          </div>
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <img
              src="images/casestudiespage/dev-career-dark.svg"
              alt="design pal - useCases"
            />
          </div>
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <img
              src="images/casestudiespage/ai-school-dark.svg"
              alt="design pal - useCases"
            />
          </div>
        </div>
      </section>

      <section className="py-[120px] max-md:py-[80px]">
        <div className="grid max-[600px]:grid-cols-1 mx-auto min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 max-md:px-[20px] px-[40px] max-w-[1300px] gap-[40px]">
          {CaseStudiesData.map((data) => (
            <CaseStudyCard data={data} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
