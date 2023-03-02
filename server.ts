import serverless from "serverless-http";
import NextServer from "next/dist/server/next-server";
import {
    config,
// @ts-ignore
} from ".next/required-server-files.json";
import type {
    NextConfig,
} from "next";
import type {
    Options,
} from "serverless-http";

const server = new NextServer({
    hostname: "localhost",
    port: 3000,
    dir: __dirname,
    dev: false,
    conf: {
        ...(config as NextConfig),
    },
});
const serverlessOption: Options = {
    binary: ["*/*"]
};

export const handler = serverless(server.getRequestHandler(), serverlessOption);
