import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { Page } from "../../lib/Aevium/Aevium";
import { CSS } from "@Aevium/Aevium";
import { Request, Response } from "@Aevium/Structs";
import { View, Text, Separator } from "@Aevium/Elements";
import { useColor } from "@Aevium/Modifiers";

export const Index: React.FC = () => {
  return (
    <View
      className={[
        CSS(`
            background: Red(100);
            padding: 8px 4px;
            border-radius: 8px;
            position: fixed;
            bottom: 8px;
            right: 8px;
            width: 360px;
            max-width: 50vw;
            min-width: 200px;
          `),
      ]}
    >
      <Text
        className={[
          CSS(`
            color: Red(500);
          `),
        ]}
      >
        Hellow!
      </Text>
    </View>
  );
};

class App extends Page {
  GET(request: Request.GET): Response.GET {
    return {
      status: 200,
      body: Index,
      metadata: {
        title: "Homepage.",
      },
    };
  }

  POST(request: Request.POST): Response.POST {
    return {
      status: 200,
      body: Index,
    };
  }
}

export default App;
