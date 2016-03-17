; (function () {
    var vueLang = {};
    vueLang.install = function (Vue, options) {

        // register the replace filter (Credits: @Haixing-Hu, https://github.com/Haixing-Hu/vue-format/)
        var replace = require("./replace.js");
        Vue.filter("replace", replace);

        // Set parameters
        Vue.locales = options.locales || {}
        var lang = options.lang || ""

        if(!options.lang){console.warn("vue-lang: No default language given. Please specify as {lang: ..}")}

        if(lang){
            Vue.prototype.$lang = Vue.locales[lang]
        }else{
            Vue.prototype.$lang = {}
        }

        Vue.prototype.$langs = Object.keys(Vue.locales)

        Vue.prototype.$setLang = function(language) {
            if(language && Vue.prototype.$langs.indexOf(language) > -1){
                Vue.prototype.$lang = Vue.locales[language]
                update(this.$root);
            }else{
                console.warn("vue-lang: Language not given or not initialized")
            }
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

    /**
     * Credits: @Haixing-Hu
     *
     * Updates all the watchers in the Vue instance of a component tree.
     *
     * This function is inspired by the "_digest()" function in the
     * "src/instance/scope.js" of the source of Vue.js, excepts that this function
     * updates the children components no matter whether it is inheritable.
     *
     * @param vm
     *    the root of the component tree.
     */
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

})();
