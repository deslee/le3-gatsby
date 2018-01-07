import { unstyledLink } from '../utils/reusableStyles';

export const Footer = ({ innerCss }) => (
    <footer css={{...innerCss}}>
        <p css={{marginTop: 0, marginBottom: '.5rem'}}><a css={{...unstyledLink}} href="https://github.com/deslee/le3.io" target="_blank" rel="noopener">Built using Gatsby</a></p>
    </footer>
)