import { log } from "./lib/";

log.debug("Loading awesome package...");

export const identity = <T>(value: T): T => value;

export default identity;
