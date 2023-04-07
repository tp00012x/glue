import "./App.css";
// Must use components
import Title from "../Title"; // can't be modified
import Controls from "./Controls";

// GraphQL

//import { gql } from "@apollo/client";

// interface Photo {
// }

// interface PhotosMeta {
// }

// interface Photos {
// }

// interface Albums {
// }

// interface Users {
// }

// interface Vars {
// }

// const GET_USERS_PICTURES = gql``;

/**
 * GraphQL https://graphqlzero.almansi.me/api
 * 1. Load 5 photos from the 1st Album of User with the name in title component, after the App component, has mounted. Pretend the name is unknown until App has mounted.
 * 2. Get the total count of photos in the 1st Album. We want to display the status of fetched photos e.g. 5 of 50 - see Controls component
 * 3. When we fetch data the button in the Controls component should be disabled
 * 4. Clicking the button fetches an additional 7 photos that get appended to the grid.
 * 5. Complete tests in App.test.tsx, 3,4 and 5 need to be completed
 *
 *
 * Note:
 * You are only allowed to modify files within the component directory.
 * When you fetch data don't over or under fetch
 * You can google and look up documentation.
 *
 */

const App: React.FC = () => {
  console.count("Render"); //ignore

  const clickHandler = () => {
    console.count("Clicks"); //ignore
  };

  return (
    <>
      <header>
        <Title />
      </header>

      <div data-testid="container">
        <Controls />
        <figure>
          <img
            alt="photo-id"
            src="https://via.placeholder.com/600/3a3059"
          ></img>
          <figcaption>Photo: XXX</figcaption>
        </figure>
      </div>
    </>
  );
};

export default App;
