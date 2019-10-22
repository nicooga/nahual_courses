import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'

const Root = styled.div`
  pre {
    background-color: lightgrey;
    padding: 10px;
  }

  .markdown-syntax-error {
    background-color: red;
    padding: 10px;
  }
`

const GET_COURSE_LESSON = gql`
  query courseLesson($courseSlug: String!, $lessonSlug: String!) {
    courseLesson(courseSlug: $courseSlug, lessonSlug: $lessonSlug) {
      title
      body
    }
  }
`

const CurrentLessonViewer = ({ courseSlug, lessonSlug }) => {
  const { data, error, loading } = useQuery(GET_COURSE_LESSON, { variables: { courseSlug, lessonSlug } })
  if (loading) return (<div>... cargando lección</div>)
  const { courseLesson: lesson } = data
  return (<Root dangerouslySetInnerHTML={{ __html: lesson.body }} />)
}

export default CurrentLessonViewer
