/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/IMG/Roadmap.png":
/*!*****************************!*\
  !*** ./src/IMG/Roadmap.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/Roadmap.png");

/***/ }),

/***/ "./src/IMG/ahmet.jpg":
/*!***************************!*\
  !*** ./src/IMG/ahmet.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/ahmet.jpg");

/***/ }),

/***/ "./src/IMG/ali.png":
/*!*************************!*\
  !*** ./src/IMG/ali.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/ali.png");

/***/ }),

/***/ "./src/IMG/background.png":
/*!********************************!*\
  !*** ./src/IMG/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/background.png");

/***/ }),

/***/ "./src/IMG/berkay.jpg":
/*!****************************!*\
  !*** ./src/IMG/berkay.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/berkay.jpg");

/***/ }),

/***/ "./src/IMG/creators.png":
/*!******************************!*\
  !*** ./src/IMG/creators.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/creators.png");

/***/ }),

/***/ "./src/IMG/discord.png":
/*!*****************************!*\
  !*** ./src/IMG/discord.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/discord.png");

/***/ }),

/***/ "./src/IMG/facebook.png":
/*!******************************!*\
  !*** ./src/IMG/facebook.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/facebook.png");

/***/ }),

/***/ "./src/IMG/facebookSmall.png":
/*!***********************************!*\
  !*** ./src/IMG/facebookSmall.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/facebookSmall.png");

/***/ }),

/***/ "./src/IMG/gizlifil1.png":
/*!*******************************!*\
  !*** ./src/IMG/gizlifil1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/gizlifil1.png");

/***/ }),

/***/ "./src/IMG/gizlifil2.png":
/*!*******************************!*\
  !*** ./src/IMG/gizlifil2.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/gizlifil2.png");

/***/ }),

/***/ "./src/IMG/gizlifil3.png":
/*!*******************************!*\
  !*** ./src/IMG/gizlifil3.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/gizlifil3.png");

/***/ }),

/***/ "./src/IMG/gizlifil4.png":
/*!*******************************!*\
  !*** ./src/IMG/gizlifil4.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/gizlifil4.png");

/***/ }),

/***/ "./src/IMG/instagramSmall.png":
/*!************************************!*\
  !*** ./src/IMG/instagramSmall.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/instagramSmall.png");

/***/ }),

/***/ "./src/IMG/linkedinSmall.png":
/*!***********************************!*\
  !*** ./src/IMG/linkedinSmall.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/linkedinSmall.png");

/***/ }),

/***/ "./src/IMG/opensea.png":
/*!*****************************!*\
  !*** ./src/IMG/opensea.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/opensea.png");

/***/ }),

/***/ "./src/IMG/peanut1.png":
/*!*****************************!*\
  !*** ./src/IMG/peanut1.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/peanut1.png");

/***/ }),

/***/ "./src/IMG/platformlv1.png":
/*!*********************************!*\
  !*** ./src/IMG/platformlv1.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/platformlv1.png");

/***/ }),

/***/ "./src/IMG/platformlv3.png":
/*!*********************************!*\
  !*** ./src/IMG/platformlv3.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/platformlv3.png");

/***/ }),

/***/ "./src/IMG/playeroneleft.png":
/*!***********************************!*\
  !*** ./src/IMG/playeroneleft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/playeroneleft.png");

/***/ }),

/***/ "./src/IMG/playeroneright.png":
/*!************************************!*\
  !*** ./src/IMG/playeroneright.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/playeroneright.png");

/***/ }),

/***/ "./src/IMG/playerthreeleft.png":
/*!*************************************!*\
  !*** ./src/IMG/playerthreeleft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/playerthreeleft.png");

/***/ }),

/***/ "./src/IMG/playerthreeright.png":
/*!**************************************!*\
  !*** ./src/IMG/playerthreeright.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/playerthreeright.png");

/***/ }),

/***/ "./src/IMG/playertwoleft.png":
/*!***********************************!*\
  !*** ./src/IMG/playertwoleft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/playertwoleft.png");

/***/ }),

/***/ "./src/IMG/playertworight.png":
/*!************************************!*\
  !*** ./src/IMG/playertworight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/playertworight.png");

/***/ }),

/***/ "./src/IMG/storyone.png":
/*!******************************!*\
  !*** ./src/IMG/storyone.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/storyone.png");

/***/ }),

/***/ "./src/IMG/telegram.png":
/*!******************************!*\
  !*** ./src/IMG/telegram.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/telegram.png");

/***/ }),

/***/ "./src/IMG/telegramSmall.png":
/*!***********************************!*\
  !*** ./src/IMG/telegramSmall.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/telegramSmall.png");

/***/ }),

/***/ "./src/IMG/tiktok.png":
/*!****************************!*\
  !*** ./src/IMG/tiktok.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/tiktok.png");

/***/ }),

/***/ "./src/IMG/twitter.png":
/*!*****************************!*\
  !*** ./src/IMG/twitter.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/twitter.png");

/***/ }),

/***/ "./src/IMG/youtube.png":
/*!*****************************!*\
  !*** ./src/IMG/youtube.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "IMG/youtube.png");

/***/ }),

/***/ "./src/fonts/ocraext.ttf":
/*!*******************************!*\
  !*** ./src/fonts/ocraext.ttf ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ocraext.ttf");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_peanutPositions_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/peanutPositions.json */ "./src/json/peanutPositions.json");
var _json_peanutPositions_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/peanutPositions.json */ "./src/json/peanutPositions.json", 1);
/* harmony import */ var _json_platforms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json/platforms.json */ "./src/json/platforms.json");
var _json_platforms_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/platforms.json */ "./src/json/platforms.json", 1);
/* harmony import */ var _json_player_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/player.json */ "./src/json/player.json");
var _json_player_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/player.json */ "./src/json/player.json", 1);
/* harmony import */ var _fonts_ocraext_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/ocraext.ttf */ "./src/fonts/ocraext.ttf");
/* harmony import */ var _IMG_platformlv1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../IMG/platformlv1.png */ "./src/IMG/platformlv1.png");
/* harmony import */ var _IMG_platformlv3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../IMG/platformlv3.png */ "./src/IMG/platformlv3.png");
/* harmony import */ var _IMG_peanut1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IMG/peanut1.png */ "./src/IMG/peanut1.png");
/* harmony import */ var _IMG_Roadmap_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../IMG/Roadmap.png */ "./src/IMG/Roadmap.png");
/* harmony import */ var _IMG_gizlifil1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../IMG/gizlifil1.png */ "./src/IMG/gizlifil1.png");
/* harmony import */ var _IMG_gizlifil2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../IMG/gizlifil2.png */ "./src/IMG/gizlifil2.png");
/* harmony import */ var _IMG_gizlifil3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../IMG/gizlifil3.png */ "./src/IMG/gizlifil3.png");
/* harmony import */ var _IMG_gizlifil4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../IMG/gizlifil4.png */ "./src/IMG/gizlifil4.png");
/* harmony import */ var _IMG_playeroneright_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../IMG/playeroneright.png */ "./src/IMG/playeroneright.png");
/* harmony import */ var _IMG_playeroneleft_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../IMG/playeroneleft.png */ "./src/IMG/playeroneleft.png");
/* harmony import */ var _IMG_playertworight_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../IMG/playertworight.png */ "./src/IMG/playertworight.png");
/* harmony import */ var _IMG_playertwoleft_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../IMG/playertwoleft.png */ "./src/IMG/playertwoleft.png");
/* harmony import */ var _IMG_playerthreeright_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../IMG/playerthreeright.png */ "./src/IMG/playerthreeright.png");
/* harmony import */ var _IMG_playerthreeleft_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../IMG/playerthreeleft.png */ "./src/IMG/playerthreeleft.png");
/* harmony import */ var _IMG_creators_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../IMG/creators.png */ "./src/IMG/creators.png");
/* harmony import */ var _IMG_discord_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../IMG/discord.png */ "./src/IMG/discord.png");
/* harmony import */ var _IMG_twitter_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../IMG/twitter.png */ "./src/IMG/twitter.png");
/* harmony import */ var _IMG_linkedinSmall_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../IMG/linkedinSmall.png */ "./src/IMG/linkedinSmall.png");
/* harmony import */ var _IMG_facebookSmall_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../IMG/facebookSmall.png */ "./src/IMG/facebookSmall.png");
/* harmony import */ var _IMG_instagramSmall_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../IMG/instagramSmall.png */ "./src/IMG/instagramSmall.png");
/* harmony import */ var _IMG_telegramSmall_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../IMG/telegramSmall.png */ "./src/IMG/telegramSmall.png");
/* harmony import */ var _IMG_youtube_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../IMG/youtube.png */ "./src/IMG/youtube.png");
/* harmony import */ var _IMG_telegram_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../IMG/telegram.png */ "./src/IMG/telegram.png");
/* harmony import */ var _IMG_facebook_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../IMG/facebook.png */ "./src/IMG/facebook.png");
/* harmony import */ var _IMG_tiktok_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../IMG/tiktok.png */ "./src/IMG/tiktok.png");
/* harmony import */ var _IMG_opensea_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../IMG/opensea.png */ "./src/IMG/opensea.png");
/* harmony import */ var _IMG_storyone_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../IMG/storyone.png */ "./src/IMG/storyone.png");
/* harmony import */ var _IMG_background_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../IMG/background.png */ "./src/IMG/background.png");
/* harmony import */ var _IMG_ali_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../IMG/ali.png */ "./src/IMG/ali.png");
/* harmony import */ var _IMG_berkay_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../IMG/berkay.jpg */ "./src/IMG/berkay.jpg");
/* harmony import */ var _IMG_ahmet_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../IMG/ahmet.jpg */ "./src/IMG/ahmet.jpg");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








































 ///  HTML ITEMS ///

var web3;
var backgroundEl = document.getElementById('backgroundEl');
var faqs = document.querySelectorAll('.faq');
var home = document.querySelector('body');
var RoadmapImageOne = document.getElementById('roadmapImgOne');
var RoadmapImageTwo = document.getElementById('roadmapImgTwo');
var RoadmapImageThree = document.getElementById('roadmapImgThree');
var roadmapBtnOne = document.getElementById('roadmapBtnOne');
var roadmapBtnTwo = document.getElementById('roadmapBtnTwo');
var roadmapBtnThree = document.getElementById('roadmapBtnThree');
var playername = document.getElementById('playername');
var subCount = document.getElementById('subCount');
var topSubBtn = document.getElementById('topSubBtn');
var topSubMail = document.getElementById('topSubMail');
var bottomSubBtn = document.getElementById('bottomSubBtn');
var bottomSubMail = document.getElementById('bottomSubMail');
var topWhiteList = document.getElementById('topWhiteList');
var bottomWhiteList = document.getElementById('bottomWhiteList');
var roadmapModal = document.getElementById('roadmapModal');
var roadmapHead = document.getElementById('roadmapHead');
var roadmapText1 = document.getElementById('roadmapText1');
var roadmapText2 = document.getElementById('roadmapText2');
var roadmapText3 = document.getElementById('roadmapText3');
var roadmapText4 = document.getElementById('roadmapText4');
var roadmapLeftArrow = document.getElementById('roadmapLeftArrow');
var roadmapRightArrow = document.getElementById('roadmapRightArrow'); /// CANVAS ITEMS ///

var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
var sayacLabel = document.getElementById('score');
var menu = document.getElementById('menu');
var goscore = document.getElementById('goscore');
var startbutton = document.getElementById('start');
var radioBttn1 = document.getElementById('r1');
var radioBttn2 = document.getElementById('r2');
var radioBttn3 = document.getElementById('r3'); /// IMAGES ///

var pImg1 = document.getElementById('p1');
var pImg2 = document.getElementById('p2');
var pImg3 = document.getElementById('p3');
var dc = document.getElementById('discord');
var tw = document.getElementById('twitter');
var yt = document.getElementById('youtube');
var tl = document.getElementById('telegram');
var fb = document.getElementById('facebook');
var tt = document.getElementById('tiktok');
var logo = document.getElementById('logo');
var logo2 = document.getElementById('logo2');
var twf = document.getElementById('twitterfooter');
var fbf = document.getElementById('facebookfooter');
var tlf = document.getElementById('telegramfooter');
var ytf = document.getElementById('youtubefooter');
var ttf = document.getElementById('tiktokfooter');
var dcf = document.getElementById('discordfooter');
var ln = document.getElementById('linkedinSmall');
var igs = document.getElementById('instagramSmall');
var ln1 = document.getElementById('linkedinSmall1'); // const fbs1 = document.getElementById('facebookSmall1');

var igs1 = document.getElementById('instagramSmall1'); // const tls1 = document.getElementById('telegramSmall1');

var ln2 = document.getElementById('linkedinSmall2'); // const fbs2 = document.getElementById('facebookSmall2');
// const igs2 = document.getElementById('instagramSmall2');
// const tls2 = document.getElementById('telegramSmall2');

var op = document.getElementById('opensea');
var giFil1 = document.getElementById('gfil1');
var giFil2 = document.getElementById('gfil2');
var giFil3 = document.getElementById('gfil3');
var giFil4 = document.getElementById('gfil4');
var stroyOne = document.getElementById('stroyone');
var stroyTwo = document.getElementById('stroytwo');
var stroyThree = document.getElementById('stroythree');
var stroyFour = document.getElementById('stroyfour');
var creator1El = document.getElementById('creator1');
var creator2El = document.getElementById('creator2');
var creator3El = document.getElementById('creator3');
creator1El.src = _IMG_ali_png__WEBPACK_IMPORTED_MODULE_33__["default"];
creator2El.src = _IMG_berkay_jpg__WEBPACK_IMPORTED_MODULE_34__["default"];
creator3El.src = _IMG_ahmet_jpg__WEBPACK_IMPORTED_MODULE_35__["default"];
faqs.forEach(function (faq) {
  faq.addEventListener('click', function () {
    faq.classList.toggle('active');
  });
});
var levelbgcolors = ['#383D7D', '#543F57', 'rgb(171, 163, 255)'];
backgroundEl.style.backgroundImage = "url(".concat(_IMG_background_png__WEBPACK_IMPORTED_MODULE_32__["default"], ")");
pImg1.src = _IMG_playeroneright_png__WEBPACK_IMPORTED_MODULE_13__["default"];
pImg2.src = _IMG_playertworight_png__WEBPACK_IMPORTED_MODULE_15__["default"];
pImg3.src = _IMG_playerthreeright_png__WEBPACK_IMPORTED_MODULE_17__["default"];
dc.src = _IMG_discord_png__WEBPACK_IMPORTED_MODULE_20__["default"];
tw.src = _IMG_twitter_png__WEBPACK_IMPORTED_MODULE_21__["default"];
yt.src = _IMG_youtube_png__WEBPACK_IMPORTED_MODULE_26__["default"];
tl.src = _IMG_telegram_png__WEBPACK_IMPORTED_MODULE_27__["default"];
fb.src = _IMG_facebook_png__WEBPACK_IMPORTED_MODULE_28__["default"];
tt.src = _IMG_tiktok_png__WEBPACK_IMPORTED_MODULE_29__["default"];
logo.src = _IMG_discord_png__WEBPACK_IMPORTED_MODULE_20__["default"];
logo2.src = _IMG_discord_png__WEBPACK_IMPORTED_MODULE_20__["default"];
dcf.src = _IMG_discord_png__WEBPACK_IMPORTED_MODULE_20__["default"];
twf.src = _IMG_twitter_png__WEBPACK_IMPORTED_MODULE_21__["default"];
ytf.src = _IMG_youtube_png__WEBPACK_IMPORTED_MODULE_26__["default"];
tlf.src = _IMG_telegram_png__WEBPACK_IMPORTED_MODULE_27__["default"];
fbf.src = _IMG_facebook_png__WEBPACK_IMPORTED_MODULE_28__["default"];
ttf.src = _IMG_tiktok_png__WEBPACK_IMPORTED_MODULE_29__["default"];
ln.src = _IMG_linkedinSmall_png__WEBPACK_IMPORTED_MODULE_22__["default"];
igs.src = _IMG_instagramSmall_png__WEBPACK_IMPORTED_MODULE_24__["default"];
ln1.src = _IMG_linkedinSmall_png__WEBPACK_IMPORTED_MODULE_22__["default"]; // fbs1.src = facebooks;

igs1.src = _IMG_instagramSmall_png__WEBPACK_IMPORTED_MODULE_24__["default"]; // tls1.src = telegrams;

ln2.src = _IMG_linkedinSmall_png__WEBPACK_IMPORTED_MODULE_22__["default"]; // fbs2.src = facebooks;
// igs2.src = instagrams;
// tls2.src = telegrams;
// op.src = opensea;

var playerConfigs = _json_player_json__WEBPACK_IMPORTED_MODULE_3__;
var Positions = _json_platforms_json__WEBPACK_IMPORTED_MODULE_2__;
var peanutPositions = _json_peanutPositions_json__WEBPACK_IMPORTED_MODULE_1__; /// LEVEL-PLAYER SETTİNGS ///

var levelup = 3;
var gravity = .5;
var playerspeed = 7; /// LEVEL-PLAYER SETTİNGS ///

var animationID;
var level = 0;
var sayac = 0;
var timeMin = 0,
    timeSec = 0,
    timeSal = 0,
    score,
    compaireablescore;
var peanut;
var player;
var platfroms = [];
canvas.width = 1000;
canvas.height = 750;
c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);
var data = {};
var isTableCreated = 0;
var td = [];
var levelchechk = 1;
var playerImg = 0;
var random = Math.floor(Math.random() * peanutPositions[level].length);
var randomex = random;
var platformImagelv1 = createImage(_IMG_platformlv1_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var platformImagelv2 = createImage(_IMG_platformlv1_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var platformImagelv3 = createImage(_IMG_platformlv3_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
var platformImage = [platformImagelv1, platformImagelv2, platformImagelv3];
var peanutImage = createImage(_IMG_peanut1_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
sayacLabel.style.display = 'none';
sayacLabel.innerHTML = "00:00";
goscore.innerHTML = "00:00:00";
whoIsHaveBiggestScore();

radioBttn1.onchange = function chg() {
  player.currentsprite = player.sprites.run[0].right;
  playerImg = 0;
};

radioBttn2.onchange = function chg() {
  player.currentsprite = player.sprites.run[1].right;
  playerImg = 1;
};

radioBttn3.onchange = function chg() {
  player.currentsprite = player.sprites.run[2].right;
  playerImg = 2;
};

var Player = /*#__PURE__*/function () {
  function Player(_ref) {
    var x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, Player);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = createImage(_IMG_playeroneleft_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
    this.speed = playerspeed;
    this.width = 50;
    this.height = 50;
    this.sprites = {
      run: [{
        left: createImage(_IMG_playeroneleft_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
        right: createImage(_IMG_playeroneright_png__WEBPACK_IMPORTED_MODULE_13__["default"])
      }, {
        left: createImage(_IMG_playertwoleft_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
        right: createImage(_IMG_playertworight_png__WEBPACK_IMPORTED_MODULE_15__["default"])
      }, {
        left: createImage(_IMG_playerthreeleft_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
        right: createImage(_IMG_playerthreeright_png__WEBPACK_IMPORTED_MODULE_17__["default"])
      }]
    };
    this.currentsprite = this.sprites.run[playerImg].left;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentsprite, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height - 3) this.velocity.y += gravity;else this.velocity.y = 0;
    }
  }]);

  return Player;
}();

player = new Player({
  x: playerConfigs[level].playerx,
  y: playerConfigs[level].playery
});

var Platform = /*#__PURE__*/function () {
  function Platform(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var Peanut = /*#__PURE__*/function () {
  function Peanut(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, Peanut);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Peanut, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Peanut;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var initf = function init() {
  PlatformsCreate();
  peanut = new Peanut({
    x: peanutPositions[level][random].x,
    y: peanutPositions[level][random].y,
    image: peanutImage
  });
  player = new Player({
    x: playerConfigs[level].playerx,
    y: playerConfigs[level].playery
  });
};

function animate() {
  animationID = requestAnimationFrame(animate);
  c.fillStyle = levelbgcolors[level];
  c.fillRect(0, 0, canvas.width, canvas.height);
  platfroms.forEach(function (platform) {
    platform.draw();
  });
  peanut.draw();
  player.update();

  if (keys.right.pressed && player.position.x + player.width < canvas.width) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else player.velocity.x *= 0;

  platfroms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }

    if (player.position.x + player.width >= peanut.position.x + peanut.width - 25 && player.position.y + player.height >= peanut.position.y + peanut.height - 25 && player.position.x + player.width <= peanut.position.x + peanut.width + 25 && player.position.y + player.height <= peanut.position.y + peanut.height + 25) {
      sayac++; // GameOver Check Point

      if (level == 3) {
        peanut.position.x = -50;
        peanut.position.y = -50;
        cancelAnimationFrame(animationID);
        menu.style.display = 'flex';
        sayacLabel.style.display = 'none';
        data.userName = playername.value;
        addNewScore(data);
        whoIsHaveBiggestScore();
      } // Level UP POINT


      if (sayac % levelup == 0 && sayac != 0) {
        level++;

        if (level != 3) {
          levelchechk = 1;
          PlatformsCreate();
        }
      }

      while (randomex == random && level != 3) {
        random = Math.floor(Math.random() * peanutPositions[level].length);
      }

      if (level != 3) {
        peanut.position.x = peanutPositions[level][random].x;
        peanut.position.y = peanutPositions[level][random].y;
      }

      randomex = random;
    }

    if (sayac % levelup == 0 && levelchechk == 1) {
      levelchechk = 0;
      player.position.y = playerConfigs[level].playery;
      player.position.x = playerConfigs[level].playerx;
    }
  });
}

addEventListener('keydown', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      player.currentsprite = player.sprites.run[playerImg].left;
      keys.left.pressed = true;
      break;

    case 68:
      player.currentsprite = player.sprites.run[playerImg].right;
      keys.right.pressed = true;
      break;

    case 87:
      if (player.velocity.y == 0) {
        player.velocity.y -= 14.5;
      }

      ;
      break;

    case 83:
      if (player.position.y <= 624) {
        player.velocity.y += 1;
      }

      ;
      break;

    default:
      break;
  }
});
addEventListener('keyup', function (_ref5) {
  var keyCode = _ref5.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;

    case 68:
      keys.right.pressed = false;
      break;

    case 87:
      player.velocity.y -= 0.1;
      break;

    default:
      break;
  }
});

function PlatformsCreate() {
  for (var i = 0; i < Positions[level].length; i++) {
    platfroms[i] = new Platform({
      x: Positions[level][i]['platform-x'],
      y: Positions[level][i]['platform-y'],
      image: platformImage[level]
    });
  }
}

;
startbutton.addEventListener('click', function () {
  if (playername.value == '') {
    console.log('isim girsene orospu çocu');
    window.alert('Please enter your Discord Nickname');
  } else {
    timeMin = 0;
    timeSec = 0;
    level = 0;
    sayac = 0;
    sayacLabel.style.display = 'flex';
    sayacLabel.innerHTML = "00:00";
    goscore.innerHTML = sayacLabel.innerHTML;
    sayacLabel.style.display = 'flex';
    initf();
    animate();
    var myfunc = setInterval(function Gametime() {
      timeSal++;

      if (timeSal == 100) {
        timeSal = 0;
        timeSec++;

        if (timeSec == 60) {
          timeMin++;
          timeSec = 0;
        }
      }

      score = String(timeMin).padStart(2, '0') + ":" + String(timeSec).padStart(2, '0') + ":" + String(timeSal).padStart(2, '0');
      sayacLabel.innerHTML = score;
      goscore.innerHTML = score;
      data.scoreInt = String(timeMin).padStart(2, '0') + String(timeSec).padStart(2, '0') + String(timeSal).padStart(2, '0');
      data.scoreText = score;

      if (level == Positions.length) {
        clearInterval(myfunc);
      }
    }, 10);
    menu.style.display = 'none';
  }
}); // window.onload = () => {
//     web3 = new Web3(window.ethereum);
//     try {
//         if (!window.ethereum) throw new Error('Metamask is not installed! Please install Metamask.');
//         let adress = window.ethereum.request({ method: 'eth_requestAccounts' });
//         if ((web3.eth.getChainId()) != 1) {
//             changeNetwork();
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
// const networkCheck = () => {
//     if ((web3.eth.getChainId()) != 1) {
//         changeNetwork();
//     }
// }
// setInterval(networkCheck, 5000);

function changeNetwork() {
  window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{
      chainId: '0x1'
    }]
  });
}

;
var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

var countDownFunction = function countDownFunction() {
  var countDownEnd = new Date('11 Dec 2022');
  var currentDate = new Date();
  var totalSeconds = (countDownEnd - currentDate) / 1000;
  daysEl.innerHTML = Math.floor(totalSeconds / 3600 / 24);
  hoursEl.innerHTML = Math.floor(totalSeconds / 3600) % 24;
  minutesEl.innerHTML = Math.floor(totalSeconds / 60) % 60;
  secondsEl.innerHTML = Math.floor(totalSeconds) % 60;
};

countDownFunction();
setInterval(countDownFunction, 1000);
var changeValue = {
  btn1: {
    color: 'black',
    head: 'PHASE 1',
    text1: 'Patates',
    text2: 'Sucuk',
    text3: 'At',
    text4: 'It'
  },
  btn2: {
    color: 'green',
    head: 'PHASE 2',
    text1: 'Sucuk',
    text2: 'Patates',
    text3: 'At',
    text4: 'It'
  },
  btn3: {
    color: 'gray',
    head: 'PHASE 3',
    text1: 'At',
    text2: 'Sucuk',
    text3: 'Patates',
    text4: 'It'
  }
};
var roadmapLevel = 0;
roadmapLeftArrow.addEventListener('click', function () {
  console.log(roadmapLevel);
  if (roadmapLevel === 0) return;
  roadmapLevel--;
  decideRoadmapLevel(roadmapLevel);
});
roadmapRightArrow.addEventListener('click', function () {
  console.log(roadmapLevel);
  if (roadmapLevel === 2) return;
  roadmapLevel++;
  decideRoadmapLevel(roadmapLevel);
});

var decideRoadmapLevel = function decideRoadmapLevel(level) {
  switch (roadmapLevel) {
    case 0:
      roadmapBtnOne.style.background = '#21E786';
      roadmapBtnTwo.style.background = '#888B8E';
      roadmapBtnThree.style.background = '#888B8E';
      roadmapChange(changeValue.btn1);
      break;

    case 1:
      roadmapBtnOne.style.background = '#888B8E';
      roadmapBtnTwo.style.background = '#21E786';
      roadmapBtnThree.style.background = '#888B8E';
      roadmapChange(changeValue.btn2);
      break;

    case 2:
      roadmapBtnOne.style.background = '#888B8E';
      roadmapBtnTwo.style.background = '#888B8E';
      roadmapBtnThree.style.background = '#21E786';
      roadmapChange(changeValue.btn3);
      break;
  }

  roadmapModal.classList.add('change');
  setTimeout(function () {
    roadmapModal.classList.remove('change');
  }, 300);
};

roadmapBtnOne.addEventListener('click', function () {
  if (roadmapLevel == 0) return;
  roadmapLevel = 0;
  decideRoadmapLevel(roadmapLevel);
});
roadmapBtnTwo.addEventListener('click', function () {
  if (roadmapLevel == 1) return;
  roadmapLevel = 1;
  decideRoadmapLevel(roadmapLevel);
});
roadmapBtnThree.addEventListener('click', function () {
  if (roadmapLevel == 2) return;
  roadmapLevel = 2;
  decideRoadmapLevel(roadmapLevel);
});

function roadmapChange(changeValue) {
  RoadmapImageOne.style.backgroundColor = changeValue.color;
  RoadmapImageTwo.style.backgroundColor = changeValue.color;
  RoadmapImageThree.style.backgroundColor = changeValue.color;
  roadmapHead.innerHTML = changeValue.head;
  roadmapText1.innerHTML = changeValue.text1;
  roadmapText2.innerHTML = changeValue.text2;
  roadmapText3.innerHTML = changeValue.text3;
  roadmapText4.innerHTML = changeValue.text4;
}

;
home.style.width = window.innerWidth;
window.addEventListener('resize', function () {
  home.style.width = window.innerWidth;
});

var onEmailSubmit = function onEmailSubmit(data, elementName, returnData, color) {
  elementName = elementName == 'topSubMail' ? elementName = topSubMail : elementName = bottomSubMail;
  elementName.value = '';
  elementName.style.border = color == 'error' ? '1px solid rgb(247, 0, 0)' : '2px solid rgba(31, 247, 103, 0.85)';
  elementName.placeholder = "".concat(returnData);
  setTimeout(function () {
    elementName.style.borderWidth = '0px';
  }, 3000);
};

var isEmailValid = function isEmailValid(mail, elementName) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(mail)) {
    onEmailSubmit(mail, elementName, 'Please enter valid email adress!', 'error');
    return false;
  }

  return true;
};

var subscribeBtnClick = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, elementName) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:3003/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: data
              })
            }).then(function (response) {
              if (response.status == 200) {
                onEmailSubmit(data, elementName, 'Email sucsessfuly added!', 'sucsess');
              } else {
                onEmailSubmit(data, elementName, 'This email is already exist!', 'error');
              }
            });

          case 2:
            response = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function subscribeBtnClick(_x, _x2) {
    return _ref6.apply(this, arguments);
  };
}();

topSubBtn.addEventListener('click', function () {
  var valid = isEmailValid(topSubMail.value, 'topSubMail');

  if (valid) {
    subscribeBtnClick(topSubMail.value, 'topSubMail');
    subCountHandler();
  }
});
bottomSubBtn.addEventListener('click', function () {
  var valid = isEmailValid(bottomSubMail.value, 'bottomSubMail');

  if (valid) {
    subscribeBtnClick(bottomSubMail.value, 'bottomSubMail');
    subCountHandler();
  }
});

function fetchText(_x3, _x4) {
  return _fetchText.apply(this, arguments);
}

function _fetchText() {
  _fetchText = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(i, j) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fetch('http://localhost:3003/score').then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data[i].userName.length > 14) {
                var tempData = data[i].userName;
                tempData = tempData.slice(0, 14);
                tempData += '...';
                data[i].userName = tempData;
              }

              td[i + 2 + j].innerHTML = data[i].userName;
              td[i + 3 + j].innerHTML = data[i].scoreText;
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchText.apply(this, arguments);
}

function whoIsHaveBiggestScore() {
  var tableEl = document.getElementById('ScoreTable');
  var j = 0;

  for (var i = 0; i < 5; i++) {
    if (isTableCreated == 0) {
      var tr = document.createElement('tr');
      td[i + 1 + j] = document.createElement('td');
      td[i + 2 + j] = document.createElement('td');
      td[i + 3 + j] = document.createElement('td');
      td[i + 1 + j].innerHTML = i + 1;
      tr.appendChild(td[i + 1 + j]);
      tr.appendChild(td[i + 2 + j]);
      tr.appendChild(td[i + 3 + j]);
      tableEl.appendChild(tr);
      td[i + 1 + j].className = "pl-12 scoreTableUsers";
      td[i + 2 + j].className = "pl-12 scoreTableUsers";
      td[i + 3 + j].className = "pl-12 scoreTableUsers";
    }

    fetchText(i, j);
    j += 3;
  }

  isTableCreated = 1;
}

var addNewScore = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('http://localhost:3003/score', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userName: data.userName,
                scoreText: data.scoreText,
                scoreInt: data.scoreInt
              })
            }).then(function (response) {
              return response.json();
            });

          case 2:
            response = _context2.sent;

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addNewScore(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

var detail = document.getElementById('faqWhiteList');
topWhiteList.addEventListener('click', function () {
  setTimeout(function () {
    detail.open = true;
    detail.toggle;
  }, 1000);
});
bottomWhiteList.addEventListener('click', function () {
  setTimeout(function () {
    detail.open = true;
    detail.toggle;
  }, 1500);
});

function subCountHandler() {
  return _subCountHandler.apply(this, arguments);
}

function _subCountHandler() {
  _subCountHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            fetch('http://localhost:3003/subscribe').then(function (response) {
              return response.json();
            }).then(function (data) {
              subCount.innerHTML = data[0].subcount;
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _subCountHandler.apply(this, arguments);
}

subCountHandler();

/***/ }),

/***/ "./src/json/peanutPositions.json":
/*!***************************************!*\
  !*** ./src/json/peanutPositions.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"x\":24,\"y\":97},{\"x\":25,\"y\":275},{\"x\":103,\"y\":275},{\"x\":177,\"y\":275},{\"x\":370,\"y\":414},{\"x\":531,\"y\":204},{\"x\":370,\"y\":28},{\"x\":953,\"y\":36},{\"x\":875,\"y\":432},{\"x\":275,\"y\":692}],[{\"x\":25,\"y\":80},{\"x\":397,\"y\":80},{\"x\":746,\"y\":80},{\"x\":942,\"y\":80},{\"x\":327,\"y\":250},{\"x\":472,\"y\":250},{\"x\":920,\"y\":250},{\"x\":22,\"y\":390},{\"x\":311,\"y\":390},{\"x\":770,\"y\":390},{\"x\":130,\"y\":625},{\"x\":689,\"y\":625}],[{\"x\":12,\"y\":14},{\"x\":800,\"y\":14},{\"x\":800,\"y\":225},{\"x\":800,\"y\":430},{\"x\":800,\"y\":625},{\"x\":12,\"y\":225},{\"x\":12,\"y\":430},{\"x\":12,\"y\":625}]]");

/***/ }),

/***/ "./src/json/platforms.json":
/*!*********************************!*\
  !*** ./src/json/platforms.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"platform-x\":13,\"platform-y\":572},{\"platform-x\":362,\"platform-y\":480},{\"platform-x\":490,\"platform-y\":385},{\"platform-x\":362,\"platform-y\":270},{\"platform-x\":13,\"platform-y\":167},{\"platform-x\":950,\"platform-y\":207},{\"platform-x\":567,\"platform-y\":117},{\"platform-x\":13,\"platform-y\":572},{\"platform-x\":362,\"platform-y\":480},{\"platform-x\":490,\"platform-y\":385},{\"platform-x\":362,\"platform-y\":270},{\"platform-x\":13,\"platform-y\":167},{\"platform-x\":950,\"platform-y\":207},{\"platform-x\":567,\"platform-y\":117},{\"platform-x\":567,\"platform-y\":117},{\"platform-x\":567,\"platform-y\":117}],[{\"platform-x\":766,\"platform-y\":584},{\"platform-x\":470,\"platform-y\":584},{\"platform-x\":174,\"platform-y\":584},{\"platform-x\":-121,\"platform-y\":584},{\"platform-x\":900,\"platform-y\":443},{\"platform-x\":605,\"platform-y\":443},{\"platform-x\":310,\"platform-y\":443},{\"platform-x\":13,\"platform-y\":443},{\"platform-x\":766,\"platform-y\":300},{\"platform-x\":470,\"platform-y\":300},{\"platform-x\":174,\"platform-y\":300},{\"platform-x\":-121,\"platform-y\":300},{\"platform-x\":900,\"platform-y\":135},{\"platform-x\":605,\"platform-y\":135},{\"platform-x\":310,\"platform-y\":135},{\"platform-x\":13,\"platform-y\":135}],[{\"platform-x\":0,\"platform-y\":65},{\"platform-x\":665,\"platform-y\":65},{\"platform-x\":-400,\"platform-y\":275},{\"platform-x\":270,\"platform-y\":275},{\"platform-x\":847,\"platform-y\":275},{\"platform-x\":-250,\"platform-y\":480},{\"platform-x\":420,\"platform-y\":480},{\"platform-x\":0,\"platform-y\":675},{\"platform-x\":577,\"platform-y\":675},{\"platform-x\":-400,\"platform-y\":275},{\"platform-x\":270,\"platform-y\":275},{\"platform-x\":847,\"platform-y\":275},{\"platform-x\":-250,\"platform-y\":480},{\"platform-x\":420,\"platform-y\":480},{\"platform-x\":0,\"platform-y\":675},{\"platform-x\":577,\"platform-y\":675}]]");

/***/ }),

/***/ "./src/json/player.json":
/*!******************************!*\
  !*** ./src/json/player.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"playerx\":905,\"playery\":625},{\"playerx\":350,\"playery\":625},{\"playerx\":905,\"playery\":625}]");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map