import React, { FC, ReactNode } from "react";

import Struct from "../Struct/Struct";
import { ContentType } from "@Aevium/Types";

export interface Metadata {
  title?: string;
}

export namespace Headers {
  export interface GET {
    "Content-Type"?: ContentType;
    "Cache-Control"?: string;
    ETag?: string;
    "Last-Modified"?: string;
    Expires?: string;
    Vary?: string;
    "Access-Control-Allow-Origin"?: string;
    "Content-Encoding"?: string;
    "Transfer-Encoding"?: string;
    Link?: string;
    "Set-Cookie"?: string[];
    "Strict-Transport-Security"?: string;
    "Content-Security-Policy"?: string;
    "X-Content-Type-Options"?: string;
    "X-Frame-Options"?: string;
    [key: string]: string | string[] | undefined;
  }
}

export namespace Response {
  export interface GET {
    status: number;
    body?: FC;
    headers?: Headers.GET;
    metadata?: Metadata;
  }

  export interface DELETE {}
  export interface HEAD {}
  export interface OPTIONS {}
  export interface PATCH {}
  export interface PUT {}
  export interface POST {
    status: number;
    body?: FC;
    headers?: Headers.GET;
    metadata?: Metadata;
  }
  export interface TRACE {}
}

export namespace Request {
  export interface GET {
    query?: { [key: string]: string };
    headers?: { [key: string]: string };
    cookies?: { [key: string]: string };
  }
  export interface DELETE {}
  export interface HEAD {}
  export interface OPTIONS {}
  export interface PATCH {}
  export interface PUT {}
  export interface POST {}
  export interface TRACE {}
}

class Page extends Struct {
  GET(request: Request.GET): Response.GET | void {}

  DELETE(request: Request.DELETE): Response.DELETE | void {}

  HEAD(request: Request.HEAD): Response.HEAD | void {}

  PATCH(request: Request.PATCH): Response.PATCH | void {}

  OPTIONS(request: Request.OPTIONS): Response.OPTIONS | void {}

  TRACE(request: Request.TRACE): Response.TRACE | void {}

  PUT(request: Request.PUT): Response.PUT | void {}

  POST(request: Request.POST): Response.POST | void {}
}

export default Page;
