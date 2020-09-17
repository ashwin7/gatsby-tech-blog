import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Pricing from '../../components/Pricing'
import Tag from '../../components/Tag'

const DESC = {
  'Programming': 'We are all apprentices in a craft where no one ever becomes a master. Read my little nuggets of programming knowledge I\'ve learnt over the years.',
  'Books': 'It is books that are the key to the wide world; if you can’t do anything else, read all that you can. Here are few book recommendations from me.',
  'Investing': 'My Ideas about investing. How to get the most out of money- Save Money, Save Tax, Spend Wisely and Invest. Plan better.'
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Topics</h1>
            <ul className="taglist">
              {group.map(tag => (
                <Tag title={tag.fieldValue} count={tag.totalCount} desc={DESC[tag.fieldValue]} link={`/tags/${kebabCase(tag.fieldValue)}`} className={tag.fieldValue + '-tag'}></Tag>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
