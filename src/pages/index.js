import React from "react"
import {
  Seo,
  Page,
  HeroSection
} from 'gatsby-theme-portfolio-minimal'

function Home() {
  return (
    <>
      <Seo title="areas.me" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
      </Page>
    </>
  );
}

export default Home
