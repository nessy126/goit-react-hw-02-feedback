import { StatysticCounter, StatysticItem } from "./Statystics.styled"

const Statystics = ({ good, neutral , bad}) => {
  return (
    <>
      <h2>Statystics</h2>
      <StatysticCounter>
        <StatysticItem>Good: {good}</StatysticItem>
        <StatysticItem>Neutral: {neutral}</StatysticItem>
        <StatysticItem>Bad: {bad}</StatysticItem>
      </StatysticCounter>
    </>
  )
}
 
export default Statystics;