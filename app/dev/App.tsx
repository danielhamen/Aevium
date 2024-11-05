// Import
import React, { useEffect, useState } from "react";
import getEnv from "./scripts/getEnv";
import { Routes, routes as ROUTES } from "./app/routes";
import { Page } from "@Aevium/Aevium";
import { Method } from "@Aevium/Types";

// Register colors
import { ColorRegistry, SpacingRegistry } from "@Aevium/Registries";
ColorRegistry.register();
SpacingRegistry.register();

// Define development mode and domain
const __DEV__ = true;
const __DOMAIN__ = __DEV__ ? "localhost" : "aevium.com";

// Get Env
const __ENV__ = getEnv();

// Verify Env is valid
if (__ENV__["ok"] !== true) {
  console.error("Environment validation failed. Check configuration.");
  throw new Error("Invalid environment configuration");
}

interface _SERVER {
  ORIGIN: string;
  METHOD: Method;
  IP: string;
  HOSTNAME: string;
  PROTOCOL: string;
  HREF: string;
  PORT: string;
  PATH: string;
  QUERY: string;
  USER_AGENT: string;
  HEADERS: { [key: string]: string };
  TIMESTAMP: string;
  ASYNC: boolean;
  REFERRER: string;
  COOKIES: { [key: string]: string };
}

// Trace request
const __SERVER__: _SERVER = {
  ORIGIN: window.location.origin,
  METHOD: "GET",
  IP: "",
  PROTOCOL: window.location.protocol,
  HOSTNAME: window.location.hostname,
  HREF: window.location.href,
  PORT: window.location.port,
  PATH: window.location.pathname,
  QUERY: window.location.search,
  USER_AGENT: navigator.userAgent,
  HEADERS: {}, // Populate with headers if needed
  TIMESTAMP: new Date().toISOString(),
  ASYNC: true,
  REFERRER: document.referrer,
  COOKIES: document.cookie.split("; ").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    },
    {} as { [key: string]: string },
  ),
};

// Main App Component
const App = () => {
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    // Log each individual query parameter (if any)
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      console.log(`Query Parameter: ${key} = ${value}`);
    });

    // Capture subdomain and resolve route
    const subdomainParts = (
      __SERVER__.HOSTNAME.slice(
        0,
        __SERVER__.HOSTNAME.length - __DOMAIN__.length,
      )
        .split(".")
        .filter((c) => c)
        .join(".")
        .trim() || "www"
    ).split(".");

    let i = 0;
    let route: Routes | (() => Promise<{ default: typeof Page }>) | undefined =
      ROUTES;
    while (i < subdomainParts.length) {
      const part = subdomainParts[i];
      if (typeof route === "object" && route !== null) {
        route = route[part];
      }

      if (i === subdomainParts.length - 1) {
        if (typeof route === "object" && route["index"]) {
          route = route["index"];
        }
      }

      i++;
    }

    // Load the appropriate component dynamically if route exists
    if (typeof route === "function") {
      route()
        .then((mod) => {
          const AppPage = mod.default as typeof Page;
          const pageInstance = new AppPage();

          if (__SERVER__.METHOD === "GET" && pageInstance.GET) {
            const GET = pageInstance.GET({});
            setComponent(() => GET?.body || null);
          } else if (__SERVER__.METHOD === "POST" && pageInstance.POST) {
            const POST = pageInstance.POST({});
            setComponent(() => POST?.body || null);
          } else {
            console.error("Method not supported on this page.");
          }
        })
        .catch((err) => console.error("Failed to load route", err));
    } else {
      console.error("Route not found.");
    }
  }, []);

  return Component ? <Component /> : <div>Loading...</div>;
};

export default App;
