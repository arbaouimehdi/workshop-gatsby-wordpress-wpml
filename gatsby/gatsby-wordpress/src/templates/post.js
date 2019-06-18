
import React from 'react';
import PropType from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const PostTemplate = (props) => {

  const { data: { wordpressPost: post } } = props;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
        wordpressPost(id: {eq: $id }) {
        title
        content
      }
    }
  `;
