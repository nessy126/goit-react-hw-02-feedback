import { StatysticCounter, StatysticItem } from "./Statystics.styled"

const Statystics = ({
  title,
  optionsWithValues,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatysticCounter>
        <h2>{title}</h2>
        {optionsWithValues.map((el) => (
          <StatysticItem key={el}>
            {el[0]}: {el[1]}
          </StatysticItem>
        ))}
        <StatysticItem>Totat: {total}</StatysticItem>
        <StatysticItem>Positive feedback: {positivePercentage}%</StatysticItem>
      </StatysticCounter>
    </>
  )
}
 
export default Statystics;