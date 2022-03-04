import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

function TopNav() {
  return (
    <div className="TopNavSubin">
      <header>
        <h2 className="title">WeBucks</h2>
        <nav>
          <ul>
            {/* a 태그를 div로 임시 변경함 */}
            <li>
              <Link to="#" class="navMenu">
                COFFEE
              </Link>
            </li>
            <li>
              <Link to="#" class="navMenu">
                MENU
              </Link>
            </li>
            <li>
              <Link to="#" class="navMenu">
                STORE
              </Link>
            </li>
            <li>
              <Link to="#" class="navMenu">
                WHAT'S NEW
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
