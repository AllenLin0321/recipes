import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          name
          age
        }
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);
  return (
    <div>
      <h2>{data.site.info.person.name}</h2>
      <h3>{data.site.info.author}</h3>
      <h3>{data.site.info.description}</h3>
      {data.site.info.complexData.map((item, index) => (
        <p key={index}>
          {item.name} {item.age}
        </p>
      ))}
    </div>
  );
};

export default FetchData;
