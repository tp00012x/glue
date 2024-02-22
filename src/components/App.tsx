/**
 * Instructions:
 *
 * GraphQL API playground https://graphqlzero.almansi.me/api
 *
 * 1. Load 5 photos from the 1st Album of User with the name that is in the Title component,
 *    after the App component has mounted. Assume the name is unknown until App has mounted.
 *    Each photo should be shown with a thumbnail and title. Note: the photos look like
 *    placeholders, that's ok—-this is a free testing API.
 * 2. Get the total count of photos in the 1st Album. We want to display the status of
 *    fetched photos e.g. 5 of 50 - see Controls component.
 * 3. While data is loading, the button in the Controls component should be disabled.
 * 4. Clicking the button fetches an additional 7 photos that get appended to the grid.
 * 5. Bonus: Complete tests in App.test.tsx.
 *
 * NOTES:
 * - Only modify files within src/components.
 * - When you fetch data, don't over or under fetch.
 * - You can use Google and look up any documentation you'd like.
 */

import { graphql } from "src/gql";

import "./App.css";

import Title from "../vendor/Title"; // don't modify, assume this component is from a 3rd party
import Controls from "./Controls";
import Thumbnail from "./Thumbnail";

/**
 * Initial GraphQL query (you will need to edit):
 *
 * - After you edit this block, save the file so that graphql-codegen can generate
 *   the return types for you from the query (be sure `yarn start` is running!).
 * - The query types will then automatically be inferred by the query hook, and/or you
 *   can import API types directly from src/gql/graphql if needed (such as Photo, etc).
 *
 * NOTE: We highly recommend installing the graphql.vscode-graphql VSCode extension
 * which provides syntax highlighting, autocompletion, and cmd+click to jump to
 * type inside the following block.
 */
const GET_USERS_PHOTOS = graphql(`
  # GraphQL query variables are defined using "$var: Type", such as "$user: String"
  # See GraphQL API playground https://graphqlzero.almansi.me/api for schema
  query GetUsersPhotos {
    users(options: {}) {
      data {
        albums {
          data {
            photos(options: {}) {
              meta {
                totalCount
              }
              # data {
              #   ...
              # }
            }
          }
        }
      }
    }
  }
`);

const App: React.FC = () => {
  console.count("Render"); // for debugging

  /**
   * Apollo is a full-featured GraphQL client that handles caching and state management.
   * The useLazyQuery hook can be used to fetch data on demand:
   *   fetchPhotos({ variables: { ... } }).then((result) => {
   */
  // const [fetchPhotos, { data, loading, error }] = useLazyQuery(GET_USERS_PHOTOS);

  const clickHandler = () => {
    console.count("Clicks"); // for debugging
  };

  return (
    <div className="m-4">
      <header className="mb-2">
        <Title />
      </header>
      <div
        className="album grid grid-cols-[repeat(7,_1fr)] gap-4"
        data-testid="container"
      >
        <Controls />
        {/* Render each photo using the Thumbnail component */}
        <Thumbnail />
      </div>
    </div>
  );
};

export default App;
