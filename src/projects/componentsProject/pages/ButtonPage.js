import Button from "../components/Button";
import {GoBeaker, GoCircleSlash} from "react-icons/go"

function ButtonPage() {
  const clickHandler = () => {
    console.log('click')
  }

  return (
    <div className="ButtonPage">
      <div>
        <Button primary rounded onClick={clickHandler}>Buy Now</Button>
      </div>
      <div>
        <Button secondary>See Deal!</Button>
      </div>
      <div>
        <Button success>Hide Ads!</Button>
      </div>
      <div>
        <Button warning>
          <GoBeaker/>
          Take me Home
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCircleSlash/>
          Sweet Alabama
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
