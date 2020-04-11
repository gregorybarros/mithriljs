const m = require("mithril")

const UserList = require("./views/UserList")
const UserForm = require("./views/UserForm")
const Layout = require("./views/Layout")


m.route(document.body, "/list", {
    "/list": {
        render: function(vnode) {
            return m(Layout, m(UserList, vnode.attrs))
        }
    },
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },
})