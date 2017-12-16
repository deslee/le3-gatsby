import Link from 'gatsby-link'
import { css } from 'glamor';
import { unstyledLink, breakpoints } from '../utils/reusableStyles';
import { nav } from '../utils/constants';
import { Footer } from './Footer';

const GenericContent = ({ title, children }) => (
    <div css={{ 
        background: `#f6f7f9 fixed`,
        minHeight: '100vh'
    }}>
        <nav css={{
            padding: '1rem',
            [breakpoints.notSmall]: {
                maxWidth: '58rem', 
                padding: '1rem 1rem',
            },
            margin: '0 auto'
        }}>
            { nav.map(item => <Link key={item.to} to={item.to} css={{ ...unstyledLink, paddingRight: '1rem' }}>{item.name}</Link>) }
        </nav>
        <div css={{ 
            margin: '0 auto', 
            minHeight: '90vh',
            padding: '0 1rem 1rem',
            [breakpoints.notSmall]: {
                padding: '0 2rem 2rem',
            },
            boxSizing: 'content-box', 
            boxShadow: `0px 0px 12px 0px rgba(0,0,0,.15)`,
            background: 'white',
            overflow: 'hidden'
        }}>
            <div css={{
                maxWidth: '54rem', 
                margin: '0 auto',
                animationName: css.keyframes({
                    'from': {
                        opacity: 0,
                        transform: 'translate3d(0, 10px, 0)'
                    },
                    'to': {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)'
                    }
                }),
                animationDuration: '.75s',
                animationFillMode: 'none', animationTimingFunction: 'ease ease'
            }}>
                { title && <h1 css={{fontSize: '2.66em', borderBottom: '1px solid black', paddingBottom: '.5rem'}}>{title}</h1> }
                { children }
            </div>
        </div>
        <Footer innerCss={{textAlign: 'center', padding: '1rem', '> p': {margin: '0'}}}></Footer>
    </div>
  )
  
export default GenericContent