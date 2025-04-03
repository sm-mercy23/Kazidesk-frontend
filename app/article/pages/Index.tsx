import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ArticleHeader from "../components/article/ArticleHeader";
import ArticleImage from "../components/article/ArticleImage";
import ArticleContent from "../components/article/ArticleContent";
import Header from "@/components/shared/AppHeader";
import AppFooter from "@/components/shared/AppFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="justify-center items-center bg-white flex w-full flex-col overflow-hidden px-[70px] py-[42px] max-md:max-w-full max-md:px-5">
        {}
        <Header></Header>

        <ArticleHeader
          title="Kazidesk has been recognized by the Financial Times as the fastest growing enterprise software in sub-saharan Africa"
          date="Feb 20, 2025"
        />

        <div className="w-full mt-[70px] max-md:max-w-full max-md:mt-10">
          <ArticleImage
            src="/auth/article/article.jpg"
  
            alt="Financial Times recognition"
          />

          <ArticleContent
            summary="Discover how Jeton has secured its place among Europe's fastest-growing companies, ranking in the prestigious Financial Times 1000 list. Learn about their remarkable growth journey, awards, and industry recognition."
            content={
              <>
                Global payment provider, LA Orange limited, trading as Jeton,
                found its place among the top 1000 largest growing companies in
                Europe as ranked by Financial Times (FT) and compiled in
                collaboration with data provider Statista. It placed 75. on the
                FT1000 list, showing some of Europe's rapidly expanding
                businesses, many of which are now global industry leaders.
                <br />
                <br />
                This recognition comes after years of diligent work and
                expansion for Jeton, which has grown significantly since its
                establishment in 2018. The company has since been providing a
                comprehensive range of services, offering a wider selection of
                products, and becoming a reputable partner to individuals and
                corporations. As a result of its global expansion, the company
                currently holds operational licences in the United Kingdom,
                Cyprus, and the Commonwealth of Dominica. These achievements
                have merited them prestigious awards such as AIBC Dubai Awards
                2022, and Online Payment Service Provider of Year Award at Sigma
                2023. Additionally, Jeton has been officially certified by the
                International Standard Organisation (ISO) with ISO 27001 for its
                top-tier security measurements.
                <br />
                <br />
                &quot;Saaly Temirkanov, Executive Director of Jeton, expressed
                gratitude for the company's inclusion on this esteemed list,
                emphasising the team's commitment, hard work, and varied
                expertise. &quot;We are excited about our recent achievement and
                the opportunities it presents for our future,&quot; he remarked.
                &quot;This acknowledgment also underscores the unwavering
                support and confidence of our partners in our capacity to
                pioneer new ventures and deliver exceptional results on a daily
                basis.&quot; Temirkanov's sentiments echo Jeton's remarkable
                growth trajectory, evidenced by staggering revenue figures.
                Comparing revenue from 2019, which stood at £1,155,946, to 2022,
                where it soared to £25,132,227, reflects an extraordinary
                percentage increase, highlighting the company's resilience and
                strategic acumen in navigating dynamic market conditions.&quot;
                <br />
                <br />
                The eighth annual edition of the FT Europe's Fastest Growing
                Companies, associated with Statista, is published in the FT and
                on FT.com in March 2024. Regarded as one of the entrepreneurial
                world's most valued league tables, it ranks the 1,000 European
                companies with the most substantial revenue growth across 31
                European territories.
              </>
            }
          />
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Index;
