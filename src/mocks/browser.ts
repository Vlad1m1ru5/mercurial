import { setupWorker } from "msw";
import * as handlers from "./handlers";

const worker = setupWorker(...Object.values(handlers));

export { worker };
