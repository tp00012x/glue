import { graphql } from "src/gql";

import "./App.css";

import Title from "../vendor/Title"; // don't modify
import Controls from "./Controls";

/**
 * Instructions:
 *
 * GraphQL API playground https://graphqlzero.almansi.me/api
 *
 * 1. Load 5 photos from the 1st Album of User with the name that is in the title component, after the App component has mounted. Assume the name is unknown until App has mounted.
 * 2. Get the total count of photos in the 1st Album. We want to display the status of fetched photos e.g. 5 of 50 - see Controls component.
 * 3. While data is loading, the button in the Controls component should be disabled.
 * 4. Clicking the button fetches an additional 7 photos that get appended to the grid.
 * 5. Bonus: Complete tests in App.test.tsx.
 *
 * Notes:
 * - Only modify files within src/components.
 * - When you fetch data, don't over or under fetch.
 * - You can use Google and look up any documentation you'd like.
 *
 */

/* Example GraphQL query: */
const GET_PHOTOS = graphql(`
  query GetUsersPhotos {
    users {
      meta {
        totalCount
      }
    }
  }
`);

const App: React.FC = () => {
// const [getPhotos, { data, loading, error }] = useLazyQuery(GET_PHOTOS);

  console.count("Render"); // for debugging

  const clickHandler = () => {
    console.count("Clicks"); // for debugging
  };

  return (
    <>
      <header>
        <Title />
      </header>

      <div data-testid="container">
        <Controls />
        <figure>
          <img alt="" src="https://via.placeholder.com/600/3a3059"/>
          <figcaption>TITLE</figcaption>
        </figure>
      </div>
    </>
  );
};

export default App;