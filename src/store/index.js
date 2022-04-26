import configure from "./configure";

export * as Actions from "./actions";
export * as Constants from "./constants";

export { configure };

export const { store, persist } = configure();
