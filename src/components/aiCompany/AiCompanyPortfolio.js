import Link from "next/link";
import { useState, useEffect } from 'react'

const data = [
  {
    title: 'JJP Construction',
    source: '/nexus/jjp.png',
    description: "Our web design project showcases our expertise in crafting captivating online experiences.Through meticulous attention to detail and innovative design concepts, we transform visions into reality.Each website we create is a unique reflection of our client's brand identity, tailored to resonate with their target audience.",
    usedSoftware: [{
      name: 'Figma',
      icon: 'i'
    }],
    category: 'Web'
  },

  {
    title: 'Mereb Tech',
    source: '/nexus/mereb.png',
    description: "Our web design project showcases our expertise in crafting captivating online experiences.Through meticulous attention to detail and innovative design concepts, we transform visions into reality.Each website we create is a unique reflection of our client's brand identity, tailored to resonate with their target audience.",
    usedSoftware: [{
      name: 'Figma',
      icon: 'i'
    }],
    category: 'Web'
  },


  {
    title: 'Socialize AI',
    source: '/nexus/social-media.png',
    description: "Our web design project showcases our expertise in crafting captivating online experiences.Through meticulous attention to detail and innovative design concepts, we transform visions into reality.Each website we create is a unique reflection of our client's brand identity, tailored to resonate with their target audience.",
    usedSoftware: [
      {
        name: 'Figma',
        icon: 'i'
      },
      {
        name: 'Python',
        icon: 'i'
      },
    ],
    category: 'LLM'
  },

  
  {
    title: 'Savvy Web',
    source: '/nexus/savvy-web.png',
    description: "Our web design project showcases our expertise in crafting captivating online experiences.Through meticulous attention to detail and innovative design concepts, we transform visions into reality.Each website we create is a unique reflection of our client's brand identity, tailored to resonate with their target audience.",
    usedSoftware: [{
      name: 'Figma',
      icon: 'i'
    }],
    category: 'Web'
  },
]

const RenderPortfolioItem = ({ title, source, description, children }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div className="col-md-6 col-xl-5">
      <div className="qty-portfolio">

        <div className="qty-portfolio__img">
          <Link
            href="/ai-company"
            className="qty-portfolio__img-link ratio ratio-4x3"
          >
            <img
              src={ source }
              alt="image"
              className="img-fluid object-fit-cover"
            />
          </Link>
        </div>
        <div className="qty-portfolio__body">
          <Link
            href="/ai-company"
            className="aih-color-two fs-24 fw-600"
          >
            <h6 className="aih-color-two fs-24 fw-600">
              { title }
            </h6>
          </Link>

          <p className={openAccordion ? 'h-full' : 'limit-2-line-text'} >
            { description }
          </p>
          <button onClick={() => setOpenAccordion(!openAccordion)} className="bg-transparent border-0">
            <small className="text-blue-400"> Read { openAccordion ? 'less' : 'more' } </small>
          </button>

          <span className="flex items-center" style={{ gap: '12px', display: 'flex', fontWeight: 'semibold' }}>
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
                    title={item.title}
                    source={item.source}
                    description={item.description}
                  >
                    {item.usedSoftware.map((software) => (
                      <p> {software.name} </p>
                    ))}
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
