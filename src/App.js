import Project from './components/project/project'
import HeaderComponent from './components/headerComponent/HeaderComponent'
import Navbar from './components/navbar/Navbar'
import headshot from './components/headerComponent/headerImage.jpg'
import Contact from './components/contact/Contact'
import '@fontsource/roboto/400.css';
import { ThemeProvider } from '@emotion/react'
import About from './components/about/About'

function App() {
  return (
      <div className="App">
      {/* <Navbar></Navbar> */}
      <HeaderComponent />
      <About/>
        {data.map((d, index) => (
          <div id="projects" style={style}>
            <Project props={d} i={index} key={index}></Project>
          </div>
        ))}
        <div id="contact" style={contactStyle}>
          <Contact></Contact>
        </div>
      </div>
    
  );
}

export default App;


const data = [
  {
    title: 'Project Power Web App',
    image: headshot,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    index: 1
  },
  {
    title: 'Project Power Web Mobile App',
    image: headshot,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    index: 2
  },
  {
    title: 'Project Power Back End',
    image: headshot,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    index: 3
  }
]

const style = {
  padding: '32px',
  backgroundColor: "#212121"
}

const contactStyle = {
  padding: '64px',
  backgroundColor: '#212121'
}

