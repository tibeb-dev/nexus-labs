import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link 
            className="nav-link"
            href="/"
          >
            Home
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/portfolio">
            <a className="nav-link"> Projects </a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/about-us">
            <a className="nav-link"> About </a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/contact-us">
            <a className="nav-link"> contact </a>
          </Link>
        </li>

      </ul>
      {/* <div className="action-btns mt-4 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/login">
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Sign In
            </a>
          </Link>
        </span>
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/request-demo">
            <a className="btn btn-primary">Get Started</a>
          </Link>
        </span>
      </div> */}
    </div>
  );
};

export default OffCanvasMenu;
