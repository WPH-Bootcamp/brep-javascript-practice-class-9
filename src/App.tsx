import { useState } from 'react';

import { Bio } from './materi/3-JSX-Rules';
import {
  Header,
  Sidebar,
  Content,
  Footer,
} from './materi/4-Functional-Components';
import { CourseCard } from './materi/5-Props-Passing-Data';
import { Card } from './materi/6-Props-Children';
import { Box, Materi } from './materi/7-Styling';
import { Parent } from './materi/8-Prop-Drilling';

function App() {
  const [isActive, setIsActive] = useState<boolean>(true);

  function handleActive() {
    setIsActive((data) => !data);
  }

  function handleEnroll() {
    console.log('Student Enrolled');
  }

  return (
    <div style={{ height: '500dvh' }}>
      <h1>Meet 9 - Component, Props and State</h1>

      <h2>Materi 3 - JSX Rules</h2>
      <Bio />

      <h2>Materi 4 - Functional Component</h2>
      <Header />
      <Sidebar />
      <Content />
      <Footer />

      <h2>Materi 5 - Props : Passing Data</h2>
      <CourseCard
        title="Materi Javascript"
        mentor="Coach Dicky"
        onEnroll={handleEnroll}
        description="Ini adalah materi Javascript yaaa...."
      />
      <CourseCard
        title="Materi Typescript"
        mentor="Coach Henry"
        onEnroll={handleEnroll}
        description="ini adalah materi typescript yaaa....."
      />
      <CourseCard title="Materi HTML & CSS" mentor="Coach Vincent" />

      <h2>Materi 6 - Props : Children</h2>
      <Card>
        <h3>Ini adalah children</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <Card>
        <h3>Ini adalah children</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <Card>
        <h3>Ini adalah children</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>

      <h2>Materi 7 - Styling</h2>
      <Box />

      <button onClick={handleActive}>Ubah Activate</button>
      <Materi title="Materi React" isActive={isActive} />
      <Materi title="Materi Javascript" isActive={isActive} />

      <h2>Materi 8 - Prop Drilling</h2>
      <Parent name="Ucup" />
    </div>
  );
}
export default App;
