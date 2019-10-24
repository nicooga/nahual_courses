import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import marked from 'marked'
import realSlugify from 'slugify'
import { keyBy } from 'lodash'
import { highlight } from 'highlight.js'

const COURSES_DIR = process.env.COURSES_DIR || '../courses'

marked.setOptions({ highlight: (code, lang) => highlight(lang, code).value })

const readYAMLFile = path => path |> fs.readFileSync(#, 'utf8') |> YAML.parse(#)
const slugify = str => realSlugify(str).toLowerCase()

class Course {
  // Takes the course name which matches the folder name under /courses
  constructor(courseName) {
    this._dataDir = path.join(COURSES_DIR, courseName)

    const manifest = path.join(this._dataDir, 'manifest.yml') |> readYAMLFile(#)

    this.title    = manifest.title
    this.slug     = slugify(this.title)
  }

  lessons() {
    const lessonsDir = path.join(this._dataDir, 'lessons')
    return fs.readdirSync(lessonsDir).map(lessonName => new Lesson(lessonsDir, lessonName))
  }

  lessonsBySlug() { return this.lessons() |> keyBy(#, 'slug') }
}

class Lesson {
  constructor(lessonsDir, name) {
    this._dataDir = path.join(lessonsDir, name)

    const manifest = path.join(this._dataDir, 'manifest.yml') |> readYAMLFile(#)

    this.title = manifest.title
    this.slug = slugify(this.title)
  }

  body() {
    try {
      return (
        this._dataDir
        |> path.join(#, 'lesson.md')
        |> fs.readFileSync(#, 'utf8')
        |> marked(#)
      )
    } catch(error) {
      return `
        <div class='markdown-syntax-error'>
          <strong>Error de sintaxis</strong>
          <hr />
          ${error.stack.replace("\n", "<br />")}
        </div>
      `
    }
  }
}

const COURSES = fs.readdirSync(COURSES_DIR).map(courseName => new Course(courseName))
const COURSES_BY_SLUG = COURSES |> keyBy(#, 'slug')

// This service acts as an access interface to actions related to courses,
// like listing all courses, retrieving a single course and more.
//
// A.K.A "hiding the trash under the carpet" :).
//
// For development and for now, we store the courses inside this repo under /courses.
//
// TODO: memoize this for production
const Courses = {
  findAll: _ => COURSES,
  findBySlug: slug => COURSES_BY_SLUG[slug],
  findCourseLesson: ({ courseSlug, lessonSlug }) => COURSES_BY_SLUG[courseSlug].lessonsBySlug()[lessonSlug]
}

export default Courses
