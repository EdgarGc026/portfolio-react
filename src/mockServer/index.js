import { createServer } from 'miragejs'

const heroComponent = {
  name: 'Edgar Gonzalez',
  profession: 'Backend developer',
  button: {
    variant: 'heroButton',
    buttonText: 'Get Cv',
    url: 'https://drive.google.com/file/d/1mFTbUjSFcJ-gwbdTixT7M6jMHruNXyFY/view?usp=sharing'
  }
}

const socialMediaButtonGroup = [
  { id: 1, name: 'github', url: 'https://github.com/edgargc026' },
  {
    id: 2, name: 'linkedin-in', url: 'https://www.linkedin.com/in/edgargc026/'
  },
  { id: 3, name: 'twitter', url: 'https://twitter.com/edgargc026' },
  { id: 4, name: 'instagram', url: 'https://instagram.com/edgargc026' }
]

const skills = [
  {
    id: 1,
    name: 'Laravel',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    id: 2,
    name: 'PHP',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    id: 3,
    name: 'Grails',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    id: 4,
    name: 'Java',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    id: 5,
    name: 'React',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    id: 6,
    name: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
]

const aboutMe = [
  {
    "description": "Bachelor of Computer Technologies with a main focus on web development, using languages such as PHP and Java (working with creation and maintenance of monoliths and development, consumption and communication of APIs). In addition to technologies such as JavaScript, CSS, Tailwind and React, for Frontend development."
  }
]

export const mockServer = createServer({
  routes() {
    this.get('/buttons/:variant', (schema, request) => {
      return {
        data: {
          text: `${request.params.variant}`,
          variant: request.params.variant
        }
      }
    })

    this.get('/heroComponent', (schema, request) => {
      return heroComponent
    })

    this.get('/socialMediaButtonGroup', (schema, request) => {
      return socialMediaButtonGroup
    })

    this.get('/skills', (schema, request) => {
      return skills
    })

    this.get('/aboutComponent', (schema, request) => {
      return aboutMe
    })
  }
})
