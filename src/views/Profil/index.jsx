import React, { Component } from 'react';

import { MetaTags } from './components/Meta';

class Profil extends React.Component {
  render() {
    return (
      <div className="profil">
        <MetaTags>
          <title>React Meta Tags | Page1</title>
          <link rel="canonical" href="/profil" />
          <meta name="description" content="React meta tags handles document meta/head tags in isomorphic react with ease." />
          <meta property="og:title" content="MyApp-Page1" />
          <meta itemProp="test" content="Profil" />
        </MetaTags>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

export default Profil;
