import { css } from 'emotion'

export default css(`

  > header {

    background-color: #222;
    padding: 40px;
    color: #fff;
    text-align: center;

    > svg {
      animation: logo-spin infinite 20s linear;
      height: 80px;
    }

    > h1 {
      margin-top: 20px;
      font-size: 1.5em;
    }

  }

  > section {

    max-width: 800px;
    margin: 0px auto;
    padding: 20px;

    > p {

      font-size: large;

      a {
        text-decoration: underline;
        color: #3498db;
      }

    }

  }

  @keyframes logo-spin {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }

`)