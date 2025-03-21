import { useContainerStore } from './lib';

export default function App() {
  const { containers, setContainers, addContainer } = useContainerStore();

  return (
    <div>App</div>
  )
}
