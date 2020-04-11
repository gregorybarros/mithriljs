const m = require("mithril")
const User = require("../models/User")

module.exports = {
    oninit: User.loadList,
    loading: false,
    view: function(vnode) {
        return  [
            m("button.button[type=button]", {
                onclick: function () {
                    vnode.state.loading = true
                    setTimeout(function(){ 
                    let list = User.backup.filter(user => user.category == 'Incentivador')
                    return m.redraw(User.list = list), vnode.state.loading = false
                }, 3000)
                }
            }, "Incentivadores"),
            m("button.button[type=button]", {
                onclick: function () {
                    vnode.state.loading = true
                    setTimeout(function(){
                    let list = User.backup.filter(user => user.category == 'Empresa')
                    return m.redraw(User.list = list), vnode.state.loading = false
                }, 3000)
                }
            }, "Empresas"),
            m("button.button[type=button]", {
                onclick: function () {
                    vnode.state.loading = true
                    setTimeout(function(){
                    let list = User.backup.filter(user => user.category == 'Proponente')
                    return m.redraw(User.list = list), vnode.state.loading = false
                }, 3000)
                }
            }, "Proponentes"),
            m("p"),
            vnode.state.loading ? m("img[src=src/assets/loading.gif]") :          
            m(".user-list", User.list.map(function(user) {
                if (!user.category) {
                    return m(m.route.Link, {
                        class: "user-list-item",
                        href: "/edit/" + user.id,
                    }, 
                    user.firstName + " " + user.lastName)
                }
                    return m(m.route.Link, {
                        class: "user-list-item",
                        href: "/edit/" + user.id,
                    }, 
                    user.firstName + " " + user.lastName + " " + user.category )
                
                
        }))
    ]
    }
}