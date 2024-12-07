import React from "react";
import Head from "next/head";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>
          Nexus SaaS
        </title>
        {desc && <meta name="description" content={desc} />}
        {/* */}
      </Head>

      {children}
    </div>
  );
};

export default Layout;
