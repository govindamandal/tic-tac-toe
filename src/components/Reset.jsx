import GameState from "../GameState"

function Reset({ gameState, onClickReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button type='button' className='reset-button' onClick={onClickReset}>Reset</button>
  )
}

export default Reset