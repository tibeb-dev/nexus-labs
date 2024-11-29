import Link from "next/link";

const AiContentGeneratorInfocard = () => {
  return (
    <>
      <div className="ail-info-card-area ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="text-center mb-30">
                <p className="ail-sub-title text-black fw-500 bg-white d-inline-flex align-items-center gap-2 rounded-5 mb-20">
                  <span className="ail-gd-bg"></span> Featured
                </p>
                <h2 className="ail-title text-black fs-48 fw-600">
                  How will quiety unlock your{" "}
                  <span className="ail-highlighted-text">
                    creative potential
                  </span>{" "}
                  ?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-lg-6">
              <div className="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                <span className="bg-white d-flex align-items-center justify-content-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M28.8451 15.1974C28.7413 22.6541 22.6548 28.7406 15.1981 28.8445H14.9991V20.769C16.4486 20.7712 17.8459 20.2276 18.9129 19.2464C19.9799 18.2653 20.6384 16.9184 20.7575 15.4737C20.8765 14.0291 20.4474 12.5925 19.5555 11.4499C18.6635 10.3072 17.3741 9.54222 15.9438 9.30704C15.6777 9.26032 15.4367 9.12079 15.2638 8.91324C15.0908 8.70569 14.997 8.44355 14.9991 8.17339V2.30755C14.9985 2.14754 15.0312 1.98916 15.0952 1.84248C15.1591 1.6958 15.2528 1.56401 15.3704 1.4555C15.488 1.34699 15.6269 1.26413 15.7782 1.21217C15.9296 1.16022 16.0901 1.14031 16.2495 1.15371C23.3745 1.79698 28.9461 7.88205 28.8451 15.1974Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M16.3531 0.0084809C16.0344 -0.0193151 15.7134 0.0194748 15.4104 0.122387C15.1075 0.225299 14.8292 0.390085 14.5934 0.60628C14.3575 0.822475 14.1692 1.08535 14.0403 1.37822C13.9115 1.67109 13.845 1.98756 13.845 2.30751V8.17335C13.841 8.71764 14.0312 9.24552 14.3815 9.66215C14.7318 10.0788 15.2191 10.3569 15.756 10.4464C16.6139 10.5903 17.4136 10.9737 18.0629 11.5524C18.7123 12.1311 19.185 12.8815 19.4264 13.7171C19.6678 14.5528 19.6682 15.4396 19.4275 16.2755C19.1867 17.1113 18.7147 17.8621 18.0658 18.4413C17.4169 19.0206 16.6175 19.4046 15.7598 19.5493C14.9021 19.6939 14.021 19.5932 13.218 19.2588C12.4151 18.9244 11.7229 18.37 11.2214 17.6593C10.7199 16.9486 10.4294 16.1107 10.3835 15.2421C10.3243 14.0565 10.5666 13.0786 11.1046 12.32C11.4208 11.8789 11.5699 11.3398 11.5252 10.799C11.4806 10.2581 11.2451 9.7508 10.8609 9.36757L6.87722 5.29019C6.65015 5.06311 6.37819 4.88592 6.07872 4.76996C5.77926 4.654 5.45889 4.60181 5.1381 4.61675C4.81732 4.63168 4.50318 4.7134 4.21578 4.85668C3.92839 4.99996 3.67406 5.20165 3.46907 5.44884C1.06471 8.33054 -0.167188 12.0115 0.0182691 15.7599C0.203726 19.5083 1.79296 23.0497 4.47002 25.68C7.26923 28.4572 11.0557 30.0107 14.9988 29.9997H15.2137C19.1145 29.9333 22.8369 28.3541 25.5954 25.5953C28.3539 22.8365 29.9327 19.114 29.9988 15.2132C30.1069 7.38153 24.1127 0.70367 16.3531 0.0084809ZM5.23733 6.91422L9.21952 10.9801V10.9887C8.62842 11.837 8.25721 12.8188 8.13924 13.8459H2.35849C2.58957 11.296 3.594 8.87757 5.23733 6.91422ZM2.35994 16.1536H8.17241C8.41169 17.5713 9.08643 18.8793 10.103 19.8961C11.1195 20.9129 12.4273 21.588 13.845 21.8276V27.6401C10.8898 27.3701 8.12258 26.0732 6.02436 23.9747C3.92613 21.8762 2.62954 19.1088 2.35994 16.1536ZM23.9613 23.9622C21.8713 26.0668 19.1065 27.3675 16.1527 27.6358V21.8276C17.4897 21.6047 18.7308 20.9909 19.7195 20.0637C20.6645 19.1832 21.3443 18.056 21.6822 16.8094C22.0201 15.5628 22.0025 14.2465 21.6314 13.0094C21.2604 11.7723 20.5506 10.6636 19.5824 9.80875C18.6143 8.95388 17.4262 8.38691 16.1527 8.17191V2.30751C22.718 2.89597 27.7877 8.54979 27.6911 15.18C27.6457 18.4829 26.3066 21.6362 23.9613 23.9622Z"
                      fill="#6672FB"
                    />
                  </svg>
                </span>
                <div className="ail-card-content">
                  <h4 className="text-black fs-20">Blog Post & Articles</h4>
                  <p className="text-black">
                    Generate high-converting copy for all your campaigns
                  </p>
                  <Link
                    href="/ai-content-generator"
                    className="ca-two-body-clr fs-16 ff-poppins fw-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                <span className="bg-white d-flex align-items-center justify-content-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M15 2.99976C8.37 2.99976 3 8.36976 3 14.9998C3 21.6298 8.37 26.9998 15 26.9998C21.63 26.9998 27 21.6298 27 14.9998C27 8.36976 21.63 2.99976 15 2.99976ZM20.25 8.99976C21.495 8.99976 22.5 10.0048 22.5 11.2498C22.5 12.4948 21.495 13.4998 20.25 13.4998C19.005 13.4998 18 12.4948 18 11.2498C18 10.0048 19.005 8.99976 20.25 8.99976ZM9.75 8.99976C10.995 8.99976 12 10.0048 12 11.2498C12 12.4948 10.995 13.4998 9.75 13.4998C8.505 13.4998 7.5 12.4948 7.5 11.2498C7.5 10.0048 8.505 8.99976 9.75 8.99976ZM15 23.2498C11.505 23.2498 8.535 21.0598 7.335 17.9998H22.665C21.465 21.0598 18.495 23.2498 15 23.2498Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M9.75 13.4998C10.9926 13.4998 12 12.4924 12 11.2498C12 10.0071 10.9926 8.99976 9.75 8.99976C8.50736 8.99976 7.5 10.0071 7.5 11.2498C7.5 12.4924 8.50736 13.4998 9.75 13.4998Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M15 23.2498C18.495 23.2498 21.465 21.0598 22.665 17.9998H7.33496C8.53496 21.0598 11.505 23.2498 15 23.2498Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M20.25 13.4998C21.4926 13.4998 22.5 12.4924 22.5 11.2498C22.5 10.0071 21.4926 8.99976 20.25 8.99976C19.0074 8.99976 18 10.0071 18 11.2498C18 12.4924 19.0074 13.4998 20.25 13.4998Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M14.985 -0.000244141C6.705 -0.000244141 0 6.71976 0 14.9998C0 23.2798 6.705 29.9998 14.985 29.9998C23.28 29.9998 30 23.2798 30 14.9998C30 6.71976 23.28 -0.000244141 14.985 -0.000244141ZM15 26.9998C8.37 26.9998 3 21.6298 3 14.9998C3 8.36976 8.37 2.99976 15 2.99976C21.63 2.99976 27 8.36976 27 14.9998C27 21.6298 21.63 26.9998 15 26.9998Z"
                      fill="#6672FB"
                    />
                  </svg>
                </span>
                <div className="ail-card-content">
                  <h4 className="text-black fs-20">10X your content output</h4>
                  <p className="text-black">
                    Generate high-converting copy for all your campaigns
                  </p>
                  <Link
                    href="/ai-content-generator"
                    className="ca-two-body-clr fs-16 ff-poppins fw-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                <span className="bg-white d-flex align-items-center justify-content-center">
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8329 16.9377L25.8396 16.941C25.9434 16.3082 25.9936 15.6619 25.9936 15.0224C25.9936 14.4498 25.9501 13.8739 25.8697 13.3114C25.9501 13.8706 25.9903 14.4364 25.9903 15.0023C25.9903 15.6519 25.9367 16.3015 25.8329 16.9377ZM0.375003 11.1918C0.358261 11.1784 0.344867 11.165 0.328125 11.1483C0.351564 11.1717 0.375003 11.1952 0.40179 11.2186L2.59499 13.0904V13.087L0.375003 11.1918ZM18.3425 3.95929H18.3459L17.8269 1.15333C17.8202 1.11984 17.8135 1.08971 17.8034 1.05957C17.8068 1.07631 17.8135 1.0964 17.8168 1.11314L18.3425 3.95929ZM20.1507 22.2583L21.2021 21.3944L24.3094 22.496C24.8786 21.7293 25.3574 20.9055 25.7358 20.0316L23.2345 17.892L23.4555 16.5493C23.5392 16.0437 23.5828 15.5247 23.5828 15.0057C23.5828 14.4867 23.5392 13.9677 23.4555 13.462L23.2379 12.126L25.7391 9.98641C25.3574 9.11582 24.882 8.28877 24.3127 7.52198L21.2054 8.62361L20.154 7.75972C19.3537 7.10343 18.4597 6.58778 17.4987 6.22615L16.223 5.74733L15.6236 2.49938C14.6779 2.39223 13.7232 2.39223 12.7775 2.49938L12.1781 5.75403L10.9091 6.23285C9.95478 6.59448 9.06745 7.11013 8.27388 7.76307L7.22248 8.63031L4.09508 7.51864C3.52585 8.28542 3.04703 9.10913 2.66866 9.98306L5.1967 12.1428L4.97905 13.4821C4.89534 13.9811 4.85516 14.4934 4.85516 15.0057C4.85516 15.5146 4.89869 16.0303 4.97905 16.5292L5.1967 17.8685L2.66866 20.0283C3.05038 20.8988 3.52585 21.7259 4.09508 22.4927L7.22248 21.381L8.27388 22.2483C9.06745 22.9012 9.95478 23.4168 10.9091 23.7785L12.1748 24.264L12.7741 27.5186C13.7184 27.6258 14.6794 27.6258 15.6203 27.5186L16.2196 24.2707L17.4954 23.7919C18.4597 23.4302 19.3504 22.9146 20.1507 22.2583ZM14.2206 20.5741C13.1994 20.5741 12.2384 20.3129 11.3979 19.8541C9.55967 18.8563 8.31071 16.9109 8.31071 14.6708C8.31071 11.4162 10.9493 8.77764 14.2039 8.77764C16.444 8.77764 18.3894 10.0266 19.3872 11.8649C19.846 12.702 20.1071 13.663 20.1071 14.6876C20.1071 17.9389 17.4719 20.5741 14.2206 20.5741ZM3.99797 25.0777C3.81381 25.1413 3.62295 25.1547 3.44214 25.1178C3.633 25.158 3.8339 25.1513 4.02811 25.0843L6.75371 24.1133C6.75036 24.11 6.74366 24.1066 6.74031 24.1033L3.99797 25.0777ZM28.0261 11.1918L25.8329 13.0669C25.8329 13.0736 25.8362 13.0837 25.8362 13.0904L28.0261 11.2186C28.2638 11.0144 28.3978 10.7197 28.4011 10.415C28.3911 10.7097 28.2571 10.9943 28.0261 11.1918Z"
                      fill="#CBC2FF"
                    />
                    <path
                      d="M28.3948 19.5125C28.4115 19.6698 28.3948 19.8306 28.3378 19.9846L28.3077 20.0716C27.7024 21.7584 26.7984 23.3225 25.639 24.6891L25.5788 24.7594C25.4383 24.9254 25.2506 25.0448 25.0407 25.1016C24.8308 25.1584 24.6085 25.15 24.4035 25.0775L21.6812 24.1098C20.6825 24.9326 19.5545 25.5843 18.3429 26.0385L17.8172 28.8846C17.7775 29.0988 17.6736 29.2958 17.5193 29.4495C17.365 29.6032 17.1676 29.7063 16.9533 29.7452L16.8629 29.7619C15.9878 29.9201 15.1002 29.9997 14.2109 29.9996H14.221C15.115 29.9996 16.009 29.9193 16.8796 29.7619L16.97 29.7452C17.1843 29.7063 17.3817 29.6032 17.5361 29.4495C17.6904 29.2958 17.7942 29.0988 17.8339 28.8846L18.3596 26.0418C19.5717 25.5865 20.6901 24.9402 21.6946 24.1165L24.4135 25.0842C24.6186 25.1567 24.8408 25.1651 25.0507 25.1083C25.2607 25.0515 25.4483 24.9321 25.5888 24.7661L25.6491 24.6958C26.8143 23.3196 27.7083 21.7693 28.3144 20.085L28.3445 19.998C28.3981 19.8406 28.4149 19.6732 28.3948 19.5125Z"
                      fill="#CBC2FF"
                    />
                    <path
                      d="M20.0969 14.6708C20.0969 13.6562 19.8391 12.6986 19.3871 11.8648C18.3892 10.0265 16.4438 8.77759 14.2037 8.77759C10.9491 8.77759 8.31055 11.4161 8.31055 14.6708C8.31055 16.9109 9.5595 18.8563 11.3978 19.8541C12.2315 20.3061 13.1858 20.564 14.2037 20.564C17.4584 20.564 20.0969 17.9254 20.0969 14.6708ZM10.4535 14.6708C10.4535 13.6696 10.8453 12.7287 11.5518 12.0188C12.2617 11.309 13.2026 10.9206 14.2037 10.9206C15.2049 10.9206 16.1458 11.309 16.8557 12.0188C17.2045 12.3667 17.4811 12.78 17.6696 13.2351C17.8581 13.6903 17.9547 14.1782 17.9539 14.6708C17.9539 15.6719 17.5622 16.6128 16.8557 17.3227C16.5078 17.6715 16.0945 17.9481 15.6394 18.1366C15.1842 18.3251 14.6963 18.4218 14.2037 18.421C13.2026 18.421 12.2617 18.0292 11.5518 17.3227C11.203 16.9749 10.9264 16.5615 10.7379 16.1064C10.5494 15.6513 10.4528 15.1634 10.4535 14.6708Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M16.953 29.7453C17.1673 29.7064 17.3647 29.6033 17.519 29.4496C17.6733 29.2959 17.7772 29.0989 17.8169 28.8847L18.3425 26.0386C19.5542 25.5844 20.6822 24.9327 21.6809 24.1099L24.4032 25.0776C24.6082 25.1501 24.8304 25.1585 25.0404 25.1017C25.2503 25.0449 25.438 24.9255 25.5784 24.7595L25.6387 24.6892C26.804 23.313 27.7013 21.7593 28.3074 20.0717L28.3375 19.9847C28.3944 19.8307 28.4112 19.6699 28.3944 19.5126C28.3643 19.248 28.2371 18.9969 28.0261 18.8127L25.8396 16.941L25.8329 16.9376C25.9367 16.3014 25.9903 15.6519 25.9903 15.0023C25.9903 14.4364 25.9501 13.8672 25.8698 13.3113C25.8597 13.2377 25.8463 13.164 25.8363 13.0903C25.8363 13.0836 25.8329 13.0736 25.8329 13.0669L28.0261 11.1918C28.2572 10.9942 28.3911 10.7096 28.4011 10.415C28.4045 10.281 28.3844 10.1437 28.3375 10.0131L28.3074 9.92609C27.7036 8.23858 26.7995 6.67424 25.6387 5.30865L25.5784 5.23833C25.4376 5.07276 25.25 4.95374 25.0401 4.89695C24.8303 4.84017 24.6083 4.84828 24.4032 4.92023L21.6809 5.88792C20.6764 5.06421 19.558 4.41462 18.3459 3.95924H18.3425L17.8169 1.1131C17.8135 1.09636 17.8102 1.07627 17.8035 1.05952C17.7551 0.857079 17.649 0.673039 17.498 0.529778C17.347 0.386518 17.1577 0.290209 16.953 0.25256L16.8626 0.235818C15.118 -0.0789316 13.2831 -0.0789316 11.5386 0.235818L11.4482 0.25256C11.2339 0.291391 11.0365 0.394509 10.8822 0.548217C10.7278 0.701924 10.624 0.898943 10.5843 1.1131L10.0553 3.97263C8.85281 4.42811 7.73303 5.07736 6.74034 5.89462L3.998 4.92023C3.79296 4.84771 3.57071 4.8393 3.36078 4.89612C3.15085 4.95294 2.96318 5.0723 2.82271 5.23833L2.76244 5.30865C1.60304 6.67521 0.699072 8.23929 0.093762 9.92609L0.0636264 10.0131C-0.00615069 10.2077 -0.0183085 10.4183 0.0286108 10.6197C0.0755302 10.821 0.179535 11.0045 0.32815 11.1483C0.344892 11.1617 0.358286 11.1784 0.375028 11.1918L2.59502 13.087V13.0903C2.49122 13.7198 2.44099 14.3594 2.44099 14.9989C2.44099 15.6418 2.49122 16.2847 2.59502 16.9109L0.375028 18.8061C0.209602 18.9477 0.0912053 19.1363 0.0355801 19.3468C-0.0200451 19.5574 -0.0102629 19.7798 0.0636264 19.9847L0.093762 20.0717C0.699823 21.7593 1.59719 23.3163 2.76244 24.6892L2.82271 24.7595C2.98678 24.9504 3.20443 25.0743 3.44216 25.1178C3.62298 25.1513 3.81384 25.1412 3.998 25.0776L6.74034 24.1032C6.74369 24.1066 6.75038 24.1099 6.75373 24.1133C7.74821 24.9269 8.85653 25.5732 10.0553 26.0252L10.5843 28.8847C10.624 29.0989 10.7278 29.2959 10.8822 29.4496C11.0365 29.6033 11.2339 29.7064 11.4482 29.7453L11.5386 29.762C12.4125 29.9194 13.3066 29.9998 14.2006 29.9998H14.2106C15.1013 29.9998 15.9953 29.9194 16.8626 29.762L16.953 29.7453ZM15.6203 27.5186C14.6746 27.6257 13.7198 27.6257 12.7742 27.5186L12.1748 24.2639L10.9091 23.7784C9.9548 23.4168 9.06748 22.9011 8.27391 22.2482L7.22251 21.381L4.0951 22.4926C3.52587 21.7259 3.0504 20.8988 2.66868 20.0282L5.19673 17.8685L4.97908 16.5291C4.89872 16.0302 4.85519 15.5146 4.85519 15.0056C4.85519 14.4933 4.89537 13.981 4.97908 13.4821L5.19673 12.1427L2.66868 9.98301C3.04705 9.10908 3.52587 8.28537 4.0951 7.51859L7.22251 8.63026L8.27391 7.76302C9.06748 7.11009 9.9548 6.59443 10.9091 6.2328L12.1781 5.75398L12.7775 2.49934C13.7184 2.39219 14.6794 2.39219 15.6236 2.49934L16.223 5.74729L17.4988 6.22611C18.4597 6.58774 19.3538 7.10339 20.154 7.75968L21.2054 8.62356L24.3127 7.52194C24.882 8.28872 25.3574 9.11578 25.7392 9.98636L23.2379 12.126L23.4556 13.462C23.5393 13.9676 23.5828 14.4866 23.5828 15.0056C23.5828 15.5246 23.5393 16.0436 23.4556 16.5492L23.2346 17.8919L25.7358 20.0316C25.3566 20.9051 24.878 21.7321 24.3094 22.496L21.2021 21.3944L20.1507 22.2583C19.3504 22.9145 18.4597 23.4302 17.4954 23.7918L16.2197 24.2706L15.6203 27.5186Z"
                      fill="#6672FB"
                    />
                  </svg>
                </span>
                <div className="ail-card-content">
                  <h4 className="text-black fs-20">Product Description</h4>
                  <p className="text-black">
                    Generate high-converting copy for all your campaigns
                  </p>
                  <Link
                    href="/ai-content-generator"
                    className="ca-two-body-clr fs-16 ff-poppins fw-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                <span className="bg-white d-flex align-items-center justify-content-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M28.8451 15.1974C28.7413 22.6541 22.6548 28.7406 15.1981 28.8445H14.9991V20.769C16.4486 20.7712 17.8459 20.2276 18.9129 19.2464C19.9799 18.2653 20.6384 16.9184 20.7575 15.4737C20.8765 14.0291 20.4474 12.5925 19.5555 11.4499C18.6635 10.3072 17.3741 9.54222 15.9438 9.30704C15.6777 9.26032 15.4367 9.12079 15.2638 8.91324C15.0908 8.70569 14.997 8.44355 14.9991 8.17339V2.30755C14.9985 2.14754 15.0312 1.98916 15.0952 1.84248C15.1591 1.6958 15.2528 1.56401 15.3704 1.4555C15.488 1.34699 15.6269 1.26413 15.7782 1.21217C15.9296 1.16022 16.0901 1.14031 16.2495 1.15371C23.3745 1.79698 28.9461 7.88205 28.8451 15.1974Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M16.3531 0.0084809C16.0344 -0.0193151 15.7134 0.0194748 15.4104 0.122387C15.1075 0.225299 14.8292 0.390085 14.5934 0.60628C14.3575 0.822475 14.1692 1.08535 14.0403 1.37822C13.9115 1.67109 13.845 1.98756 13.845 2.30751V8.17335C13.841 8.71764 14.0312 9.24552 14.3815 9.66215C14.7318 10.0788 15.2191 10.3569 15.756 10.4464C16.6139 10.5903 17.4136 10.9737 18.0629 11.5524C18.7123 12.1311 19.185 12.8815 19.4264 13.7171C19.6678 14.5528 19.6682 15.4396 19.4275 16.2755C19.1867 17.1113 18.7147 17.8621 18.0658 18.4413C17.4169 19.0206 16.6175 19.4046 15.7598 19.5493C14.9021 19.6939 14.021 19.5932 13.218 19.2588C12.4151 18.9244 11.7229 18.37 11.2214 17.6593C10.7199 16.9486 10.4294 16.1107 10.3835 15.2421C10.3243 14.0565 10.5666 13.0786 11.1046 12.32C11.4208 11.8789 11.5699 11.3398 11.5252 10.799C11.4806 10.2581 11.2451 9.7508 10.8609 9.36757L6.87722 5.29019C6.65015 5.06311 6.37819 4.88592 6.07872 4.76996C5.77926 4.654 5.45889 4.60181 5.1381 4.61675C4.81732 4.63168 4.50318 4.7134 4.21578 4.85668C3.92839 4.99996 3.67406 5.20165 3.46907 5.44884C1.06471 8.33054 -0.167188 12.0115 0.0182691 15.7599C0.203726 19.5083 1.79296 23.0497 4.47002 25.68C7.26923 28.4572 11.0557 30.0107 14.9988 29.9997H15.2137C19.1145 29.9333 22.8369 28.3541 25.5954 25.5953C28.3539 22.8365 29.9327 19.114 29.9988 15.2132C30.1069 7.38153 24.1127 0.70367 16.3531 0.0084809ZM5.23733 6.91422L9.21952 10.9801V10.9887C8.62842 11.837 8.25721 12.8188 8.13924 13.8459H2.35849C2.58957 11.296 3.594 8.87757 5.23733 6.91422ZM2.35994 16.1536H8.17241C8.41169 17.5713 9.08643 18.8793 10.103 19.8961C11.1195 20.9129 12.4273 21.588 13.845 21.8276V27.6401C10.8898 27.3701 8.12258 26.0732 6.02436 23.9747C3.92613 21.8762 2.62954 19.1088 2.35994 16.1536ZM23.9613 23.9622C21.8713 26.0668 19.1065 27.3675 16.1527 27.6358V21.8276C17.4897 21.6047 18.7308 20.9909 19.7195 20.0637C20.6645 19.1832 21.3443 18.056 21.6822 16.8094C22.0201 15.5628 22.0025 14.2465 21.6314 13.0094C21.2604 11.7723 20.5506 10.6636 19.5824 9.80875C18.6143 8.95388 17.4262 8.38691 16.1527 8.17191V2.30751C22.718 2.89597 27.7877 8.54979 27.6911 15.18C27.6457 18.4829 26.3066 21.6362 23.9613 23.9622Z"
                      fill="#6672FB"
                    />
                  </svg>
                </span>
                <div className="ail-card-content">
                  <h4 className="text-black fs-20">Suggest Improvements</h4>
                  <p className="text-black">
                    Generate high-converting copy for all your campaigns
                  </p>
                  <Link
                    href="/ai-content-generator"
                    className="ca-two-body-clr fs-16 ff-poppins fw-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                <span className="bg-white d-flex align-items-center justify-content-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M28.8451 15.1974C28.7413 22.6541 22.6548 28.7406 15.1981 28.8445H14.9991V20.769C16.4486 20.7712 17.8459 20.2276 18.9129 19.2464C19.9799 18.2653 20.6384 16.9184 20.7575 15.4737C20.8765 14.0291 20.4474 12.5925 19.5555 11.4499C18.6635 10.3072 17.3741 9.54222 15.9438 9.30704C15.6777 9.26032 15.4367 9.12079 15.2638 8.91324C15.0908 8.70569 14.997 8.44355 14.9991 8.17339V2.30755C14.9985 2.14754 15.0312 1.98916 15.0952 1.84248C15.1591 1.6958 15.2528 1.56401 15.3704 1.4555C15.488 1.34699 15.6269 1.26413 15.7782 1.21217C15.9296 1.16022 16.0901 1.14031 16.2495 1.15371C23.3745 1.79698 28.9461 7.88205 28.8451 15.1974Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M16.3531 0.0084809C16.0344 -0.0193151 15.7134 0.0194748 15.4104 0.122387C15.1075 0.225299 14.8292 0.390085 14.5934 0.60628C14.3575 0.822475 14.1692 1.08535 14.0403 1.37822C13.9115 1.67109 13.845 1.98756 13.845 2.30751V8.17335C13.841 8.71764 14.0312 9.24552 14.3815 9.66215C14.7318 10.0788 15.2191 10.3569 15.756 10.4464C16.6139 10.5903 17.4136 10.9737 18.0629 11.5524C18.7123 12.1311 19.185 12.8815 19.4264 13.7171C19.6678 14.5528 19.6682 15.4396 19.4275 16.2755C19.1867 17.1113 18.7147 17.8621 18.0658 18.4413C17.4169 19.0206 16.6175 19.4046 15.7598 19.5493C14.9021 19.6939 14.021 19.5932 13.218 19.2588C12.4151 18.9244 11.7229 18.37 11.2214 17.6593C10.7199 16.9486 10.4294 16.1107 10.3835 15.2421C10.3243 14.0565 10.5666 13.0786 11.1046 12.32C11.4208 11.8789 11.5699 11.3398 11.5252 10.799C11.4806 10.2581 11.2451 9.7508 10.8609 9.36757L6.87722 5.29019C6.65015 5.06311 6.37819 4.88592 6.07872 4.76996C5.77926 4.654 5.45889 4.60181 5.1381 4.61675C4.81732 4.63168 4.50318 4.7134 4.21578 4.85668C3.92839 4.99996 3.67406 5.20165 3.46907 5.44884C1.06471 8.33054 -0.167188 12.0115 0.0182691 15.7599C0.203726 19.5083 1.79296 23.0497 4.47002 25.68C7.26923 28.4572 11.0557 30.0107 14.9988 29.9997H15.2137C19.1145 29.9333 22.8369 28.3541 25.5954 25.5953C28.3539 22.8365 29.9327 19.114 29.9988 15.2132C30.1069 7.38153 24.1127 0.70367 16.3531 0.0084809ZM5.23733 6.91422L9.21952 10.9801V10.9887C8.62842 11.837 8.25721 12.8188 8.13924 13.8459H2.35849C2.58957 11.296 3.594 8.87757 5.23733 6.91422ZM2.35994 16.1536H8.17241C8.41169 17.5713 9.08643 18.8793 10.103 19.8961C11.1195 20.9129 12.4273 21.588 13.845 21.8276V27.6401C10.8898 27.3701 8.12258 26.0732 6.02436 23.9747C3.92613 21.8762 2.62954 19.1088 2.35994 16.1536ZM23.9613 23.9622C21.8713 26.0668 19.1065 27.3675 16.1527 27.6358V21.8276C17.4897 21.6047 18.7308 20.9909 19.7195 20.0637C20.6645 19.1832 21.3443 18.056 21.6822 16.8094C22.0201 15.5628 22.0025 14.2465 21.6314 13.0094C21.2604 11.7723 20.5506 10.6636 19.5824 9.80875C18.6143 8.95388 17.4262 8.38691 16.1527 8.17191V2.30751C22.718 2.89597 27.7877 8.54979 27.6911 15.18C27.6457 18.4829 26.3066 21.6362 23.9613 23.9622Z"
                      fill="#6672FB"
                    />
                  </svg>
                </span>
                <div className="ail-card-content">
                  <h4 className="text-black fs-20">Blog Post & Articles</h4>
                  <p className="text-black">
                    Generate high-converting copy for all your campaigns
                  </p>
                  <Link
                    href="/ai-content-generator"
                    className="ca-two-body-clr fs-16 ff-poppins fw-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                <span className="bg-white d-flex align-items-center justify-content-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M28.8451 15.1974C28.7413 22.6541 22.6548 28.7406 15.1981 28.8445H14.9991V20.769C16.4486 20.7712 17.8459 20.2276 18.9129 19.2464C19.9799 18.2653 20.6384 16.9184 20.7575 15.4737C20.8765 14.0291 20.4474 12.5925 19.5555 11.4499C18.6635 10.3072 17.3741 9.54222 15.9438 9.30704C15.6777 9.26032 15.4367 9.12079 15.2638 8.91324C15.0908 8.70569 14.997 8.44355 14.9991 8.17339V2.30755C14.9985 2.14754 15.0312 1.98916 15.0952 1.84248C15.1591 1.6958 15.2528 1.56401 15.3704 1.4555C15.488 1.34699 15.6269 1.26413 15.7782 1.21217C15.9296 1.16022 16.0901 1.14031 16.2495 1.15371C23.3745 1.79698 28.9461 7.88205 28.8451 15.1974Z"
                      fill="#6672FB"
                    />
                    <path
                      d="M16.3531 0.0084809C16.0344 -0.0193151 15.7134 0.0194748 15.4104 0.122387C15.1075 0.225299 14.8292 0.390085 14.5934 0.60628C14.3575 0.822475 14.1692 1.08535 14.0403 1.37822C13.9115 1.67109 13.845 1.98756 13.845 2.30751V8.17335C13.841 8.71764 14.0312 9.24552 14.3815 9.66215C14.7318 10.0788 15.2191 10.3569 15.756 10.4464C16.6139 10.5903 17.4136 10.9737 18.0629 11.5524C18.7123 12.1311 19.185 12.8815 19.4264 13.7171C19.6678 14.5528 19.6682 15.4396 19.4275 16.2755C19.1867 17.1113 18.7147 17.8621 18.0658 18.4413C17.4169 19.0206 16.6175 19.4046 15.7598 19.5493C14.9021 19.6939 14.021 19.5932 13.218 19.2588C12.4151 18.9244 11.7229 18.37 11.2214 17.6593C10.7199 16.9486 10.4294 16.1107 10.3835 15.2421C10.3243 14.0565 10.5666 13.0786 11.1046 12.32C11.4208 11.8789 11.5699 11.3398 11.5252 10.799C11.4806 10.2581 11.2451 9.7508 10.8609 9.36757L6.87722 5.29019C6.65015 5.06311 6.37819 4.88592 6.07872 4.76996C5.77926 4.654 5.45889 4.60181 5.1381 4.61675C4.81732 4.63168 4.50318 4.7134 4.21578 4.85668C3.92839 4.99996 3.67406 5.20165 3.46907 5.44884C1.06471 8.33054 -0.167188 12.0115 0.0182691 15.7599C0.203726 19.5083 1.79296 23.0497 4.47002 25.68C7.26923 28.4572 11.0557 30.0107 14.9988 29.9997H15.2137C19.1145 29.9333 22.8369 28.3541 25.5954 25.5953C28.3539 22.8365 29.9327 19.114 29.9988 15.2132C30.1069 7.38153 24.1127 0.70367 16.3531 0.0084809ZM5.23733 6.91422L9.21952 10.9801V10.9887C8.62842 11.837 8.25721 12.8188 8.13924 13.8459H2.35849C2.58957 11.296 3.594 8.87757 5.23733 6.91422ZM2.35994 16.1536H8.17241C8.41169 17.5713 9.08643 18.8793 10.103 19.8961C11.1195 20.9129 12.4273 21.588 13.845 21.8276V27.6401C10.8898 27.3701 8.12258 26.0732 6.02436 23.9747C3.92613 21.8762 2.62954 19.1088 2.35994 16.1536ZM23.9613 23.9622C21.8713 26.0668 19.1065 27.3675 16.1527 27.6358V21.8276C17.4897 21.6047 18.7308 20.9909 19.7195 20.0637C20.6645 19.1832 21.3443 18.056 21.6822 16.8094C22.0201 15.5628 22.0025 14.2465 21.6314 13.0094C21.2604 11.7723 20.5506 10.6636 19.5824 9.80875C18.6143 8.95388 17.4262 8.38691 16.1527 8.17191V2.30751C22.718 2.89597 27.7877 8.54979 27.6911 15.18C27.6457 18.4829 26.3066 21.6362 23.9613 23.9622Z"
                      fill="#6672FB"
                    />
                  </svg>
                </span>
                <div className="ail-card-content">
                  <h4 className="text-black fs-20">Blog Post & Articles</h4>
                  <p className="text-black">
                    Generate high-converting copy for all your campaigns
                  </p>
                  <Link
                    href="/ai-content-generator"
                    className="ca-two-body-clr fs-16 ff-poppins fw-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGeneratorInfocard;
