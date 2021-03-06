import React from 'react'
import Helmet from 'react-helmet'

const Organization = () => {

  const schema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    organization: {
      url: 'https://itjobbikalmar.se',
      logo: '',
      foundingDate: '2017',
      founders: [
        {
          "@type": "Person",
          "gender": "male",
          "alumniOf": "Linnaeus University",
          "jobTitle": "Software developer",
          "nationality": "Swedish",
          "name": "Johan Sundén"
        },
        {
          "@type": "Person",
          "gender": "male",
          "alumniOf": "Linnaeus University",
          "jobTitle": "Software developer",
          "nationality": "Swedish",
          "name": "Peter Persson"
        }
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'kontakt@itjobbikalmar.se'
        }
      ],
      sameAs: [ 
        'https://www.instagram.com/itjobbikalmar/'
      ]
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        { JSON.stringify(schema, null, 2) }
      </script>
    </Helmet>
  )
}

export default Organization
