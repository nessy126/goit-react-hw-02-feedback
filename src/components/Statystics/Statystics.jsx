import { StatysticCounter, StatysticItem } from "./Statystics.styled"

const Statystics = ({
  title,
  optionsWithValues,
  total,
  positivePercentage,
}) => {
  return (
    <StatysticCounter>
      <h2>{title}</h2>
      {total > 0 ? (
        <>
          {optionsWithValues.map((el) => (
            <StatysticItem key={el}>
              {el[0]}: {el[1]}
            </StatysticItem>
          ))}
          <StatysticItem>Totat: {total}</StatysticItem>
          <StatysticItem>
            Positive feedback: {positivePercentage}%
          </StatysticItem>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </StatysticCounter>
  )
}

export default Statystics
