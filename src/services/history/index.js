import { createBrowserHistory } from "history";

import config from "../../connections";

const history = createBrowserHistory({
  basename: config.app.public_url,
});

export default history;
