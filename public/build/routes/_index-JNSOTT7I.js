import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IMTDBEFN.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react4 = __toESM(require_react(), 1);

// app/components/TodoForm.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TodoForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TodoForm.tsx"
  );
  import.meta.hot.lastModified = "1733724921078.7876";
}
function TodoForm({
  onAdd
}) {
  _s();
  const inputRef = (0, import_react.useRef)(null);
  const handleSubmit = (e) => {
    var _a;
    e.preventDefault();
    const text = (_a = inputRef.current) == null ? void 0 : _a.value.trim();
    if (text) {
      onAdd(text);
      inputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "flex gap-2 mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: inputRef, type: "text", placeholder: "Add a new todo...", className: "flex-1 px-4 py-2 border rounded", required: true }, void 0, false, {
      fileName: "app/components/TodoForm.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600", children: "Add" }, void 0, false, {
      fileName: "app/components/TodoForm.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TodoForm.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(TodoForm, "iD9XNNsNOlNDckBemnvlLS+aHYk=");
_c = TodoForm;
var _c;
$RefreshReg$(_c, "TodoForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/TodoItem.tsx
var import_react3 = __toESM(require_react(), 1);

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// app/components/EditableText.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\EditableText.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\EditableText.tsx"
  );
  import.meta.hot.lastModified = "1733722722530.5183";
}
function EditableText({
  text,
  onSave,
  isEditing,
  onEditComplete
}) {
  _s2();
  const [editedText, setEditedText] = (0, import_react2.useState)(text);
  const inputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = editedText.trim();
    if (trimmedText && trimmedText !== text) {
      onSave(trimmedText);
    }
    onEditComplete();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setEditedText(text);
      onEditComplete();
    }
  };
  if (!isEditing) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex-1", children: text }, void 0, false, {
      fileName: "app/components/EditableText.tsx",
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit: handleSubmit, className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ref: inputRef, type: "text", value: editedText, onChange: (e) => setEditedText(e.target.value), onKeyDown: handleKeyDown, onBlur: handleSubmit, className: "w-full px-2 py-1 border rounded" }, void 0, false, {
    fileName: "app/components/EditableText.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/EditableText.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s2(EditableText, "QAV4bHA3IQgDqdIDs4Xql7ktTHA=");
_c2 = EditableText;
var _c2;
$RefreshReg$(_c2, "EditableText");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/TodoItem.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TodoItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TodoItem.tsx"
  );
  import.meta.hot.lastModified = "1733722722540.6257";
}
function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit
}) {
  _s3();
  const [isEditing, setIsEditing] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2 p-2 border-b group", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "checkbox", checked: todo.completed, onChange: () => onToggle(todo.id), className: "w-4 h-4" }, void 0, false, {
      fileName: "app/components/TodoItem.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: clsx("flex-1", todo.completed && "line-through text-gray-500"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditableText, { text: todo.text, isEditing, onSave: (newText) => onEdit(todo.id, newText), onEditComplete: () => setIsEditing(false) }, void 0, false, {
      fileName: "app/components/TodoItem.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/TodoItem.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setIsEditing(true), className: "px-2 py-1 text-blue-600 hover:bg-blue-100 rounded opacity-0 group-hover:opacity-100 transition-opacity", children: "Edit" }, void 0, false, {
        fileName: "app/components/TodoItem.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => onDelete(todo.id), className: "px-2 py-1 text-red-600 hover:bg-red-100 rounded", children: "Delete" }, void 0, false, {
        fileName: "app/components/TodoItem.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TodoItem.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TodoItem.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s3(TodoItem, "N4qUVpaen/rROL8jPu/4huFD8lA=");
_c3 = TodoItem;
var _c3;
$RefreshReg$(_c3, "TodoItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/TodoList.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TodoList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TodoList.tsx"
  );
  import.meta.hot.lastModified = "1733722722551.0227";
}
function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit
}) {
  if (todos.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-500 text-center", children: "No todos yet. Add one above!" }, void 0, false, {
      fileName: "app/components/TodoList.tsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-1", children: todos.map((todo) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TodoItem, { todo, onToggle, onDelete, onEdit }, todo.id, false, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 32,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/components/TodoList.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c4 = TodoList;
var _c4;
$RefreshReg$(_c4, "TodoList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/todoUtils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\todoUtils.ts"
  );
  import.meta.hot.lastModified = "1733722722505.286";
}
var generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
var createTodo = (text) => ({
  id: generateId(),
  text,
  completed: false
});

// app/routes/_index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1733725168666.6848";
}
var meta = () => {
  return [{
    title: "Remix Todo App"
  }, {
    name: "description",
    content: "A simple todo application built with Remix"
  }];
};
function Index() {
  _s4();
  const [todos, setTodos] = (0, import_react4.useState)([]);
  const handleAddTodo = (text) => {
    setTodos((prev) => [...prev, createTodo(text)]);
  };
  const handleToggleTodo = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {
      ...todo,
      completed: !todo.completed
    } : todo));
  };
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleEditTodo = (id, newText) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {
      ...todo,
      text: newText
    } : todo));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-3xl font-bold text-center mb-8", children: "Todo App" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-3xl font-bold text-center mb-8", children: "A simple todo application built with Remix" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TodoForm, { onAdd: handleAddTodo }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TodoList, { todos, onToggle: handleToggleTodo, onDelete: handleDeleteTodo, onEdit: handleEditTodo }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s4(Index, "ZATHeV9x55jFrDOww2hwcxQ3V1U=");
_c5 = Index;
var _c5;
$RefreshReg$(_c5, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-JNSOTT7I.js.map
