import "bootstrap/dist/css/bootstrap.min.css";
import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../stories/", true, /\.tsx$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
