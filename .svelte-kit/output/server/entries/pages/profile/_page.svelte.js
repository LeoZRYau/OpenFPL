import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { T as TeamService } from "../../../chunks/TeamService.js";
import { L as Layout } from "../../../chunks/Layout.js";
const Profile_detail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new TeamService();
  let teams = [];
  return `<div class="container mx-auto p-4"><div class="flex flex-wrap"><div class="w-full md:w-auto px-2 ml-4 md:ml-0"><img src="profile_placeholder.png" alt="Profile" class="w-48 md:w-80 p-4"></div>
    <div class="w-full md:w-3/4 px-2 mb-4"><div class="ml-4 p-4 rounded-lg"><p class="text-xs mb-2">Display Name:</p>
        <h2 class="text-2xl font-bold mb-2">Not Set</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded">Update
        </button>
        <p class="text-xs mb-2 mt-4">Favourite Team:</p>
        <select class="p-2 fpl-dropdown text-sm md:text-xl">${each(teams, (team) => {
    return `<option${add_attribute("value", team.id, 0)}>${escape(team.friendlyName)}</option>`;
  })}</select>

        <p class="text-xs mb-2 mt-4">Joined:</p>
        <h2 class="text-2xl font-bold mb-2">August 2023</h2>

        <p class="text-xs mb-2 mt-4">Principal:</p>
        <h2 class="text-xs font-bold mb-2">yxaeb-cknlu-ymf7s-hyhv4-ngpus-hurji-roqrb-hcf46-6ed5v-cp3qa-uqe
        </h2></div></div></div>

  <div class="flex flex-wrap -mx-2 mt-4"><div class="w-full px-2 mb-4"><div class="mt-4 px-2"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="flex items-center p-4 rounded-lg shadow-md border border-gray-700"><img src="ICPCoin.png" alt="ICP" class="h-12 w-12">
            <div class="ml-4"><p class="font-bold">ICP</p>
              <p>0.00 ICP</p></div></div>
          <div class="flex items-center p-4 rounded-lg shadow-md border border-gray-700"><img src="FPLCoin.png" alt="FPL" class="h-12 w-12">
            <div class="ml-4"><p class="font-bold">FPL</p>
              <p>0.00 FPL</p></div></div>
          <div class="flex items-center p-4 rounded-lg shadow-md border border-gray-700"><img src="ckBTCCoin.png" alt="ICP" class="h-12 w-12">
            <div class="ml-4"><p class="font-bold">ckBTC</p>
              <p>0.00 ckBTC</p></div></div>
          <div class="flex items-center p-4 rounded-lg shadow-md border border-gray-700"><img src="ckETHCoin.png" alt="ICP" class="h-12 w-12">
            <div class="ml-4"><p class="font-bold">ckETH</p>
              <p>0.00 ckETH</p></div></div></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="m-4"><div class="bg-panel rounded-lg m-4"><ul class="flex rounded-lg bg-light-gray px-4 pt-2"><li${add_attribute("class", `mr-4 text-xs md:text-lg ${"active-tab"}`, 0)}><button${add_attribute("class", `p-2 ${"text-white"}`, 0)}>Details
          </button></li>
        <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute(
        "class",
        `p-2 ${"text-gray-400"}`,
        0
      )}>Gameweeks
          </button></li></ul>

      ${`${validate_component(Profile_detail, "ProfileDetail").$$render($$result, {}, {}, {})}`}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
