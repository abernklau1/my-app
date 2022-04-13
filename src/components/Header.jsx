import React from "react";

function Header() {
  return (
    <nav>
      <div class="nav-container">
        <a class="logo" href="/">
          Logo
        </a>
        <div class="nav">
        <ul class="nav-list">
          <li class="nav-list-item">
            <a class="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
          <li class="nav-list-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-list-item">
            <a class="nav-link" href="/sick">
              Sick
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
