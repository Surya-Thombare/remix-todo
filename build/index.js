var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-KU5JSYHU.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { useState as useState3 } from "react";

// app/components/TodoForm.tsx
import { useRef } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function TodoForm({ onAdd }) {
  let inputRef = useRef(null);
  return /* @__PURE__ */ jsxDEV3("form", { onSubmit: (e) => {
    e.preventDefault();
    let text = inputRef.current?.value.trim();
    text && (onAdd(text), inputRef.current.value = "");
  }, className: "flex gap-2 mb-4", children: [
    /* @__PURE__ */ jsxDEV3(
      "input",
      {
        ref: inputRef,
        type: "text",
        placeholder: "Add a new todo...",
        className: "flex-1 px-4 py-2 border rounded",
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoForm.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(
      "button",
      {
        type: "submit",
        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
        children: "Add"
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoForm.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/TodoForm.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/TodoItem.tsx
import { useState as useState2 } from "react";
import { clsx } from "clsx";

// app/components/EditableText.tsx
import { useState, useEffect, useRef as useRef2 } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function EditableText({ text, onSave, isEditing, onEditComplete }) {
  let [editedText, setEditedText] = useState(text), inputRef = useRef2(null);
  useEffect(() => {
    isEditing && inputRef.current && inputRef.current.focus();
  }, [isEditing]);
  let handleSubmit = (e) => {
    e.preventDefault();
    let trimmedText = editedText.trim();
    trimmedText && trimmedText !== text && onSave(trimmedText), onEditComplete();
  }, handleKeyDown = (e) => {
    e.key === "Escape" && (setEditedText(text), onEditComplete());
  };
  return isEditing ? /* @__PURE__ */ jsxDEV4("form", { onSubmit: handleSubmit, className: "flex-1", children: /* @__PURE__ */ jsxDEV4(
    "input",
    {
      ref: inputRef,
      type: "text",
      value: editedText,
      onChange: (e) => setEditedText(e.target.value),
      onKeyDown: handleKeyDown,
      onBlur: handleSubmit,
      className: "w-full px-2 py-1 border rounded"
    },
    void 0,
    !1,
    {
      fileName: "app/components/EditableText.tsx",
      lineNumber: 42,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/EditableText.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV4("span", { className: "flex-1", children: text }, void 0, !1, {
    fileName: "app/components/EditableText.tsx",
    lineNumber: 37,
    columnNumber: 12
  }, this);
}

// app/components/TodoItem.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  let [isEditing, setIsEditing] = useState2(!1);
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center gap-2 p-2 border-b group", children: [
    /* @__PURE__ */ jsxDEV5(
      "input",
      {
        type: "checkbox",
        checked: todo.completed,
        onChange: () => onToggle(todo.id),
        className: "w-4 h-4"
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoItem.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5("div", { className: clsx("flex-1", todo.completed && "line-through text-gray-500"), children: /* @__PURE__ */ jsxDEV5(
      EditableText,
      {
        text: todo.text,
        isEditing,
        onSave: (newText) => onEdit(todo.id, newText),
        onEditComplete: () => setIsEditing(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/components/TodoItem.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/TodoItem.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV5(
        "button",
        {
          onClick: () => setIsEditing(!0),
          className: "px-2 py-1 text-blue-600 hover:bg-blue-100 rounded opacity-0 group-hover:opacity-100 transition-opacity",
          children: "Edit"
        },
        void 0,
        !1,
        {
          fileName: "app/components/TodoItem.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "button",
        {
          onClick: () => onDelete(todo.id),
          className: "px-2 py-1 text-red-600 hover:bg-red-100 rounded",
          children: "Delete"
        },
        void 0,
        !1,
        {
          fileName: "app/components/TodoItem.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/TodoItem.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TodoItem.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/TodoList.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return todos.length === 0 ? /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-500 text-center", children: "No todos yet. Add one above!" }, void 0, !1, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this) : /* @__PURE__ */ jsxDEV6("div", { className: "space-y-1", children: todos.map((todo) => /* @__PURE__ */ jsxDEV6(
    TodoItem,
    {
      todo,
      onToggle,
      onDelete,
      onEdit
    },
    todo.id,
    !1,
    {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/utils/todoUtils.ts
var generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36), createTodo = (text) => ({
  id: generateId(),
  text,
  completed: !1
});

// app/routes/_index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Remix Todo App" },
  { name: "description", content: "A simple todo application built with Remix" }
];
function Index() {
  let [todos, setTodos] = useState3([]);
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen bg-gray-50 py-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-2xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-3xl font-bold text-center mb-8", children: "Todo App" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-3xl font-bold text-center mb-8", children: "A simple todo application built with Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "bg-white p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ jsxDEV7(TodoForm, { onAdd: (text) => {
        setTodos((prev) => [...prev, createTodo(text)]);
      } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(
        TodoList,
        {
          todos,
          onToggle: (id) => {
            setTodos(
              (prev) => prev.map(
                (todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
              )
            );
          },
          onDelete: (id) => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
          onEdit: (id, newText) => {
            setTodos(
              (prev) => prev.map(
                (todo) => todo.id === id ? { ...todo, text: newText } : todo
              )
            );
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 50,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IW3KXLAR.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-YRAPECJM.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-IMTDBEFN.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KDEBSGXM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JNSOTT7I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "37d5f9d0", hmr: { runtime: "/build/_shared\\chunk-IMTDBEFN.js", timestamp: 1733725169046 }, url: "/build/manifest-37D5F9D0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
