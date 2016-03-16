; (function () {
    var vueLang = {};
    vueLang.install = function (Vue, options) {

        // register the format filter (inspired by Haixing Hu)
        var replace = require("./replace.js");
        Vue.filter("replace", replace);

        function update(vm) {
            var i = vm._watchers.length
            while (i--) {
                vm._watchers[i].update(true); // shallow updates
            }
            var children = vm.$children;
            i = children.length;
            while (i--) {
                var child = children[i]
                update(child)
            }
        }

        Vue.locales = options.locales
        var lang = options.lang || 'en'

        Vue.prototype.$lang = Vue.locales[lang]

        Vue.prototype.$langs = Object.keys(Vue.locales)

        Vue.prototype.$setLang = function(language) {
            Vue.prototype.$lang = Vue.locales[language]
            update(this.$root);
        }
    }

    if (typeof exports == "object") {
        module.exports = vueLang;
    } else if (typeof define == "function" && define.amd) {
        define([], function () { return vueLang });
    } else if (window.Vue) {
        window.vueLang = vueLang;
        Vue.use(vueLang);
    }
})();