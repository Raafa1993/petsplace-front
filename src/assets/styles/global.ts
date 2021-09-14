import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

:root {
  --background: #f0f2f5;
  --text: #fcfdff;

  --title: #5a5a66;
  --subtitle: #787880;
  --label: #bfbfcc;
  --corner: #E1E3E5;

  --text-card: #707070;

  --red: #fc446c;
  --white: #ffffff;
  --blue: #003265;

  --color-footer: #fcfdff;

  --color-icons: #787880;

  --color-button: #37c77f;
  --color-button-hover: #3ee08f;
  --color-secondary: #f1972c;
  --color-secondary-hover: #fa9c2d;
}

html {
  font-size: 62.5%;
}

/* user-agent font-size is 16px, let's make it responsive
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;  15px
  }
}

@media (max-width: 970px) {
  html {
    font-size: 87.5%;  14px
  }
}

@media (max-width: 700px) {
  :root {
    font-size: 75%;  12px
  }
}

@media (max-width: 590px) {
  :root {
    font-size: 62.25%;  10px
  }
} */

/* tags styling */
body {
  background: var(--background);
}

body,
input,
button,
textarea {
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
  border: none;
  font: 500 1rem 'Poppins';
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
span,
strong {
  font-weight: 500;
}

ul li {
  list-style: none;
}

button {
  cursor: pointer;
}

.container {
  width: min(1051px, 95vw);
  margin: 0 auto;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 900px;
  background: var(--background);
  border-radius: 10px;
  position: relative;
}

.react-modal-close {
  position: absolute;
  right: -2.5rem;
  top: -2.5rem;
  background: var(--text);
  border-radius: 8px;
  filter: drop-shadow(-4px 3px 6px rgba(0, 0, 0, 0.161));
  border: 0;
  font-size: 0;
  z-index: 10;

  img {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
}

/* width: 95%;
max-width: 1051px;
margin: 0 auto; */

`;
