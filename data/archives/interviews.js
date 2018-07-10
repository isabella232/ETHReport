const data = [
  { id: 1,
    name: 'Fabio Berger + Remco Bloemen',
    content: '<div>\n' +
    '<p class="c13"></p>\n' +
    '</div>\n' +
    '<h2 class="c16" id="h.5oofkjz263bh"><span class="c10 c11">Fabio\n' +
    'Berger + Remco Bloemen</span></h2>\n' +
    '<p class="c13"></p>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0 start" start="1">\n' +
    '<li class="c6"><span class="c9">What type of apps do you\n' +
    'build?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">0x - Decentralized exchange\n' +
    'protocol. It is a set of smart contracts that handle standard\n' +
    'transactions in an order format.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">The key advantage here is that\n' +
    'these smart contracts leads to shared liquidity</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">We also achieve increased security\n' +
    'and network liquidity through our architecture.</span></li>\n' +
    '<li class="c8"><span class="c3">We launched the network in August\n' +
    '2017.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">It works, but is V1. We are working\n' +
    'on V2 which helps people build hybrid stations, supports new token\n' +
    'standards, and makes the contract more gas efficient.</span></li>\n' +
    '<li class="c5"><span class="c3">V1 only allows humans to create\n' +
    'orders; V2 will allow new smart contract to create orders. This is\n' +
    'HUGE.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">Notes:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">We’re building the protocol;\n' +
    'designing the standard; building dev tools for anyone to build a\n' +
    'decentralized exchange.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="5">\n' +
    '<li class="c8"><span class="c3">Orders may become invalid for any\n' +
    'reason:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Order being filled</span></li>\n' +
    '<li class="c5"><span class="c3">Griefing attacks</span></li>\n' +
    '<li class="c5"><span class="c3">We’ve now built an OrderWatcher\n' +
    'that keeps relayers updated on the state of orders.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">We’re using contract Events as a\n' +
    'proxy for state changes.</span></li>\n' +
    '<li class="c7"><span class="c3">Can do a diff between state trees\n' +
    'and between block headers.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="4">\n' +
    '<li class="c5"><span class="c3">We also have a set of smart\n' +
    'contracts to handle settlement;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Everyone who wants to trade is\n' +
    'setting allowances on a smart contract.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">We want upgradability.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="2">\n' +
    '<li class="c6"><span class="c9 c10">What are the\n' +
    'tools/libraries/frameworks you use?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">EthereumJS / truffle hardwallet\n' +
    'provider / Typedoc (to generate documentation) /</span></li>\n' +
    '<li class="c8"><span class="c3">We don’t use Truffle\n' +
    'anymore</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Not reliable – can have race\n' +
    'conditions;</span></li>\n' +
    '<li class="c5"><span class="c3">Artifacts don’t allow you to have\n' +
    'versions of the contract on different networks</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">You don’t run into this stuff if\n' +
    'you’re just building a “hello world”</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="3">\n' +
    '<li class="c5"><span class="c3">Overwriting parts of the\n' +
    'contracts;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">We rolled our own. It’s open-source\n' +
    'but not documented. We have other things that are keeping us\n' +
    'busy.</span></li>\n' +
    '<li class="c8"><span class="c3">The problem is that Truffle has too\n' +
    'much functionality –– we would like to see more of a Unix\n' +
    'philosophy.</span></li>\n' +
    '<li class="c8"><span class="c3">Cannot support different versions\n' +
    'of Solidity.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Version management doesn’t\n' +
    'exist.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="6">\n' +
    '<li class="c8"><span class="c3">EthPM –– doesn’t have versioning\n' +
    'either? It’s going through a big refactor, so we held off. We need\n' +
    'the NPM package manager.</span></li>\n' +
    '<li class="c8"><span class="c3">We have built a lot of developer\n' +
    'tools to interface with the smart contracts ourselves.</span></li>\n' +
    '<li class="c8"><span class="c3">We have also built own deployer and\n' +
    'migration tool, as truffle’s did not suit our needs.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="3">\n' +
    '<li class="c6"><span class="c9 c10">What are your biggest\n' +
    'frustrations?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Getting a simple experimental\n' +
    'environment up is hard</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Remix is there; but it’s not\n' +
    'enough.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">Tracing and profiling is not\n' +
    'existent.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Remix does it, but can’t do it\n' +
    'locally.</span></li>\n' +
    '<li class="c5"><span class="c3">“Code coverage” tool exists but\n' +
    'inserts console.logs in</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Adding up gas costs per line of\n' +
    'code.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="3">\n' +
    '<li class="c5"><span class="c3">Need to do profiling, because gas\n' +
    'costs depend on inputs.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">Solidity language\n' +
    'itself:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Crashed the Solidity compiler twice\n' +
    'today.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. AbiEncoderV2 is pretty new and\n' +
    'hard to understand/use.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="2">\n' +
    '<li class="c5"><span class="c3">The code that it produces is\n' +
    'inefficient.</span></li>\n' +
    '<li class="c5"><span class="c3">There is a stark stack limit in\n' +
    'solidity</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">All the variables are locally\n' +
    'scoped.</span></li>\n' +
    '<li class="c7"><span class="c3">Un-intuitive as it is a curly\n' +
    'braced language.</span></li>\n' +
    '<li class="c7"><span class="c3">The lifecycle hook value_of is\n' +
    'within a function.</span></li>\n' +
    '<li class="c7"><span class="c3">Can only access top 16 slack slots.\n' +
    'Including input and output.</span></li>\n' +
    '<li class="c7"><span class="c3">We need to implement a graph\n' +
    'coloring register allocator – to find out what the lifetime of the\n' +
    'variables is.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">“This stack slot was used in the\n' +
    'first half –– the second half you can use”</span></li>\n' +
    '<li class="c0"><span class="c3">Or implement register\n' +
    'splitting.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="4">\n' +
    '<li class="c5"><span class="c3">Function inlining is frustrating\n' +
    'sometimes:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. SafeMath –– turns every\n' +
    'operator into function call – which is a huge gas sink.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="5">\n' +
    '<li class="c5"><span class="c3">How Solidity optimizes could be\n' +
    'improved:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">It focuses on the code size (which\n' +
    'makes sense since it’s minimizing the state tree); but sometimes\n' +
    'you need to optimize size of tx gas (e.g. 0x needs optimized\n' +
    'fillOrder call)</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="6">\n' +
    '<li class="c5"><span class="c3">ABI doesn’t implement\n' +
    'introspection</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">EIP 165</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">E.g. “does this contract implement\n' +
    'ERC20, or ERC223?”</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3" start="2">\n' +
    '<li class="c7"><span class="c3">Solidity should have this\n' +
    'in-built.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">Should be built into the API spec\n' +
    'and compiler.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="7">\n' +
    '<li class="c5"><span class="c3">Inheritance:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Interface or abstract contract –\n' +
    'e.g. Solidity automatically creates getters for state functions ––\n' +
    'collides with</span></li>\n' +
    '<li class="c7"><span class="c3">Contract which implements an\n' +
    'interface – public or external for abstract functions – they\n' +
    'collide</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">ERCs – there is not a formal way to\n' +
    'describe the interface for contracts.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Have a standard repo –– this will\n' +
    'lead to a canonical ABI definition –– can have semantic rules\n' +
    'around this. Could run some specific unit tests against</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="4">\n' +
    '<li class="c6"><span class="c9 c10">How do you handle\n' +
    'testing?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Testrpc has gotten better\n' +
    '––</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Increases the speed at which you\n' +
    'can dev.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">Blockstream is really cool. Written\n' +
    'by Mica (from Augur?), under the EthereumJS lib.</span></li>\n' +
    '<li class="c8"><span class="c3">Good dealing with block re-orgs and\n' +
    'changes in state.</span></li>\n' +
    '<li class="c8"><span class="c3">Continuous Integration:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Doesn’t really work for smart\n' +
    'contracts.</span></li>\n' +
    '<li class="c5"><span class="c3">We just use testrpc.</span></li>\n' +
    '<li class="c5"><span class="c3">Neufund was different than\n' +
    '0x:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Neufund was a trustee for tokens ––\n' +
    'it was centralized by definition.</span></li>\n' +
    '<li class="c7"><span class="c3">This made it simpler: I could\n' +
    'create “open-ended” contracts –– a switch statement, that the\n' +
    'default would send to another proxy contract.</span></li>\n' +
    '<li class="c7"><span class="c3">But wouldn’t be able to do this\n' +
    'with 0x –– e.g. if we wanted to add Shnorr signatures –– because\n' +
    'it’s a governance / security issues.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="5">\n' +
    '<li class="c6"><span class="c9">How do you handle smart contract\n' +
    'verification and security?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Code audits before\n' +
    'deployment</span></li>\n' +
    '<li class="c8"><span class="c3">Want to add a formal verification\n' +
    'tool to our deployment tool.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">By analyzing the code, you can find\n' +
    'patterns.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">I manually did an audit in v0 of\n' +
    '0x:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Make sure all functions have a\n' +
    '“Read -&gt; Write -&gt; External Call” pattern, so you don’t have\n' +
    'any race conditions.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="6">\n' +
    '<li class="c6"><span class="c9 c10">Other bounties?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Rest of the bounties from\n' +
    'Remco</span></li>\n' +
    '<li class="c8"><span class="c14">State-watching –– built-in\n' +
    'diff’ing of state trees</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Should be implemented in the\n' +
    'Ethereum clients – Geth and Rust.</span></li>\n' +
    '<li class="c5"><span class="c3">They want this feature for\n' +
    'OrderWatcher.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">EIP process is\n' +
    'suboptimal:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Lacks in consensus-building.\n' +
    'There’s vocal people who don’t have good ideas; there’s a lot of\n' +
    'noise.</span></li>\n' +
    '<li class="c5"><span class="c3">To improve: committee-based\n' +
    'approach (reputable stakeholders from reputable projects who get\n' +
    'together?).</span></li>\n' +
    '<li class="c5"><span class="c3">Problems are getting solved at the\n' +
    'wrong abstraction level.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. NFT standards.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">Neufund was largest Solidity\n' +
    'project before –– tokenized equity.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">You want a EuroToken. You don’t\n' +
    'want your company valuated in Ether.</span></li>\n' +
    '<li class="c5"><span class="c3">What if blockchain forks; which\n' +
    'token is actually tied to the company?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="5">\n' +
    '<li class="c8"><span class="c3">Bounty approach gives many\n' +
    'different styles within the codebase.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">This is a problem; e.g. OpenSSL\n' +
    'codebase after Masters / PhDs.</span></li>\n' +
    '</ol>\n' +
    '<p class="c13"></p>',
  },
  { id: 2,
    name: 'Leo Logvinov',
    content: '<div>\n' +
    '<p class="c12"></p>\n' +
    '</div>\n' +
    '<h2 class="c17" id="h.n077tymmmbku"><span class="c11 c15">Leo\n' +
    'Logvinov</span></h2>\n' +
    '<p class="c19"><span class="c2">4/24/2018 - Robbie, Parker,\n' +
    'Andy</span></p>\n' +
    '<p class="c12"></p>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-0 start" start="1">\n' +
    '<li class="c5"><span class="c7 c6">Who are you and what are you\n' +
    'working on?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1 start" start="1">\n' +
    '<li class="c3"><span class="c6">Started in blockchain 2 years ago\n' +
    'in Berlin, working on Ethereum devtools, building solidity plugin\n' +
    'for IntelliJ, built by him and an</span> <span class=\n' +
    '"c6">Australian</span><span class="c2">.</span></li>\n' +
    '<li class="c3"><span class="c2">Working on truffle, did some PRs,\n' +
    'improving speed, usability, error handling.</span></li>\n' +
    '<li class="c3"><span class="c2">Started working on 0x, primary\n' +
    'role: devtools team.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-0" start="2">\n' +
    '<li class="c5"><span class="c6 c13">What are your biggest\n' +
    'frustrations?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1 start" start="1">\n' +
    '<li class="c3"><span class="c2">Event watching - unreliable, no\n' +
    'support for backfills etc.</span></li>\n' +
    '<li class="c3"><span class="c2">Build tool for statically typed\n' +
    'contract (ABI gen that generates contracts), build out the\n' +
    'statically typed libraries</span></li>\n' +
    '<li class="c3"><span class="c2">Negative experience with web3js\n' +
    'team - unresponsive.</span></li>\n' +
    '<li class="c3"><span class="c2">Frustrated with truffle because it\n' +
    'is hard to contribute with so many packages these days.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Hard to debug and understand it all\n' +
    '- so needed a smaller truffle for the specific use\n' +
    'cases.</span></li>\n' +
    '<li class="c0"><span class="c2">Need to standardise their artifact\n' +
    'format (currently in talks about it).</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="5">\n' +
    '<li class="c3"><span class="c2">Solidity coverage tool: built at\n' +
    'hackathon (at least the profiler which is not super useful),\n' +
    'standardise on artifacts format so that it works across\n' +
    'tools.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Which line of solidity is covered\n' +
    'by tests?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="6">\n' +
    '<li class="c3"><span class="c2">EIP712 - standardised signing for\n' +
    'structured data, also helped finalise 721 at ETHDenver.</span></li>\n' +
    '<li class="c3"><span class="c6">Solidity plugin for</span>\n' +
    '<span class="c6">IntelliJ IDE</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">One did not exist at the time. Did\n' +
    'not have too much stuff in it really: simple formatting,\n' +
    'definitions, highlighting. Not “a super interesting” project, but\n' +
    'has 36 000 users (some duplicates).</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="8">\n' +
    '<li class="c3"><span class="c2">VMs</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Been wanting to speed up tests\n' +
    'recently. Bottleneck is code execution in Ganache VM (90%). We want\n' +
    'to get down to 1-10s test runs.</span></li>\n' +
    '<li class="c0"><span class="c2">GAS PRICES ARE NOT THE SAME!!!!\n' +
    'Arghhhhh!</span></li>\n' +
    '<li class="c0"><span class="c2">We need JIT compilation in more\n' +
    'performant language (currently just executed in JS).</span></li>\n' +
    '<li class="c0"><span class="c2">Project called EthJIT VM,\n' +
    'transpiles to LLL, then optimizes contract so that it is\n' +
    'precompiled and then runs much faster.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-3 start" start="1">\n' +
    '<li class="c1"><span class="c2">Would be great to see the\n' +
    'integrated in ganache (snapshots and time travel make this a nice\n' +
    'tool than geth to use currently).</span></li>\n' +
    '<li class="c1"><span class="c9">Even better to have pluggable VMs,\n' +
    'have spoken to the Foundation about this too.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-0" start="3">\n' +
    '<li class="c5"><span class="c7 c6">What tools don’t exist at the\n' +
    'moment?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1 start" start="1">\n' +
    '<li class="c3"><span class="c9">Prettier type plugin for\n' +
    'solidity</span><span class="c2">. I don’t have time to write it but\n' +
    'Prettier has a good API.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-0" start="4">\n' +
    '<li class="c5"><span class="c7 c6">Other bounties?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1 start" start="1">\n' +
    '<li class="c3"><span class="c2">There is a limit on local variable\n' +
    'numbers (have a limit of 16, which influences how you write the\n' +
    'code).</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Solidity doesn’t push variables\n' +
    'down the stack, so you can’t go more than 16 deep. This is an\n' +
    'implementation detail in current compiler that needs to be\n' +
    'improved.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="2">\n' +
    '<li class="c3"><span class="c2">ABIv2 - experimental feature for\n' +
    'half a year or so - return structures and bus structures as\n' +
    'parameters. 0x are planning to use it to make their code easier to\n' +
    'audit especially.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c6">C++ devs needed</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-0" start="5">\n' +
    '<li class="c5"><span class="c7 c6">Other domain specific\n' +
    'questions?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1 start" start="1">\n' +
    '<li class="c3"><span class="c7 c6">What has your experience been\n' +
    'like working on EIPS?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Working on EIP 712 - signing\n' +
    'structured and typed data</span></li>\n' +
    '<li class="c0"><span class="c2">Quite hard with monetary prospects\n' +
    'and no established legislation process - need better ways of\n' +
    'governing and enforcing the process.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-3 start" start="1">\n' +
    '<li class="c1"><span class="c2">Really helped to have everyone in\n' +
    'one room at ETHDenver and align on angles of attack.</span></li>\n' +
    '<li class="c1"><span class="c2">Room at ETHDenver from commenting\n' +
    'on a thread in GH. Started unstructured and moved into structured\n' +
    'discussion by defining the interface, which helped identify all the\n' +
    'different parties’ motivations. This revealed some inertia on some\n' +
    'teams’ behalf, which was interesting to see.</span></li>\n' +
    '<li class="c1"><span class="c2">Lot of discussions about metadata\n' +
    '(of tokens, which is also important for other parts of\n' +
    'tokens)</span></li>\n' +
    '<li class="c1"><span class="c2">GH PRs are one single wall of text\n' +
    'and the comments need to be better moderated, especially for trolls\n' +
    'or tangential discussions/ideas (especially tangential ideas need\n' +
    'to be collapsed).</span></li>\n' +
    '<li class="c1"><span class="c2">Creators need to moderate/create a\n' +
    'TL;DR section to help people better and more easily grasp what they\n' +
    'are working on.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="2">\n' +
    '<li class="c3"><span class="c7 c6">Solidity code coverage - how\n' +
    'does that work?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Before each line calling eval, and\n' +
    'modifying Eth and ganache code to read the events, much below the\n' +
    'current block gas limit and working through everything that comes\n' +
    'through.</span></li>\n' +
    '<li class="c0"><span class="c2">Take debug transaction with list of\n' +
    'opcodes. Also have the source maps, which map back from opcodes to\n' +
    'lines of solidity code, and can use that the work backwards from\n' +
    'opcodes to understand exactly which line used how much\n' +
    'gas.</span></li>\n' +
    '<li class="c0"><span class="c2">How do you get the trace after each\n' +
    'tx?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-3 start" start="1">\n' +
    '<li class="c1"><span class="c2">We wrote our own provider, whenever\n' +
    'call to eth_sendTransaction gone through provider it sends it and\n' +
    'then gets the trace.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2" start="4">\n' +
    '<li class="c0"><span class="c2">Calls don’t have traces though, so\n' +
    'need to do a snapshot and then send the call as a tx, which gives\n' +
    'you the trace back and then you can look at what happened in the\n' +
    'call.</span></li>\n' +
    '<li class="c0"><span class="c2">Did look at other tools, but felt\n' +
    'the performance and reliability of those tools just kinda\n' +
    'sucked.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="3">\n' +
    '<li class="c3"><span class="c6 c13">Can you tell us more about\n' +
    'Event Watching?</span><span class="c2">&nbsp;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c6">Lacking good open source</span>\n' +
    '<span class="c6">project</span><sup><a href="#cmnt1" id=\n' +
    '"cmnt_ref1">[a]</a></sup></li>\n' +
    '<li class="c0"><span class="c2">People don’t have stateful nodes,\n' +
    'you need to handle events client side</span></li>\n' +
    '<li class="c0"><span class="c2">Ethereum-js blockstream enables us\n' +
    'to use stateless nodes after installing all filters. Still not a\n' +
    'part of web3.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-3 start" start="1">\n' +
    '<li class="c1"><span class="c2">Working on something called\n' +
    'order-watcher: track when the order becomes invalid. Which happens\n' +
    'when the user manipulates things. You can validate reactively by\n' +
    'watching for events, but you want to actually watch balance changes\n' +
    'and events are just an imperfect proxy for this.</span></li>\n' +
    '<li class="c1"><span class="c2">People can mint and burn tokens and\n' +
    'change balance without emitting events.</span></li>\n' +
    '<li class="c1"><span class="c2">Want to track changes in balances,\n' +
    'not events. balanceOf() is view function that returns the balance,\n' +
    'so we want to track the result of calling that.</span></li>\n' +
    '<li class="c1"><span class="c2">Might be inefficient to look at\n' +
    'that directly, or we can register callbacks and recompute only when\n' +
    'the state used by that function changes.</span></li>\n' +
    '<li class="c1"><span class="c2">But how do we know when state\n' +
    'changes?</span></li>\n' +
    '<li class="c1"><span class="c2">Cannot rely on solidity, but can\n' +
    'run function, get trace, see which storage slots the function is\n' +
    'reading, and then you for sure know that this function will only\n' +
    'change its value when one of those storage slots\n' +
    'changes.</span></li>\n' +
    '<li class="c1"><span class="c2">Use Patricia tries somehow to watch\n' +
    'these storage slots and state changes - allow you to watch\n' +
    'efficiently changes on view and pure functions.</span></li>\n' +
    '<li class="c1"><span class="c6">Check out EIP 781:</span>\n' +
    '<span class="c8"><a class="c20" href=\n' +
    '"https://www.google.com/url?q=https://github.com/ethereum/EIPs/issues/781&amp;sa=D&amp;ust=1527948671086000">\n' +
    'https://github.com/ethereum/EIPs/issues/781</a></span><span class=\n' +
    '"c2">&nbsp;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="4">\n' +
    '<li class="c3"><span class="c7 c6">Can you tell us more about ABI\n' +
    'gen for statically typed contracts?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Contracts need to be checked at\n' +
    'compile times to ensure parameters etc (strong instead of number or\n' +
    'something like that) and being statically typed is much easier to\n' +
    'check this.</span></li>\n' +
    '<li class="c0"><span class="c6">Inspired by geth</span>\n' +
    '<span class="c6">tooling</span><span class="c2">, and there are\n' +
    'also some JS ones (salt-size etc) but were all very opinionated and\n' +
    'made all sorts of assumptions about how you wanted to use your\n' +
    'contracts.</span></li>\n' +
    '<li class="c0"><span class="c2">With 0x tool: Consensys is using\n' +
    'it, Sybil (journalism tools, also with typescript\n' +
    'contracts).</span></li>\n' +
    '<li class="c0"><span class="c2">Using ethers.js for backend of\n' +
    'contracts due to issues with web3 versions (classic).</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="5">\n' +
    '<li class="c3"><span class="c7 c6">Best ideas to have in a\n' +
    'debugger?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Not writing solidity actively at\n' +
    'the moment and I haven’t used one yet because it is such a high\n' +
    'level tool (haha).</span></li>\n' +
    '<li class="c0"><span class="c2">I feel that this is quite a long\n' +
    'way away right now.</span></li>\n' +
    '<li class="c0"><span class="c2">Need bytecode, source code, source\n' +
    'maps, traces, interruptable VM etc.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-1" start="6">\n' +
    '<li class="c3"><span class="c7 c6">Can you tell us more about\n' +
    'signing data in Ethereum?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c4 lst-kix_4n6brzrxq5st-2 start" start="1">\n' +
    '<li class="c0"><span class="c2">Arbitrary string that people were\n' +
    'supposed to sign, but then people figured that you could use it to\n' +
    'send ETH, hence the weird prefix that got implemented - not an EIP,\n' +
    'it is just a bugfix.</span></li>\n' +
    '<li class="c0"><span class="c6">If there is a way to display user\n' +
    'data and get them to understand the transaction fully, then they\n' +
    'would surely not sign. Prefix doesn’t solve anything, it just\n' +
    'postpones the problem.</span></li>\n' +
    '</ol>\n' +
    '<div class="c16">\n' +
    '<p class="c18"><a href="#cmnt_ref1" id="cmnt1">[a]</a><span class=\n' +
    '"c10">WE can do more research here -- this is a big\n' +
    'bounty</span></p>\n' +
    '</div>',
  },
  { id: 3,
    name: 'Axel Ericsson',
    content: '<div>\n' +
    '<p class="c13"></p>\n' +
    '</div>\n' +
    '<h2 class="c16" id="h.5oofkjz263bh"><span class="c10 c11">Axel Ericsson</span></h2>\n' +
    '<p class="c13"></p>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0 start" start="1">\n' +
    '<li class="c6"><span class="c9">What type of apps do you\n' +
    'build?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">0x - Decentralized exchange\n' +
    'protocol. It is a set of smart contracts that handle standard\n' +
    'transactions in an order format.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">The key advantage here is that\n' +
    'these smart contracts leads to shared liquidity</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">We also achieve increased security\n' +
    'and network liquidity through our architecture.</span></li>\n' +
    '<li class="c8"><span class="c3">We launched the network in August\n' +
    '2017.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">It works, but is V1. We are working\n' +
    'on V2 which helps people build hybrid stations, supports new token\n' +
    'standards, and makes the contract more gas efficient.</span></li>\n' +
    '<li class="c5"><span class="c3">V1 only allows humans to create\n' +
    'orders; V2 will allow new smart contract to create orders. This is\n' +
    'HUGE.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">Notes:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">We’re building the protocol;\n' +
    'designing the standard; building dev tools for anyone to build a\n' +
    'decentralized exchange.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="5">\n' +
    '<li class="c8"><span class="c3">Orders may become invalid for any\n' +
    'reason:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Order being filled</span></li>\n' +
    '<li class="c5"><span class="c3">Griefing attacks</span></li>\n' +
    '<li class="c5"><span class="c3">We’ve now built an OrderWatcher\n' +
    'that keeps relayers updated on the state of orders.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">We’re using contract Events as a\n' +
    'proxy for state changes.</span></li>\n' +
    '<li class="c7"><span class="c3">Can do a diff between state trees\n' +
    'and between block headers.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="4">\n' +
    '<li class="c5"><span class="c3">We also have a set of smart\n' +
    'contracts to handle settlement;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Everyone who wants to trade is\n' +
    'setting allowances on a smart contract.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">We want upgradability.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="2">\n' +
    '<li class="c6"><span class="c9 c10">What are the\n' +
    'tools/libraries/frameworks you use?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">EthereumJS / truffle hardwallet\n' +
    'provider / Typedoc (to generate documentation) /</span></li>\n' +
    '<li class="c8"><span class="c3">We don’t use Truffle\n' +
    'anymore</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Not reliable – can have race\n' +
    'conditions;</span></li>\n' +
    '<li class="c5"><span class="c3">Artifacts don’t allow you to have\n' +
    'versions of the contract on different networks</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">You don’t run into this stuff if\n' +
    'you’re just building a “hello world”</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="3">\n' +
    '<li class="c5"><span class="c3">Overwriting parts of the\n' +
    'contracts;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">We rolled our own. It’s open-source\n' +
    'but not documented. We have other things that are keeping us\n' +
    'busy.</span></li>\n' +
    '<li class="c8"><span class="c3">The problem is that Truffle has too\n' +
    'much functionality –– we would like to see more of a Unix\n' +
    'philosophy.</span></li>\n' +
    '<li class="c8"><span class="c3">Cannot support different versions\n' +
    'of Solidity.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Version management doesn’t\n' +
    'exist.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="6">\n' +
    '<li class="c8"><span class="c3">EthPM –– doesn’t have versioning\n' +
    'either? It’s going through a big refactor, so we held off. We need\n' +
    'the NPM package manager.</span></li>\n' +
    '<li class="c8"><span class="c3">We have built a lot of developer\n' +
    'tools to interface with the smart contracts ourselves.</span></li>\n' +
    '<li class="c8"><span class="c3">We have also built own deployer and\n' +
    'migration tool, as truffle’s did not suit our needs.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="3">\n' +
    '<li class="c6"><span class="c9 c10">What are your biggest\n' +
    'frustrations?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Getting a simple experimental\n' +
    'environment up is hard</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Remix is there; but it’s not\n' +
    'enough.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">Tracing and profiling is not\n' +
    'existent.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Remix does it, but can’t do it\n' +
    'locally.</span></li>\n' +
    '<li class="c5"><span class="c3">“Code coverage” tool exists but\n' +
    'inserts console.logs in</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Adding up gas costs per line of\n' +
    'code.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="3">\n' +
    '<li class="c5"><span class="c3">Need to do profiling, because gas\n' +
    'costs depend on inputs.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">Solidity language\n' +
    'itself:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Crashed the Solidity compiler twice\n' +
    'today.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. AbiEncoderV2 is pretty new and\n' +
    'hard to understand/use.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="2">\n' +
    '<li class="c5"><span class="c3">The code that it produces is\n' +
    'inefficient.</span></li>\n' +
    '<li class="c5"><span class="c3">There is a stark stack limit in\n' +
    'solidity</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">All the variables are locally\n' +
    'scoped.</span></li>\n' +
    '<li class="c7"><span class="c3">Un-intuitive as it is a curly\n' +
    'braced language.</span></li>\n' +
    '<li class="c7"><span class="c3">The lifecycle hook value_of is\n' +
    'within a function.</span></li>\n' +
    '<li class="c7"><span class="c3">Can only access top 16 slack slots.\n' +
    'Including input and output.</span></li>\n' +
    '<li class="c7"><span class="c3">We need to implement a graph\n' +
    'coloring register allocator – to find out what the lifetime of the\n' +
    'variables is.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">“This stack slot was used in the\n' +
    'first half –– the second half you can use”</span></li>\n' +
    '<li class="c0"><span class="c3">Or implement register\n' +
    'splitting.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="4">\n' +
    '<li class="c5"><span class="c3">Function inlining is frustrating\n' +
    'sometimes:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. SafeMath –– turns every\n' +
    'operator into function call – which is a huge gas sink.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="5">\n' +
    '<li class="c5"><span class="c3">How Solidity optimizes could be\n' +
    'improved:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">It focuses on the code size (which\n' +
    'makes sense since it’s minimizing the state tree); but sometimes\n' +
    'you need to optimize size of tx gas (e.g. 0x needs optimized\n' +
    'fillOrder call)</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="6">\n' +
    '<li class="c5"><span class="c3">ABI doesn’t implement\n' +
    'introspection</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">EIP 165</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">E.g. “does this contract implement\n' +
    'ERC20, or ERC223?”</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3" start="2">\n' +
    '<li class="c7"><span class="c3">Solidity should have this\n' +
    'in-built.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">Should be built into the API spec\n' +
    'and compiler.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="7">\n' +
    '<li class="c5"><span class="c3">Inheritance:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Interface or abstract contract –\n' +
    'e.g. Solidity automatically creates getters for state functions ––\n' +
    'collides with</span></li>\n' +
    '<li class="c7"><span class="c3">Contract which implements an\n' +
    'interface – public or external for abstract functions – they\n' +
    'collide</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">ERCs – there is not a formal way to\n' +
    'describe the interface for contracts.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Have a standard repo –– this will\n' +
    'lead to a canonical ABI definition –– can have semantic rules\n' +
    'around this. Could run some specific unit tests against</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="4">\n' +
    '<li class="c6"><span class="c9 c10">How do you handle\n' +
    'testing?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Testrpc has gotten better\n' +
    '––</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Increases the speed at which you\n' +
    'can dev.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">Blockstream is really cool. Written\n' +
    'by Mica (from Augur?), under the EthereumJS lib.</span></li>\n' +
    '<li class="c8"><span class="c3">Good dealing with block re-orgs and\n' +
    'changes in state.</span></li>\n' +
    '<li class="c8"><span class="c3">Continuous Integration:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Doesn’t really work for smart\n' +
    'contracts.</span></li>\n' +
    '<li class="c5"><span class="c3">We just use testrpc.</span></li>\n' +
    '<li class="c5"><span class="c3">Neufund was different than\n' +
    '0x:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Neufund was a trustee for tokens ––\n' +
    'it was centralized by definition.</span></li>\n' +
    '<li class="c7"><span class="c3">This made it simpler: I could\n' +
    'create “open-ended” contracts –– a switch statement, that the\n' +
    'default would send to another proxy contract.</span></li>\n' +
    '<li class="c7"><span class="c3">But wouldn’t be able to do this\n' +
    'with 0x –– e.g. if we wanted to add Shnorr signatures –– because\n' +
    'it’s a governance / security issues.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="5">\n' +
    '<li class="c6"><span class="c9">How do you handle smart contract\n' +
    'verification and security?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Code audits before\n' +
    'deployment</span></li>\n' +
    '<li class="c8"><span class="c3">Want to add a formal verification\n' +
    'tool to our deployment tool.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">By analyzing the code, you can find\n' +
    'patterns.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">I manually did an audit in v0 of\n' +
    '0x:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Make sure all functions have a\n' +
    '“Read -&gt; Write -&gt; External Call” pattern, so you don’t have\n' +
    'any race conditions.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="6">\n' +
    '<li class="c6"><span class="c9 c10">Other bounties?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Rest of the bounties from\n' +
    'Remco</span></li>\n' +
    '<li class="c8"><span class="c14">State-watching –– built-in\n' +
    'diff’ing of state trees</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Should be implemented in the\n' +
    'Ethereum clients – Geth and Rust.</span></li>\n' +
    '<li class="c5"><span class="c3">They want this feature for\n' +
    'OrderWatcher.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">EIP process is\n' +
    'suboptimal:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Lacks in consensus-building.\n' +
    'There’s vocal people who don’t have good ideas; there’s a lot of\n' +
    'noise.</span></li>\n' +
    '<li class="c5"><span class="c3">To improve: committee-based\n' +
    'approach (reputable stakeholders from reputable projects who get\n' +
    'together?).</span></li>\n' +
    '<li class="c5"><span class="c3">Problems are getting solved at the\n' +
    'wrong abstraction level.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. NFT standards.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">Neufund was largest Solidity\n' +
    'project before –– tokenized equity.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">You want a EuroToken. You don’t\n' +
    'want your company valuated in Ether.</span></li>\n' +
    '<li class="c5"><span class="c3">What if blockchain forks; which\n' +
    'token is actually tied to the company?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="5">\n' +
    '<li class="c8"><span class="c3">Bounty approach gives many\n' +
    'different styles within the codebase.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">This is a problem; e.g. OpenSSL\n' +
    'codebase after Masters / PhDs.</span></li>\n' +
    '</ol>\n' +
    '<p class="c13"></p>',
  },
  { id: 4,
    name: 'Fernando Smith',
    content: '<div>\n' +
    '<p class="c13"></p>\n' +
    '</div>\n' +
    '<h2 class="c16" id="h.5oofkjz263bh"><span class="c10 c11">Fernando Smith</span></h2>\n' +
    '<p class="c13"></p>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0 start" start="1">\n' +
    '<li class="c6"><span class="c9">What type of apps do you\n' +
    'build?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">0x - Decentralized exchange\n' +
    'protocol. It is a set of smart contracts that handle standard\n' +
    'transactions in an order format.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">The key advantage here is that\n' +
    'these smart contracts leads to shared liquidity</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">We also achieve increased security\n' +
    'and network liquidity through our architecture.</span></li>\n' +
    '<li class="c8"><span class="c3">We launched the network in August\n' +
    '2017.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">It works, but is V1. We are working\n' +
    'on V2 which helps people build hybrid stations, supports new token\n' +
    'standards, and makes the contract more gas efficient.</span></li>\n' +
    '<li class="c5"><span class="c3">V1 only allows humans to create\n' +
    'orders; V2 will allow new smart contract to create orders. This is\n' +
    'HUGE.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">Notes:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-ki x_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">We’re building the protocol;\n' +
    'designing the standard; building dev tools for anyone to build a\n' +
    'decentralized exchange.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="5">\n' +
    '<li class="c8"><span class="c3">Orders may become invalid for any\n' +
    'reason:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Order being filled</span></li>\n' +
    '<li class="c5"><span class="c3">Griefing attacks</span></li>\n' +
    '<li class="c5"><span class="c3">We’ve now built an OrderWatcher\n' +
    'that keeps relayers updated on the state of orders.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">We’re using contract Events as a\n' +
    'proxy for state changes.</span></li>\n' +
    '<li class="c7"><span class="c3">Can do a diff between state trees\n' +
    'and between block headers.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="4">\n' +
    '<li class="c5"><span class="c3">We also have a set of smart\n' +
    'contracts to handle settlement;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Everyone who wants to trade is\n' +
    'setting allowances on a smart contract.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">We want upgradability.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="2">\n' +
    '<li class="c6"><span class="c9 c10">What are the\n' +
    'tools/libraries/frameworks you use?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">EthereumJS / truffle hardwallet\n' +
    'provider / Typedoc (to generate documentation) /</span></li>\n' +
    '<li class="c8"><span class="c3">We don’t use Truffle\n' +
    'anymore</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Not reliable – can have race\n' +
    'conditions;</span></li>\n' +
    '<li class="c5"><span class="c3">Artifacts don’t allow you to have\n' +
    'versions of the contract on different networks</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">You don’t run into this stuff if\n' +
    'you’re just building a “hello world”</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="3">\n' +
    '<li class="c5"><span class="c3">Overwriting parts of the\n' +
    'contracts;</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">We rolled our own. It’s open-source\n' +
    'but not documented. We have other things that are keeping us\n' +
    'busy.</span></li>\n' +
    '<li class="c8"><span class="c3">The problem is that Truffle has too\n' +
    'much functionality –– we would like to see more of a Unix\n' +
    'philosophy.</span></li>\n' +
    '<li class="c8"><span class="c3">Cannot support different versions\n' +
    'of Solidity.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Version management doesn’t\n' +
    'exist.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="6">\n' +
    '<li class="c8"><span class="c3">EthPM –– doesn’t have versioning\n' +
    'either? It’s going through a big refactor, so we held off. We need\n' +
    'the NPM package manager.</span></li>\n' +
    '<li class="c8"><span class="c3">We have built a lot of developer\n' +
    'tools to interface with the smart contracts ourselves.</span></li>\n' +
    '<li class="c8"><span class="c3">We have also built own deployer and\n' +
    'migration tool, as truffle’s did not suit our needs.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="3">\n' +
    '<li class="c6"><span class="c9 c10">What are your biggest\n' +
    'frustrations?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Getting a simple experimental\n' +
    'environment up is hard</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Remix is there; but it’s not\n' +
    'enough.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">Tracing and profiling is not\n' +
    'existent.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Remix does it, but can’t do it\n' +
    'locally.</span></li>\n' +
    '<li class="c5"><span class="c3">“Code coverage” tool exists but\n' +
    'inserts console.logs in</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Adding up gas costs per line of\n' +
    'code.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="3">\n' +
    '<li class="c5"><span class="c3">Need to do profiling, because gas\n' +
    'costs depend on inputs.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">Solidity language\n' +
    'itself:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Crashed the Solidity compiler twice\n' +
    'today.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. AbiEncoderV2 is pretty new and\n' +
    'hard to understand/use.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="2">\n' +
    '<li class="c5"><span class="c3">The code that it produces is\n' +
    'inefficient.</span></li>\n' +
    '<li class="c5"><span class="c3">There is a stark stack limit in\n' +
    'solidity</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">All the variables are locally\n' +
    'scoped.</span></li>\n' +
    '<li class="c7"><span class="c3">Un-intuitive as it is a curly\n' +
    'braced language.</span></li>\n' +
    '<li class="c7"><span class="c3">The lifecycle hook value_of is\n' +
    'within a function.</span></li>\n' +
    '<li class="c7"><span class="c3">Can only access top 16 slack slots.\n' +
    'Including input and output.</span></li>\n' +
    '<li class="c7"><span class="c3">We need to implement a graph\n' +
    'coloring register allocator – to find out what the lifetime of the\n' +
    'variables is.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">“This stack slot was used in the\n' +
    'first half –– the second half you can use”</span></li>\n' +
    '<li class="c0"><span class="c3">Or implement register\n' +
    'splitting.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="4">\n' +
    '<li class="c5"><span class="c3">Function inlining is frustrating\n' +
    'sometimes:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. SafeMath –– turns every\n' +
    'operator into function call – which is a huge gas sink.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="5">\n' +
    '<li class="c5"><span class="c3">How Solidity optimizes could be\n' +
    'improved:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">It focuses on the code size (which\n' +
    'makes sense since it’s minimizing the state tree); but sometimes\n' +
    'you need to optimize size of tx gas (e.g. 0x needs optimized\n' +
    'fillOrder call)</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="6">\n' +
    '<li class="c5"><span class="c3">ABI doesn’t implement\n' +
    'introspection</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">EIP 165</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">E.g. “does this contract implement\n' +
    'ERC20, or ERC223?”</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3" start="2">\n' +
    '<li class="c7"><span class="c3">Solidity should have this\n' +
    'in-built.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-4 start" start="1">\n' +
    '<li class="c0"><span class="c3">Should be built into the API spec\n' +
    'and compiler.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2" start="7">\n' +
    '<li class="c5"><span class="c3">Inheritance:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Interface or abstract contract –\n' +
    'e.g. Solidity automatically creates getters for state functions ––\n' +
    'collides with</span></li>\n' +
    '<li class="c7"><span class="c3">Contract which implements an\n' +
    'interface – public or external for abstract functions – they\n' +
    'collide</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">ERCs – there is not a formal way to\n' +
    'describe the interface for contracts.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Have a standard repo –– this will\n' +
    'lead to a canonical ABI definition –– can have semantic rules\n' +
    'around this. Could run some specific unit tests against</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="4">\n' +
    '<li class="c6"><span class="c9 c10">How do you handle\n' +
    'testing?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Testrpc has gotten better\n' +
    '––</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Increases the speed at which you\n' +
    'can dev.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="2">\n' +
    '<li class="c8"><span class="c3">Blockstream is really cool. Written\n' +
    'by Mica (from Augur?), under the EthereumJS lib.</span></li>\n' +
    '<li class="c8"><span class="c3">Good dealing with block re-orgs and\n' +
    'changes in state.</span></li>\n' +
    '<li class="c8"><span class="c3">Continuous Integration:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Doesn’t really work for smart\n' +
    'contracts.</span></li>\n' +
    '<li class="c5"><span class="c3">We just use testrpc.</span></li>\n' +
    '<li class="c5"><span class="c3">Neufund was different than\n' +
    '0x:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">Neufund was a trustee for tokens ––\n' +
    'it was centralized by definition.</span></li>\n' +
    '<li class="c7"><span class="c3">This made it simpler: I could\n' +
    'create “open-ended” contracts –– a switch statement, that the\n' +
    'default would send to another proxy contract.</span></li>\n' +
    '<li class="c7"><span class="c3">But wouldn’t be able to do this\n' +
    'with 0x –– e.g. if we wanted to add Shnorr signatures –– because\n' +
    'it’s a governance / security issues.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="5">\n' +
    '<li class="c6"><span class="c9">How do you handle smart contract\n' +
    'verification and security?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Code audits before\n' +
    'deployment</span></li>\n' +
    '<li class="c8"><span class="c3">Want to add a formal verification\n' +
    'tool to our deployment tool.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">By analyzing the code, you can find\n' +
    'patterns.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">I manually did an audit in v0 of\n' +
    '0x:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Make sure all functions have a\n' +
    '“Read -&gt; Write -&gt; External Call” pattern, so you don’t have\n' +
    'any race conditions.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-0" start="6">\n' +
    '<li class="c6"><span class="c9 c10">Other bounties?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1 start" start="1">\n' +
    '<li class="c8"><span class="c3">Rest of the bounties from\n' +
    'Remco</span></li>\n' +
    '<li class="c8"><span class="c14">State-watching –– built-in\n' +
    'diff’ing of state trees</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Should be implemented in the\n' +
    'Ethereum clients – Geth and Rust.</span></li>\n' +
    '<li class="c5"><span class="c3">They want this feature for\n' +
    'OrderWatcher.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="3">\n' +
    '<li class="c8"><span class="c3">EIP process is\n' +
    'suboptimal:</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">Lacks in consensus-building.\n' +
    'There’s vocal people who don’t have good ideas; there’s a lot of\n' +
    'noise.</span></li>\n' +
    '<li class="c5"><span class="c3">To improve: committee-based\n' +
    'approach (reputable stakeholders from reputable projects who get\n' +
    'together?).</span></li>\n' +
    '<li class="c5"><span class="c3">Problems are getting solved at the\n' +
    'wrong abstraction level.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-3 start" start="1">\n' +
    '<li class="c7"><span class="c3">E.g. NFT standards.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="4">\n' +
    '<li class="c8"><span class="c3">Neufund was largest Solidity\n' +
    'project before –– tokenized equity.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">You want a EuroToken. You don’t\n' +
    'want your company valuated in Ether.</span></li>\n' +
    '<li class="c5"><span class="c3">What if blockchain forks; which\n' +
    'token is actually tied to the company?</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-1" start="5">\n' +
    '<li class="c8"><span class="c3">Bounty approach gives many\n' +
    'different styles within the codebase.</span></li>\n' +
    '</ol>\n' +
    '<ol class="c1 lst-kix_4ia1cohmgc5c-2 start" start="1">\n' +
    '<li class="c5"><span class="c3">This is a problem; e.g. OpenSSL\n' +
    'codebase after Masters / PhDs.</span></li>\n' +
    '</ol>\n' +
    '<p class="c13"></p>',
  },
];

export default data;
