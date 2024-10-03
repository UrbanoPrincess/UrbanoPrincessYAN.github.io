import { c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentTab, $$unsubscribe_currentTab;
  let basePath = "/UrbanoPrincessYAN.github.io";
  let tabs = [
    {
      name: "Home",
      href: `${basePath}/Home-Page`
    },
    {
      name: "Portfolio",
      href: `${basePath}/portfolio`
    },
    { name: "About", href: `${basePath}/about` },
    {
      name: "Contact",
      href: `${basePath}/contact`
    }
  ];
  let currentTab = writable("Home");
  $$unsubscribe_currentTab = subscribe(currentTab, (value) => $currentTab = value);
  $$unsubscribe_currentTab();
  return `<nav class="flex space-x-4 p-4 bg-gray-800">${each(tabs, (tab) => {
    return `<a${add_attribute("href", tab.href, 0)} class="${"text-white px-3 py-2 rounded-md text-sm font-medium " + escape(
      $currentTab === tab.name ? "bg-gray-900" : "hover:bg-gray-700",
      true
    )}">${escape(tab.name)} </a>`;
  })}</nav>  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
