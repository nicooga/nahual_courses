import { ApolloServer, gql } from 'apollo-server'
import Courses from './Courses'

const typeDefs = gql`
  type Course {
    slug: String!,
    title: String!,
    lessons: [Lesson!]!
  }

  type Lesson {
    slug: String!,
    title: String!,
    body: String!
  }

  type Query {
    courses: [Course]!,
    course(slug: String!): Course!,
    courseLesson(courseSlug: String!, lessonSlug: String!): Lesson!
  }
`

const resolvers = {
  Query: {
    courses: (_root, _input, _context) => Courses.findAll(),
    course: (_root, { slug }, _context) => Courses.findBySlug(slug),
    courseLesson: (_root, { courseSlug, lessonSlug }, _context) =>
      Courses.findCourseLesson({ courseSlug, lessonSlug })
  }
}

const Server = new ApolloServer({ typeDefs, resolvers })

export default Server
