const m = require("mithril")
const User = require("../models/User")

module.exports = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},
    view: function() {
        return m("form", {
                onsubmit: async function(e) {
                    e.preventDefault()
                    await User.save()
                    alert("Dados salvos com sucesso!")
                }
            }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: function (e) {User.current.firstName = e.target.value},
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: function (e) {User.current.lastName = e.target.value},
                value: User.current.lastName
            }),
            m("label.label", "E-mail"),
            m("input.input[placeholder=E-mail]", {
                oninput: function (e) {User.current.email = e.target.value},
                value: User.current.email,
                type: 'email'
            }),
            m("label.label", "Telefone"),
            m("input.input[placeholder=Telefone]", {
                oninput: function (e) {User.current.phone = e.target.value},
                value: User.current.phone,
                type:'number'
            }),
            m("label.label", "Valor do incentivo"),
            m("input.input[placeholder=Valor do incentivo]", {
                oninput: function (e) {User.current.value = e.target.value},
                value: User.current.value,
                type: "number",
                min: 1,

            }),
            m("label.label", "Categoria"),
            m("select", {
                oninput: function (e) {User.current.category = e.target.value},
                value: User.current.category || 0,
                required: true
            }, [
                m("option", "Incentivador"),
                m("option", "Empresa"),
                m("option", "Proponente")
            ]),
            m("p"),
            m("button.button[type=submit]", "Save"),
        ])
    }
}