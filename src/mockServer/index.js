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
    description: 'Bachelor of Computer Technologies with a main focus on web development, using languages such as PHP and Java (working with creation and maintenance of monoliths and development, consumption and communication of APIs). In addition to technologies such as JavaScript, CSS, Tailwind and React, for Frontend development.'
  }
]

const portfolioProjects = [
  {
    id: 1,
    name: 'Cody Holiday',
    description: " Created with HTML and CSS, SPA showing the cody vacations. Cody's pet from CodigoFacilito ",
    technologies: [
      {
        id: 1,
        name: 'html5'
      },
      {
        id: 2,
        name: 'css3'
      },
      {
        id: 3,
        name: 'js'
      }
    ],
    buttonGroup: [
      {
        id: '1',
        text: 'Source code',
        variant: 'button-portfolioItem',
        url: 'https://github.com/EdgarGc026/vacaciones-cody',
        iconName: 'github'
      },
      {
        id: '2',
        text: 'Demo',
        variant: 'button-portfolioItem',
        url: 'edgargc026.github.io/vacaciones-cody/',
        iconName: 'firefox-browser'
      }
    ]
  },
  {
    id: 2,
    name: 'Batatabit movil',
    description: ' Created with HTML and CSS. Static page for a bitcoin company.',
    technologies: [
      {
        id: 1,
        name: 'html5'
      },
      {
        id: 2,
        name: 'css3'
      }
    ],
    buttonGroup: [
      {
        id: '1',
        text: 'Source code',
        variant: 'button-portfolioItem',
        url: 'https://github.com/EdgarGc026/batatabit-mobile',
        iconName: 'github'
      },
      {
        id: '2',
        text: 'Demo',
        variant: 'button-portfolioItem',
        url: 'https://edgargc026.github.io/batatabit-mobile/',
        iconName: 'firefox-browser'
      }
    ]
  },
  {
    id: 3,
    name: 'Creaty Agency',
    description: ' Created with Vuejs, HTML and CSS. Website of a web development agen ',
    technologies: [
      {
        id: 1,
        name: 'react'
      },
      {
        id: 2,
        name: 'html5'
      },
      {
        id: 3,
        name: 'css3'
      }
    ],
    buttonGroup: [
      {
        id: '1',
        text: 'Source code',
        variant: 'button-portfolioItem',
        url: 'https://github.com/EdgarGc026/vue-agency',
        iconName: 'github'
      },
      {
        id: '2',
        text: 'Demo',
        variant: 'button-portfolioItem',
        url: 'https://vue-agency.netlify.app/',
        iconName: 'firefox-browser'
      }]
  },
  {
    id: 4,
    name: 'Exchange, Crytpo App',
    description: ' App that consumes the Coincase api to bring the information of the 20 most popular currencies in the market.  ',
    technologies: [
      {
        id: 1,
        name: 'react'
      },
      {
        id: 3,
        name: 'html5'
      },
      {
        id: 4,
        name: 'css3'
      }
    ],
    buttonGroup: [
      {
        id: '1',
        text: 'Source code',
        variant: 'button-portfolioItem',
        url: 'https://github.com/EdgarGc026/exchange-app',
        iconName: 'github'
      },
      {
        id: '2',
        text: 'Demo',
        variant: 'button-portfolioItem',
        url: 'https://exchange-cripto-app.netlify.app',
        iconName: 'firefox-browser'
      }
    ]
  },
  {
    id: 5,
    name: 'Portfolio Web.',
    description: ' Created with Vuejs, HTML and CSS, SPA that you can see just now ',
    technologies: [
      {
        id: 1,
        name: 'react'
      },
      {
        id: 2,
        name: 'html5'
      },
      {
        id: 3,
        name: 'css3'
      }
    ],
    buttonGroup: [
      {
        id: '1',
        text: 'Source code',
        variant: 'button-portfolioItem',
        url: 'https://github.com/EdgarGc026/personal-website',
        iconName: 'github'
      },
      {
        id: '2',
        text: 'Demo',
        variant: 'button-portfolioItem',
        url: 'https://edggc026.netlify.app/',
        iconName: 'firefox-browser'
      }
    ]
  }
]

const pageHomeData = {
  heroComponent,
  skills,
  aboutMe,
  portfolioProjects,
  socialMediaButtonGroup
}

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

    this.get('/portfolioComponent', () => {
      return portfolioProjects
    })

    this.get('/portfolioProjects', (schema, request) => {
      return portfolioProjects
    })

    this.get(`/pageHome`, (schema, request) => {
      return pageHomeData
    })
  }
})
