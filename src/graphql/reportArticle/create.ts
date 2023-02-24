import gql from 'graphql-tag'

export default gql`
  mutation ($title: String, $subTitle: String, $content: String) {
    createReportArticle(
      data: { title: $title, subTitle: $subTitle, content: $content }
    ) {
      data {
        id
        attributes {
          title
          subTitle
          content
        }
      }
    }
  }
`
