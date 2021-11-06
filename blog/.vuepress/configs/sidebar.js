const { getChildren } = require("../utils");
module.exports = {
  "/frontend/": [
    {
      title: "HTML",
      collapsable: false,
      children: getChildren("/frontend/html/"),
    },
    {
      title: "CSS",
      collapsable: false,
      children: getChildren("/frontend/css/"),
    },
    {
      title: "JavaScript",
      collapsable: false,
      children: getChildren("/frontend/javascript/"),
    },
  ],
  "/framework/": [
    {
      title: "Vue",
      collapsable: false,
      children: getChildren("/framework/vue/"),
    },
    {
      title: "React",
      collapsable: true,
      children: getChildren("/framework/react/"),
    },
  ],
};
