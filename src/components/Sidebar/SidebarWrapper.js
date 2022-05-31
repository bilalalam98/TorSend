import PropTypes from "prop-types";
import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.

function SidebarWrapper({ className, headerLinks, links }) {
  var ps;
  const sidebarWrapper = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div className={className} ref={sidebarWrapper}>
      {headerLinks}
      {links}
    </div>
  );
}

export default SidebarWrapper;

SidebarWrapper.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  headerLinks: PropTypes.array,
};
