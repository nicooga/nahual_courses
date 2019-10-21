import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

import ApolloProvider from './ApolloProvider'

import CourseList from './CourseList'
import Course from './Course'
import CourseLesson from './CourseLesson'

const App = _props => (
  <ApolloProvider>
    <Router>
      <Switch>
        <Route
          path='/cursos/:courseSlug/lecciones/:lessonSlug'
          component={_props => {
            const { courseSlug, lessonSlug } = useParams()
            return (<CourseLesson {...{courseSlug, lessonSlug}} />)
          }}
        />
        <Route
          path='/cursos/:slug'
          component={_props => {
            const { slug } = useParams()
            return (<Course slug={slug} />)
          }}
        />
        <Route path='/' component={CourseList} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App
