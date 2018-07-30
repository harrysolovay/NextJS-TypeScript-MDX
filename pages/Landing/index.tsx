import 'utilities/normalize-browser-styles'
import containerClass from './styles'
import ReactLogo from 'assets/images/logo.svg'
import { ExternalLink } from 'components'

// import TestPost from '../../src/posts/test-post.mdx'
// console.log(TestPost)

export default () => (
  <div className={ containerClass }>
    <header>
      <ReactLogo />
      <h1>{ `NextJS + TypeScript + MDX = Blog Perfection` }</h1>
    </header>
    <section>
      <p>
        { `To make sure TypeScript is doing its job, let's try adding a prop that we didn't define in the "ExternalLink" component's interface to the following instance: ` }
        <ExternalLink
          href='http://harrysolovay.com'
          children={ `this text is a child of the component; after adding new prop, the app should fail to compile!` }
        />
      </p>
    </section>
  </div>
)