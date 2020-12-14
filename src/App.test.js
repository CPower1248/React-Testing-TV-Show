import React from 'react';
import {render, screen, waitFor} from "@testing-library/react";
import App from './App';

import { fetchShow as mockFetchShow } from "./api/fetchShow"
jest.mock("./api/fetchShow")

// test("App renders without errors", () => {
//     render(<App />)
// })

test("App renders with mock API", async () => {
    mockFetchShow.mockResolvedValueOnce({
        data: {
          image: {
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
          },
          name: "Stranger Things",
          summary: "<p>A really cool show</p>",
          _embedded: {
            episodes: [
              {
                id: 1,
                name: "foo",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 1,
                season: 1,
                summary: "bar",
                runtime: 60,
              },
            ],
          },
        },
    });
    render(<App />)

    await waitFor(() => {
        const showName = screen.getByTestId("showName");
        expect(showName).toBeInTheDocument();
    });
})
