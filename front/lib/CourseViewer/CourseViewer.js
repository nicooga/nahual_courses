import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import CurrentLessonViewer from './CurrentLessonViewer'

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

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div``

const Sidebar = styled.div`
  width: 25%;
  flex-shrink: 0;
`

const Body = styled.div`flex-grow: 1;`
const MainContainer = styled.div`display: flex;`

const CourseViewer = ({ courseSlug, lessonSlug }) => {
  const { data, error, loading } = useQuery(GET_COURSE, { variables: { slug: courseSlug } })

  if (loading) return <div>... cargando curso</div>

  const { course } = data

  return (
    <Root>
      <Header>
        <h1>Curso: {course.title}</h1>
      </Header>

      <MainContainer>
        <Sidebar>
          <h2>Lecciones:</h2>

          <ul>
            {course.lessons.map((lesson, i) => (
              <Link key={i} to={`/cursos/${courseSlug}/lecciones/${lesson.slug}`}>
                <li><h3>{lesson.title}</h3></li>
              </Link>
            ))}
          </ul>
        </Sidebar>

        <Body>
          {lessonSlug && <CurrentLessonViewer courseSlug={courseSlug} lessonSlug={lessonSlug}/>}
        </Body>
      </MainContainer>
    </Root>
  )
}

export default CourseViewer
