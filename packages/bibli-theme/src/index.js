import React from "react"
import Root from "./Root"
import link from "@frontity/html2react/processors/link";

export default {
  name: "bibli-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}





