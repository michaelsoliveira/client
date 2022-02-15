"use strict";
exports.__esModule = true;
var Navigation_1 = require("./Navigation");
var Footer_1 = require("./Footer");
var react_1 = require("next-auth/react");
var outline_1 = require("@heroicons/react/outline");
var resources = [
    {
        name: 'Empresa',
        description: 'Informações da Empresa',
        href: '/empresa',
        icon: outline_1.ClipboardListIcon
    },
    {
        name: 'UMF',
        description: 'Unidade de Manejo Florestal',
        href: '#',
        icon: outline_1.SupportIcon
    },
    {
        name: 'UPA',
        description: 'Unidade de Produção Anual',
        href: '#',
        icon: outline_1.BookmarkAltIcon
    },
    {
        name: 'UT',
        description: 'Unidade de Trabalho',
        href: '#',
        icon: outline_1.CalendarIcon
    },
    {
        name: 'Especies',
        description: 'Espécies Existentes',
        href: '/especie',
        icon: outline_1.ClipboardListIcon
    },
    {
        name: 'Categoria de Espécies',
        description: 'Categoria de Espécies',
        href: '/categoria-especie',
        icon: outline_1.ClipboardListIcon
    }
];
var solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: outline_1.ChartBarIcon
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: outline_1.CursorClickIcon
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: outline_1.ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: outline_1.ViewGridIcon
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: outline_1.RefreshIcon
    },
];
var Layout = function (_a) {
    var children = _a.children;
    var _b = react_1.useSession(), session = _b.data, status = _b.status;
    var defaultNavigation = [
        { name: 'Dashboard', href: '/', current: false, visible: true, subMenu: false, subMenuItems: [] },
        { name: 'Cadastro', href: '#', current: false, visible: !!session, subMenu: true, subMenuItems: resources },
        { name: 'Soluções', href: '#', current: false, visible: true, subMenu: true, subMenuItems: solutions },
        { name: 'Planejamento', href: '/overview', current: false, visible: !!session, subMenu: false, subMenuItems: [] },
        { name: 'Relatórios', href: '#', current: false, visible: !!session, subMenu: false, subMenuItems: [] }
    ];
    var userNavigation = [
        { name: 'Perfil', href: '#' },
        { name: 'Alterar Senha', href: '/user/change-password' },
        { name: 'Logout', href: '#', click: function () { return react_1.signOut(); } },
    ];
    return (React.createElement("div", { className: "content font-roboto" },
        React.createElement(Navigation_1["default"], { session: session, defaultNavigation: defaultNavigation, userNavigation: userNavigation }),
        children,
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Layout;
