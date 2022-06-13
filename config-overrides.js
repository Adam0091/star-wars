const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@ui": "src/components/UIKit",
    "@containers": "src/containers",
    "@constants": "src/constants",
    "@hoc-helpers": "src/hoc-helpers",
    "@hooks": "src/hooks",
    "@services": "src/services",
    "@styles": "src/styles",
    "@static": "src/static",
    "@utils": "src/utils",
    "@routes": "src/routes",
  })(config);

  return config;
};
