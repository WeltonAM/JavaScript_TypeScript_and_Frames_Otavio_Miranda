import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import Main from '../Components/Main';

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Main></Main>
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
