import React from "react";

function Services() {
  return (
    <div>
      <section className="container py-5">
        <h2 className="h1 text-center">Our services</h2>
        <p className="text-center pb-4 mb-2 mb-lg-3">
          We provide a wide range of consulting services
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div className="col">
            <span
              className="card card-hover-primary border-0 h-100 text-decoration-none"
              href="#"
            >
              <div className="card-body pb-0">
                {/* <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.7276 27.5001C1.21683 28.3857 0.916576 29.3769 0.850062 30.3971C0.783549 31.4173 0.952558 32.4391 1.34402 33.3835C1.73548 34.328 2.33891 35.1697 3.10764 35.8437C3.87638 36.5177 4.78982 37.0058 5.77734 37.2704C6.76486 37.5349 7.8 37.5689 8.80272 37.3695C9.80544 37.1701 10.7489 36.7428 11.5601 36.1206C12.3713 35.4983 13.0285 34.6979 13.4809 33.7811C13.9334 32.8643 14.1689 31.8558 14.1693 30.8334C14.1698 29.3654 13.6858 27.9382 12.7924 26.7734C11.8989 25.6085 10.6459 24.7712 9.22787 24.3913C7.80984 24.0114 6.30606 24.1101 4.94991 24.6722C3.59375 25.2344 2.46105 26.2284 1.7276 27.5001Z"></path>
                  <path d="M11.7344 10.1667L4.23438 23.1667C5.42383 22.6595 6.71498 22.4361 8.00568 22.5142C9.29638 22.5922 10.5512 22.9695 11.6709 23.6163C12.7906 24.263 13.7444 25.1615 14.4569 26.2405C15.1694 27.3196 15.621 28.5496 15.776 29.8333L19.0427 24.1667C12.8427 13.45 11.9427 12.425 11.7344 10.1667Z"></path>
                  <path d="M38.2784 27.5C37.8534 26.7833 25.6701 5.6083 25.4284 5.29996C24.4255 3.9011 22.9204 2.94436 21.2281 2.62997C19.5358 2.31559 17.7875 2.66792 16.3491 3.61323C14.9107 4.55855 13.8936 6.02357 13.5108 7.70171C13.1279 9.37984 13.409 11.141 14.2951 12.6166C14.2118 12.6166 13.8784 11.9 26.7284 34.1666C27.1662 34.925 27.749 35.5898 28.4437 36.1229C29.1383 36.656 29.9311 37.0471 30.7769 37.2739C31.6227 37.5006 32.5049 37.5585 33.373 37.4443C34.2412 37.3301 35.0784 37.046 35.8368 36.6083C36.5952 36.1706 37.2599 35.5877 37.793 34.8931C38.3262 34.1984 38.7173 33.4056 38.944 32.5598C39.1707 31.714 39.2287 30.8319 39.1145 29.9637C39.0003 29.0955 38.7162 28.2583 38.2784 27.5Z"></path>
                </svg> */}
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#c7c7c7"
                      d="M42.7 32.7H7.3S.7 26.7 1 8.6C1-1 49-1 49 8.5c.3 18.2-6.3 24.2-6.3 24.2z"
                      data-original="#c7c7c7"
                      class=""
                    ></path>
                    <path
                      fill="#c7c7c7"
                      d="M49 9.5v2.2c-1.1-1.1-3.4-2.1-6.6-2.9C37.8 7.7 31.6 7.1 25 7.1 13.3 7.1 3.7 9 1 11.7V8.5C1-1 49-1 49 8.5z"
                      data-original="#c7c7c7"
                      class=""
                    ></path>
                    <path
                      fill="#efefed"
                      d="M42.7 30.9c0 9.8-7.9 17.7-17.7 17.7S7.3 40.7 7.3 30.9 15.2 13.2 25 13.2s17.7 7.9 17.7 17.7z"
                      data-original="#efefed"
                      class=""
                    ></path>
                    <path
                      fill="#e4e4e3"
                      d="M7.3 30.9c-.5-4.7 1.2-9.6 4.5-13.2 1.7-1.8 3.7-3.2 6-4.2S22.5 12 25 12s4.9.5 7.2 1.5 4.3 2.4 6 4.2c3.4 3.6 5.1 8.5 4.5 13.2-.5-4.6-2.6-8.9-5.8-11.9s-7.5-4.7-11.9-4.7c-4.3 0-8.6 1.7-11.9 4.7-3.2 3-5.3 7.2-5.8 11.9z"
                      data-original="#e4e4e3"
                      class=""
                    ></path>
                    <path
                      fill="#444445"
                      d="M38.5 30.9c0 7.5-6.1 13.5-13.5 13.5s-13.5-6.1-13.5-13.5 6-13.6 13.5-13.6 13.5 6.1 13.5 13.6z"
                      data-original="#444445"
                      class=""
                    ></path>
                    <circle
                      cx="25"
                      cy="30.9"
                      r="7.2"
                      fill="#696967"
                      data-original="#696967"
                      class=""
                    ></circle>
                    <path
                      fill="#59b1e3"
                      d="M29.2 30.9c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2z"
                      data-original="#59b1e3"
                      class=""
                    ></path>
                    <path
                      fill="#444445"
                      d="M27.4 30.9c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4 1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4z"
                      data-original="#444445"
                      class=""
                    ></path>
                    <g fill="#e4e4e3">
                      <path
                        d="M26.8 20.5c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zM26.8 41.2c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8z"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></path>
                      <circle
                        cx="32.3"
                        cy="38.2"
                        r="1.8"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></circle>
                      <path
                        d="M37.1 30.9c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8z"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></path>
                      <circle
                        cx="14.6"
                        cy="30.9"
                        r="1.8"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></circle>
                      <circle
                        cx="17.7"
                        cy="38.2"
                        r="1.8"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></circle>
                      <circle
                        cx="17.7"
                        cy="23.5"
                        r="1.8"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></circle>
                      <circle
                        cx="32.3"
                        cy="23.5"
                        r="1.8"
                        fill="#e4e4e3"
                        data-original="#e4e4e3"
                        class=""
                      ></circle>
                    </g>
                    <path
                      fill="#efefed"
                      d="M25.3 29.6c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM25.5 32.3c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7z"
                      data-original="#efefed"
                      class=""
                    ></path>
                    <path
                      fill="#696967"
                      d="M49 9.5v2.2c-1.1-1.1-3.4-2.1-6.6-2.9C37.8 7.7 31.6 7.1 25 7.1 13.3 7.1 3.7 9 1 11.7V9.5c4.6-3 14.9-4.2 24-4.2s19.4 1.2 24 4.2z"
                      data-original="#696967"
                      class=""
                    ></path>
                  </g>
                </svg>

                <h3 className="h4 card-title mt-0">Fire Detection System</h3>
                <p className="card-text">
                  conventional, semi-addressable, addressable systems
                </p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32.6213 22.7824C26.4943 23.0213 20.6934 24.6146 15.525 27.255L8.87893 31.0927C7.12129 32.1061 4.87665 31.4978 3.86795 29.7493L0.49035 23.9008C-0.520513 22.1491 0.0820047 19.9007 1.83372 18.8898L7.33997 15.7103C7.65881 15.5262 8.06657 15.6354 8.25074 15.9543L12.5774 23.4483C12.7647 23.7727 13.1836 23.8804 13.5051 23.6822C13.816 23.4905 13.9009 23.074 13.7182 22.7577L9.36036 15.2095C9.18727 14.9097 9.27227 14.5269 9.55686 14.3297C14.1026 11.1781 17.9484 7.16404 20.9018 2.48266C22.0206 0.707687 24.6278 0.755188 25.6794 2.57599L34.9289 18.5981C35.9801 20.415 34.7215 22.7007 32.6213 22.7824ZM33.8082 11.6236C34.1506 9.6637 33.0019 7.69797 31.1452 7.02512C30.5616 6.81361 30.0322 7.44872 30.3425 7.98632C31.0812 9.2661 31.8225 10.5503 32.5721 11.8482C32.8853 12.3903 33.7004 12.2404 33.8082 11.6236ZM18.4184 35.2136L15.2546 29.7215C15.0708 29.4024 14.6625 29.2929 14.3434 29.477C12.6288 30.4663 12.564 30.5047 10.2768 31.8249C9.95788 32.009 9.84821 32.417 10.0324 32.736L13.2016 38.2245C13.6078 38.9274 14.3384 39.3096 15.0824 39.3096C15.8041 39.3096 16.0801 39.0654 17.625 38.1737C18.66 37.5762 19.0159 36.2478 18.4184 35.2136ZM38.676 6.55444C38.9948 6.37035 39.1041 5.96259 38.92 5.64375C38.736 5.32499 38.3284 5.21557 38.0093 5.39974L36.2843 6.39569C35.694 6.73653 35.9409 7.63989 36.6183 7.63989C36.8554 7.63981 36.8079 7.63297 38.676 6.55444ZM32.5456 3.09976L32.9663 1.53004C33.0616 1.17437 32.8505 0.808857 32.495 0.713521C32.139 0.618351 31.7737 0.829274 31.6783 1.18495L31.2577 2.75466C31.1444 3.17734 31.4629 3.5941 31.902 3.5941C32.1964 3.59402 32.4658 3.3976 32.5456 3.09976ZM39.9772 13.6731C40.0725 13.3175 39.8613 12.9519 39.5057 12.8566L37.9359 12.436C37.5803 12.3409 37.2148 12.5519 37.1194 12.9075C37.0241 13.2631 37.2353 13.6286 37.5909 13.724C39.3076 14.184 39.2134 14.1675 39.3336 14.1675C39.6279 14.1675 39.8973 13.971 39.9772 13.6731Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0"> Nurse Call System</h3>
                <p className="card-text">
                  We are pioneers in Nurse Call Systems and recognized as
                  leading installer in India.
                </p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M26.7306 12.5C25.4119 6.375 22.5994 2.5 19.9981 2.5C17.3969 2.5 14.5844 6.375 13.2656 12.5H26.7306Z"></path>
                  <path d="M12.5 20C12.4997 21.6722 12.6112 23.3426 12.8338 25H27.1663C27.3888 23.3426 27.5003 21.6722 27.5 20C27.5003 18.3278 27.3888 16.6574 27.1663 15H12.8338C12.6112 16.6574 12.4997 18.3278 12.5 20Z"></path>
                  <path d="M13.2656 27.5C14.5844 33.625 17.3969 37.5 19.9981 37.5C22.5994 37.5 25.4119 33.625 26.7306 27.5H13.2656Z"></path>
                  <path d="M29.2956 12.5H37.1706C35.9874 9.80721 34.1895 7.42918 31.9213 5.55667C29.6531 3.68416 26.9775 2.36928 24.1094 1.7175C26.4806 3.80375 28.3406 7.66125 29.2956 12.5Z"></path>
                  <path d="M38.0638 15H29.6887C29.895 16.6587 29.9981 18.3286 29.9975 20C29.9977 21.6715 29.8941 23.3413 29.6875 25H38.0625C38.9741 21.729 38.9741 18.271 38.0625 15H38.0638Z"></path>
                  <path d="M24.1094 38.2825C26.978 37.6311 29.654 36.3164 31.9227 34.4438C34.1914 32.5713 35.9896 30.1931 37.1731 27.5H29.2981C28.3406 32.3388 26.4806 36.1963 24.1094 38.2825Z"></path>
                  <path d="M10.7109 27.5H2.83594C4.01943 30.1931 5.81766 32.5713 8.08636 34.4438C10.3551 36.3164 13.0311 37.6311 15.8997 38.2825C13.5259 36.1963 11.6659 32.3388 10.7109 27.5Z"></path>
                  <path d="M15.8919 1.7175C13.0233 2.36893 10.3472 3.68365 8.07854 5.55618C5.80984 7.42871 4.01161 9.80692 2.82812 12.5H10.7031C11.6606 7.66125 13.5206 3.80375 15.8919 1.7175Z"></path>
                  <path d="M9.99868 20C9.99852 18.3285 10.102 16.6587 10.3087 15H1.93369C1.0221 18.271 1.0221 21.729 1.93369 25H10.3087C10.102 23.3413 9.99852 21.6715 9.99868 20Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Security Alarm System</h3>
                <p className="card-text">
                  Burglar alarm, IP Video door Phone Systems, Baggage scanner)
                </p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M38.6803 8.92375C38.5174 7.83484 37.9698 6.84032 37.1367 6.12048C36.3036 5.40064 35.2401 5.00313 34.1391 5H5.86156C4.76054 5.00313 3.69708 5.40064 2.86395 6.12048C2.03083 6.84032 1.48319 7.83484 1.32031 8.92375L20.0003 21.0112L38.6803 8.92375Z"></path>
                  <path d="M20.6787 23.55C20.4765 23.6807 20.2408 23.7503 20 23.7503C19.7592 23.7503 19.5235 23.6807 19.3212 23.55L1.25 11.8575V30.3887C1.25132 31.6113 1.73758 32.7834 2.60207 33.6479C3.46656 34.5124 4.63868 34.9987 5.86125 35H34.1388C35.3613 34.9987 36.5334 34.5124 37.3979 33.6479C38.2624 32.7834 38.7487 31.6113 38.75 30.3887V11.8562L20.6787 23.55Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Surveillance System</h3>
                <p className="card-text">
                  CCTV, Under Vehicle Surveillance System
                </p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span
              className="card card-hover-primary border-0 h-100 text-decoration-none"
              href="#"
            >
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M34.25 2H5.25C4.12344 2.00198 3.04359 2.45039 2.24699 3.24699C1.45039 4.04359 1.00198 5.12344 1 6.25V27.75C1.00198 28.8766 1.45039 29.9564 2.24699 30.753C3.04359 31.5496 4.12344 31.998 5.25 32H8.5V38.25C8.50037 38.4929 8.5715 38.7304 8.70469 38.9336C8.83789 39.1367 9.02738 39.2966 9.25 39.3938C9.40728 39.4641 9.5777 39.5003 9.75 39.5C10.0629 39.5 10.3644 39.3827 10.595 39.1712L18.4188 32H34.25C35.3766 31.998 36.4564 31.5496 37.253 30.753C38.0496 29.9564 38.498 28.8766 38.5 27.75V6.25C38.498 5.12344 38.0496 4.04359 37.253 3.24699C36.4564 2.45039 35.3766 2.00198 34.25 2ZM28.5 24.5H11C10.6685 24.5 10.3505 24.3683 10.1161 24.1339C9.8817 23.8995 9.75 23.5815 9.75 23.25C9.75 22.9185 9.8817 22.6005 10.1161 22.3661C10.3505 22.1317 10.6685 22 11 22H28.5C28.8315 22 29.1495 22.1317 29.3839 22.3661C29.6183 22.6005 29.75 22.9185 29.75 23.25C29.75 23.5815 29.6183 23.8995 29.3839 24.1339C29.1495 24.3683 28.8315 24.5 28.5 24.5ZM28.5 18.25H11C10.6685 18.25 10.3505 18.1183 10.1161 17.8839C9.8817 17.6495 9.75 17.3315 9.75 17C9.75 16.6685 9.8817 16.3505 10.1161 16.1161C10.3505 15.8817 10.6685 15.75 11 15.75H28.5C28.8315 15.75 29.1495 15.8817 29.3839 16.1161C29.6183 16.3505 29.75 16.6685 29.75 17C29.75 17.3315 29.6183 17.6495 29.3839 17.8839C29.1495 18.1183 28.8315 18.25 28.5 18.25ZM28.5 12H11C10.6685 12 10.3505 11.8683 10.1161 11.6339C9.8817 11.3995 9.75 11.0815 9.75 10.75C9.75 10.4185 9.8817 10.1005 10.1161 9.86612C10.3505 9.6317 10.6685 9.5 11 9.5H28.5C28.8315 9.5 29.1495 9.6317 29.3839 9.86612C29.6183 10.1005 29.75 10.4185 29.75 10.75C29.75 11.0815 29.6183 11.3995 29.3839 11.6339C29.1495 11.8683 28.8315 12 28.5 12Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Access Control System</h3>
                <p className="card-text">
                  Stand alone, Multi-door systems, Turnstiles, Boom Barrier
                  system
                </p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.8575 10.625L15.3663 24.1162C15.1318 24.3506 15.0001 24.6685 15 25V28.75C15 29.0815 15.1317 29.3995 15.3661 29.6339C15.6005 29.8683 15.9185 30 16.25 30H20C20.3315 29.9999 20.6494 29.8682 20.8838 29.6338L34.4263 16.0913C33.6525 15.3837 32.97 14.7375 32.8662 14.6337L28.8575 10.625Z"></path>
                  <path d="M38.3838 10.3662L34.6338 6.61623C34.3993 6.38189 34.0815 6.25024 33.75 6.25024C33.4185 6.25024 33.1007 6.38189 32.8662 6.61623L30.625 8.85748L36.1425 14.375L38.3838 12.1337C38.6181 11.8993 38.7497 11.5814 38.7497 11.25C38.7497 10.9185 38.6181 10.6006 38.3838 10.3662Z"></path>
                  <path d="M20 32.5H16.25C15.2554 32.5 14.3016 32.1049 13.5983 31.4017C12.8951 30.6984 12.5 29.7446 12.5 28.75V25C12.4986 24.5074 12.595 24.0193 12.7836 23.5642C12.9722 23.1091 13.2493 22.696 13.5987 22.3487L28.75 7.1975V2.5C28.75 2.16848 28.6183 1.85054 28.3839 1.61612C28.1495 1.3817 27.8315 1.25 27.5 1.25H2.5C2.16848 1.25 1.85054 1.3817 1.61612 1.61612C1.3817 1.85054 1.25 2.16848 1.25 2.5V37.5C1.25 37.8315 1.3817 38.1495 1.61612 38.3839C1.85054 38.6183 2.16848 38.75 2.5 38.75H27.5C27.8315 38.75 28.1495 38.6183 28.3839 38.3839C28.6183 38.1495 28.75 37.8315 28.75 37.5V25.3025L22.6513 31.4013C22.304 31.7507 21.8909 32.0278 21.4358 32.2164C20.9807 32.405 20.4926 32.5014 20 32.5ZM7.5 7.5H22.5C22.8315 7.5 23.1495 7.6317 23.3839 7.86612C23.6183 8.10054 23.75 8.41848 23.75 8.75C23.75 9.08152 23.6183 9.39946 23.3839 9.63388C23.1495 9.8683 22.8315 10 22.5 10H7.5C7.16848 10 6.85054 9.8683 6.61612 9.63388C6.3817 9.39946 6.25 9.08152 6.25 8.75C6.25 8.41848 6.3817 8.10054 6.61612 7.86612C6.85054 7.6317 7.16848 7.5 7.5 7.5ZM6.25 15C6.25 14.6685 6.3817 14.3505 6.61612 14.1161C6.85054 13.8817 7.16848 13.75 7.5 13.75H15C15.3315 13.75 15.6495 13.8817 15.8839 14.1161C16.1183 14.3505 16.25 14.6685 16.25 15C16.25 15.3315 16.1183 15.6495 15.8839 15.8839C15.6495 16.1183 15.3315 16.25 15 16.25H7.5C7.16848 16.25 6.85054 16.1183 6.61612 15.8839C6.3817 15.6495 6.25 15.3315 6.25 15Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Electrical</h3>
                <p className="card-text">
                  Cable, wire, switch, socket, fan etc.
                </p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M38.6803 8.92375C38.5174 7.83484 37.9698 6.84032 37.1367 6.12048C36.3036 5.40064 35.2401 5.00313 34.1391 5H5.86156C4.76054 5.00313 3.69708 5.40064 2.86395 6.12048C2.03083 6.84032 1.48319 7.83484 1.32031 8.92375L20.0003 21.0112L38.6803 8.92375Z"></path>
                  <path d="M20.6787 23.55C20.4765 23.6807 20.2408 23.7503 20 23.7503C19.7592 23.7503 19.5235 23.6807 19.3212 23.55L1.25 11.8575V30.3887C1.25132 31.6113 1.73758 32.7834 2.60207 33.6479C3.46656 34.5124 4.63868 34.9987 5.86125 35H34.1388C35.3613 34.9987 36.5334 34.5124 37.3979 33.6479C38.2624 32.7834 38.7487 31.6113 38.75 30.3887V11.8562L20.6787 23.55Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Lighting Automation</h3>
                <p className="card-text">Smart home solution</p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>

          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M38.6803 8.92375C38.5174 7.83484 37.9698 6.84032 37.1367 6.12048C36.3036 5.40064 35.2401 5.00313 34.1391 5H5.86156C4.76054 5.00313 3.69708 5.40064 2.86395 6.12048C2.03083 6.84032 1.48319 7.83484 1.32031 8.92375L20.0003 21.0112L38.6803 8.92375Z"></path>
                  <path d="M20.6787 23.55C20.4765 23.6807 20.2408 23.7503 20 23.7503C19.7592 23.7503 19.5235 23.6807 19.3212 23.55L1.25 11.8575V30.3887C1.25132 31.6113 1.73758 32.7834 2.60207 33.6479C3.46656 34.5124 4.63868 34.9987 5.86125 35H34.1388C35.3613 34.9987 36.5334 34.5124 37.3979 33.6479C38.2624 32.7834 38.7487 31.6113 38.75 30.3887V11.8562L20.6787 23.55Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Networking</h3>
                <p className="card-text">Active, Passive</p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>
          <div className="col">
            <span className="card card-hover-primary border-0 h-100 text-decoration-none">
              <div className="card-body pb-0">
                <svg
                  className="d-block text-warning mb-4"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M38.6803 8.92375C38.5174 7.83484 37.9698 6.84032 37.1367 6.12048C36.3036 5.40064 35.2401 5.00313 34.1391 5H5.86156C4.76054 5.00313 3.69708 5.40064 2.86395 6.12048C2.03083 6.84032 1.48319 7.83484 1.32031 8.92375L20.0003 21.0112L38.6803 8.92375Z"></path>
                  <path d="M20.6787 23.55C20.4765 23.6807 20.2408 23.7503 20 23.7503C19.7592 23.7503 19.5235 23.6807 19.3212 23.55L1.25 11.8575V30.3887C1.25132 31.6113 1.73758 32.7834 2.60207 33.6479C3.46656 34.5124 4.63868 34.9987 5.86125 35H34.1388C35.3613 34.9987 36.5334 34.5124 37.3979 33.6479C38.2624 32.7834 38.7487 31.6113 38.75 30.3887V11.8562L20.6787 23.55Z"></path>
                </svg>
                <h3 className="h4 card-title mt-0">Consultancy</h3>
                <p className="card-text">LV Services</p>
              </div>
              {/* <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <i className="ai-arrow-right"></i>
                </div>
              </div> */}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
