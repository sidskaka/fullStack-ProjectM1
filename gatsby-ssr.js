/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
require("dotenv").config()

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
   <div hidden id="snipcart" data-api-key="NzBjMzJmNjUtMmY4My00NzBmLWJjYjgtZjI2MDU4NTUwMWFhNjM3MjUyMjk1Nzg5MTgxNTYz"></div>,
   <script src="https://cdn.snipcart.com/themes/v3.0.13/default/snipcart.js"></script>,
  ])
}