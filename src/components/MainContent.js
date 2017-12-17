import Link from 'gatsby-link'
import { css } from 'glamor';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/lib/fa';
import { unstyledLink, breakpoints, contentAnimation, socialIcons } from '../utils/reusableStyles';
import { nav } from '../utils/constants';
import { Footer } from './Footer';

const MainSection = ({ title, children, innerCss }) => (
    <section css={{...innerCss}}>
        <nav css={{
            padding: '2rem 1rem 1rem',
            borderBottom: '1px solid #dedede',
            marginBottom: '1rem'
        }}>
            { nav.map(item => <Link key={item.to} to={item.to} css={{ ...unstyledLink, paddingRight: '1rem' }}>{item.name}</Link>) }
        </nav>
        <div css={{
            padding: '.67rem 1rem 1rem',
            maxWidth: '48rem',
            ...contentAnimation
        }}>
            { title && <h1 css={{ fontSize: '2.66em', borderBottom: '1px solid #dedede', paddingBottom: '.5rem'}}>{title}</h1> }
            { children }
        </div>
    </section>
)

const Sidebar = ({ innerCss, data }) => (
    <div css={{
        ...innerCss,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }}>
        <div css={{flex: '2'}}></div>
        <div css={{flex: '6', textAlign: 'center'}}>
            <Link to="/"><img css={{ width: '75%', maxWidth: '12rem', marginBottom: '0' }} src={data.logo.resize.tracedSVG} /></Link>
            <h1>Desmond Lee</h1>
            <p>Software Consultant from DFW</p>
            <div css={{ marginBottom: '' }}>
                <a href="http://github.com/deslee" target="_blank" css={{...unstyledLink, padding: '0 1rem'}}><FaGithub css={{...socialIcons, width: '1.5rem', height: '1.5rem'}}/></a>
                <a href="https://www.linkedin.com/in/deslee/" target="_blank" css={{...unstyledLink, padding: '0 1rem'}}><FaLinkedin css={{...socialIcons, width: '1.5rem', height: '1.5rem'}}/></a>
                <a href="https://twitter.com/desmond_c_lee" target="_blank" css={{...unstyledLink, padding: '0 1rem'}}><FaTwitter css={{...socialIcons, width: '1.5rem', height: '1.5rem'}}/></a>
                <a href="https://instagram.com/desle3" target="_blank" css={{...unstyledLink, padding: '0 1rem'}}><FaInstagram css={{...socialIcons, width: '1.5rem', height: '1.5rem'}}/></a>
            </div>
        </div>
        
        <div css={{flex: '2'}}></div>
    </div>
)

const MainContent = ({ title, children, data }) => (
    <div>
        <div css={{
            minHeight: '100vh',
            height: '100%',
            [breakpoints.mediumAndUp]: {
                display: 'flex'
            }
        }}>
            <div css={{
                [breakpoints.mediumAndUp]: {
                },
                flex: '4'
            }}>
                <Sidebar innerCss={{
                    [breakpoints.mediumAndUp]: {
                        height: '100vh',
                        position: 'fixed',
                        width: '39%',
                        background: '#f6f7f9',
                    },
                }} data={data}>
                </Sidebar>
            </div>
            <MainSection innerCss={{
                flex: '6'
            }} title={title}>
                { children }
            </MainSection>
        </div>
        <Footer innerCss={{
            borderTop: '1px solid #dedede',
            padding: '1.5rem',
            textAlign: 'center',
            '> p': {
                margin: 0
            },
            [breakpoints.mediumAndUp]: {
                position: 'fixed',
                borderTop: 'none',
                bottom: '0',
                width: '39%',
                left: '0'
            }
        }}></Footer>
    </div>
  )

  // 
  
export default MainContent