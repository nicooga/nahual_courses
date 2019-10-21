import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import marked from 'marked'
import realSlugify from 'slugify'
import { keyBy } from 'lodash'
import { highlight } from 'highlight.js'

marked.setOptions({ highlight: (code, lang) => highlight(lang, code).value })

const readYAMLFile = path => path |> fs.readFileSync(#, 'utf8') |> YAML.parse(#)
const slugify = str => realSlugify(str).toLowerCase()

//class Course {
  //constructor(courseName) {
    //const dataDir      = path.join(COURSES_DIR, courseName)
    //const manifestPath = path.join(dataDir, 'manifest.yml')
    //const lessonsDir   = path.join(dataDir, 'lessons')
  //}
//}

const COURSES_DIR = '../courses'

const COURSES = fs.readdirSync(COURSES_DIR).map(courseName => {
  const dataDir      = path.join(COURSES_DIR, courseName)
  const manifestPath = path.join(dataDir, 'manifest.yml')
  const lessonsDir   = path.join(dataDir, 'lessons')

  const { title } = readYAMLFile(manifestPath)
  const slug = slugify(title)

  const lessons =
    fs.readdirSync(lessonsDir).map(lessonName => {
      const lessonDir          = path.join(lessonsDir, lessonName)
      const lessonManifestPath = path.join(lessonDir, 'manifest.yml')
      const lessonBodyPath     = path.join(lessonDir, 'lesson.md')

      const { title } = readYAMLFile(lessonManifestPath)
      const slug = slugify(title)
      const body = lessonBodyPath |> fs.readFileSync(#, 'utf8') |> marked(#)

      const lesson = { title, body, slug }

      return lesson
    })

  const lessonsBySlug = lessons |> keyBy(#, 'slug')
  const course = { slug, title, lessons, lessonsBySlug }

  return course
})

const COURSES_BY_SLUG = COURSES |> keyBy(#, 'slug')

// This service acts as an access interface to actions related to courses,
// like listing all courses, retrieving a single course and more.
//
// A.K.A "hiding the trash under the carpet" :).
//
// For development and for now, we store the courses inside this repo under /courses.
const Courses = {
  findAll: _ => COURSES,
  findBySlug: slug => COURSES_BY_SLUG[slug],
  findCourseLesson: ({ courseSlug, lessonSlug }) => COURSES_BY_SLUG[courseSlug].lessonsBySlug[lessonSlug]
}

export default Courses
