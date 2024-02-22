import $ from "jquery";

const jQuery = () => {
  if (typeof window !== "undefined") {
    window.$ = $;
    window.jQuery = $;
  }
};

export default jQuery;
