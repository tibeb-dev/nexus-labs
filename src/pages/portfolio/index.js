import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import PageHeader from '@components/common/PageHeader';
import AiCompanyPortfolio from "@components/aiCompany/AiCompanyPortfolio";
import Footer from "@layout/Footer/Footer";

const index = () => {
  return (
    <Layout>
      <Navbar />
      <PageHeader
        title="Our Portfolio"
        desc= " "
      />
      <div className="pay-body-color">
        <AiCompanyPortfolio />
        <Footer footerDark />
      </div>
    </Layout>
  );
};

export default index;
