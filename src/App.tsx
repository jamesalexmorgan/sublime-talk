import React, { FC, useEffect, useRef, useState } from 'react';
import Layout from 'antd/es/layout';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import Radio from 'antd/es/radio';
import challenges from './challenges';
import Challenge from './components/Challenge';
import Button from 'antd/es/button';

const { Content } = Layout;

const sounds = [
  'Lightsaber-Turn-On-SoundBible.com-1637663395.mp3',
  'Commedy_Punch-Poorna_RAo-1017287436.mp3',
  'party_horn-Mike_Koenig-76599891.mp3',
  'Squish-Fart-SoundBible.com-115133916.mp3',
  'Wookie-Chewbacca-Impression-SoundBible.com-761302891.mp3',
  'Pew_Pew-DKnight556-1379997159.mp3',
  'Laser-Blaster-SoundBible.com-1388608841.mp3',
  'Uuuuuu-Paula-1357936016.mp3',
  'Bleat-SoundBible.com-893851569.mp3',
  'Quack-Quack-SoundBible.com-620056916.mp3',
  'Air-Horn-SoundBible.com-1561808001.mp3',
  'R2D2-Again-SoundBible.com-1304677791.mp3',
  'Magic-Wand-Noise-SoundBible.com-375928671.mp3',
  'Belch-Kevan-136688254.mp3',
  'Joke-Sting-SoundBible.com-1968971319.mp3',
  'Killdeer-Bird-Call-SoundBible.com-1404057403.mp3',
  'Monkeys-Monkeying-Around-SoundBible.com-1738007729.mp3',
  'Scream-Of-Joy-SoundBible.com-1639390065.mp3',
  'Smack-SoundBible.com-1427823671.mp3',
];

interface TypeProps {
  onChange: (value: string) => void;
  value: string;
}
const SoundSelector: FC<TypeProps> = ({ onChange, value }) => {
  return (
    <div style={{ marginBottom: 50 }}>
      <h3>Choose your sound</h3>
      <Radio.Group onChange={(e) => onChange(e.target.value)} value={value}>
        {sounds.map((sound, index) => (
          <Radio key={sound} value={sound}>
            {index + 1}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

const App: FC = () => {
  useEffect(() => {
    addEventListener(
      'beforeunload',
      (event) => {
        event.preventDefault();
        return (event.returnValue = 'Are you sure you want to exit?');
      },
      { capture: true },
    );
  }, []);

  const [totals, setTotals] = useState<{ [id: string]: number }>({});

  const handleChallengeFinished = (index: number, ms: number) => {
    playSound();
    if (!totals[index] || totals[index] > ms) {
      setTotals(() => ({ ...totals, [index]: ms }));
    }
  };

  const [selectedSound, setSelectedSound] = useState(sounds[0]);
  const player = useRef<HTMLAudioElement>(null);
  const handleChangeSound = (sound: string) => {
    setSelectedSound(sound);
    setTimeout(playSound);
  };

  const playSound = () => player?.current?.play();

  return (
    <Layout>
      <Content style={{ padding: '30px' }}>
        <audio ref={player} src={`sounds/${selectedSound}`}></audio>
        <h1>Shortcuts! 🤓</h1>
        <SoundSelector value={selectedSound} onChange={handleChangeSound} />
        <ul>
          {challenges.map(({ title }, index) => (
            <li key={`link${index}`}>
              <a href={`#challenge${index}`}>{title}</a>
            </li>
          ))}
        </ul>
        {challenges.map((challenge, index) => (
          <Challenge
            key={index}
            challenge={challenge}
            index={index}
            onFinished={handleChallengeFinished}
            best={totals[index]}
          />
        ))}
        <h1 style={{ fontSize: '70px' }}>
          TOTAL: {Object.values(totals).reduce((acc, item) => acc + item, 0) / 1000} seconds
        </h1>
        (For{' '}
        {Object.keys(totals)
          .map((key) => `#${key}`)
          .join(', ')}{' '}
        ({Object.keys(totals).length} challenges))
        <div>
          <Button onClick={() => setTotals({})}>Reset</Button>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
