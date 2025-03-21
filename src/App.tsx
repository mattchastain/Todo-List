import { Button } from './components';
import { useContainerStore } from './lib';
import { CirclePlus } from 'lucide-react';

export default function App() {
  const { containers, setContainers, addContainer } = useContainerStore();

  return (
    <div className='mx-auto max-w-7xl'>
      {containers.length === 0 && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <Button label='Create Container' icon={CirclePlus} />
        </div>
      )}
    </div>
  )
}
