import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import { Link } from 'react-router-dom'

const GET_COURSE = gql`
  query course($slug: String!) {
    course(slug: $slug) {
      title
      lessons {
        slug
        title
      }
    }
  }
`

const Course = ({ slug }) => {
  const { data, error, loading } = useQuery(GET_COURSE, { variables: { slug } })

  if (loading) return (<div>Cargando lección ...</div>)

  const { course } = data

  return (
    <div>
      Título: {course.title}

      <hr />

      Lecciones:

      <ul>
      {course.lessons.map((lesson, i) => (
        <Link key={i} to={`/cursos/${slug}/lecciones/${lesson.slug}`}>
          <li>{lesson.title}</li>
        </Link>
      ))}
      </ul>
    </div>
  )
}

export default Course
