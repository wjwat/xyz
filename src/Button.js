function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


const Button = ({ setState }) => {
  return (
      <button type='button' onClick={() => {
        const newColor = '#'+getRandomInt(0, 16777215).toString(16);
        setState(newColor)
      }} >
        CLICK ME
      </ button>
  )
}

export default Button;