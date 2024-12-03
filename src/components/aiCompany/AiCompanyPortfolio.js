import Link from "next/link";
import { useState, useEffect } from 'react'
import {
  FigmaOriginal, 
  FastapiOriginal, 
  PythonOriginal,
  PhpPlain,
  FlaskOriginal,
  NodejsOriginalWordmark,
  NestjsOriginal,
  SeleniumOriginal,
  DockerOriginal,
  AmazonwebservicesOriginalWordmark,
  MysqlOriginal,
  NextjsOriginal,
  ReactOriginal,
  PostgresqlOriginal,
  DjangoPlain,
  ExpressOriginal
} from 'devicons-react'

const data = [
  {
    title: 'Wpprovider.nl',
    link: 'https://wpprovider.nl',
    source: '/nexus/jjp.png',
    description: "Our web design project showcases our expertise in crafting captivating online experiences.Through meticulous attention to detail and innovative design concepts, we transform visions into reality.Each website we create is a unique reflection of our client's brand identity, tailored to resonate with their target audience.",
    usedSoftware: [
      {
        name: 'Figma',
        icon: <FigmaOriginal />
      },
      {
        name: 'React',
        icon: <ReactOriginal />
      },
      {
        name: 'Python',
        icon: <PythonOriginal />
      },
      {
        name: 'Django',
        icon: <DjangoPlain />
      },
      {
        name: 'FastAPI',
        icon: <FastapiOriginal />
      },
      {
        name: 'PHP',
        icon: <PhpPlain />
      },
      {
        name: 'PostgreSQL',
        icon: <PostgresqlOriginal />
      },
      {
        name: 'Docker',
        icon: <DockerOriginal />
      },
      {
        name: 'AWS',
        icon: <AmazonwebservicesOriginalWordmark />
      }
    ],
    category: 'Web'
  },
  {
    title: 'Gift XD',
    link: 'https://giftxd.com',
    source: '/nexus/jjp.png',
    description: 
"We developed a robust and secure Gift Card Payment System to enable seamless transactions for users. The system allows customers to easily purchase, redeem, and manage gift cards, integrating with various payment gateways for a smooth and reliable payment experience. We focused on ensuring security, scalability, and user-friendliness to support both customers and merchants efficiently.",
    usedSoftware: [
      {
        name: 'React',
        icon: <ReactOriginal />
      },
      {
        name: 'Python',
        icon: <PythonOriginal />
      },
      {
        name: 'NodeJs',
        icon: <NodejsOriginalWordmark />
      },
      {
        name: 'Nest',
        icon: <NestjsOriginal />
      },
      {
        name: 'FastAPI',
        icon: <FastapiOriginal />
      },
      {
        name: 'Selenium',
        icon: <SeleniumOriginal />
      },
      {
        name: 'MySQL',
        icon: <MysqlOriginal />
      },
    ],
    category: 'Web'
  },

  {
    title: 'Redesign Group',
    link: 'https://redesign-group.com',
    source: '/nexus/mereb.png',
    description: 
  "We developed a robust and secure Gift Card Payment System to enable seamless transactions for users. The system allows customers to easily purchase, redeem, and manage gift cards, integrating with various payment gateways for a smooth and reliable payment experience. We focused on ensuring security, scalability, and user-friendliness to support both customers and merchants efficiently.",

    usedSoftware: [
      {
        name: 'NextJs',
        icon: <NextjsOriginal />
      },
      {
        name: 'Python',
        icon: <PythonOriginal />
      },
      {
        name: 'Docker',
        icon: <DockerOriginal />
      },
      {
        name: 'AWS',
        icon: <AmazonwebservicesOriginalWordmark />
      },
      {
        name: 'SQL',
        icon: <MysqlOriginal />
      }
    ],
    category: 'Web'
  },


  {
    title: 'BlueOceanSP.ai',
    link: 'https://blueoceansp.ai',
    source: '/nexus/social-media.png',
    description: 
"We are proud to partner with BlueOceanSP.ai, a leading AI-driven platform focused on providing innovative solutions for businesses. Together, we are leveraging cutting-edge AI technologies to help companies streamline operations, optimize decision-making, and drive growth. Our collaboration combines our IT expertise with BlueOceanSP.ai's advanced AI capabilities to deliver transformative results.",
    usedSoftware: [
      {
        name: 'Python',
        icon: <PythonOriginal />
      },
      {
        name: 'Flask',
        icon: <FlaskOriginal />
      },
      {
        name: 'FastAPI',
        icon: <FastapiOriginal />
      },
      {
        name: 'Selenium',
        icon: <SeleniumOriginal />
      },
      {
        name: 'Docker',
        icon: <DockerOriginal />
      }
    ],
    category: 'LLM'
  },
  {
    title: 'uncle.ke',
    link: 'https://uncle.ke',
    source: '/nexus/savvy-web.png',
    description: 
    "We developed uncle.ke, a dynamic eCommerce platform designed to provide an intuitive shopping experience for customers. The website features easy navigation, secure payment processing, and seamless product management. Our team implemented a robust backend with a smooth, responsive frontend, ensuring fast performance and scalability to support a growing online business.",
    usedSoftware: [
      {
        name: 'NodeJs',
        icon: <NodejsOriginalWordmark />
      },
      {
        name: 'ExpressJs',
        icon: <ExpressOriginal />
      },
      {
        name: 'ReactJs',
        icon: <ReactOriginal />
      },
      {
        name: 'Docker',
        icon: <DockerOriginal />
      },
      {
        name: 'AWS',
        icon: <AmazonwebservicesOriginalWordmark />
      },
    ],
    category: 'Web'
  },
]

const RenderPortfolioItem = ({ title, link, source, description, children }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div className="col-md-6 col-xl-5">
      <div className="qty-portfolio">

        <div className="qty-portfolio__img">
          <a
            target="_blank"
            href={link}
            className="qty-portfolio__img-link ratio ratio-4x3"
          >
            <img
              src={ source }
              alt="image"
              className="img-fluid object-fit-cover"
            />
          </a>
        </div>
        <div className="qty-portfolio__body">
          <a
            target="_blank"
            href={ link }
            className="aih-color-two fs-24 fw-600"
          >
            <h6 className="aih-color-two fs-24 fw-600">
              { title }
            </h6>
          </a>

          <p className={openAccordion ? 'h-full' : 'limit-2-line-text'} >
            { description }
          </p>
          <button onClick={() => setOpenAccordion(!openAccordion)} className="bg-transparent border-0">
            <small className="text-blue-400"> Read { openAccordion ? 'less' : 'more' } </small>
          </button>

          <span style={{ gap: '12px', display: 'flex', fontWeight: 'semibold' }}>
            { children }
          </span>
        </div>
      </div>
    </div>
  )
}

const AiCompanyPortfolio = () => {
  const [selected, setSelected] = useState('')
  const [filterData, setFilterData] = useState(data);

  function filterDataByCategory(selectedCategory) {
    if (selectedCategory == '') {
      // If no category is selected, return all items
      setFilterData((prev) => prev = data);
      return
    }

    setFilterData(data.filter(item => item.category === selectedCategory));
  }

  useEffect(() => {
    console.log(selected, "select")
    filterDataByCategory(selected) 
  }, [selected])

  return (
    <>
      <div className="aih-portfolio-area ah-bg ptb-60">
        <div className="container">
          <div className="row align-items-center">

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="tab-button mb-5">
                  <ul
                    className="nav nav-pills d-flex justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setSelected('')}
                        className="nav-link active"
                        id="pills-all-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-all"
                        type="button"
                        role="tab"
                        aria-controls="pills-all"
                        aria-selected="true"
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setSelected('Web')}
                        className="nav-link"
                        id="pills-branding-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-branding"
                        type="button"
                        role="tab"
                        aria-controls="pills-branding"
                        aria-selected="false"
                      >
                        Web
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setSelected('Mobile')}
                        className="nav-link"
                        id="pills-design-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-design"
                        type="button"
                        role="tab"
                        aria-controls="pills-design"
                        aria-selected="false"
                      >
                        Mobile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setSelected('LLM')}
                        className="nav-link"
                        id="pills-logo-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-logo"
                        type="button"
                        role="tab"
                        aria-controls="pills-logo"
                        aria-selected="false"
                      >
                        LLM
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="qty-portfolio-section mt-30">
          <div className="container">
            <div className="row g-4 justify-content-xl-between">

              
              {filterData.map(( item ) => {
                return (
                  <RenderPortfolioItem
                    key={item.title}
                    link={item.link}
                    title={item.title}
                    source={item.source}
                    description={item.description}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }} >
                      {item.usedSoftware.map((software) => (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <p> {software.name} </p>
                          <span>{software.icon}</span>
                        </div>
                      ))}
                    </div>
                  </RenderPortfolioItem>
                )})}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCompanyPortfolio;
