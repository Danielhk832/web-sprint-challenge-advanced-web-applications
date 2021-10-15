import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import View from "./View";

import articleServices from "./../services/articleServices";
jest.mock("./../services/articleServices");

const nullArticles = null;

const articles = [
  {
    id: 1,
    headline:
      "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: "TODAY",
    author: "",
    image: null,
    summary:
      "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.",
  },
  {
    id: 2,
    headline:
      "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
    createdOn: "TMRW",
    author: "Susan Snyder",
    image: null,
    summary:
      "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
    body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.",
  },
  {
    id: 3,
    headline:
      "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
    createdOn: "TMRW",
    author: null,
    image: null,
    summary:
      "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
    body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.",
  },
];

test("renders zero articles without errors", async () => {
  articleServices.mockResolvedValueOnce(nullArticles);
  render(<View />);
  const article = screen.queryByTestId("article");

  expect(article).toBeNull();
});

test("renders three articles without errors", async () => {
  articleServices.mockResolvedValueOnce(articles);
  render(<View />);
  const article = await screen.findAllByTestId("article");

  expect(article).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
