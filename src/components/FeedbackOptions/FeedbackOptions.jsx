import {
  ButtonsConteiner,
  Button,
  MainConteiner,
} from "./FeedbackOptions.styled"

const FeedbackOptions = () => {
  return (
    <MainConteiner>
      <h2>Please leave feedback</h2>
      <ButtonsConteiner>
        <Button type="button">Good</Button>
        <Button type="button">Neutral</Button>
        <Button type="button">Bad</Button>
      </ButtonsConteiner>
    </MainConteiner>
  )
}
 
export default FeedbackOptions;