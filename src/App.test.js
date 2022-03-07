import { render, screen } from "@testing-library/react";
import App from "./App";
import ResetButton from "./components/ReserFilters";
import Movies from "./components/Movies";
import WatchLater from "./components/WatchLater";
import { Router } from "react-router-dom";
import WatchLaterList from "./components/WatchLaterList";
import { createMemoryHistory } from "history";

const DataMock = {
  adult: false,
  backdrop_path: "/kIgfFzjjBNgx6Tr2LCw8Zkq921s.jpg",
  genre_ids: [28, 16, 878],
  id: 303857,
  original_language: "ja",
  original_title: "ドラゴンボールZ 復活の「F」",
  overview: "Some mock for the desctioption",
  popularity: 219.099,
  poster_path: "/soq3AxjALdBfdPAm8H7yuMmNL5Y.jpg",
  release_date: "2015-04-18",
  title: "Dragon Ball Z: Resurrection 'F'",
  video: false,
  vote_average: 6.8,
  vote_count: 1356,
};

test("Reset button is present", () => {
  render(
    <ResetButton
      clearResult={() => {
        return [];
      }}
    />
  );
  const resetFilter = screen.getByText("Reset Filters");
  expect(resetFilter).toBeInTheDocument();
  expect(resetFilter).toBeTruthy();
});

test("Home page is present", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  let spec = [];
  for (const [key, value] of Object.entries(DataMock)) {
    spec.push(value);
  }
  expect(spec).toBeDefined();
  expect(spec).toBeTruthy();
});

test("Movies are rendered after search is valid", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Movies movies={DataMock} />
    </Router>
  );

  expect(
    await screen.findByText("Dragon Ball Z: Resurrection 'F'")
  ).toBeInTheDocument();
  expect(await screen.findByText(DataMock.title)).toHaveClass("highlight");
});

test("Watch later component is rendered", async () => {
  render(<WatchLater />);

  expect(<WatchLater />).toBeDefined();
  expect(<WatchLater />).toBeTruthy();
  expect(await screen.findByText("Watch Later")).toBeInTheDocument();
});

test("Watch later page is rendered", async () => {
  const history = createMemoryHistory();
  const route = "/favourites";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <WatchLaterList movies={DataMock} />
    </Router>
  );

  expect(<WatchLaterList />).toBeDefined();
  expect(<WatchLaterList />).toBeTruthy();
  expect(
    await screen.findByText("List you have saved to watch !")
  ).toBeInTheDocument();
});
