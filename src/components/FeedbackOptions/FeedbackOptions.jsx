import {
  ButtonsConteiner,
  Button,
  MainConteiner,
} from "./FeedbackOptions.styled"

const FeedbackOptions = ({options =[], counterFeedbacks}) => {
  return (
    <MainConteiner>
      <ButtonsConteiner>
        {options.map((el) => (
          <Button
            onClick={(e) => counterFeedbacks(el)}
            type="button"
            key={el}
            name={el}
          >
            {el}
          </Button>
        ))}
      </ButtonsConteiner>
    </MainConteiner>
  )
}
 
export default FeedbackOptions;