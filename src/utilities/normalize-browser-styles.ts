import { injectGlobal } from 'emotion'

export default injectGlobal(`

  /* container */
  html, body, div, header, nav, menu, main, section, hr, footer,

  /* media */
  img, svg, audio, video, canvas, object, iframe,

  /* text */
  h1, h2, h3, h4, h5, h6, a, p, span, ol, ul, li,
  blockquote, code, del, ins, sub, sup,

  /* data */
  table, caption, tbody, tfoot, thead, tr, th, td,
  
  /* form */
  form, label, input, textarea, datalist, option, select, button

  {

    position: relative;
    top : 0px; right: 0px; bottom: 0px; left: 0px;

    box-sizing: border-box;
    width: inherit;
    height: inherit;
    overflow: hidden;
    padding: 0px;
    border-style solid;
    border-width: 0px;
    margin: 0px;
    background-color: transparent;

    text-align: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: inherit;
    color: inherit;
    white-space: normal;
    max-width: 100%;

    appearance: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

  
  }

  :focus {
    border-style: none;
    outline : none;
  }

  ::selection,
  ::-moz-selection {
    background-color: rgba(52, 152, 219, .375);
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: left;
  }

  a, button {
    cursor: pointer;
  }

`)