/**
 * This is the entrypoint for your application.
 *
 * Update this docblock with some useful information, like the
 * name of the project, authors, etc., or any other useful
 * documentation.
 */

import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ debug: Boolean(process.env.DEBUG) });
}

export const app = {};
