/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react"); 


exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script data-api-key="s125da2s6hshj7oh6w639ppc" data-schedulerid="sched_qpfsy4voj5ugkkqw4dq2rv1o" defer="" id="se-widget-embed" src="https://embed.scheduler.servicetitan.com/scheduler-v1.js" />
    ]);
  };