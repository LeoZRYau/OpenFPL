import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/index2.js";
import { L as Layout } from "../../../chunks/Layout.js";
const dao_svelte_svelte_type_style_lang = "";
const tokenomics_svelte_svelte_type_style_lang = "";
const Vision = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container-fluid mx-auto p-4"><div class="m-4"><h1 class="text-3xl font-bold">Our Vision</h1>
    <p class="my-4">In an evolving landscape where blockchain technology is still unlocking
      its potential, the Internet Computer offers a promising platform for
      innovative applications. OpenFPL is one such initiative, aiming to
      transform fantasy Premier League football into a more engaging and
      decentralised experience.
    </p>
    <p class="my-4">Our goal is to develop this popular service into a decentralised
      autonomous organisation (DAO), rewarding fans for their insight and
      participation in football.
    </p>
    <p class="my-4">Our vision for OpenFPL encompasses a commitment to societal impact,
      specifically through meaningful contributions to the ICPFA community fund.
      This effort is focused on supporting grassroots football initiatives,
      demonstrating our belief in OpenFPL&#39;s ability to bring about positive
      change in the football community.
    </p>
    <p class="my-4">OpenFPL aims to be recognised as more than just a digital platform; we
      aspire to build a brand that creates diverse revenue opportunities. Our
      economic model is designed to directly benefit our token holders,
      particularly those with staked neurons, through a fair distribution of
      rewards. This ensures that the value generated by the platform is shared
      within our community.
    </p>
    <p class="my-4">Central to OpenFPL is our community focus. We strive to create a space
      where Premier League fans feel at home, with their input shaping the
      service. Our features, including community-based player valuations,
      customisable private leagues, and collaborations with football content
      creators, are all aimed at enhancing user engagement. As we attract more
      users, we expect an increased demand for our services, which will
      contribute to the growth and value of our governance token, $FPL.
    </p>
    <p class="my-4">In essence, OpenFPL represents a unique blend of football passion and
      blockchain innovation. Our approach is about more than just reinventing
      fantasy sports; it&#39;s about building a vibrant community, pushing
      technological boundaries, and generating new economic opportunities.
      OpenFPL seeks to redefine the way fans engage with the sport they love,
      making a real impact in the football world.
    </p>
    <p class="my-4">Innovation is at the heart of OpenFPL. We are excited about exploring the
      possibilities of integrating on-chain AI to assist managers with team
      selection. This endeavor is not just about enhancing the user experience;
      it&#39;s about exploring new frontiers for blockchain technology in sports.
    </p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="m-4"><div class="bg-panel rounded-lg m-4 p-4"><h1 class="p-4 mx-1 text-2xl">OpenFPL Whitepaper</h1>
      <div class="bg-panel rounded-lg m-4"><ul class="flex rounded-lg bg-light-gray px-4 pt-2"><li${add_attribute("class", `mr-4 text-xs md:text-lg ${"active-tab"}`, 0)}><button${add_attribute("class", `p-2 ${"text-white"}`, 0)}>Vision
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute(
        "class",
        `p-2 ${"text-gray-400"}`,
        0
      )}>Gameplay
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute("class", `p-2 ${"text-gray-400"}`, 0)}>Roadmap
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute(
        "class",
        `p-2 ${"text-gray-400"}`,
        0
      )}>Marketing
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute("class", `p-2 ${"text-gray-400"}`, 0)}>Revenue
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute("class", `p-2 ${"text-gray-400"}`, 0)}>DAO
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute(
        "class",
        `p-2 ${"text-gray-400"}`,
        0
      )}>Tokenomics
            </button></li>
          <li${add_attribute("class", `mr-4 text-xs md:text-lg ${""}`, 0)}><button${add_attribute(
        "class",
        `p-2 ${"text-gray-400"}`,
        0
      )}>Architecture
            </button></li></ul>

        ${`${validate_component(Vision, "Vision").$$render($$result, {}, {}, {})}`}</div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
