import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="color-scheme" content="light dark" />
        
        <meta name="theme-color" content="#23263a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#f7f9f9" media="(prefers-color-scheme: dark)" />

      </Helmet>
      
  </HelmetProvider>
  )
}

export default Meta