import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <Outlet />
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href="{`/contacts/1`}">Your Name</a>
            </li>
            <li>
              <a href="{`/contacts/2`}">Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default Root;
