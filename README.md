<h1 align='center'>Tournament Tree</h1>

<br>
<br>
<br>

<div align="center">
  <h3 align="center">
    A tournament tree app to show knockout stages
  </h3>
</div>

<br>
<br>
<br>

![tournament_tree_gif](https://github.com/ozanisgor/tournament-tree/blob/main/public/tournament-tree.gif)

<br>
<br>

## Table Of Content

- [About](#about)
- [Built With](#built-with)
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Status](#project-status)
- [Roadmap](#roadmap)
- [License](#license)

## About

This is a project that aims to create a single elimination tournament tree for sports tournament matchups.

## Built With

Used following resources for the project:

- [![Next][Next.js]][Next-url]
- [![React][typescript]][typescriptp-url]
- [![Zustand][zustand]][zustand-url]
- [![Tailwind][tailwind]][tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Overview

The project consists of the following components:

- Matchups
- Tournament Tree

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have following prerequisites.

- Node.js 16.14 or later

### Installation

_Please follow the below instructions to install and setup the tool._

1. Clone the repo with HTTPS
   ```sh
   git clone https://github.com/ozanisgor/tournament-tree.git
   ```
1. Or clone the repo with SSH
   ```sh
   git clone git@github.com:ozanisgor/tournament-tree.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Run the app in development mode
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Prepare a JSON file in the following format:

```json
[
  {
    "id": 1,
    "round": 1,
    "match": 1,
    "players": [
      {
        "id": 1,
        "name": "TEAM A",
        "seed": 1
      },
      {
        "id": 2,
        "name": "TEAM P",
        "seed": 16
      }
    ],
    "score": [
      [3, 2],
      [4, 3],
      [5, 7]
    ]
  },
  ...
]
```

<br>
<br>

Get the data and pass to the `Bracket`

```js
export default function Home({ matches }) {
  return (
    <div>
      <Bracket matches={matches} />
    </div>
  );
}

export async function getStaticProps() {
  const matches = await getLocalData();

  return {
    props: { matches },
  };
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Status

- **Development Stage:** Beta

  - Project is currently in the beta phase, with most of the core features implemented and tested.

- **Maintenance:** Active

  - Actively maintaining and updating the project with bug fixes, performance enhancements, and new features.

- **Future Plans:**
  - Planning to improve the user interface based on user feedback.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Colored connector lines for the highlighted player
- [ ] More details about matchups
- [ ] Add images

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

The project is licensed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[typescript]: https://img.shields.io/badge/typescript-358EF1?style=for-the-badge&logo=typescript&logoColor=white
[typescriptp-url]: https://www.typescriptlang.org/
[tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[zustand]: https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[zustand-url]: https://zustand-demo.pmnd.rs/
