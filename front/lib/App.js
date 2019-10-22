import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import styled from 'styled-components'

import ApolloProvider from './ApolloProvider'

import CourseList from './CourseList'
import CourseViewer from './CourseViewer'
import CourseLesson from './CourseLesson'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 20vw;
`

const App = _props => (
  <ApolloProvider>
    <Router>
      <Root>
        <Link to='/'>
          <h1>Cursos Nahual</h1>
        </Link>

        <Switch>
          <Route
            path='/cursos/:courseSlug/lecciones/:lessonSlug'
            component={_props => {
              const { courseSlug, lessonSlug } = useParams()
              return (<CourseViewer courseSlug={courseSlug} lessonSlug={lessonSlug} />)
            }}
          />
          <Route
            path='/cursos/:courseSlug'
            component={_props => {
              const { courseSlug } = useParams()
              return (<CourseViewer courseSlug={courseSlug} />)
            }}
          />
          <Route path='/' component={CourseList} />
        </Switch>
      </Root>
    </Router>
  </ApolloProvider>
)

export default App
