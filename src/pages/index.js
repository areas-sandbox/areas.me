import React from "react"
import {
  Seo,
  Page,
  HeroSection,
  ArticlesSection
} from 'gatsby-theme-portfolio-minimal'

function Home() {
  return (
    <>
      <Seo title="areas.me" />
      <Page useSplashScreenAnimation>
        <HeroSection
          sectionId="hero"
        />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Posts"
          sources={['Blog']}
        />
      </Page>
    </>
  );
}

export default Home
