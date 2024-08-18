import { StartButton } from './StartButton';
import { RestartButton } from './RestartButton';
import { useGameData } from '../contexts/gameDataContext';

export const ToggleButtons = () => {
    const { level} = useGameData();
  return (
    <>
        {!level ? <StartButton /> : <RestartButton />}
    </>
  )
}
