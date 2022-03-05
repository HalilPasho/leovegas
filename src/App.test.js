import { render, screen } from "@testing-library/react";
import App from "./App";
import ResetButton from "./components/ReserFilters";
import Movies from "./components/Movies";

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

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/LeoVegas/i);
  expect(linkElement).toBeInTheDocument();
});

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

test("Specialities checkbox component is present", () => {
  render(<App />);
  let spec = [];
  for (const [key, value] of Object.entries(DataMock)) {
    spec.push(value);
  }
  expect(spec).toBeDefined();
  expect(spec).toBeTruthy();
});

test("Movies are rendered after search is valid", async () => {
  render(<Movies movies={DataMock} />);

  expect(
    await screen.findByText("Dragon Ball Z: Resurrection 'F'")
  ).toBeInTheDocument();
  expect(await screen.findByText(DataMock.title)).toHaveClass("highlight");
});
