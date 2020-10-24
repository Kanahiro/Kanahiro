import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface HeaderPageProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Header = () => {
  const data: HeaderPageProps = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div
        style={{
          background: 'white',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: '#333',
                textDecoration: 'none',
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
