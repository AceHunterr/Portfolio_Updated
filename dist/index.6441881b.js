// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iOgpa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c024c8276441881b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5wnyu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
var _typedJs = require("typed.js");
var _typedJsDefault = parcelHelpers.interopDefault(_typedJs);
var _imagesloaded = require("imagesloaded");
var _imagesloadedDefault = parcelHelpers.interopDefault(_imagesloaded);
var _glightbox = require("glightbox");
var _glightboxDefault = parcelHelpers.interopDefault(_glightbox);
var _isotopeLayout = require("isotope-layout");
var _isotopeLayoutDefault = parcelHelpers.interopDefault(_isotopeLayout);
(function() {
    "use strict";
    // const lenis = new Lenis()
    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })
    // lenis.on('scroll', ScrollTrigger.update)
    // gsap.ticker.add((time)=>{
    //   lenis.raf(time * 1000)
    // })
    // gsap.ticker.lagSmoothing(0)
    /**
   * Header toggle
   */ const headerToggleBtn = document.querySelector(".header-toggle");
    function headerToggle() {
        document.querySelector("#header").classList.toggle("header-show");
        headerToggleBtn.classList.toggle("bi-list");
        headerToggleBtn.classList.toggle("bi-x");
    }
    headerToggleBtn.addEventListener("click", headerToggle);
    /**
   * Hide mobile nav on same-page/hash links
   */ document.querySelectorAll("#navmenu a").forEach((navmenu)=>{
        navmenu.addEventListener("click", ()=>{
            if (document.querySelector(".header-show")) headerToggle();
        });
    });
    /**
   * Toggle mobile nav dropdowns
   */ document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu)=>{
        navmenu.addEventListener("click", function(e) {
            e.preventDefault();
            this.parentNode.classList.toggle("active");
            this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
            e.stopImmediatePropagation();
        });
    });
    /**
   * Preloader
   */ const preloader = document.querySelector("#preloader");
    if (preloader) window.addEventListener("load", ()=>{
        preloader.remove();
    });
    /**
   * Scroll top button
   */ let scrollTop = document.querySelector(".scroll-top");
    function toggleScrollTop() {
        if (scrollTop) window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    }
    scrollTop.addEventListener("click", (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
    /**
   * Animation on scroll function and init
   */ function aosInit() {
        (0, _aosDefault.default).init({
            duration: 600,
            easing: "ease-in-out",
            mirror: true
        });
        // Detect scroll direction and toggle classes accordingly
        let lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) // Scrolling down
            document.querySelectorAll(".aos-element").forEach(function(el) {
                el.classList.add("aos-animate-scroll-down");
                el.classList.remove("aos-animate-scroll-up");
            });
            else // Scrolling up
            document.querySelectorAll(".aos-element").forEach(function(el) {
                el.classList.remove("aos-animate-scroll-down");
                el.classList.add("aos-animate-scroll-up");
            });
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
    }
    window.addEventListener("load", aosInit);
    // function aosInit() {
    //   AOS.init({
    //     duration: 600,
    //     easing: 'ease-in-out',
    //     once: true,
    //     mirror: true
    //   });
    // }
    // window.addEventListener('load', aosInit);
    /**
   * Init typed.js
   */ const selectTyped = document.querySelector(".typed");
    if (selectTyped) {
        let typed_strings = selectTyped.getAttribute("data-typed-items");
        typed_strings = typed_strings.split(",");
        new (0, _typedJsDefault.default)(".typed", {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    /**
   * Initiate Pure Counter
   */ // new PureCounter();
    /**
   * Animate the skills items on reveal
   */ let skillsAnimation = document.querySelectorAll(".skills-animation");
    skillsAnimation.forEach((item)=>{
        new Waypoint({
            element: item,
            offset: "80%",
            handler: function(direction) {
                let progress = item.querySelectorAll(".progress .progress-bar");
                progress.forEach((el)=>{
                    el.style.width = el.getAttribute("aria-valuenow") + "%";
                });
            }
        });
    });
    /**
   * Initiate glightbox
   */ const glightbox = (0, _glightboxDefault.default)({
        selector: ".glightbox"
    });
    /**
   * Init isotope layout and filters
   */ document.querySelectorAll(".isotope-layout").forEach(function(isotopeItem) {
        let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
        let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
        let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";
        let initIsotope;
        (0, _imagesloadedDefault.default)(isotopeItem.querySelector(".isotope-container"), function() {
            initIsotope = new (0, _isotopeLayoutDefault.default)(isotopeItem.querySelector(".isotope-container"), {
                itemSelector: ".isotope-item",
                layoutMode: layout,
                filter: filter,
                sortBy: sort
            });
        });
        isotopeItem.querySelectorAll(".isotope-filters li").forEach(function(filters) {
            filters.addEventListener("click", function() {
                isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
                this.classList.add("filter-active");
                initIsotope.arrange({
                    filter: this.getAttribute("data-filter")
                });
                if (typeof aosInit === "function") aosInit();
            }, false);
        });
    });
    /**
   * Init swiper sliders
   */ function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
            let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
            if (swiperElement.classList.contains("swiper-tab")) initSwiperWithCustomPagination(swiperElement, config);
            else new Swiper(swiperElement, config);
        });
    }
    window.addEventListener("load", initSwiper);
    /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */ window.addEventListener("load", function(e) {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) setTimeout(()=>{
                let section = document.querySelector(window.location.hash);
                let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                window.scrollTo({
                    top: section.offsetTop - parseInt(scrollMarginTop),
                    behavior: "smooth"
                });
            }, 100);
        }
    });
    /**
   * Navmenu Scrollspy
   */ let navmenulinks = document.querySelectorAll(".navmenu a");
    function navmenuScrollspy() {
        navmenulinks.forEach((navmenulink)=>{
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                document.querySelectorAll(".navmenu a.active").forEach((link)=>link.classList.remove("active"));
                navmenulink.classList.add("active");
            } else navmenulink.classList.remove("active");
        });
    }
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);
})();

},{"aos":"eRzTM","typed.js":"6M0L2","imagesloaded":"aYzyZ","glightbox":"kBGcU","isotope-layout":"aHntc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRzTM":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
            }, O = function() {
                w = (0, h.default)(), j();
            }, M = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                });
            }, S = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
            }, _ = function(e) {
                x = i(x, e), w = (0, h.default)();
                var t = document.all && !window.atob;
                return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                    "complete",
                    "interactive"
                ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(!0);
                }) : document.addEventListener(x.startEvent, function() {
                    j(!0);
                }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, x.once);
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
            };
            e.exports = {
                init: _,
                refresh: j,
                refreshHard: O
            };
        },
        function(e, t) {},
        ,
        ,
        ,
        ,
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b, o = v;
                        return b = v = void 0, k = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return k = e, h = setTimeout(f, t), M ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w, o = e - k, i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w, o = e - k;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(), n = c(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), o(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e, t, o) {
                    var r = !0, a = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: a
                    });
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                }
                function a(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return f;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                }
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                    return h.Date.now();
                };
                e.exports = o;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b, o = v;
                        return b = v = void 0, O = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return O = e, h = setTimeout(f, t), M ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w, o = e - O, i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function s(e) {
                        var n = e - w, o = e - O;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = j();
                        return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(), n = s(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), i(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                }
                function r(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return s;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                    return g.Date.now();
                };
                e.exports = n;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            "use strict";
            function n(e) {
                var t = void 0, o = void 0, i = void 0;
                for(t = 0; t < e.length; t += 1){
                    if (o = e[t], o.dataset && o.dataset.aos) return !0;
                    if (i = o.children && n(o.children)) return !0;
                }
                return !1;
            }
            function o() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function i() {
                return !!o();
            }
            function r(e, t) {
                var n = window.document, i = o(), r = new i(a);
                u = t, r.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                });
            }
            function a(e) {
                e && e.forEach(function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                    if (n(i)) return u();
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function() {};
            t.default = {
                isSupported: i,
                ready: r
            };
        },
        function(e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                function e() {
                    n(this, e);
                }
                return i(e, [
                    {
                        key: "phone",
                        value: function() {
                            var e = o();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "mobile",
                        value: function() {
                            var e = o();
                            return !(!u.test(e) && !c.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }
                ]), e;
            }();
            t.default = new s;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
            }, o = function(e, t) {
                var o = window.pageYOffset, i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t);
                });
            };
            t.default = o;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(12), r = o(i), a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                }), e;
            };
            t.default = a;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(13), r = o(i), a = function(e, t) {
                var n = 0, o = 0, i = window.innerHeight, a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
                switch(a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement){
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i;
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
            };
            t.default = a;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                };
            };
            t.default = n;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    };
                });
            };
            t.default = n;
        }
    ]);
});

},{}],"6M0L2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>i);
function t() {
    return t = Object.assign ? Object.assign.bind() : function(t) {
        for(var s = 1; s < arguments.length; s++){
            var e = arguments[s];
            for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t;
    }, t.apply(this, arguments);
}
var s = {
    strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!"
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: Infinity,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function(t) {},
    onComplete: function(t) {},
    preStringTyped: function(t, s) {},
    onStringTyped: function(t, s) {},
    onLastStringBackspaced: function(t) {},
    onTypingPaused: function(t, s) {},
    onTypingResumed: function(t, s) {},
    onReset: function(t) {},
    onStop: function(t, s) {},
    onStart: function(t, s) {},
    onDestroy: function(t) {}
}, e = new /*#__PURE__*/ (function() {
    function e() {}
    var n = e.prototype;
    return n.load = function(e, n, i) {
        if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = t({}, s, n), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(t) {
            return t.trim();
        }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
            e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
            var r = Array.prototype.slice.apply(e.stringsElement.children), o = r.length;
            if (o) for(var a = 0; a < o; a += 1)e.strings.push(r[a].innerHTML.trim());
        }
        for(var u in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings)e.sequence[u] = u;
        e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
        }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e));
    }, n.getCurrentElContent = function(t) {
        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
    }, n.appendCursorAnimationCss = function(t) {
        var s = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e);
        }
    }, n.appendFadeOutAnimationCss = function(t) {
        var s = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e);
        }
    }, e;
}()), n = new /*#__PURE__*/ (function() {
    function t() {}
    var s = t.prototype;
    return s.typeHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if ("<" === n || "&" === n) {
            var i;
            for(i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length););
            s++;
        }
        return s;
    }, s.backSpaceHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if (">" === n || ";" === n) {
            var i;
            for(i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0););
            s--;
        }
        return s;
    }, t;
}()), i = /*#__PURE__*/ function() {
    function t(t, s) {
        e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return s.toggle = function() {
        this.pause.status ? this.start() : this.stop();
    }, s.stop = function() {
        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
    }, s.start = function() {
        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
    }, s.destroy = function() {
        this.reset(!1), this.options.onDestroy(this);
    }, s.reset = function(t) {
        void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
    }, s.begin = function() {
        var t = this;
        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
            0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
        }, this.startDelay);
    }, s.typewrite = function(t, s) {
        var e = this;
        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed), r = 1;
        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
            s = n.typeHtmlChars(t, s, e);
            var i = 0, o = t.substring(s);
            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                a += (o = /\d+/.exec(o)[0]).length, i = parseInt(o), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), t = t.substring(0, s) + t.substring(s + a), e.toggleBlinking(!0);
            }
            if ("`" === o.charAt(0)) {
                for(; "`" !== t.substring(s + r).charAt(0) && (r++, !(s + r > t.length)););
                var u = t.substring(0, s), p = t.substring(u.length + 1, s + r), c = t.substring(s + r + 1);
                t = u + p + c, r--;
            }
            e.timeout = setTimeout(function() {
                e.toggleBlinking(!1), s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r), e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e));
            }, i);
        }, i) : this.setPauseStatus(t, s, !0);
    }, s.keepTyping = function(t, s, e) {
        0 === s && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
        var n = t.substring(0, s += e);
        this.replaceText(n), this.typewrite(t, s);
    }, s.doneTyping = function(t, s) {
        var e = this;
        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
            e.backspace(t, s);
        }, this.backDelay));
    }, s.backspace = function(t, s) {
        var e = this;
        if (!0 !== this.pause.status) {
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var i = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function() {
                s = n.backSpaceHtmlChars(t, s, e);
                var i = t.substring(0, s);
                if (e.replaceText(i), e.smartBackspace) {
                    var r = e.strings[e.arrayPos + 1];
                    e.stopNum = r && i === r.substring(0, s) ? s : 0;
                }
                s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
            }, i);
        } else this.setPauseStatus(t, s, !1);
    }, s.complete = function() {
        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
    }, s.setPauseStatus = function(t, s, e) {
        this.pause.typewrite = e, this.pause.curString = t, this.pause.curStrPos = s;
    }, s.toggleBlinking = function(t) {
        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
    }, s.humanizer = function(t) {
        return Math.round(Math.random() * t / 2) + t;
    }, s.shuffleStringsIfNeeded = function() {
        this.shuffle && (this.sequence = this.sequence.sort(function() {
            return Math.random() - .5;
        }));
    }, s.initFadeOut = function() {
        var t = this;
        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
        }, this.fadeOutDelay);
    }, s.replaceText = function(t) {
        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
    }, s.bindFocusEvents = function() {
        var t = this;
        this.isInput && (this.el.addEventListener("focus", function(s) {
            t.stop();
        }), this.el.addEventListener("blur", function(s) {
            t.el.value && 0 !== t.el.value.length || t.start();
        }));
    }, s.insertCursor = function() {
        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
    }, t;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aYzyZ":[function(require,module,exports) {
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ (function(window1, factory) {
    // universal module definition
    if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("493897767f7120e"));
    else // browser global
    window1.imagesLoaded = factory(window1, window1.EvEmitter);
})(typeof window !== "undefined" ? window : this, function factory(window1, EvEmitter) {
    let $ = window1.jQuery;
    let console = window1.console;
    // -------------------------- helpers -------------------------- //
    // turn element or nodeList into an array
    function makeArray(obj) {
        // use object if already an array
        if (Array.isArray(obj)) return obj;
        let isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        // convert nodeList to array
        if (isArrayLike) return [
            ...obj
        ];
        // array of single index
        return [
            obj
        ];
    }
    // -------------------------- imagesLoaded -------------------------- //
    /**
 * @param {[Array, Element, NodeList, String]} elem
 * @param {[Object, Function]} options - if function, use as callback
 * @param {Function} onAlways - callback function
 * @returns {ImagesLoaded}
 */ function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) return new ImagesLoaded(elem, options, onAlways);
        // use elem as selector string
        let queryElem = elem;
        if (typeof elem == "string") queryElem = document.querySelectorAll(elem);
        // bail if bad element
        if (!queryElem) {
            console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = {};
        // shift arguments if no options set
        if (typeof options == "function") onAlways = options;
        else Object.assign(this.options, options);
        if (onAlways) this.on("always", onAlways);
        this.getImages();
        // add jQuery Deferred object
        if ($) this.jqDeferred = new $.Deferred();
        // HACK check async to allow time to bind listeners
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        // filter & find items if we have an item selector
        this.elements.forEach(this.addElementImages, this);
    };
    const elementNodeTypes = [
        1,
        9,
        11
    ];
    /**
 * @param {Node} elem
 */ ImagesLoaded.prototype.addElementImages = function(elem) {
        // filter siblings
        if (elem.nodeName === "IMG") this.addImage(elem);
        // get background image on element
        if (this.options.background === true) this.addElementBackgroundImages(elem);
        // find children
        // no non-element nodes, #143
        let { nodeType } = elem;
        if (!nodeType || !elementNodeTypes.includes(nodeType)) return;
        let childImgs = elem.querySelectorAll("img");
        // concat childElems to filterFound array
        for (let img of childImgs)this.addImage(img);
        // get child background images
        if (typeof this.options.background == "string") {
            let children = elem.querySelectorAll(this.options.background);
            for (let child of children)this.addElementBackgroundImages(child);
        }
    };
    const reURL = /url\((['"])?(.*?)\1\)/gi;
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        let style = getComputedStyle(elem);
        // Firefox returns null if in a hidden iframe https://bugzil.la/548397
        if (!style) return;
        // get url inside url("...")
        let matches = reURL.exec(style.backgroundImage);
        while(matches !== null){
            let url = matches && matches[2];
            if (url) this.addBackground(url, elem);
            matches = reURL.exec(style.backgroundImage);
        }
    };
    /**
 * @param {Image} img
 */ ImagesLoaded.prototype.addImage = function(img) {
        let loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        let background = new Background(url, elem);
        this.images.push(background);
    };
    ImagesLoaded.prototype.check = function() {
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        // complete if no images
        if (!this.images.length) {
            this.complete();
            return;
        }
        /* eslint-disable-next-line func-style */ let onProgress = (image, elem, message)=>{
            // HACK - Chrome triggers event before object properties have changed. #83
            setTimeout(()=>{
                this.progress(image, elem, message);
            });
        };
        this.images.forEach(function(loadingImage) {
            loadingImage.once("progress", onProgress);
            loadingImage.check();
        });
    };
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        // progress event
        this.emitEvent("progress", [
            this,
            image,
            elem
        ]);
        if (this.jqDeferred && this.jqDeferred.notify) this.jqDeferred.notify(this, image);
        // check if completed
        if (this.progressedCount === this.images.length) this.complete();
        if (this.options.debug && console) console.log(`progress: ${message}`, image, elem);
    };
    ImagesLoaded.prototype.complete = function() {
        let eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        this.emitEvent(eventName, [
            this
        ]);
        this.emitEvent("always", [
            this
        ]);
        if (this.jqDeferred) {
            let jqMethod = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[jqMethod](this);
        }
    };
    // --------------------------  -------------------------- //
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        let isComplete = this.getIsImageComplete();
        if (isComplete) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
        }
        // If none of the checks above matched, simulate loading on detached element.
        this.proxyImage = new Image();
        // add crossOrigin attribute. #204
        if (this.img.crossOrigin) this.proxyImage.crossOrigin = this.img.crossOrigin;
        this.proxyImage.addEventListener("load", this);
        this.proxyImage.addEventListener("error", this);
        // bind to image as well for Firefox. #191
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.proxyImage.src = this.img.currentSrc || this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function() {
        // check for non-zero, non-undefined naturalWidth
        // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
        return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        let { parentNode } = this.img;
        // emit progress with parent <picture> or self <img>
        let elem = parentNode.nodeName === "PICTURE" ? parentNode : this.img;
        this.emitEvent("progress", [
            this,
            elem,
            message
        ]);
    };
    // ----- events ----- //
    // trigger specified handler for event type
    LoadingImage.prototype.handleEvent = function(event) {
        let method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    LoadingImage.prototype.onload = function() {
        this.confirm(true, "onload");
        this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, "onerror");
        this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this);
        this.proxyImage.removeEventListener("error", this);
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
    };
    // -------------------------- Background -------------------------- //
    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    // inherit LoadingImage prototype
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.img.src = this.url;
        // check if image is already complete
        let isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            this.unbindEvents();
        }
    };
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
    };
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent("progress", [
            this,
            this.element,
            message
        ]);
    };
    // -------------------------- jQuery -------------------------- //
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window1.jQuery;
        if (!jQuery) return;
        // set local variable
        $ = jQuery;
        // $().imagesLoaded()
        $.fn.imagesLoaded = function(options, onAlways) {
            let instance = new ImagesLoaded(this, options, onAlways);
            return instance.jqDeferred.promise($(this));
        };
    };
    // try making plugin
    ImagesLoaded.makeJQueryPlugin();
    // --------------------------  -------------------------- //
    return ImagesLoaded;
});

},{"493897767f7120e":"7rCHo"}],"kBGcU":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var n = i.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == typeof t ? t : t + "";
    }
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function n(t, i) {
        for(var n = 0; n < i.length; n++){
            var s = i[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, e(s.key), s);
        }
    }
    function s(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    var l = Date.now();
    function o() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = o(!0, e[n], i[n]) : e[n] = i[n]);
        }; i < n; i++){
            var l = arguments[i];
            s(l);
        }
        return e;
    }
    function r(e, t) {
        if ((E(e) || e === window || e === document) && (e = [
            e
        ]), L(e) || I(e) || (e = [
            e
        ]), 0 != M(e)) {
            if (L(e) && !I(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (I(e)) {
                for(var s in e)if (P(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[l] = e[l] || [], s = {
            all: n,
            evt: null,
            found: null
        };
        return t && i && M(n) > 0 && r(n, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1;
        }), s;
    }
    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement, n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, o = t.once, h = void 0 !== o && o, d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];
        function v(e) {
            C(n) && n.call(u, e, this), h && v.destroy();
        }
        return k(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            r(g, function(t) {
                var i = a(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
            });
        }, r(g, function(t) {
            var i = a(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }));
        }), v;
    }
    function d(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function c(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function u(e, t) {
        return e.classList.contains(t);
    }
    function g(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return C(i) && i(), !1;
        var n = b(), s = t.split(" ");
        r(s, function(t) {
            d(e, "g" + t);
        }), h(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                r(s, function(e) {
                    c(t, "g" + e);
                }), C(i) && i();
            }
        });
    }
    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function p(e) {
        e.style.display = "block";
    }
    function m(e) {
        e.style.display = "none";
    }
    function y(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function x() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function b() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function S(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function() {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(l);
            }, n));
        }
    }
    function w(e, t, i) {
        if (O(e)) console.error("Inject assets error");
        else if (C(t) && (i = t, t = !1), k(t) && t in window) C(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (C(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (C(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (C(i)) {
                    if (k(t)) return S(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (C(i)) {
                        if (k(t)) return S(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                }, document.body.appendChild(r);
            }
        }
    }
    function T() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function C(e) {
        return "function" == typeof e;
    }
    function k(e) {
        return "string" == typeof e;
    }
    function E(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function A(e) {
        return Array.isArray(e);
    }
    function L(e) {
        return e && e.length && isFinite(e.length);
    }
    function I(e) {
        return "object" === t(e) && null != e && !C(e) && !A(e);
    }
    function O(e) {
        return null == e;
    }
    function P(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function M(e) {
        if (I(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)P(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function z(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function X() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        r(t, function(e) {
            i.push(e.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(Math, i.map(function(e) {
            return parseInt(e);
        })), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter(function(e) {
            return e >= parseInt(s);
        }), o = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(o, '"]'));
    }
    function Y(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = h("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = X();
                        return void (r && (r.focus(), d(r, "focused")));
                    }
                    var a = X(s.getAttribute("data-taborder"));
                    c(s, "focused"), a && (a.focus(), d(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    var q = s(function e(t, n) {
        var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (i(this, e), this.img = t, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
        this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
            return s.dragStart(e);
        }, !1), this.img.addEventListener("mouseup", function(e) {
            return s.dragEnd(e);
        }, !1), this.img.addEventListener("mousemove", function(e) {
            return s.drag(e);
        }, !1), this.img.addEventListener("click", function(e) {
            return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
        }, !1), this.img.setZoomEvents = !0;
    }, [
        {
            key: "zoomIn",
            value: function() {
                var e = this.widowWidth();
                if (!(this.zoomedIn || e <= 768)) {
                    var t = this.img;
                    if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                        var i = e / 2 - t.naturalWidth / 2;
                        this.setTranslate(this.img.parentNode, i, 0);
                    }
                    this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                }
            }
        },
        {
            key: "zoomOut",
            value: function() {
                this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
            }
        },
        {
            key: "dragStart",
            value: function(e) {
                e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
            }
        },
        {
            key: "dragEnd",
            value: function(e) {
                var t = this;
                e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                    t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                }, 100);
            }
        },
        {
            key: "drag",
            value: function(e) {
                this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
            }
        },
        {
            key: "onMove",
            value: function(e) {
                if (this.zoomedIn) {
                    var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                    this.setTranslate(this.img, t, i);
                }
            }
        },
        {
            key: "setTranslate",
            value: function(e, t, i) {
                e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
            }
        },
        {
            key: "widowWidth",
            value: function() {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            }
        }
    ]), N = s(function e() {
        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e);
        var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
        this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
            return t.dragStart(e);
        }, !1), this.el.addEventListener("mouseup", function(e) {
            return t.dragEnd(e);
        }, !1), this.el.addEventListener("mousemove", function(e) {
            return t.drag(e);
        }, !1);
    }, [
        {
            key: "dragStart",
            value: function(e) {
                if (this.slide.classList.contains("zoomed")) this.active = !1;
                else {
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var t = e.target.nodeName.toLowerCase();
                    e.target.classList.contains("nodrag") || g(e.target, ".nodrag") || -1 !== [
                        "input",
                        "select",
                        "textarea",
                        "button",
                        "a"
                    ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && g(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = g(e.target, ".ginner-container")));
                }
            }
        },
        {
            key: "dragEnd",
            value: function(e) {
                var t = this;
                e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                    t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                }, 100);
            }
        },
        {
            key: "drag",
            value: function(e) {
                if (this.active) {
                    e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                    var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                    if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                        this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                        var n = this.shouldChange();
                        if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                    }
                    if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                        this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                        var s = this.shouldClose();
                        return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                    }
                }
            }
        },
        {
            key: "shouldChange",
            value: function() {
                var e = !1;
                if (Math.abs(this.currentX) >= this.toleranceX) {
                    var t = this.currentX > 0 ? "right" : "left";
                    ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                }
                return e;
            }
        },
        {
            key: "shouldClose",
            value: function() {
                var e = !1;
                return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
            }
        },
        {
            key: "setTranslate",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
            }
        }
    ]);
    function D(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            C(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", O(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function _(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"), a = this.getAllPlayers();
        d(l, "gvideo-container"), r.insertBefore(y('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var h = e.querySelector(".gvideo-wrapper");
        w(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, w(this.settings.plyr.js, "Plyr", function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = y(l += "</video>");
            }
            var r = g || y('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            d(h, "".concat(u, "-video gvideo")), h.appendChild(r), h.setAttribute("data-id", o), h.setAttribute("data-index", i);
            var v = P(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", function(e) {
                a[o] = e.detail.plyr, C(n) && n();
            }), S(function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e);
            }), f.on("enterfullscreen", W), f.on("exitfullscreen", W);
        });
    }
    function W(e) {
        var t = g(e.target, ".gslide-media");
        "enterfullscreen" === e.type && d(t, "fullscreen"), "exitfullscreen" === e.type && c(t, "fullscreen");
    }
    function B(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"), r = !(!P(t, "href") || !t.href) && t.href.split("#").pop().trim(), a = !(!P(t, "content") || !t.content) && t.content;
        if (a && (k(a) && (s = y('<div class="ginlined-content">'.concat(a, "</div>"))), E(a))) {
            "none" == a.style.display && (a.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(a), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, d(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = h("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), C(n) && n();
    }
    function H(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                l.onload = null, d(l, "node-ready"), C(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t.href,
            callback: n
        });
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l);
    }
    var j = s(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e), this.defaults = {
            href: "",
            sizes: "",
            srcset: "",
            title: "",
            type: "",
            videoProvider: "",
            description: "",
            alt: "",
            descPosition: "bottom",
            effect: "",
            width: "",
            height: "",
            content: !1,
            zoomable: !0,
            draggable: !0
        }, I(t) && (this.defaults = o(this.defaults, t));
    }, [
        {
            key: "sourceType",
            value: function(e) {
                var t = e;
                return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external";
            }
        },
        {
            key: "parseConfig",
            value: function(e, t) {
                var i = this, n = o({
                    descPosition: t.descPosition
                }, this.defaults);
                if (I(e) && !E(e)) {
                    P(e, "type") || (P(e, "content") && e.content ? e.type = "inline" : P(e, "href") && (e.type = this.sourceType(e.href)));
                    var s = o(n, e);
                    return this.setSize(s, t), s;
                }
                var l = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                if ("a" === h && (l = e.href), "img" === h && (l = e.src, n.alt = e.alt), n.href = l, r(n, function(s, l) {
                    P(t, l) && "width" !== l && (n[l] = t[l]);
                    var o = e.dataset[l];
                    O(o) || (n[l] = i.sanitizeValue(o));
                }), n.content && (n.type = "inline"), !n.type && l && (n.type = this.sourceType(l)), O(a)) {
                    if (!n.title && "a" == h) {
                        var d = e.title;
                        O(d) || "" === d || (n.title = d);
                    }
                    if (!n.title && "img" == h) {
                        var c = e.alt;
                        O(c) || "" === c || (n.title = c);
                    }
                } else {
                    var u = [];
                    r(n, function(e, t) {
                        u.push(";\\s?" + t);
                    }), u = u.join("\\s?:|"), "" !== a.trim() && r(n, function(e, t) {
                        var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                        if (o && o.length && o[1]) {
                            var r = o[1].trim().replace(/;\s*$/, "");
                            n[t] = i.sanitizeValue(r);
                        }
                    });
                }
                if (n.description && "." === n.description.substring(0, 1)) {
                    var g;
                    try {
                        g = document.querySelector(n.description).innerHTML;
                    } catch (e) {
                        if (!(e instanceof DOMException)) throw e;
                    }
                    g && (n.description = g);
                }
                if (!n.description) {
                    var v = e.querySelector(".glightbox-desc");
                    v && (n.description = v.innerHTML);
                }
                return this.setSize(n, t, e), this.slideConfig = n, n;
            }
        },
        {
            key: "setSize",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                return e.width = P(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = P(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
            }
        },
        {
            key: "checkSize",
            value: function(e) {
                return z(e) ? "".concat(e, "px") : e;
            }
        },
        {
            key: "sanitizeValue",
            value: function(e) {
                return "true" !== e && "false" !== e ? e : "true" === e;
            }
        }
    ]), V = s(function e(t, n, s) {
        i(this, e), this.element = t, this.instance = n, this.index = s;
    }, [
        {
            key: "setContent",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (u(t, "loaded")) return !1;
                var n = this.instance.settings, s = this.slideConfig, l = T();
                C(n.beforeSlideLoad) && n.beforeSlideLoad({
                    index: this.index,
                    slide: t,
                    player: !1
                });
                var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), h = t.querySelector(".gslide-title"), c = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                if (C(n.afterSlideLoad) && (v = function() {
                    C(i) && i(), n.afterSlideLoad({
                        index: e.index,
                        slide: t,
                        player: e.instance.getSlidePlayerInstance(e.index)
                    });
                }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (h && "" !== s.title ? (h.id = f, h.innerHTML = s.title) : h.parentNode.removeChild(h), c && "" !== s.description ? (c.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), c.innerHTML = s.smallDescription, this.descriptionEvents(c, s)) : c.innerHTML = s.description) : c.parentNode.removeChild(c), d(a.parentNode, "desc-".concat(r)), d(g.parentNode, "description-".concat(r))), d(a, "gslide-".concat(o)), d(t, "loaded"), "video" !== o) {
                    if ("external" !== o) return "inline" === o ? (B.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]), void (s.draggable && new N({
                        dragEl: t.querySelector(".gslide-inline"),
                        toleranceX: n.dragToleranceX,
                        toleranceY: n.dragToleranceY,
                        slide: t,
                        instance: this.instance
                    }))) : void ("image" !== o ? C(v) && v() : D(t, s, this.index, function() {
                        var i = t.querySelector("img");
                        s.draggable && new N({
                            dragEl: i,
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: e.instance
                        }), s.zoomable && i.naturalWidth > i.offsetWidth && (d(i, "zoomable"), new q(i, t, function() {
                            e.instance.resize();
                        })), C(v) && v();
                    }));
                    H.apply(this, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                } else _.apply(this.instance, [
                    t,
                    s,
                    this.index,
                    v
                ]);
            }
        },
        {
            key: "slideShortDesc",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                n.innerHTML = e;
                var s = n.innerText, l = i;
                if ((e = s.trim()).length <= t) return e;
                var o = e.substr(0, t - 1);
                return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
            }
        },
        {
            key: "descriptionEvents",
            value: function(e, t) {
                var i = this, n = e.querySelector(".desc-more");
                if (!n) return !1;
                h("click", {
                    onElement: n,
                    withCallback: function(e, n) {
                        e.preventDefault();
                        var s = document.body, l = g(n, ".gslide-desc");
                        if (!l) return !1;
                        l.innerHTML = t.description, d(s, "gdesc-open");
                        var o = h("click", {
                            onElement: [
                                s,
                                g(l, ".gslide-description")
                            ],
                            withCallback: function(e, n) {
                                "a" !== e.target.nodeName.toLowerCase() && (c(s, "gdesc-open"), d(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                    c(s, "gdesc-closed");
                                }, 400), o.destroy());
                            }
                        });
                    }
                });
            }
        },
        {
            key: "create",
            value: function() {
                return y(this.instance.settings.slideHTML);
            }
        },
        {
            key: "getConfig",
            value: function() {
                E(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                var e = new j(this.instance.settings.slideExtraAttributes);
                return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
            }
        }
    ]);
    function F(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function R(e, t) {
        var i = function(e, t) {
            var i = F(e) * F(t);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y;
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n);
        }(e, t);
        return function(e, t) {
            return e.x * t.y - t.x * e.y;
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI;
    }
    var G = s(function e(t) {
        i(this, e), this.handlers = [], this.el = t;
    }, [
        {
            key: "add",
            value: function(e) {
                this.handlers.push(e);
            }
        },
        {
            key: "del",
            value: function(e) {
                e || (this.handlers = []);
                for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
            }
        },
        {
            key: "dispatch",
            value: function() {
                for(var e = 0, t = this.handlers.length; e < t; e++){
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments);
                }
            }
        }
    ]);
    function Z(e, t) {
        var i = new G(e);
        return i.add(t), i;
    }
    var U = s(function e(t, n) {
        i(this, e), this.element = "string" == typeof t ? document.querySelector(t) : t, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
            x: null,
            y: null
        }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
        var s = function() {};
        this.rotate = Z(this.element, n.rotate || s), this.touchStart = Z(this.element, n.touchStart || s), this.multipointStart = Z(this.element, n.multipointStart || s), this.multipointEnd = Z(this.element, n.multipointEnd || s), this.pinch = Z(this.element, n.pinch || s), this.swipe = Z(this.element, n.swipe || s), this.tap = Z(this.element, n.tap || s), this.doubleTap = Z(this.element, n.doubleTap || s), this.longTap = Z(this.element, n.longTap || s), this.singleTap = Z(this.element, n.singleTap || s), this.pressMove = Z(this.element, n.pressMove || s), this.twoFingerPressMove = Z(this.element, n.twoFingerPressMove || s), this.touchMove = Z(this.element, n.touchMove || s), this.touchEnd = Z(this.element, n.touchEnd || s), this.touchCancel = Z(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
            x: null,
            y: null
        };
    }, [
        {
            key: "start",
            value: function(e) {
                if (e.touches) {
                    if (e.target && e.target.nodeName && [
                        "a",
                        "button",
                        "input"
                    ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                    else {
                        this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var t = this.preV;
                        if (e.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var i = {
                                x: e.touches[1].pageX - this.x1,
                                y: e.touches[1].pageY - this.y1
                            };
                            t.x = i.x, t.y = i.y, this.pinchStartLen = F(t), this.multipointStart.dispatch(e, this.element);
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                            this.longTap.dispatch(e, this.element), this._preventTap = !0;
                        }).bind(this), 750);
                    }
                }
            }
        },
        {
            key: "move",
            value: function(e) {
                if (e.touches) {
                    var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                            x: e.touches[1].pageX - n,
                            y: e.touches[1].pageY - s
                        };
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = F(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = R(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                            (a > 10 || h > 10) && (this._preventTap = !0);
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element);
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                }
            }
        },
        {
            key: "end",
            value: function(e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        t.swipe.dispatch(e, t.element);
                    }, 0)) : (this.tapTimeout = setTimeout(function() {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                    }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                        t.singleTap.dispatch(e, t.element);
                    }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                }
            }
        },
        {
            key: "cancelAll",
            value: function() {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
            }
        },
        {
            key: "cancel",
            value: function(e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element);
            }
        },
        {
            key: "_cancelLongTap",
            value: function() {
                clearTimeout(this.longTapTimeout);
            }
        },
        {
            key: "_cancelSingleTap",
            value: function() {
                clearTimeout(this.singleTapTimeout);
            }
        },
        {
            key: "_swipeDirection",
            value: function(e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
            }
        },
        {
            key: "on",
            value: function(e, t) {
                this[e] && this[e].add(t);
            }
        },
        {
            key: "off",
            value: function(e, t) {
                this[e] && this[e].del(t);
            }
        },
        {
            key: "destroy",
            value: function() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
            }
        }
    ]);
    function $(e) {
        var t = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = g(n, ".ginner-container"), l = e.querySelector(".gslide-description");
        i > 769 && (n = s), d(n, "greset"), f(n, "translate3d(0, 0, 0)"), h(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                c(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function J(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = x(), l = s.width, o = s.height, r = !1, a = null, h = null, v = null, p = !1, m = 1, y = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new U(X, {
            touchStart: function(t) {
                if (r = !0, (u(t.targetTouches[0].target, "ginner-container") || g(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), g(t.targetTouches[0].target, ".gslide-inline") && !u(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, h = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), v = null, u(h, "gslide-image") && (v = h.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (h = a.querySelector(".ginner-container")), c(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                    t.preventDefault();
                }
            },
            touchMove: function(s) {
                if (r && (P = s.targetTouches[0], !b && !S)) {
                    if (n && n.offsetHeight > o) {
                        var a = O.pageX - P.pageX;
                        if (Math.abs(a) <= 13) return !1;
                    }
                    p = !0;
                    var d, c = s.targetTouches[0].clientX, u = s.targetTouches[0].clientY, g = M - c, m = z - u;
                    if (Math.abs(g) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && v && (d = 1 - Math.abs(i) / o, Y.style.opacity = d, e.settings.touchFollowAxis && (E = 0)), I && (d = 1 - Math.abs(t) / l, h.style.opacity = d, e.settings.touchFollowAxis && (A = 0)), !v) return f(h, "translate3d(".concat(E, "%, 0, 0)"));
                    f(h, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && v)) return t < 29 && i < 25 ? (d(Y, "greset"), Y.style.opacity = 1, $(h)) : void 0;
                    e.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m = y || 1;
            },
            pinch: function(e) {
                if (!v || p) return !1;
                b = !0, v.scaleX = v.scaleY = m * e.zoom;
                var t = m * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void v.setAttribute("style", "");
                t > 4.5 && (t = 4.5), v.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), y = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    y && (n += " scale3d(".concat(y, ", ").concat(y, ", 1)")), f(v, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return $(h);
                            e.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return $(h);
                            e.prevSlide();
                        }
                    }
                }
            }
        });
        e.events.touch = q;
    }
    var K = T(), Q = null !== T() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, ee = document.getElementsByTagName("html")[0], te = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.12/plyr.css",
            js: "https://cdn.plyr.io/3.6.12/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, ie = s(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e), this.customOptions = t, this.settings = o(te, t), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
    }, [
        {
            key: "init",
            value: function() {
                var e = this, t = this.getSelector();
                t && (this.baseEvents = h("click", {
                    onElement: t,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.open(i);
                    }
                })), this.elements = this.getElements();
            }
        },
        {
            key: "open",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (0 === this.elements.length) return !1;
                this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                var i = z(t) ? t : this.settings.startAt;
                if (E(e)) {
                    var n = e.getAttribute("data-gallery");
                    n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), O(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                }
                z(i) || (i = 0), this.build(), v(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                if (l > 0) {
                    var o = document.createElement("style");
                    o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), d(s, "gscrollbar-fixer");
                }
                d(s, "glightbox-open"), d(ee, "glightbox-open"), K && (d(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")) : (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), C(this.settings.onOpen) && this.settings.onOpen(), Q && this.settings.touchNavigation && J(this), this.settings.keyboardNavigation && Y(this);
            }
        },
        {
            key: "openAt",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.open(null, e);
            }
        },
        {
            key: "showSlide",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                p(this.loader), this.index = parseInt(t);
                var n = this.slidesContainer.querySelector(".current");
                n && c(n, "current"), this.slideAnimateOut();
                var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                if (u(s, "loaded")) this.slideAnimateIn(s, i), m(this.loader);
                else {
                    p(this.loader);
                    var l = this.elements[t], o = {
                        index: this.index,
                        slide: s,
                        slideNode: s,
                        slideConfig: l.slideConfig,
                        slideIndex: this.index,
                        trigger: l.node,
                        player: null
                    };
                    this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                        m(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                    });
                }
                this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && u(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
            }
        },
        {
            key: "preloadSlide",
            value: function(e) {
                var t = this;
                if (e < 0 || e > this.elements.length - 1) return !1;
                if (O(this.elements[e])) return !1;
                var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                if (u(i, "loaded")) return !1;
                var n = this.elements[e], s = n.type, l = {
                    index: e,
                    slide: i,
                    slideNode: i,
                    slideConfig: n.slideConfig,
                    slideIndex: e,
                    trigger: n.node,
                    player: null
                };
                this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout(function() {
                    n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", l);
                    });
                }, 200) : n.instance.setContent(i, function() {
                    t.trigger("slide_after_load", l);
                });
            }
        },
        {
            key: "prevSlide",
            value: function() {
                this.goToSlide(this.index - 1);
            }
        },
        {
            key: "nextSlide",
            value: function() {
                this.goToSlide(this.index + 1);
            }
        },
        {
            key: "goToSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
            }
        },
        {
            key: "insertSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                t < 0 && (t = this.elements.length);
                var i = new V(e, this, t), n = i.getConfig(), s = o({}, n), l = i.create(), r = this.elements.length - 1;
                s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                var a = null, h = null;
                if (this.slidesContainer) {
                    if (t > r) this.slidesContainer.appendChild(l);
                    else {
                        var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                        this.slidesContainer.insertBefore(l, d);
                    }
                    (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                }
                this.trigger("slide_inserted", {
                    index: t,
                    slide: a,
                    slideNode: a,
                    slideConfig: n,
                    slideIndex: t,
                    trigger: null,
                    player: h
                }), C(this.settings.slideInserted) && this.settings.slideInserted({
                    index: t,
                    slide: a,
                    player: h
                });
            }
        },
        {
            key: "removeSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                if (e < 0 || e > this.elements.length - 1) return !1;
                var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), C(this.settings.slideRemoved) && this.settings.slideRemoved(e);
            }
        },
        {
            key: "slideAnimateIn",
            value: function(e, t) {
                var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide,
                    slideNode: this.prevActiveSlide,
                    slideIndex: this.prevActiveSlide,
                    slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                    trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                    player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                }, o = {
                    index: this.index,
                    slide: this.activeSlide,
                    slideNode: this.activeSlide,
                    slideConfig: this.elements[this.index].slideConfig,
                    slideIndex: this.index,
                    trigger: this.elements[this.index].node,
                    player: this.getSlidePlayerInstance(this.index)
                };
                if (n.offsetWidth > 0 && s && (m(s), s.style.display = ""), c(e, this.effectsClasses), t) v(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                    i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                        prev: l,
                        current: o
                    }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                        l,
                        o
                    ]);
                });
                else {
                    var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), v(e, a, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                }
                setTimeout(function() {
                    i.resize(e);
                }, 100), d(e, "current");
            }
        },
        {
            key: "slideAnimateOut",
            value: function() {
                if (!this.prevActiveSlide) return !1;
                var e = this.prevActiveSlide;
                c(e, this.effectsClasses), d(e, "prev");
                var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                this.slidePlayerPause(e), this.trigger("slide_before_change", {
                    prev: {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlideIndex,
                        slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    },
                    current: {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideIndex: this.index,
                        slideConfig: this.elements[this.index].slideConfig,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    }
                }), C(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                    {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    },
                    {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }
                ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), v(e, i, function() {
                    var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                    t.style.transform = "", i.style.transform = "", c(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), c(e, "prev");
                });
            }
        },
        {
            key: "getAllPlayers",
            value: function() {
                return this.videoPlayers;
            }
        },
        {
            key: "getSlidePlayerInstance",
            value: function(e) {
                var t = "gvideo" + e, i = this.getAllPlayers();
                return !(!P(i, t) || !i[t]) && i[t];
            }
        },
        {
            key: "stopSlideVideo",
            value: function(e) {
                if (E(e)) {
                    var t = e.querySelector(".gvideo-wrapper");
                    t && (e = t.getAttribute("data-index"));
                }
                console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                var i = this.getSlidePlayerInstance(e);
                i && i.playing && i.pause();
            }
        },
        {
            key: "slidePlayerPause",
            value: function(e) {
                if (E(e)) {
                    var t = e.querySelector(".gvideo-wrapper");
                    t && (e = t.getAttribute("data-index"));
                }
                var i = this.getSlidePlayerInstance(e);
                i && i.playing && i.pause();
            }
        },
        {
            key: "playSlideVideo",
            value: function(e) {
                if (E(e)) {
                    var t = e.querySelector(".gvideo-wrapper");
                    t && (e = t.getAttribute("data-index"));
                }
                console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                var i = this.getSlidePlayerInstance(e);
                i && !i.playing && i.play();
            }
        },
        {
            key: "slidePlayerPlay",
            value: function(e) {
                var t;
                if (!K || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                    if (E(e)) {
                        var i = e.querySelector(".gvideo-wrapper");
                        i && (e = i.getAttribute("data-index"));
                    }
                    var n = this.getSlidePlayerInstance(e);
                    n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus());
                }
            }
        },
        {
            key: "setElements",
            value: function(e) {
                var t = this;
                this.settings.elements = !1;
                var i = [];
                e && e.length && r(e, function(e, n) {
                    var s = new V(e, t, n), l = s.getConfig(), r = o({}, l);
                    r.slideConfig = l, r.instance = s, r.index = n, i.push(r);
                }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (r(this.elements, function() {
                    var e = y(t.settings.slideHTML);
                    t.slidesContainer.appendChild(e);
                }), this.showSlide(0, !0)));
            }
        },
        {
            key: "getElementIndex",
            value: function(e) {
                var t = !1;
                return r(this.elements, function(i, n) {
                    if (P(i, "node") && i.node == e) return t = n, !0;
                }), t;
            }
        },
        {
            key: "getElements",
            value: function() {
                var e = this, t = [];
                this.elements = this.elements ? this.elements : [], !O(this.settings.elements) && A(this.settings.elements) && this.settings.elements.length && r(this.settings.elements, function(i, n) {
                    var s = new V(i, e, n), l = s.getConfig(), r = o({}, l);
                    r.node = !1, r.index = n, r.instance = s, r.slideConfig = l, t.push(r);
                });
                var i = !1;
                return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (r(i, function(i, n) {
                    var s = new V(i, e, n), l = s.getConfig(), r = o({}, l);
                    r.node = i, r.index = n, r.instance = s, r.slideConfig = l, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                }), t) : t;
            }
        },
        {
            key: "getGalleryElements",
            value: function(e, t) {
                return e.filter(function(e) {
                    return e.gallery == t;
                });
            }
        },
        {
            key: "getSelector",
            value: function() {
                return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
            }
        },
        {
            key: "getActiveSlide",
            value: function() {
                return this.slidesContainer.querySelectorAll(".gslide")[this.index];
            }
        },
        {
            key: "getActiveSlideIndex",
            value: function() {
                return this.index;
            }
        },
        {
            key: "getAnimationClasses",
            value: function() {
                var e = [];
                for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                    var i = this.settings.cssEfects[t];
                    e.push("g".concat(i.in)), e.push("g".concat(i.out));
                }
                return e.join(" ");
            }
        },
        {
            key: "build",
            value: function() {
                var e = this;
                if (this.built) return !1;
                var t = document.body.childNodes, i = [];
                r(t, function(e) {
                    e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                });
                var n = P(this.settings.svg, "next") ? this.settings.svg.next : "", s = P(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = P(this.settings.svg, "close") ? this.settings.svg.close : "", o = this.settings.lightboxHTML;
                o = y(o = (o = (o = o.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(o);
                var a = document.getElementById("glightbox-body");
                this.modal = a;
                var c = a.querySelector(".gclose");
                this.prevButton = a.querySelector(".gprev"), this.nextButton = a.querySelector(".gnext"), this.overlay = a.querySelector(".goverlay"), this.loader = a.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, d(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && c && (this.events.close = h("click", {
                    onElement: c,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.close();
                    }
                })), c && !this.settings.closeButton && c.parentNode.removeChild(c), this.nextButton && (this.events.next = h("click", {
                    onElement: this.nextButton,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.nextSlide();
                    }
                })), this.prevButton && (this.events.prev = h("click", {
                    onElement: this.prevButton,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.prevSlide();
                    }
                })), this.settings.closeOnOutsideClick && (this.events.outClose = h("click", {
                    onElement: a,
                    withCallback: function(t, i) {
                        e.preventOutsideClick || u(document.body, "glightbox-mobile") || g(t.target, ".ginner-container") || g(t.target, ".gbtn") || u(t.target, "gnext") || u(t.target, "gprev") || e.close();
                    }
                })), r(this.elements, function(t, i) {
                    e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
                }), Q && d(document.body, "glightbox-touch"), this.events.resize = h("resize", {
                    onElement: window,
                    withCallback: function() {
                        e.resize();
                    }
                }), this.built = !0;
            }
        },
        {
            key: "resize",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((e = e || this.activeSlide) && !u(e, "zoomed")) {
                    var t = x(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                    if (l <= 768 ? d(document.body, "glightbox-mobile") : c(document.body, "glightbox-mobile"), i || n) {
                        var r = !1;
                        if (s && (u(s, "description-bottom") || u(s, "description-top")) && !u(s, "gabsolute") && (r = !0), n) {
                            if (l <= 768) n.querySelector("img");
                            else if (r) {
                                var a, h = s.offsetHeight, g = n.querySelector("img"), v = this.elements[this.index].node, f = null !== (a = v.getAttribute("data-height")) && void 0 !== a ? a : "100vh";
                                g.setAttribute("style", "max-height: calc(".concat(f, " - ").concat(h, "px)")), s.setAttribute("style", "max-width: ".concat(g.offsetWidth, "px;"));
                            }
                        }
                        if (i) {
                            var p = P(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                            if (!p) {
                                var m = i.clientWidth, y = i.clientHeight, b = m / y;
                                p = "".concat(m / b, ":").concat(y / b);
                            }
                            var S = p.split(":"), w = this.settings.videosWidth, T = this.settings.videosWidth, C = (T = z(w) || -1 !== w.indexOf("px") ? parseInt(w) : -1 !== w.indexOf("vw") ? l * parseInt(w) / 100 : -1 !== w.indexOf("vh") ? o * parseInt(w) / 100 : -1 !== w.indexOf("%") ? l * parseInt(w) / 100 : parseInt(i.clientWidth)) / (parseInt(S[0]) / parseInt(S[1]));
                            if (C = Math.floor(C), r && (o -= s.offsetHeight), T > l || C > o || o < C && l > T) {
                                var k = i.offsetWidth, E = i.offsetHeight, A = o / E, L = {
                                    width: k * A,
                                    height: E * A
                                };
                                i.parentNode.setAttribute("style", "max-width: ".concat(L.width, "px")), r && s.setAttribute("style", "max-width: ".concat(L.width, "px;"));
                            } else i.parentNode.style.maxWidth = "".concat(w), r && s.setAttribute("style", "max-width: ".concat(w, ";"));
                        }
                    }
                }
            }
        },
        {
            key: "reload",
            value: function() {
                this.init();
            }
        },
        {
            key: "updateNavigationClasses",
            value: function() {
                var e = this.loop();
                c(this.nextButton, "disabled"), c(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled") : d(this.prevButton, "disabled");
            }
        },
        {
            key: "loop",
            value: function() {
                var e = P(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                return e = P(this.settings, "loop") ? this.settings.loop : e, e;
            }
        },
        {
            key: "close",
            value: function() {
                var e = this;
                if (!this.lightboxOpen) {
                    if (this.events) {
                        for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                        this.events = null;
                    }
                    return !1;
                }
                if (this.closing) return !1;
                this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && r(this.bodyHiddenChildElms, function(e) {
                    e.removeAttribute("aria-hidden");
                }), d(this.modal, "glightbox-closing"), v(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), v(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                    if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                        for(var t in e.events)e.events.hasOwnProperty(t) && e.events[t].destroy();
                        e.events = null;
                    }
                    var i = document.body;
                    c(ee, "glightbox-open"), c(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), C(e.settings.onClose) && e.settings.onClose();
                    var n = document.querySelector(".gcss-styles");
                    n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null;
                });
            }
        },
        {
            key: "destroy",
            value: function() {
                this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
            }
        },
        {
            key: "on",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !C(t)) throw new TypeError("Event name and callback must be defined");
                this.apiEvents.push({
                    evt: e,
                    once: i,
                    callback: t
                });
            }
        },
        {
            key: "once",
            value: function(e, t) {
                this.on(e, t, !0);
            }
        },
        {
            key: "trigger",
            value: function(e) {
                var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                r(this.apiEvents, function(t, s) {
                    var l = t.evt, o = t.once, r = t.callback;
                    l == e && (r(i), o && n.push(s));
                }), n.length && r(n, function(e) {
                    return t.apiEvents.splice(e, 1);
                });
            }
        },
        {
            key: "clearAllEvents",
            value: function() {
                this.apiEvents.splice(0, this.apiEvents.length);
            }
        },
        {
            key: "version",
            value: function() {
                return "3.3.0";
            }
        }
    ]);
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new ie(e);
        return t.init(), t;
    };
});

},{}],"aHntc":[function(require,module,exports) {
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "outlayer/outlayer",
        "get-size/get-size",
        "desandro-matches-selector/matches-selector",
        "fizzy-ui-utils/utils",
        "./item",
        "./layout-mode",
        // include default layout modes
        "./layout-modes/masonry",
        "./layout-modes/fit-rows",
        "./layout-modes/vertical"
    ], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
        return factory(window1, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("d1ae90535db484ce"), require("79d2a28c59ac56a1"), require("1bd4311350c6f7f7"), require("c16cee176ee6b3de"), require("472f57781e0bd195"), require("c3340c38c73fe0bb"), // include default layout modes
    require("c844a88ba61eea2c"), require("8fb3c9115fa5833b"), require("f2014608a63b7098"));
    else // browser global
    window1.Isotope = factory(window1, window1.Outlayer, window1.getSize, window1.matchesSelector, window1.fizzyUIUtils, window1.Isotope.Item, window1.Isotope.LayoutMode);
})(window, function factory(window1, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    "use strict";
    // -------------------------- vars -------------------------- //
    var jQuery = window1.jQuery;
    // -------------------------- helpers -------------------------- //
    var trim = String.prototype.trim ? function(str) {
        return str.trim();
    } : function(str) {
        return str.replace(/^\s+|\s+$/g, "");
    };
    // -------------------------- isotopeDefinition -------------------------- //
    // create an Outlayer layout class
    var Isotope = Outlayer.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        // functions that sort items
        this._sorters = {};
        this._getSorters();
        // call super
        Outlayer.prototype._create.call(this);
        // create layout modes
        this.modes = {};
        // start filteredItems with all items
        this.filteredItems = this.items;
        // keep of track of sortBys
        this.sortHistory = [
            "original-order"
        ];
        // create from registered layout modes
        for(var name in LayoutMode.modes)this._initLayoutMode(name);
    };
    proto.reloadItems = function() {
        // reset item ID counter
        this.itemGUID = 0;
        // call super
        Outlayer.prototype.reloadItems.call(this);
    };
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        // assign ID for original-order
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    };
    // -------------------------- layout -------------------------- //
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        // set mode options
        // HACK extend initial options, back-fill in default options
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        // init layout mode instance
        this.modes[name] = new Mode(this);
    };
    proto.layout = function() {
        // if first time doing layout, do all magic
        if (!this._isLayoutInited && this._getOption("initLayout")) {
            this.arrange();
            return;
        }
        this._layout();
    };
    // private method to be used in layout() & magic()
    proto._layout = function() {
        // don't animate first layout
        var isInstant = this._getIsInstant();
        // layout flow
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        // flag for initalized
        this._isLayoutInited = true;
    };
    // filter + sort + layout
    proto.arrange = function(opts) {
        // set any options pass
        this.option(opts);
        this._getIsInstant();
        // filter, sort, and layout
        // filter
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) this._noTransition(this._hideReveal, [
            filtered
        ]);
        else this._hideReveal(filtered);
        this._sort();
        this._layout();
    };
    // alias to _init for main plugin method
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    };
    // HACK
    // Don't animate/transition first layout
    // Or don't animate/transition other layouts
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption("layoutInstant");
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };
    // listen for layoutComplete, hideComplete and revealComplete
    // to trigger arrangeComplete
    proto._bindArrangeComplete = function() {
        // listen for 3 events to trigger arrangeComplete
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) _this.dispatchEvent("arrangeComplete", null, [
                _this.filteredItems
            ]);
        }
        this.once("layoutComplete", function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once("hideComplete", function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once("revealComplete", function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };
    // -------------------------- filter -------------------------- //
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || "*";
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        // test each item
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            if (item.isIgnored) continue;
            // add item to either matched or unmatched group
            var isMatched = test(item);
            // item.isFilterMatched = isMatched;
            // add to matches if its a match
            if (isMatched) matches.push(item);
            // add to additional group if item needs to be hidden or revealed
            if (isMatched && item.isHidden) hiddenMatched.push(item);
            else if (!isMatched && !item.isHidden) visibleUnmatched.push(item);
        }
        // return collections of items to be manipulated
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };
    // get a jQuery, function, or a matchesSelector test given the filter
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) // use jQuery
        return function(item) {
            return jQuery(item.element).is(filter);
        };
        if (typeof filter == "function") // use filter as function
        return function(item) {
            return filter(item.element);
        };
        // default, use filter as selector string
        return function(item) {
            return matchesSelector(item.element, filter);
        };
    };
    // -------------------------- sorting -------------------------- //
    /**
   * @params {Array} elems
   * @public
   */ proto.updateSortData = function(elems) {
        // get items
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else // update all items if no elems provided
        items = this.items;
        this._getSorters();
        this._updateItemsSortData(items);
    };
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for(var key in getSortData){
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    };
    /**
   * @params {Array} items - of Isotope.Items
   * @private
   */ proto._updateItemsSortData = function(items) {
        // do not update if no items
        var len = items && items.length;
        for(var i = 0; len && i < len; i++){
            var item = items[i];
            item.updateSortData();
        }
    };
    // ----- munge sorter ----- //
    // encapsulate this, as we just need mungeSorter
    // other functions in here are just for munging
    var mungeSorter = function() {
        // add a magic layer to sorters for convienent shorthands
        // `.foo-bar` will use the text of .foo-bar querySelector
        // `[foo-bar]` will use attribute
        // you can also add parser
        // `.foo-bar parseInt` will parse that as a number
        function mungeSorter(sorter) {
            // if not a string, return function or whatever it is
            if (typeof sorter != "string") return sorter;
            // parse the sorter string
            var args = trim(sorter).split(" ");
            var query = args[0];
            // check if query looks like [an-attribute]
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            // use second argument as a parser
            var parser = Isotope.sortDataParsers[args[1]];
            // parse the value, if there was a parser
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem));
            } : // otherwise just return value
            function(elem) {
                return elem && getValue(elem);
            };
            return sorter;
        }
        // get an attribute getter, or get text of the querySelector
        function getValueGetter(attr, query) {
            // if query looks like [foo-bar], get attribute
            if (attr) return function getAttribute(elem) {
                return elem.getAttribute(attr);
            };
            // otherwise, assume its a querySelector, and get its text
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            };
        }
        return mungeSorter;
    }();
    // parsers used in getSortData shortcut strings
    Isotope.sortDataParsers = {
        "parseInt": function(val) {
            return parseInt(val, 10);
        },
        "parseFloat": function(val) {
            return parseFloat(val);
        }
    };
    // ----- sort method ----- //
    // sort filteredItem order
    proto._sort = function() {
        if (!this.options.sortBy) return;
        // keep track of sortBy History
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) // concat all sortBy and sortHistory, add to front, oldest goes in last
        this.sortHistory = sortBys.concat(this.sortHistory);
        // sort magic
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    };
    // check if sortBys is same as start of sortHistory
    proto._getIsSameSortBy = function(sortBys) {
        for(var i = 0; i < sortBys.length; i++){
            if (sortBys[i] != this.sortHistory[i]) return false;
        }
        return true;
    };
    // returns a function used for sorting
    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            // cycle through all sortKeys
            for(var i = 0; i < sortBys.length; i++){
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    // if sortAsc is an object, use the value given the sortBy key
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        };
    }
    // -------------------------- methods -------------------------- //
    // get layout mode
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) // TODO console.error
        throw new Error("No layout mode: " + layoutMode);
        // HACK sync mode's options
        // any options set after init for layout mode need to be synced
        mode.options = this.options[layoutMode];
        return mode;
    };
    proto._resetLayout = function() {
        // trigger original reset layout
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    };
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    };
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };
    // -------------------------- adding & removing -------------------------- //
    // HEADS UP overwrites default Outlayer appended
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // add to filteredItems
        this.filteredItems = this.filteredItems.concat(filteredItems);
    };
    // HEADS UP overwrites default Outlayer prepended
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) return;
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // layout previous items
        this.layoutItems(this.filteredItems);
        // add to items and filteredItems
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    };
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        // reveal all new items
        this.reveal(filtered.matches);
        // layout new items, no transition
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    };
    /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */ proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        // append item elements
        var i, item;
        var len = items.length;
        for(i = 0; i < len; i++){
            item = items[i];
            this.element.appendChild(item.element);
        }
        // filter new stuff
        var filteredInsertItems = this._filter(items).matches;
        // set flag
        for(i = 0; i < len; i++)items[i].isLayoutInstant = true;
        this.arrange();
        // reset flag
        for(i = 0; i < len; i++)delete items[i].isLayoutInstant;
        this.reveal(filteredInsertItems);
    };
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        // do regular thing
        _remove.call(this, elems);
        // bail if no items to remove
        var len = removeItems && removeItems.length;
        // remove elems from filteredItems
        for(var i = 0; len && i < len; i++){
            var item = removeItems[i];
            // remove item from collection
            utils.removeFrom(this.filteredItems, item);
        }
    };
    proto.shuffle = function() {
        // update random sortData
        for(var i = 0; i < this.items.length; i++){
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = "random";
        this._sort();
        this._layout();
    };
    /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */ proto._noTransition = function(fn, args) {
        // save transitionDuration before disabling
        var transitionDuration = this.options.transitionDuration;
        // disable transition
        this.options.transitionDuration = 0;
        // do it
        var returnValue = fn.apply(this, args);
        // re-enable transition for reveal
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };
    // ----- helper methods ----- //
    /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */ proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element;
        });
    };
    // -----  ----- //
    return Isotope;
});

},{"d1ae90535db484ce":"2vxXV","79d2a28c59ac56a1":"166by","1bd4311350c6f7f7":"gza0L","c16cee176ee6b3de":"5rzsv","472f57781e0bd195":"g0xkU","c3340c38c73fe0bb":"1Q7jG","c844a88ba61eea2c":"alQbF","8fb3c9115fa5833b":"31PnH","f2014608a63b7098":"ksqGd"}],"2vxXV":[function(require,module,exports) {
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */ (function(window1, factory) {
    "use strict";
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./item"
    ], function(EvEmitter, getSize, utils, Item) {
        return factory(window1, EvEmitter, getSize, utils, Item);
    });
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory(window1, require("573c24bcaa9ad04f"), require("b05519937ed91da5"), require("3b5dd3aa1a4ff35"), require("242bc3ae5b473953"));
    else // browser global
    window1.Outlayer = factory(window1, window1.EvEmitter, window1.getSize, window1.fizzyUIUtils, window1.Outlayer.Item);
})(window, function factory(window1, EvEmitter, getSize, utils, Item) {
    "use strict";
    // ----- vars ----- //
    var console = window1.console;
    var jQuery = window1.jQuery;
    var noop = function() {};
    // -------------------------- Outlayer -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Outlayer intances
    var instances = {};
    /**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */ function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
            return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) this.$element = jQuery(this.element);
        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[id] = this; // associate via id
        // kick it off
        this._create();
        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) this.layout();
    }
    // settings are for internal use only
    Outlayer.namespace = "outlayer";
    Outlayer.Item = Item;
    // default options
    Outlayer.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var proto = Outlayer.prototype;
    // inherit EvEmitter
    utils.extend(proto, EvEmitter.prototype);
    /**
 * set options
 * @param {Object} opts
 */ proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    /**
 * get backwards compatible option value, check old name
 */ proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    };
    proto._create = function() {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp(this.options.stamp);
        // set container style
        utils.extend(this.element.style, this.options.containerStyle);
        // bind resize method
        var canBindResize = this._getOption("resize");
        if (canBindResize) this.bindResize();
    };
    // goes through all children again and gets bricks in proper order
    proto.reloadItems = function() {
        // collection of item elements
        this.items = this._itemize(this.element.children);
    };
    /**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */ proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        // create new Outlayer Items for collection
        var items = [];
        for(var i = 0; i < itemElems.length; i++){
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }
        return items;
    };
    /**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */ proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };
    /**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */ proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    };
    // ----- init & layout ----- //
    /**
 * lays out all items
 */ proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        // don't animate first layout
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        // flag for initalized
        this._isLayoutInited = true;
    };
    // _init is alias for layout
    proto._init = proto.layout;
    /**
 * logic before any new layout
 */ proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    /**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */ proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) // default to 0
        this[measurement] = 0;
        else {
            // use option as an element
            if (typeof option == "string") elem = this.element.querySelector(option);
            else if (option instanceof HTMLElement) elem = option;
            // use size of element, if element
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };
    /**
 * layout a collection of item elements
 * @api public
 */ proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    };
    /**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */ proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    };
    /**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */ proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems("layout", items);
        if (!items || !items.length) // no items, emit event with empty array
        return;
        var queue = [];
        items.forEach(function(item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item);
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    };
    /**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */ proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    };
    /**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */ proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };
    // set stagger from option in milliseconds number
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };
    /**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */ proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) // if not transition, just set CSS
        item.goTo(x, y);
        else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };
    /**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */ proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) return;
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };
    /**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */ proto._getContainerSize = noop;
    /**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */ proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) return;
        var elemSize = this.size;
        // add padding and border width if border box
        if (elemSize.isBorderBox) measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
    };
    /**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */ proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent(eventName + "Complete", null, [
                items
            ]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if (doneCount == count) onComplete();
        }
        // bind callback
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    };
    /**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */ proto.dispatchEvent = function(type, event, args) {
        // add original event to arguments
        var emitArgs = event ? [
            event
        ].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else // just trigger with type if no event available
            this.$element.trigger(type, args);
        }
    };
    // -------------------------- ignore & stamps -------------------------- //
    /**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */ proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) item.isIgnored = true;
    };
    /**
 * return item to layout collection
 * @param {Element} elem
 */ proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) delete item.isIgnored;
    };
    /**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */ proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        this.stamps = this.stamps.concat(elems);
        // ignore
        elems.forEach(this.ignore, this);
    };
    /**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */ proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        elems.forEach(function(elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };
    /**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */ proto._find = function(elems) {
        if (!elems) return;
        // if string, use argument as selector string
        if (typeof elems == "string") elems = this.element.querySelectorAll(elems);
        elems = utils.makeArray(elems);
        return elems;
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) return;
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    };
    // update boundingLeft / Top
    proto._getBoundingRect = function() {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };
    /**
 * @param {Element} stamp
**/ proto._manageStamp = noop;
    /**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */ proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    // -------------------------- resize -------------------------- //
    // enable event handlers for listeners
    // i.e. resize -> onresize
    proto.handleEvent = utils.handleEvent;
    /**
 * Bind layout to window resizing
 */ proto.bindResize = function() {
        window1.addEventListener("resize", this);
        this.isResizeBound = true;
    };
    /**
 * Unbind layout to window resizing
 */ proto.unbindResize = function() {
        window1.removeEventListener("resize", this);
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod(Outlayer, "onresize", 100);
    proto.resize = function() {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if (!this.isResizeBound || !this.needsResizeLayout()) return;
        this.layout();
    };
    /**
 * check if layout is needed post layout
 * @returns Boolean
 */ proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    // -------------------------- methods -------------------------- //
    /**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/ proto.addItems = function(elems) {
        var items = this._itemize(elems);
        // add items to collection
        if (items.length) this.items = this.items.concat(items);
        return items;
    };
    /**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */ proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        // layout and reveal just the new items
        this.layoutItems(items, true);
        this.reveal(items);
    };
    /**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */ proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) return;
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems(items, true);
        this.reveal(items);
        // layout previous items
        this.layoutItems(previousItems);
    };
    /**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */ proto.reveal = function(items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };
    /**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */ proto.hide = function(items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };
    /**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */ proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };
    /**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */ proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };
    /**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */ proto.getItem = function(elem) {
        // loop through items to get the one that matches
        for(var i = 0; i < this.items.length; i++){
            var item = this.items[i];
            if (item.element == elem) // return item
            return item;
        }
    };
    /**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */ proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) items.push(item);
        }, this);
        return items;
    };
    /**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */ proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems("remove", removeItems);
        // bail if no items to remove
        if (!removeItems || !removeItems.length) return;
        removeItems.forEach(function(item) {
            item.remove();
            // remove item from collection
            utils.removeFrom(this.items, item);
        }, this);
    };
    // ----- destroy ----- //
    // remove and disable Outlayer instance
    proto.destroy = function() {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        // destroy items
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if (jQuery) jQuery.removeData(this.element, this.constructor.namespace);
    };
    // -------------------------- data -------------------------- //
    /**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */ Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };
    // -------------------------- create Outlayer class -------------------------- //
    /**
 * create a layout class
 * @param {String} namespace
 */ Outlayer.create = function(namespace, options) {
        // sub-class Outlayer
        var Layout = subclass(Outlayer);
        // apply new options and compatOptions
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        // sub-class Item
        Layout.Item = subclass(Item);
        // -------------------------- declarative -------------------------- //
        utils.htmlInit(Layout, namespace);
        // -------------------------- jQuery bridge -------------------------- //
        // make into jQuery plugin
        if (jQuery && jQuery.bridget) jQuery.bridget(namespace, Layout);
        return Layout;
    };
    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    // ----- helpers ----- //
    // how many milliseconds are in each unit
    var msUnits = {
        ms: 1,
        s: 1000
    };
    // munge time-like parameter into millisecond number
    // '0.4s' -> 40
    function getMilliseconds(time) {
        if (typeof time == "number") return time;
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) return 0;
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    // ----- fin ----- //
    // back in global
    Outlayer.Item = Item;
    return Outlayer;
});

},{"573c24bcaa9ad04f":"hPb15","b05519937ed91da5":"166by","3b5dd3aa1a4ff35":"5rzsv","242bc3ae5b473953":"fv3Ha"}],"hPb15":[function(require,module,exports) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != "undefined" ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"166by":[function(require,module,exports) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window1, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.getSize = factory();
})(window, function factory() {
    "use strict";
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    // -------------------------- getStyle -------------------------- //
    /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */ function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        return style;
    }
    // -------------------------- setup -------------------------- //
    var isSetup = false;
    var isBoxSizeOuter;
    /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */ function setup() {
        // setup once
        if (isSetup) return;
        isSetup = true;
        // -------------------------- box sizing -------------------------- //
        /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */ var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    // -------------------------- getSize -------------------------- //
    function getSize(elem) {
        setup();
        // use querySeletor if elem is string
        if (typeof elem == "string") elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != "object" || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == "none") return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        // get all measurements
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});

},{}],"5rzsv":[function(require,module,exports) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "desandro-matches-selector/matches-selector"
    ], function(matchesSelector) {
        return factory(window1, matchesSelector);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("51e1096a76b062e0"));
    else // browser global
    window1.fizzyUIUtils = factory(window1, window1.matchesSelector);
})(window, function factory(window1, matchesSelector) {
    "use strict";
    var utils = {};
    // ----- extend ----- //
    // extends objects
    utils.extend = function(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    };
    // ----- modulo ----- //
    utils.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- makeArray ----- //
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) return [];
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    };
    // ----- removeFrom ----- //
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1);
    };
    // ----- getParent ----- //
    utils.getParent = function(elem, selector) {
        while(elem.parentNode && elem != document.body){
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem;
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == "string") return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // ----- filterFindElements ----- //
    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) return;
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for(var i = 0; i < childElems.length; i++)ffElems.push(childElems[i]);
        });
        return ffElems;
    };
    // ----- debounceMethod ----- //
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    // ----- docReady ----- //
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener("DOMContentLoaded", callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    };
    var console = window1.console;
    /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */ utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window1.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) jQuery.data(elem, namespace, instance);
            });
        });
    };
    // -----  ----- //
    return utils;
});

},{"51e1096a76b062e0":"gza0L"}],"gza0L":[function(require,module,exports) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ (function(window1, factory) {
    /*global define: false, module: false */ "use strict";
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.matchesSelector = factory();
})(window, function factory() {
    "use strict";
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return "matches";
        // check un-prefixed
        if (ElemProto.matchesSelector) return "matchesSelector";
        // check vendor prefixes
        var prefixes = [
            "webkit",
            "moz",
            "ms",
            "o"
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"fv3Ha":[function(require,module,exports) {
/**
 * Outlayer Item
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size"
    ], factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory(require("dd99bd345459a860"), require("333b0b16bf4afb3c"));
    else {
        // browser global
        window1.Outlayer = {};
        window1.Outlayer.Item = factory(window1.EvEmitter, window1.getSize);
    }
})(window, function factory(EvEmitter, getSize) {
    "use strict";
    // ----- helpers ----- //
    function isEmptyObj(obj) {
        for(var prop in obj)return false;
        prop = null;
        return true;
    }
    // -------------------------- CSS3 support -------------------------- //
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
    var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
    var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[transitionProperty];
    // cache all vendor properties that could have vendor prefix
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay"
    };
    // -------------------------- Item -------------------------- //
    function Item(element, layout) {
        if (!element) return;
        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    // inherit EvEmitter
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        // transition objects
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        });
    };
    // trigger specified handler for event type
    proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    /**
 * apply CSS styles to element
 * @param {Object} style
 */ proto.css = function(style) {
        var elemStyle = this.element.style;
        for(var prop in style){
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };
    // measure position, and sets it
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        // convert percent to pixels
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) x = x / 100 * layoutSize.width;
        if (yValue.indexOf("%") != -1) y = y / 100 * layoutSize.height;
        // clean up 'auto' or other non-integer values
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    // set settled position, apply padding
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        // x
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";
        var x = this.position.x + layoutSize[xPadding];
        // set in percentage or pixels
        style[xProperty] = this.getXValue(x);
        // reset other property
        style[xResetProperty] = "";
        // y
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";
        var y = this.position.y + layoutSize[yPadding];
        // set in percentage or pixels
        style[yProperty] = this.getYValue(y);
        // reset other property
        style[yResetProperty] = "";
        this.css(style);
        this.emitEvent("layout", [
            this
        ]);
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        // save end position
        this.setPosition(x, y);
        // if did not move and not transitioning, just go to layout
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function(x, y) {
        // flip cooridinates if origin on right or bottom
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
    };
    // non transition + transform support
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };
    // ----- transition ----- //
    /**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */ // non transition, just trigger callback
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) this._removeStyles(args.to);
        for(var prop in args.onTransitionEnd)args.onTransitionEnd[prop].call(this);
    };
    /**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */ proto.transition = function(args) {
        // redirect to nonTransition if no transition duration
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for(var prop in args.onTransitionEnd)_transition.onEnd[prop] = args.onTransitionEnd[prop];
        // keep track of properties that are transitioning
        for(prop in args.to){
            _transition.ingProperties[prop] = true;
            // keep track of properties to clean up when transition is done
            if (args.isCleaning) _transition.clean[prop] = true;
        }
        // set from styles
        if (args.from) {
            this.css(args.from);
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
        }
        // enable transition
        this.enableTransition(args.to);
        // set styles that are transitioning
        this.css(args.to);
        this.isTransitioning = true;
    };
    // dash before all cap letters, including first for
    // WebkitTransform => -webkit-transform
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return "-" + $1.toLowerCase();
        });
    }
    var transitionProps = "opacity," + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if (this.isTransitioning) return;
        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // munge number to millisecond, to match stagger
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        // enable transition styles
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        // listen for transition end event
        this.element.addEventListener(transitionEndEvent, this, false);
    };
    // ----- events ----- //
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    };
    // properties that I munge to make my life easier
    var dashedVendorProperties = {
        "-webkit-transform": "transform"
    };
    proto.ontransitionend = function(event) {
        // disregard bubbled events from children
        if (event.target !== this.element) return;
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        // remove property that has completed transitioning
        delete _transition.ingProperties[propertyName];
        // check if any properties are still transitioning
        if (isEmptyObj(_transition.ingProperties)) // all properties have completed transitioning
        this.disableTransition();
        // clean style
        if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = "";
            delete _transition.clean[propertyName];
        }
        // trigger onTransitionEnd callback
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [
            this
        ]);
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };
    /**
 * removes style property from element
 * @param {Object} style
**/ proto._removeStyles = function(style) {
        // clean up transition styles
        var cleanStyle = {};
        for(var prop in style)cleanStyle[prop] = "";
        this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    proto.removeTransitionStyles = function() {
        // remove transition
        this.css(cleanTransitionStyle);
    };
    // ----- stagger ----- //
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
    };
    // ----- show/hide/remove ----- //
    // remove element from DOM
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        // remove display: none
        this.css({
            display: ""
        });
        this.emitEvent("remove", [
            this
        ]);
    };
    proto.remove = function() {
        // just remove element if no transition support or no transition
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        // start transition
        this.once("transitionEnd", function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        // remove display: none
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        // check if still visible
        // during transition, item may have been hidden
        if (!this.isHidden) this.emitEvent("reveal");
    };
    /**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */ proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        // use opacity
        if (optionStyle.opacity) return "opacity";
        // get first property
        for(var prop in optionStyle)return prop;
    };
    proto.hide = function() {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if (this.isHidden) {
            this.css({
                display: "none"
            });
            this.emitEvent("hide");
        }
    };
    proto.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    };
    return Item;
});

},{"dd99bd345459a860":"hPb15","333b0b16bf4afb3c":"166by"}],"g0xkU":[function(require,module,exports) {
/**
 * Isotope Item
**/ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "outlayer/outlayer"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("fcad5758f874e5b4"));
    else {
        // browser global
        window1.Isotope = window1.Isotope || {};
        window1.Isotope.Item = factory(window1.Outlayer);
    }
})(window, function factory(Outlayer) {
    "use strict";
    // -------------------------- Item -------------------------- //
    // sub-class Outlayer Item
    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var _create = proto._create;
    proto._create = function() {
        // assign id, used for original-order sorting
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    };
    proto.updateSortData = function() {
        if (this.isIgnored) return;
        // default sorters
        this.sortData.id = this.id;
        // for backward compatibility
        this.sortData["original-order"] = this.id;
        this.sortData.random = Math.random();
        // go thru getSortData obj and apply the sorters
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for(var key in getSortData){
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
        // call super
        _destroy.apply(this, arguments);
        // reset display, #741
        this.css({
            display: ""
        });
    };
    return Item;
});

},{"fcad5758f874e5b4":"2vxXV"}],"1Q7jG":[function(require,module,exports) {
/**
 * Isotope LayoutMode
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "get-size/get-size",
        "outlayer/outlayer"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("c16cbd9384b3ccfb"), require("6eb8dcb0eb951ac9"));
    else {
        // browser global
        window1.Isotope = window1.Isotope || {};
        window1.Isotope.LayoutMode = factory(window1.getSize, window1.Outlayer);
    }
})(window, function factory(getSize, Outlayer) {
    "use strict";
    // layout mode class
    function LayoutMode(isotope) {
        this.isotope = isotope;
        // link properties
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/ var facadeMethods = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption"
    ];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
    });
    // -----  ----- //
    // for horizontal layout modes, check vertical size
    proto.needsVerticalResizeLayout = function() {
        // don't trigger if size did not change
        var size = getSize(this.isotope.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
    // ----- measurements ----- //
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    };
    proto.getColumnWidth = function() {
        this.getSegmentSize("column", "Width");
    };
    proto.getRowHeight = function() {
        this.getSegmentSize("row", "Height");
    };
    /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/ proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = "outer" + size;
        // columnWidth / outerWidth // rowHeight / outerHeight
        this._getMeasurement(segmentName, outerSize);
        // got rowHeight or columnWidth, we can chill
        if (this[segmentName]) return;
        // fall back to item of first element
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || // or size of container
        this.isotope.size["inner" + size];
    };
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    };
    // ----- methods that should reference isotope ----- //
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    };
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };
    // -------------------------- create -------------------------- //
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        // default options
        if (options) Mode.options = options;
        Mode.prototype.namespace = namespace;
        // register in Isotope
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    };
    return LayoutMode;
});

},{"c16cbd9384b3ccfb":"166by","6eb8dcb0eb951ac9":"2vxXV"}],"alQbF":[function(require,module,exports) {
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "../layout-mode",
        "masonry-layout/masonry"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("5fa6ad8badeac0b4"), require("f1da021ee571de45"));
    else // browser global
    factory(window1.Isotope.LayoutMode, window1.Masonry);
})(window, function factory(LayoutMode, Masonry) {
    "use strict";
    // -------------------------- masonryDefinition -------------------------- //
    // create an Outlayer layout class
    var MasonryMode = LayoutMode.create("masonry");
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    // inherit Masonry prototype
    for(var method in Masonry.prototype)// do not inherit mode methods
    if (!keepModeMethods[method]) proto[method] = Masonry.prototype[method];
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        // set items, used if measuring first item
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    };
    // point to mode options for fitWidth
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == "fitWidth") return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        return _getOption.apply(this.isotope, arguments);
    };
    return MasonryMode;
});

},{"5fa6ad8badeac0b4":"1Q7jG","f1da021ee571de45":"cYDx4"}],"cYDx4":[function(require,module,exports) {
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "outlayer/outlayer",
        "get-size/get-size"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("e86e3700aebd6078"), require("26a3dc2fb9871570"));
    else // browser global
    window1.Masonry = factory(window1.Outlayer, window1.getSize);
})(window, function factory(Outlayer, getSize) {
    "use strict";
    // -------------------------- masonryDefinition -------------------------- //
    // create an Outlayer layout class
    var Masonry = Outlayer.create("masonry");
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = "isFitWidth";
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        // reset column Y
        this.colYs = [];
        for(var i = 0; i < this.cols; i++)this.colYs.push(0);
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
            this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - containerWidth % columnWidth;
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? "round" : "floor";
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
        // container is parent if fit width
        var isFitWidth = this._getOption("fitWidth");
        var container = isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        // use horizontal or top column position
        var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
        var colPosition = this[colPosMethod](colSpan, item);
        // position the brick
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        // apply setHeight to necessary columns
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for(var i = colPosition.col; i < setMax; i++)this.colYs[i] = setHeight;
        return position;
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
        };
    };
    /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */ proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) // if brick spans only one column, use all the column Ys
        return this.colYs;
        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for(var i = 0; i < groupCount; i++)colGroup[i] = this._getColGroupY(i, colSpan);
        return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) return this.colYs[col];
        // make an array of colY values for that one group
        var groupColYs = this.colYs.slice(col, col + colSpan);
        // and get the max value of the array
        return Math.max.apply(Math, groupColYs);
    };
    // get column position based on horizontal index. #873
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        // shift to next row if item can't fit on current row
        col = isOver ? 0 : col;
        // don't let zero-size items take up space
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan)
        };
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        // get the columns that this stamp affects
        var isOriginLeft = this._getOption("originLeft");
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        // set colYs to bottom of the stamp
        var isOriginTop = this._getOption("originTop");
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for(var i = firstCol; i <= lastCol; i++)this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption("fitWidth")) size.width = this._getContainerFitWidth();
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while(--i){
            if (this.colYs[i] !== 0) break;
            unusedCols++;
        }
        // fit container to columns that have been used
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
});

},{"e86e3700aebd6078":"2vxXV","26a3dc2fb9871570":"166by"}],"31PnH":[function(require,module,exports) {
/**
 * fitRows layout mode
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "../layout-mode"
    ], factory);
    else // CommonJS
    module.exports = factory(require("36dec49fe2130686"));
})(window, function factory(LayoutMode) {
    "use strict";
    var FitRows = LayoutMode.create("fitRows");
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth");
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        // if this element cannot fit in the current row
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
    };
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        };
    };
    return FitRows;
});

},{"36dec49fe2130686":"1Q7jG"}],"ksqGd":[function(require,module,exports) {
/**
 * vertical layout mode
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "../layout-mode"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("42857813c5389eab"));
    else // browser global
    factory(window1.Isotope.LayoutMode);
})(window, function factory(LayoutMode) {
    "use strict";
    var Vertical = LayoutMode.create("vertical", {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    };
    proto._getContainerSize = function() {
        return {
            height: this.y
        };
    };
    return Vertical;
});

},{"42857813c5389eab":"1Q7jG"}]},["iOgpa","5wnyu"], "5wnyu", "parcelRequire199c")

//# sourceMappingURL=index.6441881b.js.map
