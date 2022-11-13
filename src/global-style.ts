import {
    css,
} from "@emotion/react";
const globalStyle = css`
html, body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
}

* {
    box-sizing: boder-box;
}

a {
    color: inherit;
    text-decoration: none;
}

@media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
    body {
        color: white;
        background: black;
    }
}
`;

export default globalStyle;
