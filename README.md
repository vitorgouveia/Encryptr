<br />

<div align="center">
  <a href="https://vitorgouveia.github.io/Encryptr">
    <img width="200px" src=".github/assets/encryptr.png" />
  </a>
</div>

<br />

<img src=".github/assets/encryptr-cover.jpg" />

<div align="center">
  <table>
    <tr>
      <td valign="top">
        <a style="color: #9691A1; text-decoration: underline; font-style: italic;" href="https://www.figma.com/file/plTBuSRfWC5Nwq289A8OYW/Encryptr?node-id=0%3A1">
          Figma
        </a>
      </td>
      <td valign="top">
        <a style="color: #9691A1; text-decoration: underline; font-style: italic;" href="https://vitorgouveia.notion.site/Encryptr-e357c4dc44d240beb21d4418c689d79a">
          Notion
        </a>
      </td>
    </tr>
  </table>
</div>

---
<br />

<h2 style="color: #C5C2CB;"><strong>Table of Contents</strong></h2>

<ul style="list-style: none;">
  <li>
    <a
      style="border-left: 2px solid #896AC8; padding-left: 1rem; color: #896AC8;"
      href="#introduction"
    >
      👋 Introduction
    </a>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#structure"
    >
      📂 Structure
    </a>
    <ul style="list-style: none;">
      <li>
        <a
          style="color: #AEAAB6;"
          href="#structure-core"
        >
          Core
        </a>
      </li>
      <li>
        <a
          style="color: #AEAAB6;"
          href="#structure-docs"
        >
          Docs
        </a>
      </li>
      <li>
        <a
          style="transparent; color: #AEAAB6;"
          href="#structure-web"
        >
          Web
          <ul style="list-style: none;">
            <li>
              <a
                style="color: #AEAAB6;"
                href="#structure-web-prologue"
              >
                Prologue
              </a>
            </li>
          </ul>
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#my-experience"
    >
      🪄 My Experience
    </a>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#for-the-next-project"
    >
      💻 For the next project
    </a>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#creator"
    >
      🤔 Creator
    </a>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#license"
    >
      License
    </a>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#colaborators"
    >
      Colaborators
    </a>
  </li>
  <li>
    <a
      style="border-left: 2px solid transparent; padding-left: 1rem; color: #AEAAB6;"
      href="#contact"
    >
      📝 Contact
    </a>
  </li>
</ul>
<br />

<section>
  <h2 style="color: #C5C2CB;" id="introduction">
    <strong>👋 Introduction</strong>
  </h2>

  <p style="color: #AEAAB6;">
    This is a high-school project I’ve made to test some encrypting methods (ROT and Zenit).
  </p>
</section>

<br />

<section>
  <h2 style="color: #C5C2CB;" id="structure">
    <strong>📂 Structure</strong>
  </h2>
  
  <div>
    <p style="color: #AEAAB6;">
      This a monorepo built with yarn workspaces. These are all the existing packages. All of the packages are build with typescript and are located inside the <code><strong>packages</strong></code> folder.
    </p>
    <br />
    <table style="background: #0F0E11;">
      <tr style="background: #252329;">
        <th style="color: #C5C2CB;">Package</th>
        <th style="color: #C5C2CB;">Description</th>
      </tr>
      <tr>
        <th style="color: #AEAAB6; text-decoration: wavy underline;">
          <a href="#structure-core">core</a>
        </th>
        <th style="color: #9691A1; font-weight: 400;">
          Main encryption and decryption algorithms
        </th>
      </tr>
      <tr>
        <th style="color: #AEAAB6; text-decoration: wavy underline;">
          <a href="#structure-docs">docs</a>
        </th>
        <th style="color: #9691A1; font-weight: 400;">Documentation about the core functions</th>
      </tr>
      <tr>
        <th style="color: #AEAAB6; text-decoration: wavy underline;">
          <a href="#structure-docs">web</a>
        </th>
        <th style="color: #9691A1; font-weight: 400;">A Next.js front-end</th>
      </tr>
    </table>
  </div>

  <br />

  <div>
    <h3 style="color: #C5C2CB;" id="structure-core"><strong>Core</strong></h3>
    <p style="color: #AEAAB6;">
      The <code><strong>core</strong></code> package is a simple typescript project. It uses <code><strong>SOLID</strong></code> principles to implement different cryptography methods by creating a “base” cryptography contract called <code>ICryptography</code>, it establishes base “behaviors” that all cryptographic methods should follow, the contract looks like this.
    </p>
    <div>
  </div>

  ```ts
    export interface ICryptography {
      execute: (value: string) => Promise<string>;
    }
  ```

  <p style="color: #AEAAB6;">
    Because it’s an interface we can implement it in classes like so
  </p>

  ```ts
    export class ROT implements ICryptography {}
  ```

  <p style="color: #AEAAB6;">
    The thing is, if the class would to implement the <code>ICryptography</code> contract, it would necessarily need to also create that <kbd>execute</kbd> method defined in the contract otherwise typescript would start to yell at you.<br />
    This is what a no-error implementation would look like.
  </p>

  ```ts
    export class ROT implements ICryptography {
      public async execute(value: string): Promise<string> {
        return value;
      }
    }
  ```

  <p style="color: #AEAAB6;">
    For the typescript part this is basically it, if you want to see more on how I build the cryptographic methods specifically you can <a href="https://github.com/VitorGouveia/Encryptr/blob/main/packages/core/src/implementations/rot.ts">start here</a>.
  </p>

  <br />

  <hr />

  <br />

  <div>
    <h3 style="color: #C5C2CB;" id="structure-docs"><strong>Docs</strong></h3>
    <p style="color: #AEAAB6;">
      The docs package doesn’t actually need to exist but I’ve built it anyway because I wanted to try out <a href="https://nextra.vercel.app">Nextra</a> again but I couldn’t get it to work properly so I switched to <a href="https://docusaurus.io">Docsaurus</a>. I’ve had a really good experience with it, it’s highly customizable, I applied my theme in a matter of minutes and served me really well  with those static markdown pages.  
    </p>
    <p style="color: #AEAAB6;">
      If you can, please visit their <a href="https://docusaurus.io/docs">docs</a>.
    </p>
    <p style="color: #AEAAB6;">
      I just slapped some of my colors and sizes from the <a href="https://www.figma.com/file/plTBuSRfWC5Nwq289A8OYW/Encryptr?node-id=6%3A8">style-guide</a> on the css and it worked perfectly, I won’t enter in too much detail on why my colors look how they look or why I build a whole size scale but I’ll do that in a near future, for now, just I will explain part of the code and that’s it.
    </p>
  </div>

  ```scss
  $lightness-step: 10;
  $lightness-base: 7;

  $colors: (
    gray: (
      hue: 220,
      saturation: 14,
    ),
    red: (
      hue: 360,
      saturation: 36,
    ),
    yellow: (
      hue: 60,
      saturation: 36,
    ),
    green: (
      hue: 100,
      saturation: 36,
    ),
    primary: (
      hue: 220,
      saturation: 36,
    ),
  );

  :root {
    @each $color, $properties in $colors {
      @for $i from 1 through 9 {
        $hue: map-get($properties, hue);
        $saturation: map-get($properties, saturation) + "%";
        $lightness: $lightness-base + ($lightness-step * (9 - $i)) + "%";

        // prettier-ignore
        --color-#{$color + ""}-#{$i * 100}: hsl(#{$hue}, #{$saturation}, #{$lightness});
      }
    }
  }
  ```

  <p style="color: #AEAAB6;">
    So, my color is a scale, that ranges from 900 to 100, 100 being the lightest and 900 the darkest, because I’m using HSL color notation in here, I can easily modify lightning values, so, 900 starts at 7 lightness and has a “step” of 10, so for every shade the step will be added onto the base lightness.
  </p>
  <p style="color: #AEAAB6;">
    The size scale follows the same rules, only changing the step and base values.
  </p>
  <p style="color: #AEAAB6;">
    I really enjoyed using Docsaurus, it was really easy to setup, deploy was basically ready and the markdown files are just perfect to use for something like this, will 100% use it again in the future.
  </p>

  <br />

  <hr />

  <br />

  <div>
    <h3 style="color: #C5C2CB;" id="structure-web"><strong>Web</strong></h3>
    <p style="color: #AEAAB6;">
      The web package is the main face of encryptr, it is a Next.js SSG website, built with scss modules and typescript, of course there are some additional shenanigans such as <a href="https://storybook.js.org/">Storybook</a>, <a href="https://react-beautiful-dnd.netlify.app/">React-Beautiful-DND</a> but they aren’t much, I tried to stick to base react as much as I could to really see where it shines and where it doesn’t.
    </p>
    <br />
    <div>
      <strong>Prologue</strong>
      <p style="color: #AEAAB6;">
        But before it was a Next.js project it was a Nuxt.js project, and to be honest, I hated it. I get that Vue3 is bringing what Vue2 didn’t have, that being typescript support and that’s great news, I love typescript and trying vue would be awesome, but no. Nuxt.js turned from a dream to a nightmare in a question of seconds.
      </p>
      <ul>
        <li>
          <strong>First, storybook.</strong>
          <p style="color: #AEAAB6;">
            So, there seems to be some incompatibility with Storybook and Nuxt.js, so they created “Nuxt/Storybook”, which is a Nuxt plugin that adds storybook support, and ok, that kind of did it, it solved the problem, right? right? No, it didn’t, while yes, it gives Nuxt some storybook support it is some “not working for me” support, I wanted to export the storybook and Nuxt front-end together, but it couldn’t be accomplished.
          </p>
        </li>
        <li>
          <strong>Second, Typescript.</strong>
          <p style="color: #AEAAB6;">
            There is almost none support to typescript on Vue2 as I mentioned, ok, so let’s just update to Vue3 right? No, the current stable version of nuxt doesn’t support Vue3, meaning, I can’t have full typescript support like I wanted, but that’s ok, let’s just ignore and use the good old javascript, right????
          </p>
        </li>
        <li>
          <strong>Third, Vue3</strong>
          <p style="color: #AEAAB6;">
            “let’s just ignore and use the good old javascript, right????” No, again no, the Vue3 API is WAYYYY simpler than the Vue2 API, things can be done much faster and in fewer lines of code in Vue3 compared to Vue2, that was a huge drawback for me since I never touched Vue in my life.
          </p>
        </li>
        <li>
          <strong>Fourth, Nuxt3</strong>
          <p style="color: #AEAAB6;">
            You’re probably thinking, “you dumb*ss, just update to Nuxt3 and it’s over”. No, it’s not my dear friend. Nuxt3 lacks one of the most if not THE MOST used feature (at least by me), Static Site Generation, it simply lacks SSG, a simple thing like SSG, and it doesn’t exist in Nuxt3 (yet).
          </p>
        </li>
      </ul>
      <p style="color: #AEAAB6;">
        Here I gave you a brief explanation of why I moved out of Nuxt to Next and why that made hair regrow on my forehead
      </p>
    </div>
    <br />
    <p style="color: #AEAAB6;">
      Ok, back to next.js….
    </p>
    <p style="color: #AEAAB6;">
      In this one I really put my context skills to a test and failed it! I had to re-do the entire file creation process in the context API, the first time I tried it with 2 contexts, one for <code><strong>Auth</strong></code> and another for <code><strong>Files</strong></code> but it ended up failing, it was just like one of those unsolvable bugs, changes weren’t being made to <kbd>localStorage</kbd>, context not updating state, etc and then there was the “@storybook/addons” package, I don’t know why but, <strong>EVERY SINGLE TIME</strong>, I were to import one of the hooks from react it would actually import from this thing
    </p>
    <div>
      <p style="color: #A34D4D";>- import { useEffect } from "@storybook/addons" <span style="color: #323843">// this awful shit</span></p>
      <p style="color: #69A34D";>+ import { useEffect } from "react" <span style="color: #323843">// the right import</span></p>
    </div>
    <p style="color: #AEAAB6;">
      Beside that little inconvenience, it was a really smooth ride and I got to develop all the features in a very close time period.
    </p>
  </div>
</section>

<br />

<hr />
  
<br />

<section>
  <h2 style="color: #C5C2CB;" id="my-experience">
    <strong>🪄 My Experience</strong>
  </h2>

  <div>
    <strong>Little to no problems!</strong>
    <p>
      I had problems with Nextra at the beginning but when I switched to Docsaurus everything worked fine. I don’t think I even need to talk about Next.js, it is PERFECT, THE BEST FRAMEWORK out there, that’s right, not the best react framework but THE BEST FRAMEWORK, I think what vercel did with Next.js is incredible, easy to configure, fast, static site generation, server side rendering, all of that in one place, I truly love Next.js.
    </p>
    <p>
      It was definitely one of the most smoothen written? one of the apps I wrote more smoothly? Name however you want it but this was one of my best experiences while building a React App, it wasn’t “too easy” but not that hard either, it was a challenge, and everytime I finish a challenge I like to give myself another challenge! but not before a reward of course, that’s why I’m going to torture myself into learning Vim while making a Game with pure javascript. Must be fun.
    </p>
  </div>
</section>

<br />

<hr />
  
<br />

<section>
  <h2 style="color: #C5C2CB;" id="for-the-next-project">
    <strong>💻 For the next project</strong>
  </h2>

  <div>
    <p style="color: #AEAAB6;">
      While I was building this app, I took note of every single creative decision and wrote it down so I could look at it later and see which points I needed to improve on and which are good already.
    </p>
    <p style="color: #AEAAB6;">
      So here are some points that were missed during the development of Encryptr
    </p>
    <ul>
      <li>list every single form error messages on the design itself (or somewhere along those lines)</li>
      <li>fluid typography needs to be implemented ASAP, manually resizing font-sizes on media queries is disgustingly horrible</li>
      <li>actually finish the design before coding, make sure all screens are built and responsive</li>
    </ul>
  </div>
</section>

<br />

<hr />
  
<br />

<section>
  <h2 style="color: #C5C2CB;" id="creator">
    <strong>Creator</strong>
  </h2>

  <div>
    <p style="color: #AEAAB6;">
      My name is Vitor Gouveia, I’m a 17 year old Brazilian high school student, I created this project out of pure passion and will likely continue doing this for years to come, I love the Javascript ecosystem and static typing it with Typescript, this time around I used React to get the job done but I am often open to learning new stuff such as Svelte and Vue :(
    </p>
    <p style="color: #AEAAB6;">
      While you’re still here, check out some of my other projects that I made with the same love as this one:
    </p>
    <a href="https://github.com/VitorGouveia/Notely">
      <strong>Notely</strong>
      <p>The notes app you've been looking for.</p>
    </a>
    <a href="https://github.com/VitorGouveia/Firebolt">
      <strong>Firebolt</strong>
      <p>My own hand-made Javascript framework for WebComponents.</p>
    </a>
    <a href="https://github.com/VitorGouveia/PasswordGenerator">
      <strong>PasswordGenerator</strong>
      <p>Random password generator library.</p>
    </a>
    <a href="https://github.com/VitorGouveia/Giffy">
      <strong>Giffy</strong>
      <p>Multi-platform GIF recording app for desktop.</p>
    </a>
  </div>

  <br />

  <div style="display: flex;">
    <a href="https://www.linkedin.com/in/vitor-neves-gomes-gouveia-08ba391a7">
      <img src="https://img.shields.io/badge/LinkedIn-FFFFFF?style=for-the-badge&logo=linkedin&logoColor=0A66C2" />
    </a>
    <a href="https://github.com/VitorGouveia">
      <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=light" />
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/Discord-000000?style=for-the-badge&logo=discord" />
    </a>
    <a href="https://twitter.com/VitorAvalanche">
      <img src="https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=twitter" />
    </a>
    <a href="https://www.instagram.com/vitor_.gouveia">
      <img src="https://img.shields.io/badge/Instagram-000000?style=for-the-badge&logo=instagram" />
    </a>
  </div>
</section>

<br />

<hr />
  
<br />

<section>
  <h2 style="color: #C5C2CB;" id="license">
    <strong>License</strong>
  </h2>

  <div>
    <p style="color: #AEAAB6;">
      This project is under MIT license. See the <a style="color: #896AC8;" href="LICENSE">license</a> file for mode details.
    </p>
  </div>
</section>

<br />

<hr />
  
<br />

<section>
  <h2 style="color: #C5C2CB;" id="colaborators">
    <strong>Colaborators</strong>
  </h2>

  <div>
    <p style="color: #AEAAB6;">I thank everybody that colaborated to this project:</p>
    <table>
      <tr>
        <td align="center">
          <a href="http://github.com/vitorGouveia">
            <img src="https://avatars.githubusercontent.com/u/61664367?v=4" width="100px" ><br>
            <sub>
              <b>Me</b>
            </sub>
          </a>
        </td>
        <td align="center">
          <a href="http://github.com/AtomicFeasT">
            <img src="https://avatars.githubusercontent.com/u/69481863?v=4" width="100px" ><br>
            <sub>
              <b>AtomicFeasT</b>
            </sub>
          </a>
        </td>
      </tr>
    </table>
  </div>
</section>