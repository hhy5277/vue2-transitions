/*!
 * vue2-transitions v0.1.2
 * (c) 2017-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
'use strict';

var baseTransition = {
  inheritAttrs: false,
  props: {
    /**
     * Transition duration. Number for specifying the same duration for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    duration: {
      type: [Number, Object],
      default: 300
    },
    /**
     * Whether the component should be a `transition-group` component.
     */
    group: Boolean,
    /**
     *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
     *  Can be specified with styles as well but it's shorter with this prop
     */
    origin: {
      type: String,
      default: ''
    },
    /**
     * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
     */
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        };
      }
    }
  },
  computed: {
    componentType: function componentType() {
      return this.group ? 'transition-group' : 'transition';
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.animationDuration = (enterDuration / 1000) + "s";
      this.setStyles(el);
    },
    cleanUpStyles: function cleanUpStyles(el) {
      var this$1 = this;

      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = '';
        }
      });
    },
    beforeLeave: function beforeLeave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      el.style.animationDuration = (leaveDuration / 1000) + "s";
      this.setStyles(el);
    },
    setStyles: function setStyles(el) {
      var this$1 = this;

      if (this.origin) {
        el.style.transformOrigin = this.origin;
      }
      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = styleValue;
        }
      });
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var FadeTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "fadeIn", "leave-active-class": "fadeOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'fade-transition',
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes zoomIn { from { opacity: 0; transform: scale3d(.3, .3, .3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(.3, .3, .3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomCenterTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "zoomIn", "leave-active-class": "zoomOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-center-transition',
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomXTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "zoomInX", "leave-active-class": "zoomOutX" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-x-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        };
      }
    }
  },
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1) } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomYTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "zoomInY", "leave-active-class": "zoomOutY" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-y-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "@keyframes zoomInUp { from { opacity: 0; transform: scaleY(0); transform-origin: top center; } 50% { opacity: 1; } to { transform: scaleY(1); } } .zoomInUp { animation-name: zoomInUp; } @keyframes zoomOutUp { from { opacity: 1; } 50% { transform: scaleY(0); } to { opacity: 0; } } .zoomOutUp { animation-name: zoomOutUp; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomUpTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "zoomInUp", "leave-active-class": "zoomOutUp" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-up-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        };
      }
    }
  },
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " /*# sourceMappingURL=CollapseTransition.vue.map */";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var CollapseTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.afterEnter, "enter": _vm.enter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'collapse-transition',
  mixins: [baseTransition],
  methods: {
    transitionStyle: function transitionStyle(duration) {
      if ( duration === void 0 ) duration = 300;

      var durationInSeconds = duration / 1000;
      var style = durationInSeconds + "s height ease-in-out, " + durationInSeconds + "s padding-top ease-in-out, " + durationInSeconds + "s padding-bottom ease-in-out";
      return style;
    },
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.transition = this.transitionStyle(enterDuration);
      if (!el.dataset) { el.dataset = {}; }

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      this.setStyles(el);
    },

    enter: function enter(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = 'hidden';
    },

    afterEnter: function afterEnter(el) {
      // for safari: remove class then reset height is necessary
      el.style.transition = '';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    },

    beforeLeave: function beforeLeave(el) {
      if (!el.dataset) { el.dataset = {}; }
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
      this.setStyles(el);
    },

    leave: function leave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        el.style.transition = this.transitionStyle(leaveDuration);
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },

    afterLeave: function afterLeave(el) {
      el.style.transition = '';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ScaleTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "scaleIn", "leave-active-class": "scaleOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'scale-transition',
  mixins: [baseTransition],
  props: {
    origin: {
      type: String,
      default: 'top left'
    },
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideYUpTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "slideYIn", "leave-active-class": "slideYOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-y-up-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideYDownTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "slideYDownIn", "leave-active-class": "slideYDownOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-y-down-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideXLeftTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "slideXLeftIn", "leave-active-class": "slideXLeftOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-x-left-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideXRightTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "enter-active-class": "slideXRightIn", "leave-active-class": "slideXRightOut" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.cleanUpStyles, "before-leave": _vm.beforeLeave, "after-leave": _vm.cleanUpStyles } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-x-right-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

var components = {};
components[FadeTransition.name] = FadeTransition;
components[ZoomCenterTransition.name] = ZoomCenterTransition;
components[ZoomXTransition.name] = ZoomXTransition;
components[ZoomYTransition.name] = ZoomYTransition;
components[ZoomUpTransition.name] = ZoomUpTransition;
components[CollapseTransition.name] = CollapseTransition;
components[ScaleTransition.name] = ScaleTransition;
components[SlideYUpTransition.name] = SlideYUpTransition;
components[SlideYDownTransition.name] = SlideYDownTransition;
components[SlideXLeftTransition.name] = SlideXLeftTransition;
components[SlideXRightTransition.name] = SlideXRightTransition;
function install(Vue, options) {
  if (options && options.components) {
    options.components.forEach(function (c) { return Vue.component(c.name, components[c.name]); });
  } else {
    Object.keys(components).forEach(function (key) {
      Vue.component(key, components[key]);
    });
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install });
}

var index = {
  install: install,
  FadeTransition: FadeTransition,
  ZoomCenterTransition: ZoomCenterTransition,
  ZoomXTransition: ZoomXTransition,
  ZoomYTransition: ZoomYTransition,
  ZoomUpTransition: ZoomUpTransition,
  CollapseTransition: CollapseTransition,
  ScaleTransition: ScaleTransition,
  SlideYUpTransition: SlideYUpTransition,
  SlideYDownTransition: SlideYDownTransition,
  SlideXLeftTransition: SlideXLeftTransition,
  SlideXRightTransition: SlideXRightTransition
};

module.exports = index;