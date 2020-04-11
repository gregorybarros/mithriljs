const m = require("mithril")
const User = require("../models/User")

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu", [
                m(m.route.Link, {href: "/list", onclick: User.loadList}, "Todos usuários"),
            ]),
            m("section", vnode.children)
        ])
    }
}