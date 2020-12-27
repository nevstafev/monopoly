import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { observer } from 'mobx-react';
import { playersStore } from '../common/store/players-store';
import { gameSettingStore } from '../create-game/game-setting-store';

import { Board } from './board';
import { InputNameModal } from './input-name-modal';

export const Game = observer(() => {
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const id = searchParams.get('id');

    if (id) {
      gameSettingStore.setGameId(id);
    }
  }, [search]);

  return (
    <div>
      <div>
        {playersStore.players.map((player) => (
          <div>{player.name}</div>
        ))}
      </div>

      <Board />

      {playersStore.joined === false && <InputNameModal />}
    </div>
  );
});
