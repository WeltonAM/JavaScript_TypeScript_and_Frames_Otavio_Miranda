import PomodoroTimer from './components/PomodoroTimer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer 
        pomodoroTimer={10}
        shortRestTime={2}
        longRestTime={5}
        cycles={2}
      />
    </div>
  );
}

export default App;
