const CHUNK_PUBLIC_PATH = "server/app/icon/route.js";
const runtime = require("../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_next_3d6aa2._.js");
runtime.loadChunk("server/chunks/[root of the server]__3dab8a._.js");
runtime.loadChunk("server/chunks/[externals]_next_dist_compiled_@vercel_og_index_node_6b79e3.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/src/app/icon--route-entry.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
