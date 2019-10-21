import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const GET_COURSE_LESSON = gql`
  query courseLesson($courseSlug: String!, $lessonSlug: String!) {
    courseLesson(courseSlug: $courseSlug, lessonSlug: $lessonSlug) {
      title
      body
    }
  }
`

const CourseLesson = ({ courseSlug, lessonSlug }) => {
  const { data, error, loading } =
    useQuery(GET_COURSE_LESSON, { variables: { courseSlug, lessonSlug } })

  if (loading) return (<div>... cargando leccion</div>)

  const { courseLesson: lesson } = data

  return (
    <div>
      <h1>{lesson.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: lesson.body }} />
    </div>
  )
}

export default CourseLesson
