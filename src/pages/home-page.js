import React from "react";
import { WebsiteFeatures } from "../components/website-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";

export const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <WebsiteFeatures />
  </PageLayout>
);
