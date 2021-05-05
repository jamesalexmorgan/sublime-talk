import React from 'react';

export interface TypeChallenge {
  title: React.ReactNode;
  challengeText: React.ReactNode;
  startingText?: string;
  solution?: string;
  solutionRegex?: RegExp;
  textAreaRows?: number;
  withTimer?: boolean;
}

const challenges: TypeChallenge[] = [
  {
    title: <>Just checking</>,
    challengeText: (
      <>
        <p>A couple of must haves...</p>
        <ul>
          <li>
            <strong>CTRL+CMD+SPACE</strong> - emoji 🎉
          </li>
          <li>
            <strong>CMD+C</strong> - copy
          </li>
          <li>
            <strong>CMD+X</strong> - cut
          </li>
          <li>
            <strong>CMD+V</strong> - paste
          </li>
          <li>
            <strong>CMD+A</strong> - select all
          </li>
          <li>
            <strong>CMD+Z</strong> - undo
          </li>
          <li>
            <strong>CMD+SHIFT+Z</strong> - redo
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Mac shortcuts</>,
    challengeText: (
      <>
        <ul>
          <li>
            <strong>Drag folder into dock icon</strong> - Opens folder in that app
          </li>
          <li>
            <strong>CTRL+CMD+F</strong> - Fullscreen (new terminal make full screen)
          </li>
          <li>
            <strong>CMD+N</strong> - Open new finder window (focus must be on desktop)
          </li>
          <li>
            <strong>CMD+BACKSPACE</strong> - Trash file
          </li>
          <li>
            <strong>CMD+TAB</strong> - change program
          </li>
          <li>
            <strong>CMD-SPACE</strong> - spotlight, open
          </li>
          <li>
            <strong>CMD+W</strong> - close window
          </li>
          <li>
            <strong>CMD+Q</strong> - shut down app
          </li>
          <li>
            <strong>CTRL+CMD+Q</strong> - go to login screen
          </li>
          <li>
            <strong>CMD+SHIFT+4</strong> - Select screenshot area (save to desktop)
          </li>
          <li>
            <strong>CTRL+CMD+SHIFT+4</strong> - Select screenshot area (save to clipboard)
          </li>
          <li>
            <strong>CMD+SHIFT+3</strong> - Screenshot whole screen (save to desktop)
          </li>
          <li>
            <strong>CTRL+CMD+SHIFT+3</strong> - Screenshot whole screen (save to clipboard)
          </li>
          <li>
            <strong>CMD+SHIFT+5</strong> - Record screencast video
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Terminal shortcuts</>,
    challengeText: (
      <>
        <ul>
          <li>
            <strong>code .</strong> - open current location in vscode
          </li>
          <li>
            <strong>CMD+N</strong> - new tab
          </li>
          <li>
            <strong>CMD+SHIFT+LEFT/RIGHT</strong> - navigate between tabs
          </li>
          <li>
            <strong>CTRL+A</strong> - beginning
          </li>
          <li>
            <strong>CTRL+E</strong> - end
          </li>
          <li>
            <strong>CTRL+_</strong> - undo
          </li>
          <li>
            <strong>CTRL+W</strong> - delete word
          </li>
          <li>
            <strong>CTRL+L</strong> - clear (keep history)
          </li>
          <li>
            <strong>CMD+L/K</strong> - clear (remove history) even when process running
          </li>
          <li>
            <strong>CTRL+R</strong> - search command history (type some text, then hit CTRL+R again)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Learn Touch Typing!',
    challengeText: (
      <>
        <ul>
          <li>Saves so much time!</li>
          <li>Aware of your mistakes much sooner</li>
          <li>
            Start by looking at the keyboard but keeping your index fingers on <strong>f</strong>{' '}
            and <strong>j</strong>
          </li>
          <li>6 months</li>
        </ul>
      </>
    ),
  },

  {
    title: (
      <>
        <strong>Prettier</strong> - no tidying! prettier will do it!
      </>
    ),
    challengeText: (
      <>
        <p>
          Don&apos;t tidy! That&apos;s prettiers job, spaces/semicolons/trailing commas/new
          lines.... we need those seconds!!
        </p>
        <p>If prettier isn&apos;t in your repo, add it!!</p>
        <ul>
          <li>
            Install the{' '}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
              target="_blank"
              rel="noreferrer"
            >
              VScode extension
            </a>
          </li>
          <li>
            Install the prettier as a dependency in your repo <strong>npm i -D prettier</strong>
          </li>
          <li>
            Add a <strong>.prettierrc</strong> file on the repo root, to add your preferences (see
            text below)
          </li>
          <li>
            Add a <strong>.vscode/settings.json</strong> file on the repo root, to autosave (see
            text below)
          </li>
        </ul>
      </>
    ),
    startingText: `
// .prettierrc
{
  "printWidth": 100,
  "proseWrap": "never",
  "singleQuote": true,
  "trailingComma": "es5"
}

// .vscode/settings.json
{
  "editor.formatOnSave": true,
}
`,
    textAreaRows: 15,
  },
  {
    title: (
      <>
        <strong>NOTE:</strong> Some of these shorcuts rely on VSCode&apos;s <strong>Sublime</strong>{' '}
        keymaps
      </>
    ),
    challengeText: (
      <>
        <p>Let&apos;s install the best mapping!</p>
        <ul>
          <li>
            Search the VS code extensions for Microsoft&apos;s{' '}
            <strong>Sublime Text Keymap and Settings Importer</strong>
          </li>
          <li>
            ...or have a look for what you&apos;re used to... and search extensions with this text:{' '}
            <strong>@recommended:keymaps</strong>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Various shortcuts</>,
    challengeText: (
      <>
        <ul>
          <li>
            Tab navigation
            <ul>
              <li>
                <strong>CMD+N</strong> - new tab
              </li>
              <li>
                <strong>CMD+SHIFT+Left/right</strong> - Move between tabs
              </li>
              <li>
                <strong>CMD+1/2/3..</strong> - Move between tabs
              </li>
              <li>
                <strong>CMD+W</strong> - close tab
              </li>
              <li>
                <strong>CMD+SHIFT+W</strong> - close this window
              </li>
              <li>
                <strong>CMD+ALT+T</strong> - Close other tabs
              </li>
              <li>
                <strong>CMD+K+W</strong> - close all tabs
              </li>
              <li>
                <strong>CMD+\</strong> - split screen
              </li>
              <li>
                <strong>CTRL+1/2/3..</strong> - change focus between each split window
              </li>
            </ul>
          </li>
          <li>
            <strong>CMD+P</strong> - go to file
          </li>
          <li>
            <strong>CTRL+R</strong> - go to a different repo/folder (ENTER to open in window,
            CMD+ENTER to open new window)
          </li>
          <li>
            <strong>F2</strong> - rename variable and all references to it (whilst selected
            variable)
          </li>
          <li>
            <strong>ALT+Z</strong> - Word wrap (for this tab)...great for looking at a loooong row
          </li>
          <li>
            <strong>CMD+B</strong> - Sidebar collapse/expand
          </li>
          <li>
            <strong>CMD+SHIFT+E</strong> - Sidebar file explorer
          </li>
          <li>
            <strong>CMD+SHIFT+F</strong> - Sidebar search
          </li>
          <li>
            <strong>CTRL+G</strong> - Go to line
          </li>
          <li>
            <strong>CMD+/</strong> or <strong>CMD+ALT+/</strong> - Commenting
          </li>
          <li>
            <strong>CMD+SHIFT+P</strong> - Command Palette (e.g. set language)
          </li>
          <li>
            <strong>CTRL+_ or CTRL+SHIFT+_</strong> - Cursor history 😱
          </li>
          <li>
            <strong>CMD+SHIFT+C</strong> - open new terminal on this repo root
          </li>
          <li>
            <strong>CMD+,</strong> - open settings
          </li>
          <li>
            <strong>TAB / SHIFT+TAB</strong> or <strong>CMD+[/]</strong> - Indent left/right (but
            ....<strong>don&apos;t</strong> let prettier do it! 😆)
          </li>
        </ul>
      </>
    ),
  },

  {
    title: (
      <>
        <strong>Double click</strong> - select word
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the mouse and cut and paste</strong>, put into the correct order (e.g.
        aaaaa bbbbb ccccc ddddd)
      </>
    ),
    startingText: `     jjjjjj     cccccc     eeeeee     dddddd     hhhhhh     ffffff     bbbbbb     gggggg     aaaaaa     iiiiii    `,
    solution: `aaaaaa bbbbbb cccccc dddddd eeeeee ffffff gggggg hhhhhh iiiiii jjjjjj`,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Triple click</strong> - select line
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the mouse and cut and paste</strong>, put into the correct order (e.g.
        aaaaa bbbbb ccccc ddddd) (<strong>line breaks are ignored</strong>)
      </>
    ),
    textAreaRows: 24,
    startingText: `
jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj

cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc

eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee

dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd

hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh

ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff

bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb

gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg

aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa

iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii
`,
    solution: `
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh
iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii
jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj
`,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Double click drag</strong> - select words
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the mouse and cut and paste</strong>, put into the correct order (e.g.
        aaaaa bbbbb ccccc ddddd)
      </>
    ),
    startingText: `         jjjjjj     jjjjjj     jjjjjj     cccccc     cccccc     cccccc     eeeeee     eeeeee     eeeeee     dddddd     dddddd     dddddd     hhhhhh     hhhhhh     hhhhhh     ffffff     ffffff     ffffff     bbbbbb     bbbbbb     bbbbbb     gggggg     gggggg     gggggg     aaaaaa     aaaaaa     aaaaaa     iiiiii     iiiiii     iiiiii     `,
    solution: `
    aaaaaa   aaaaaa   aaaaaa    bbbbbb   bbbbbb   bbbbbb    cccccc   cccccc   cccccc    dddddd   dddddd   dddddd    eeeeee   eeeeee   eeeeee    ffffff   ffffff   ffffff    gggggg   gggggg   gggggg    hhhhhh   hhhhhh   hhhhhh    iiiiii   iiiiii   iiiiii    jjjjjj   jjjjjj   jjjjjj
`,
    withTimer: true,
    textAreaRows: 5,
  },
  {
    title: (
      <>
        <strong>Triple click drag</strong> - select lines
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the mouse and cut and paste</strong>, put into the correct order (e.g.
        aaaaa bbbbb ccccc ddddd)
      </>
    ),
    startingText: `
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc

eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee

dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd

bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb

gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg

aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa

ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
`,
    solution: `
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa

bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb

cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc

dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd

eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee

ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff

gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
`,
    textAreaRows: 30,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>ALT+right/left</strong> - to the next/prev word
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the keyboard keys ALT, SHIFT, cut and paste</strong>, put into the
        correct order (e.g. aaaaa bbbbb ccccc ddddd)
      </>
    ),
    startingText: `         jjjjjj     cccccc     eeeeee     dddddd     hhhhhh     ffffff     bbbbbb     gggggg     aaaaaa     iiiiii     `,
    solution: `      aaaaaa bbbbbb cccccc dddddd eeeeee ffffff gggggg hhhhhh iiiiii jjjjjj    `,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>CMD+right/left</strong> - To the end/beginning of line
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the keyboard keys ALT, CMD, SHIFT, cut and paste</strong>, put into the
        correct order (e.g. aaaaa bbbbb ccccc ddddd)
      </>
    ),
    startingText: `
cccccc jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj

hhhhhh eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee

dddddd dddddd ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff

bbbbbb bbbbbb gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg

aaaaaa aaaaaa iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii
`,
    solution: `
aaaaaa aaaaaa
bbbbbb bbbbbb
cccccc
dddddd dddddd
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff ffffff
gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg gggggg
hhhhhh
iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii
jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj
    `,
    textAreaRows: 15,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>CMD+up/down</strong> - To the top/bottom
      </>
    ),
    challengeText: (
      <>
        Using <strong>only the keyboard keys ALT, CMD, SHIFT, cut and paste</strong>, put into the
        correct order (e.g. aaaaa bbbbb ccccc ddddd)
      </>
    ),
    startingText: `
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd      cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc      bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb      aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
`,
    solution: `

aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa

bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb

cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc

dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd

`,
    textAreaRows: 24,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>THE BEAST</strong> - Use all the techniques
      </>
    ),
    challengeText: (
      <>
        Using <strong>every technique</strong>, put into the correct order (e.g. aaaaa bbbbb ccccc
        ddddd)
      </>
    ),
    startingText: `
jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj
hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh     ffffff ffffff ffffff ffffff ffffff
qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq
zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb      mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii
ssssss ssssss ssssss ssssss ssssss ssssss ssssss ssssss ssssss ssssss      yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy
llllll llllll llllll llllll llllll llllll llllll llllll llllll llllll
llllll llllll llllll llllll llllll llllll llllll llllll llllll llllll
llllll llllll llllll llllll llllll llllll llllll llllll llllll llllll
nnnnnn nnnnnn nnnnnn nnnnnn nnnnnn      vvvvvv vvvvvv vvvvvv vvvvvv vvvvvv
oooooo oooooo oooooo oooooo oooooo oooooo oooooo oooooo oooooo oooooo
rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr
rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr
kkkkkk kkkkkk kkkkkk kkkkkk kkkkkk      xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx
tttttt tttttt tttttt tttttt tttttt tttttt tttttt tttttt tttttt tttttt
uuuuuu uuuuuu uuuuuu uuuuuu uuuuuu
dddddd dddddd dddddd dddddd dddddd     cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww
pppppp pppppp pppppp pppppp pppppp
gggggg gggggg gggggg gggggg gggggg     eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
`,
    solution: `
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
dddddd dddddd dddddd dddddd dddddd
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
ffffff ffffff ffffff ffffff ffffff
gggggg gggggg gggggg gggggg gggggg
hhhhhh hhhhhh hhhhhh hhhhhh hhhhhh
iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii iiiiii
jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj jjjjjj
kkkkkk kkkkkk kkkkkk kkkkkk kkkkkk
llllll llllll llllll llllll llllll llllll llllll llllll llllll llllll
llllll llllll llllll llllll llllll llllll llllll llllll llllll llllll
llllll llllll llllll llllll llllll llllll llllll llllll llllll llllll
mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm mmmmmm
nnnnnn nnnnnn nnnnnn nnnnnn nnnnnn
oooooo oooooo oooooo oooooo oooooo oooooo oooooo oooooo oooooo oooooo
pppppp pppppp pppppp pppppp pppppp
qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq qqqqqq
rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr
rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr rrrrrr
ssssss ssssss ssssss ssssss ssssss ssssss ssssss ssssss ssssss ssssss
tttttt tttttt tttttt tttttt tttttt tttttt tttttt tttttt tttttt tttttt
uuuuuu uuuuuu uuuuuu uuuuuu uuuuuu
vvvvvv vvvvvv vvvvvv vvvvvv vvvvvv
wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww wwwwww
xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx
yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy yyyyyy
zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz zzzzzz
`,
    textAreaRows: 35,
    withTimer: true,
  },
  {
    title: <>Global regex searches</>,
    challengeText: (
      <>
        To replace all es6 imports with commonJS imports
        <ul>
          <li>Go into a repo and open search sidebar (with CMD+SHIFT+F)</li>
          <li>
            Enable regex with the button that looks like [<strong>.*</strong>]
          </li>
          <li>
            Populate search field with:{' '}
            <strong>
              <code>import (.+) from (.+);</code>
            </strong>
          </li>
          <li>
            Populate replace field with:{' '}
            <strong>
              <code>const $1 = require($2);</code>
            </strong>
          </li>
        </ul>
      </>
    ),
    startingText: ``,
    solution: ``,
  },
  {
    title: <>File regex searches</>,
    challengeText: (
      <>
        We want to wrap the <strong>first sentence</strong> (start to first full stop) of every li
        tag with a <strong>&lt;strong&gt;</strong> tag
        <ul>
          <li>
            Copy into IDE and, hit <strong>CMD+F</strong> to open the find bar
          </li>
          <li>
            Make sure the <strong>Regex</strong> button is enabled
          </li>
          <li>
            Enter{' '}
            <strong>
              <code>&lt;li&gt;[^?.!]+</code>
            </strong>{' '}
            in the search
          </li>
          <li>
            Hit <strong>CTRL+CMD+G</strong> to select all regions
          </li>
          <li>
            Hit <strong>ESCAPE</strong> to close the search
          </li>
          <li>
            Hit the right arrow to move the cursors past the end of the sentence and type your
            closing <strong>&lt;/strong&gt;</strong>
          </li>
          <li>
            Hit <strong>CMD+LEFT</strong> to put the cursors at the beginning and type your opening{' '}
            <strong>&lt;strong&gt;</strong> tag
          </li>
        </ul>
      </>
    ),
    startingText: `
<ul>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo cupiditate voluptatum rerum, id animi totam illo est aliquam reprehenderit.</li>
  <li>Velit et, veritatis libero dolores. Sint minima, at quidem iure commodi, similique dolores, facere quaerat reprehenderit autem, aliquid enim rerum.</li>
  <li>Magnam saepe nemo quos nulla incidunt ut atque ab officiis fuga! Aperiam, libero, architecto? Aliquid sit accusantium sed. Ratione, reprehenderit!</li>
  <li>Neque sit consequuntur provident nesciunt amet vero, odio quos vitae voluptatum, voluptates veniam ipsam sunt maxime itaque veritatis, commodi, optio?</li>
  <li>Facilis deleniti facere adipisci ex, hic possimus laborum ipsa doloremque fugiat nemo numquam animi eius totam, nostrum pariatur tempore aliquid?</li>
</ul>
<ul>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus, dolor voluptatem veritatis beatae. At odio cum id quas necessitatibus.</li>
  <li>Ab dolorum animi quibusdam alias vero officiis, corporis quidem accusantium inventore voluptates velit eum necessitatibus maiores distinctio, illo nisi ipsum.</li>
  <li>Ipsam nihil dolorum, inventore odio dolores laboriosam? Corrupti voluptatum, magni ipsum rem molestiae, dolorum dolore ullam eos, iusto maiores assumenda.</li>
  <li>Laboriosam, asperiores ipsa reprehenderit, dignissimos dolorem harum natus et amet ut, temporibus a similique architecto rerum consequuntur accusamus suscipit numquam?</li>
  <li>Quis officia ullam dolorem eligendi tenetur quae sequi dolore nostrum, obcaecati modi ipsum nihil iste autem voluptatem, ad iure nam!</li>
</ul>
<ul>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aperiam quae adipisci ullam nulla at. Ipsum totam consectetur, reprehenderit maxime.</li>
  <li>Rem non dolorem consectetur, quas cupiditate magnam saepe, doloribus voluptatem quaerat harum molestiae obcaecati nemo, deserunt voluptate ipsam culpa quam?</li>
  <li>Rerum adipisci, fuga, eos debitis quisquam deleniti totam molestiae reprehenderit molestias cupiditate laudantium ratione explicabo odio hic deserunt sint doloribus?</li>
  <li>A aperiam voluptatum commodi optio. Ea maiores animi, recusandae perspiciatis! Nihil illum harum doloribus. Ab officiis ex corporis aperiam quia.</li>
  <li>Itaque quasi impedit alias a ut unde odio cumque, dignissimos hic ab tenetur blanditiis maxime, facilis ducimus dolorum magni sequi!</li>
</ul>
`,
    solution: `
<ul>
  <li><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong> Quasi explicabo cupiditate voluptatum rerum, id animi totam illo est aliquam reprehenderit.</li>
  <li><strong>Velit et, veritatis libero dolores.</strong> Sint minima, at quidem iure commodi, similique dolores, facere quaerat reprehenderit autem, aliquid enim rerum.</li>
  <li><strong>Magnam saepe nemo quos nulla incidunt ut atque ab officiis fuga!</strong> Aperiam, libero, architecto? Aliquid sit accusantium sed. Ratione, reprehenderit!</li>
  <li><strong>Neque sit consequuntur provident nesciunt amet vero, odio quos vitae voluptatum, voluptates veniam ipsam sunt maxime itaque veritatis, commodi, optio?</strong></li>
  <li><strong>Facilis deleniti facere adipisci ex, hic possimus laborum ipsa doloremque fugiat nemo numquam animi eius totam, nostrum pariatur tempore aliquid?</strong></li>
</ul>
<ul>
  <li><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong> Velit accusamus, dolor voluptatem veritatis beatae. At odio cum id quas necessitatibus.</li>
  <li><strong>Ab dolorum animi quibusdam alias vero officiis, corporis quidem accusantium inventore voluptates velit eum necessitatibus maiores distinctio, illo nisi ipsum.</strong></li>
  <li><strong>Ipsam nihil dolorum, inventore odio dolores laboriosam?</strong> Corrupti voluptatum, magni ipsum rem molestiae, dolorum dolore ullam eos, iusto maiores assumenda.</li>
  <li><strong>Laboriosam, asperiores ipsa reprehenderit, dignissimos dolorem harum natus et amet ut, temporibus a similique architecto rerum consequuntur accusamus suscipit numquam?</strong></li>
  <li><strong>Quis officia ullam dolorem eligendi tenetur quae sequi dolore nostrum, obcaecati modi ipsum nihil iste autem voluptatem, ad iure nam!</strong></li>
</ul>
<ul>
  <li><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong> Beatae aperiam quae adipisci ullam nulla at. Ipsum totam consectetur, reprehenderit maxime.</li>
  <li><strong>Rem non dolorem consectetur, quas cupiditate magnam saepe, doloribus voluptatem quaerat harum molestiae obcaecati nemo, deserunt voluptate ipsam culpa quam?</strong></li>
  <li><strong>Rerum adipisci, fuga, eos debitis quisquam deleniti totam molestiae reprehenderit molestias cupiditate laudantium ratione explicabo odio hic deserunt sint doloribus?</strong></li>
  <li><strong>A aperiam voluptatum commodi optio.</strong> Ea maiores animi, recusandae perspiciatis! Nihil illum harum doloribus. Ab officiis ex corporis aperiam quia.</li>
  <li><strong>Itaque quasi impedit alias a ut unde odio cumque, dignissimos hic ab tenetur blanditiis maxime, facilis ducimus dolorum magni sequi!</strong></li>
</ul>
`,
    textAreaRows: 24,
    withTimer: true,
  },
  {
    title: <>Emmet</>,
    challengeText: (
      <>
        <p>Shorthand for html/jsx files! Just type it in and hit TAB</p>
        <ul>
          <li>
            <strong>#</strong> - ID
          </li>
          <li>
            <strong>.</strong> - Class
          </li>
          <li>
            <strong>&gt;</strong> - Child element
          </li>
          <li>
            <strong>+</strong> - Sibling element
          </li>
          <li>
            <strong>^</strong> - Up one level
          </li>
          <li>
            <strong>$</strong> - Incrementing Numbers
          </li>
        </ul>

        <p>
          To enable emmet in <strong>React JSX</strong> do the following...
        </p>
        <ul>
          <li>
            Go to settings by pressing <strong>CMD+,</strong>
          </li>
          <li>
            In the filter type <strong>emmet</strong>
          </li>
          <li>
            Under <strong>Emmet: Include Languages</strong> add{' '}
            <strong>key: javascript, value: javascriptreact</strong>
          </li>
        </ul>

        <p>Try out this emmet shorthand code below by pasting it into a html/jsx file.</p>
        <p>
          (NOTE: You&apos;ll need to delete the last character and then re-add it, to trigger the
          emmet)
        </p>
      </>
    ),
    startingText: `
html>head+body>div.wrapper>header>nav.nav-main>ul>li.nav-button.home+li.nav-button*5>a[href="link-$"]>{Nav button $}^^^^^main.main>aside.lhc>nav.nav-secondary>ul>li.nav-button-secondary*5>{Nav button $}^^^^div.main-content>p*5>{Bla bla bla}^^aside.rhc>div.rhc-panel.related-link>ul>li*10>{Link $}^^^^footer>ul.footer-links>li*10>{Footer link $}
`,
    textAreaRows: 4,
  },
  {
    title: (
      <>
        <strong>{'/**'}</strong> - Instant JS docs
      </>
    ),
    challengeText: (
      <>
        You can easily generate JS docs by just typing <strong>{'/**'}</strong> above a function,
        then tab through the different descriptions
      </>
    ),
    startingText: ``,
    solution: ``,
  },
  {
    title: (
      <>
        <strong>CMD+J</strong> - Remove line breaks
      </>
    ),
    challengeText: <>Collapse this down so it takes up less space (can save 9 lines 🎉)</>,
    startingText: `
const CONTINUE_ON_RETRIEVE = [
  {
    cond: 'isAppScreenStateCurrentAddress',
    target: SCREEN_STATES.CURRENT_ADDRESS,
  },
  {
    cond: 'isAppScreenStateIdentityVerification',
    target: SCREEN_STATES.IDENTITY_VERIFICATION,
  },
  {
    cond: 'isAppScreenStateEmployment',
    target: SCREEN_STATES.EMPLOYMENT,
  }
];
`,
    solution: `
const CONTINUE_ON_RETRIEVE = [
  { cond: 'isAppScreenStateCurrentAddress', target: SCREEN_STATES.CURRENT_ADDRESS },
  { cond: 'isAppScreenStateIdentityVerification', target: SCREEN_STATES.IDENTITY_VERIFICATION },
  { cond: 'isAppScreenStateEmployment', target: SCREEN_STATES.EMPLOYMENT },
];
`,
    textAreaRows: 7,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>CMD+J</strong> - Challenge 2
      </>
    ),
    challengeText: <>Collapse this down so it takes up less space</>,
    startingText: `
const config = getMachineConfig({
  client,
  setFieldValue,
  onDone,
  KEYS,
  getApplicationId,
});
`,
    solution: `
const config = getMachineConfig({ client, setFieldValue, onDone, KEYS, getApplicationId });
`,
    textAreaRows: 9,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Select text then hit open bracket</strong> - Wrap text with brackets
      </>
    ),
    challengeText: (
      <>
        You can easily wrap anything with <strong>{'(...)'}</strong> ...or...{' '}
        <strong>{'{...}'}</strong> ...or... <strong>{'<...>'}</strong> ...or...{' '}
        <strong>{'[...]'}</strong> by just selecting some text and hitting the open bracket
      </>
    ),
    startingText: `
<button
  onClick={() => successNotification({ children: content })}
>
  show notification
</button>
`,
    solution: `
<button
  onClick={() => {
    closeNotifications();
    successNotification({ children: content });
  }}
>
  show notification
</button>
`,
    textAreaRows: 10,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>ALT+UP/DOWN</strong> - move line up/down ...and...{' '}
        <strong>ALT+SHIFT+DOWN/UP</strong> - duplicate line
      </>
    ),
    challengeText: (
      <>
        Using <strong>ALT+UP/DOWN</strong> and <strong>ALT+SHIFT+DOWN/UP</strong>, put into the
        correct order and <strong>triple them</strong>
      </>
    ),
    textAreaRows: 18,
    startingText: `
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc

eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee

dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd

bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb

aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
`,
    solution: `
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb bbbbbb
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc cccccc
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd dddddd
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee eeeeee
`,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>CMD+D and ALT+CLICK</strong> - Multiple cursors!!! (🎉😭🙏😆🎊)
      </>
    ),
    challengeText: (
      <>
        <p>
          The most freaking useful shortcut I&apos;ve <strong>EVER</strong> learned!
        </p>

        <p>
          <strong>You&apos;ll also need...</strong>
        </p>
        <ul>
          <li>
            <strong>ALT+CLICK</strong> - Add/remove selections/cursors
          </li>
          <li>
            <strong>CMD+U</strong> - Back up one
          </li>
          <li>
            <strong>CMD+K</strong> - Skip one
          </li>
          <li>
            <strong>CTRL+CMD+G</strong> - Select all
          </li>
        </ul>

        <p>The challenge...</p>
        <ul>
          <li>
            Add class <strong>banner-slide</strong> to every slide
          </li>
          <li>
            Add class <strong>odd</strong> and <strong>even</strong> to the slides
          </li>
          <li>
            Add class <strong>active</strong> to the first slide of each ul
          </li>
        </ul>
      </>
    ),
    startingText: `
<ul>
  <li>Slide 1</li>
  <li>Slide 2</li>
  <li>Slide 3</li>
  <li>Slide 4</li>
  <li>Slide 5</li>
</ul>

<ul>
  <li>Slide 1</li>
  <li>Slide 2</li>
  <li>Slide 3</li>
  <li>Slide 4</li>
  <li>Slide 5</li>
</ul>

<ul>
  <li>Slide 1</li>
  <li>Slide 2</li>
  <li>Slide 3</li>
  <li>Slide 4</li>
  <li>Slide 5</li>
</ul>
`,
    solution: `
<ul>
  <li class="banner-slide odd active">Slide 1</li>
  <li class="banner-slide even">Slide 2</li>
  <li class="banner-slide odd">Slide 3</li>
  <li class="banner-slide even">Slide 4</li>
  <li class="banner-slide odd">Slide 5</li>
</ul>

<ul>
  <li class="banner-slide odd active">Slide 1</li>
  <li class="banner-slide even">Slide 2</li>
  <li class="banner-slide odd">Slide 3</li>
  <li class="banner-slide even">Slide 4</li>
  <li class="banner-slide odd">Slide 5</li>
</ul>

<ul>
  <li class="banner-slide odd active">Slide 1</li>
  <li class="banner-slide even">Slide 2</li>
  <li class="banner-slide odd">Slide 3</li>
  <li class="banner-slide even">Slide 4</li>
  <li class="banner-slide odd">Slide 5</li>
</ul>
`,
    textAreaRows: 26,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 2
      </>
    ),
    challengeText: <>Change dev to uat</>,
    startingText: `
AUTH_SERVICE_URL=https://api-internal.dev.qlfs.io/v1/authorisation
SRV_ACCOUNTS_BASE_URL=https://api.dev.qlfs.io
SRV_AUTH_BASE_URL=https://api.dev.qlfs.io/gen2-authorisation
SRV_CITI_CAMPAIGNS_BASE_URL=https://api.dev.qlfs.io/v1/citi-campaigns
SRV_CITI_ORIGINATION_BASE_URL=https://api.dev.qlfs.io/citi-origination
SRV_DATATOOLS_API_URL=https://api-internal.dev.qlfs.io/datatools-gateway
SRV_IDENTITY_VERIFICATION_BASE_URL=https://api.dev.qlfs.io/v2/identity-verification
SRV_MEMBER_DETAILS_BASE_URL=https://api.dev.qlfs.io
SRV_QANTAS_ADAPTER_BASE_URL=https://api.dev.qlfs.io
`,
    solution: `
AUTH_SERVICE_URL=https://api-internal.uat.qlfs.io/v1/authorisation
SRV_ACCOUNTS_BASE_URL=https://api.uat.qlfs.io
SRV_AUTH_BASE_URL=https://api.uat.qlfs.io/gen2-authorisation
SRV_CITI_CAMPAIGNS_BASE_URL=https://api.uat.qlfs.io/v1/citi-campaigns
SRV_CITI_ORIGINATION_BASE_URL=https://api.uat.qlfs.io/citi-origination
SRV_DATATOOLS_API_URL=https://api-internal.uat.qlfs.io/datatools-gateway
SRV_IDENTITY_VERIFICATION_BASE_URL=https://api.uat.qlfs.io/v2/identity-verification
SRV_MEMBER_DETAILS_BASE_URL=https://api.uat.qlfs.io
SRV_QANTAS_ADAPTER_BASE_URL=https://api.uat.qlfs.io
`,
    textAreaRows: 11,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 3
      </>
    ),
    challengeText: (
      <>Tidy this up (HINT: try to target something that&apos;s common on each line)</>
    ),
    startingText: `
Reverting accidental testing code	8c32asdf01c0	James Morgan <>	15 Mar 2021 at 5:16 pm
Added handling for if the address loaded from profile is invalid	519faa45	James Morgan <>	15 Mar 2021 at 5:14 pm
Added validate searched address functionality to ACH	ed0asda3c6f	James Morgan <>	15 Mar 2021 at 1:58 pm
Tidied up duplicate code	ba1cdb36	James Morgan <>	15 Mar 2021 at 1:06 pm
Trigger validation on invalid address selected	f88aasdf0a5	James Morgan <>	15 Mar 2021 at 11:02 am
Merge branch 'develop' into fix-3045-searched-address-handling	c49as9395d	James Morgan <>	15 Mar 2021 at 10:16 am
Little fix for when appending street name suffix	11b920asdfasdfed	James Morgan <>	15 Mar 2021 at 9:05 am
`,
    solution: `
- Reverting accidental testing code
- Added handling for if the address loaded from profile is invalid
- Added validate searched address functionality to ACH
- Tidied up duplicate code
- Trigger validation on invalid address selected
- Merge branch 'develop' into fix-3045-searched-address-handling
- Little fix for when appending street name suffix
`,
    textAreaRows: 9,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 4
      </>
    ),
    challengeText: (
      <>
        The <strong>&lt;Route&gt;</strong> component&apos;s <strong>path </strong> prop supports an
        array, let&apos;s use that...{' '}
      </>
    ),
    startingText: `
<Route path="/login" component={LoginApp} />
<Route path="/signup" component={LoginApp} />
<Route path="/activate" component={LoginApp} />
<Route path="/forgot-password" component={LoginApp} />
<Route path="/change-password" component={LoginApp} />
`,
    solution: `
<Route
  path={[
    '/login',
    '/signup',
    '/activate',
    '/forgot-password',
    '/change-password',
  ]}
  component={LoginApp}
/>
`,
    textAreaRows: 12,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 5
      </>
    ),
    challengeText: <>Convert these to ES6 imports</>,
    startingText: `
const React = require('react');
const { FormActionList, Heading, Spacing } = require('@qins/web-ui');
const { Link } = require('react-router-dom');
const { LABELS, REVIEW_SCREEN_STATES } = require('./ReviewAndSubmitConstants');
const { FormSubmit } = require('@qins/web-funnel');
const StepEvents = require('client/utils/application/StepEvents');
const stepPropTypes = require('client/views/shared/stepPropTypes');
`,
    solution: `
import React from 'react';
import { FormActionList, Heading, Spacing } from '@qins/web-ui';
import { Link } from 'react-router-dom';
import { LABELS, REVIEW_SCREEN_STATES } from './ReviewAndSubmitConstants';
import { FormSubmit } from '@qins/web-funnel';
import StepEvents from 'client/utils/application/StepEvents';
import stepPropTypes from 'client/views/shared/stepPropTypes';
`,
    textAreaRows: 9,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 6 (<strong>Multicopy &amp; multipaste!</strong>)
      </>
    ),
    challengeText: (
      <>
        <p>
          Sometimes it&apos;s a bit safer to copy all the lines out to a new tab and paste them
          back.
        </p>

        <p>
          Change all <strong>px</strong> values to use <strong>px-to-rem(...)</strong>
        </p>
        <p>Here&apos;s one way...</p>

        <ul>
          <li>Highlight the px value</li>
          <li>Hit CTRL+CMD+G to select all of these</li>
          <li>Copy the entire line that they are on (CMD+left...CMD+SHIFT+RIGHT...CMD+C)</li>
          <li>Open a new tab and paste lines in there</li>
          <li>Now work on these px values with them all in view</li>
          <li>
            When finished converting, select all lines and make separate selections (CMD+SHIFT+L)
          </li>
          <li>Copy these multiple regions (CMD+C)</li>
          <li>
            Go back to previous tab (where regions are still selected) and paste multiple regions
            back in
          </li>
        </ul>
      </>
    ),
    startingText: `
:root {
  --tooltip-width: 530px;
  --caret-width: 6px;
}
@value boxWidth: 530px;

.root {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;

  @media (--from-large-screen) {
    margin: 0 7px;
  }
}

.iconWrapper {
  position: relative;
  padding: 10px 8px 13px;

  &::before {
    border-color: transparent;
    border-style: solid;
    border-width: var(--caret-width);
    border-top-color: $color-grayscale-black;
    border-bottom: 0;
    content: '';
    display: none;
    left: 50%;
    margin-left: calc(-1 * var(--caret-width));
    position: absolute;
    bottom: 37px;
  }

  @media (--from-large-screen) {
    padding: 10px 0 13px;
  }
}

.isVisible .iconWrapper::before {
  display: block;
}

.isVisible .iconWrapper {
  z-index: var(--var-z-index-tooltip-active-icon);
}

.isArrowFlipped .iconWrapper::before {
  transform: rotateZ(-180deg);
  top: 38px;
  bottom: initial;
}

.icon {
  pointer-events: none;
  fill: $color-grayscale-dark;
  font-size: 11px;
}

.box {
  @apply --textSmall;

  background: $color-grayscale-black;
  border-radius: var(--var-border-radius);
  bottom: 22px;
  color: $color-grayscale-mid;
  left: 50%;
  margin-bottom: 10px;
  margin-left: calc(-1 * var(--tooltip-width) / 2);
  padding: 20px;
  position: absolute;
  width: var(--tooltip-width);
  text-align: left;
  z-index: var(--var-z-index-tooltip);

  /* bridges the gap between the icon and the tooltip so it stays when rolling over */
  &::before {
    bottom: -30px;
    content: '';
    height: 30px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  & h5 {
    @apply --h5;

    color: $color-grayscale-white;
    margin-bottom: 5px;
    margin-top: 0;
  }

  & > p {
    line-height: 1.3;
    margin-bottom: 10px;
    margin-top: 0;

    &:last-child {
      margin-bottom: 5px;
      color: $color-grayscale-white;
    }
  }

  & a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      color: $color-grayscale-white;
      text-decoration: underline;
    }
  }
}

.isLargeOnDesktop {
  &.isArrowFlipped {
    & .box {
      top: 35px !important;
    }
  }

  @media (--from-large-screen) {
    & .iconWrapper::before {
      bottom: 40px;
    }

    &.isArrowFlipped {
      & .iconWrapper::before {
        top: 42px;
      }

      & .box {
        top: 39px !important;
      }
    }

    & .icon {
      fill: $color-primary-default;
      font-size: 20px;
    }

    & .box {
      bottom: 24px;
    }
  }
}
`,
    solution: `

    :root {
      --tooltip-width: px-to-rem(530);
      --caret-width: px-to-rem(6);
    }
    @value boxWidth: px-to-rem(530);

    .root {
      cursor: pointer;
      display: inline-block;
      position: absolute;
      left: auto;
      top: auto;
      right: auto;
      bottom: auto;

      @media (--from-large-screen) {
        margin: 0 px-to-rem(7);
      }
    }

    .iconWrapper {
      position: relative;
      padding: px-to-rem(10) px-to-rem(8) px-to-rem(13);

      &::before {
        border-color: transparent;
        border-style: solid;
        border-width: var(--caret-width);
        border-top-color: $color-grayscale-black;
        border-bottom: 0;
        content: '';
        display: none;
        left: 50%;
        margin-left: calc(-1 * var(--caret-width));
        position: absolute;
        bottom: px-to-rem(37);
      }

      @media (--from-large-screen) {
        padding: px-to-rem(10) 0 px-to-rem(13);
      }
    }

    .isVisible .iconWrapper::before {
      display: block;
    }

    .isVisible .iconWrapper {
      z-index: var(--var-z-index-tooltip-active-icon);
    }

    .isArrowFlipped .iconWrapper::before {
      transform: rotateZ(-180deg);
      top: px-to-rem(38);
      bottom: initial;
    }

    .icon {
      pointer-events: none;
      fill: $color-grayscale-dark;
      font-size: px-to-rem(11);
    }

    .box {
      @apply --textSmall;

      background: $color-grayscale-black;
      border-radius: var(--var-border-radius);
      bottom: px-to-rem(22);
      color: $color-grayscale-mid;
      left: 50%;
      margin-bottom: px-to-rem(10);
      margin-left: calc(-1 * var(--tooltip-width) / 2);
      padding: px-to-rem(20);
      position: absolute;
      width: var(--tooltip-width);
      text-align: left;
      z-index: var(--var-z-index-tooltip);

      /* bridges the gap between the icon and the tooltip so it stays when rolling over */
      &::before {
        bottom: px-to-rem(-30);
        content: '';
        height: px-to-rem(30);
        left: 0;
        position: absolute;
        width: 100%;
      }

      & h5 {
        @apply --h5;

        color: $color-grayscale-white;
        margin-bottom: px-to-rem(5);
        margin-top: 0;
      }

      & > p {
        line-height: 1.3;
        margin-bottom: px-to-rem(10);
        margin-top: 0;

        &:last-child {
          margin-bottom: px-to-rem(5);
          color: $color-grayscale-white;
        }
      }

      & a {
        color: inherit;
        text-decoration: underline;

        &:hover {
          color: $color-grayscale-white;
          text-decoration: underline;
        }
      }
    }

    .isLargeOnDesktop {
      &.isArrowFlipped {
        & .box {
          top: px-to-rem(35) !important;
        }
      }

      @media (--from-large-screen) {
        & .iconWrapper::before {
          bottom: px-to-rem(40);
        }

        &.isArrowFlipped {
          & .iconWrapper::before {
            top: px-to-rem(42);
          }

          & .box {
            top: px-to-rem(39) !important;
          }
        }

        & .icon {
          fill: $color-primary-default;
          font-size: px-to-rem(20);
        }

        & .box {
          bottom: px-to-rem(24);
        }
      }
    }
`,
    textAreaRows: 9,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 7
      </>
    ),
    challengeText: (
      <>
        Remove the many cases of <strong>AmazonCognitoIdentity.</strong> amongst the code and
        deconstruct the import instead
      </>
    ),
    startingText: `
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
const userData = { Username: user_email, Pool: userPool };
const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
`,
    solution: `
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

const authenticationDetails = new AuthenticationDetails(authenticationData);
const userPool = new CognitoUserPool(poolData);
const userData = { Username: user_email, Pool: userPool };
const cognitoUser = new CognitoUser(userData);
        `,
    textAreaRows: 8,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>Multicursor</strong> - Challenge 8
      </>
    ),
    challengeText: <>Let&apos;s make some env vars from these names</>,
    startingText: `
environment
dbName
dbHost
dbPort
dataS3Bucket
publicS3Bucket
region
userPoolId
clientId
identityPoolId
systemEmail
sesRegion
snsApiVersion
sesApiVersion
s3ApiVersion
cognitoApiVersion
mailchimpApiKey
mailchimpApiUrl
mandrillApiKey
generatePdfUrl
`,
    solution: `
export default {
  environment: process.env.ENVIRONMENT,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dataS3Bucket: process.env.DATA_S3_BUCKET,
  publicS3Bucket: process.env.PUBLIC_S3_BUCKET,
  region: process.env.REGION,
  userPoolId: process.env.USER_POOL_ID,
  clientId: process.env.CLIENT_ID,
  identityPoolId: process.env.IDENTITY_POOL_ID,
  systemEmail: process.env.SYSTEM_EMAIL,
  sesRegion: process.env.SES_REGION,
  snsApiVersion: process.env.SNS_API_VERSION,
  sesApiVersion: process.env.SES_API_VERSION,
  s3ApiVersion: process.env.S3_API_VERSION,
  cognitoApiVersion: process.env.COGNITO_API_VERSION,
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  mailchimpApiUrl: process.env.MAILCHIMP_API_URL,
  mandrillApiKey: process.env.MANDRILL_API_KEY,
  generatePdfUrl: process.env.GENERATE_PDF_URL,
}
`,
    textAreaRows: 24,
    withTimer: true,
  },

  {
    title: (
      <>
        <strong>ALT+SHIFT+cursor/drag</strong> - Box select cursors/regions
      </>
    ),
    challengeText: (
      <>
        <p>Good for cucumber tables!!</p>
        <p>
          Here, let&apos;s delete the <strong>profileTitle</strong> column. (NOTE: pipe separators
          are not vertically aligned here in the textarea but will be in VScode)
        </p>
      </>
    ),

    startingText: `
describe('getTitle', () => {
  test.each\`
    title                    | profileTitle      | expectedTitle
    \${null}                  | \${SALUTATIONS.MR} | \${SALUTATIONS.MR}
    \${SALUTATIONS.MRS}       | \${null}           | \${SALUTATIONS.MRS}
    \${null}                  | \${null}           | \${''}
    \${DR_SALUTATIONS.MALE}   | \${null}           | \${SALUTATIONS.DR}
    \${DR_SALUTATIONS.FEMALE} | \${null}           | \${SALUTATIONS.DR}
  \`(
    'returns $expectedTitle when user title is $title and title from profile is $profileTitle',
    ({ title, profileTitle, expectedTitle }) => {
      expect(getTitle(title, profileTitle)).toEqual(expectedTitle);
    }
  );
});
`,
    solution: `
describe('getTitle', () => {
  test.each\`
    title                    | expectedTitle
    \${null}                  | \${SALUTATIONS.MR}
    \${SALUTATIONS.MRS}       | \${SALUTATIONS.MRS}
    \${null}                  | \${''}
    \${DR_SALUTATIONS.MALE}   | \${SALUTATIONS.DR}
    \${DR_SALUTATIONS.FEMALE} | \${SALUTATIONS.DR}
  \`(
    'returns $expectedTitle when user title is $title and title from profile is $profileTitle',
    ({ title, profileTitle, expectedTitle }) => {
      expect(getTitle(title, profileTitle)).toEqual(expectedTitle);
    }
  );
});
`,
    textAreaRows: 17,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>CMD+SHIFT+L</strong> - Put cursor on all selected lines
      </>
    ),
    challengeText: (
      <>
        <ul>
          <li>Align to the left</li>
          <li>Remove the trailing spaces </li>
          <li>
            Put dashes next to them e.g. <strong>- Pyrimidinetrione Ethyl Phenyl</strong>
          </li>
        </ul>
      </>
    ),
    startingText:
      `
Pyrimidinetrione Ethyl Phenyl
Azirino Pyrrolo Indole Dione Amino Aminocarbonyl Oxy Methyl Hexahydro Methoxy Methyl Alpha Beta Alpha Alpha
      Oxazaphosphorin Amine Bis Chloroethyl Tetrahydro Oxide
Benzene Trichloroethylidene Bis Chloro` +
      '        ' +
      `
Pyrazolidinedione Butyl Diphenyl
          Yohimban Carboxylic Acid Dimethoxy Trimethoxybenzoyl Oxy Methyl Ester Beta Beta Alpha Beta Alpha
Glucitol
Ascorbic Acid` +
      '        ' +
      `
Glucose
Pyrimidinedione Fluoro
Pyrimidinone Dihydro Propyl Thioxo` +
      '        ' +
      `
Carbamic Acid Ethyl Ester
          Pregn Ene Carboxylic Acid Acetylthio Hydroxy Oxo Gamma Lactone Alpha Alpha
Aziridine Phosphinothioylidynetris
        `,
    solution: `
- Pyrimidinetrione Ethyl Phenyl
- Azirino Pyrrolo Indole Dione Amino Aminocarbonyl Oxy Methyl Hexahydro Methoxy Methyl Alpha Beta Alpha Alpha
- Oxazaphosphorin Amine Bis Chloroethyl Tetrahydro Oxide
- Benzene Trichloroethylidene Bis Chloro
- Pyrazolidinedione Butyl Diphenyl
- Yohimban Carboxylic Acid Dimethoxy Trimethoxybenzoyl Oxy Methyl Ester Beta Beta Alpha Beta Alpha
- Glucitol
- Ascorbic Acid
- Glucose
- Pyrimidinedione Fluoro
- Pyrimidinone Dihydro Propyl Thioxo
- Carbamic Acid Ethyl Ester
- Pregn Ene Carboxylic Acid Acetylthio Hydroxy Oxo Gamma Lactone Alpha Alpha
- Aziridine Phosphinothioylidynetris
`,
    textAreaRows: 17,
    withTimer: true,
  },

  {
    title: (
      <>
        <strong>CMD+K+L / CMD+K+U</strong> - Make selection lower/uppercase
      </>
    ),
    challengeText: (
      <>
        <ul>
          <li>
            Make CSS safe versions of these names e.g.{' '}
            <strong>pyrimidinetrione-ethyl-phenyl</strong>
          </li>
          <li>
            <strong>HINT:</strong> Grab err&apos;thing and make it lowercase, get all the spaces and
            replace them with dashes
          </li>
        </ul>
      </>
    ),
    startingText: `
Azirino Pyrrolo Indole Dione Amino Aminocarbonyl Oxy Methyl Hexahydro Methoxy Methyl Alpha Beta Alpha Alpha
Oxazaphosphorin Amine Bis Chloroethyl Tetrahydro Oxide
Benzene Trichloroethylidene Bis Chloro
Pyrazolidinedione Butyl Diphenyl
Yohimban Carboxylic Acid Dimethoxy Trimethoxybenzoyl Oxy Methyl Ester Beta Beta Alpha Beta Alpha
Glucitol
Ascorbic Acid
Glucose
Pyrimidinedione Fluoro
Pyrimidinone Dihydro Propyl Thioxo
Carbamic Acid Ethyl Ester
Pregn Ene Carboxylic Acid Acetylthio Hydroxy Oxo Gamma Lactone Alpha Alpha
Aziridine Phosphinothioylidynetris
`,
    solution: `
azirino-pyrrolo-indole-dione-amino-aminocarbonyl-oxy-methyl-hexahydro-methoxy-methyl-alpha-beta-alpha-alpha
oxazaphosphorin-amine-bis-chloroethyl-tetrahydro-oxide
benzene-trichloroethylidene-bis-chloro
pyrazolidinedione-butyl-diphenyl
yohimban-carboxylic-acid-dimethoxy-trimethoxybenzoyl-oxy-methyl-ester-beta-beta-alpha-beta-alpha
glucitol
ascorbic-acid
glucose
pyrimidinedione-fluoro
pyrimidinone-dihydro-propyl-thioxo
carbamic-acid-ethyl-ester
pregn-ene-carboxylic-acid-acetylthio-hydroxy-oxo-gamma-lactone-alpha-alpha
aziridine-phosphinothioylidynetris
`,
    textAreaRows: 15,
    withTimer: true,
  },
  {
    title: (
      <>
        <strong>CMD+K+L / CMD+K+U</strong> - Casing challenge 2
      </>
    ),
    challengeText: (
      <>
        <ul>
          <li>
            Make JS variable versions of these names e.g.{' '}
            <strong>pyrimidinetrioneEthylPhenyl</strong>
          </li>
          <li>
            <strong>HINT:</strong> CTRL+CMD+G on all the spaces, delete them, highlight select one
            character immediately to the right and make it uppercase
          </li>
        </ul>
      </>
    ),
    startingText: `
AZIRINO PYRROLO INDOLE DIONE AMINO AMINOCARBONYL OXY METHYL HEXAHYDRO METHOXY METHYL ALPHA BETA ALPHA ALPHA
OXAZAPHOSPHORIN AMINE BIS CHLOROETHYL TETRAHYDRO OXIDE
BENZENE TRICHLOROETHYLIDENE BIS CHLORO
PYRAZOLIDINEDIONE BUTYL DIPHENYL
YOHIMBAN CARBOXYLIC ACID DIMETHOXY TRIMETHOXYBENZOYL OXY METHYL ESTER BETA BETA ALPHA BETA ALPHA
GLUCITOL
ASCORBIC ACID
GLUCOSE
PYRIMIDINEDIONE FLUORO
PYRIMIDINONE DIHYDRO PROPYL THIOXO
CARBAMIC ACID ETHYL ESTER
PREGN ENE CARBOXYLIC ACID ACETYLTHIO HYDROXY OXO GAMMA LACTONE ALPHA ALPHA
AZIRIDINE PHOSPHINOTHIOYLIDYNETRIS
`,
    solution: `
azirinoPyrroloIndoleDioneAminoAminocarbonylOxyMethylHexahydroMethoxyMethylAlphaBetaAlphaAlpha
oxazaphosphorinAmineBisChloroethylTetrahydroOxide
benzeneTrichloroethylideneBisChloro
pyrazolidinedioneButylDiphenyl
yohimbanCarboxylicAcidDimethoxyTrimethoxybenzoylOxyMethylEsterBetaBetaAlphaBetaAlpha
glucitol
ascorbicAcid
glucose
pyrimidinedioneFluoro
pyrimidinoneDihydroPropylThioxo
carbamicAcidEthylEster
pregnEneCarboxylicAcidAcetylthioHydroxyOxoGammaLactoneAlphaAlpha
aziridinePhosphinothioylidynetris
`,
    textAreaRows: 15,
    withTimer: true,
  },

  {
    title: (
      <>
        <strong>CMD+K+L / CMD+K+U</strong> - Casing challenge 3
      </>
    ),
    challengeText: (
      <>
        Convert the return object to camelcase attributes (HINT: might be quick to do the &apos;copy
        out to new tab&apos; trick)
      </>
    ),
    startingText: `
return {
  access_token,
  expires_in,
  id_token,
  refresh_token,
  token_type,
  refresh_expires_in,
  last_login,
};
`,
    solution: `
return {
  accessToken: response.access_token,
  expiresIn: response.expires_in,
  idToken: response.id_token,
  refreshToken: response.refresh_token,
  tokenType: response.token_type,
  refreshExpiresIn: response.refresh_expires_in,
  lastLogin: response.last_login,
};
`,
    textAreaRows: 11,
    withTimer: true,
  },
];

export default challenges;
