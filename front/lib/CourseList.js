import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const GET_COURSES = gql`
  {
    courses {
      slug
      title
    }
  }
`

const CourseList = _props => {
  const { data, error, loading } = useQuery(GET_COURSES);

  if (loading) return (<div>... cargando lista de cursos</div>)

  return (
    <div>
      <h1>Lista de cursos</h1>

      <ul>
        {data.courses.map((course, i) => (
          <li>
            <Link key={i} to={`/cursos/${course.slug}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList
