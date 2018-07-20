const InterviewData = {
    "0": {
        "name": "Fabio Berger + Remco Bloemen",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>0x - Decentralized exchange protocol. It is a set of smart contracts that handle standard transactions in an order format.</p><p>The key advantage here is that these smart contracts leads to shared liquidity</p><p>We also achieve increased security and network liquidity through our architecture.</p><p>We launched the network in August 2017.</p><p>It works, but is V1. We are working on V2 which helps people build hybrid stations, supports new token standards, and makes the contract more gas efficient.</p><p>V1 only allows humans to create orders; V2 will allow new smart contract to create orders. This is HUGE.</p><p>Notes:</p><p>We&rsquo;re building the protocol; designing the standard; building dev tools for anyone to build a decentralized exchange.</p><p>Orders may become invalid for any reason:</p><p>Order being filled</p><p>Griefing attacks</p><p>We&rsquo;ve now built an OrderWatcher that keeps relayers updated on the state of orders.</p><p>We&rsquo;re using contract Events as a proxy for state changes.</p><p>Can do a diff between state trees and between block headers.</p><p>We also have a set of smart contracts to handle settlement;</p><p>Everyone who wants to trade is setting allowances on a smart contract.</p><p>We want upgradability.</p>",
            "keywords": [
                "gas",
                "protocol",
                "transaction",
                "event",
                "network",
                "orderwatcher",
                "design",
                "smart_contract",
                "decentralized_exchange",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>EthereumJS / truffle hardwallet provider / Typedoc (to generate documentation) /</p><p>We don&rsquo;t use Truffle anymore</p><p>Not reliable &ndash; can have race conditions;</p><p>Artifacts don&rsquo;t allow you to have versions of the contract on different networks</p><p>You don&rsquo;t run into this stuff if you&rsquo;re just building a &ldquo;hello world&rdquo;</p><p>Overwriting parts of the contracts;</p><p>We rolled our own. It&rsquo;s open-source but not documented. We have other things that are keeping us busy.</p><p>The problem is that Truffle has too much functionality &ndash;&ndash; we would like to see more of a Unix philosophy.</p><p>Cannot support different versions of Solidity.</p><p>Version management doesn&rsquo;t exist.</p><p>EthPM &ndash;&ndash; doesn&rsquo;t have versioning either? It&rsquo;s going through a big refactor, so we held off. We need the NPM package manager.</p><p>We have built a lot of developer tools to interface with the smart contracts ourselves.</p><p>We have also built own deployer and migration tool, as truffle&rsquo;s did not suit our needs.</p>",
            "keywords": [
                "typedoc",
                "ethereumj",
                "solidity",
                "documentation",
                "versioning",
                "ethpm",
                "open_source",
                "truffle",
                "smart_contract",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Testrpc has gotten better &ndash;&ndash;</p><p>Increases the speed at which you can dev.</p><p>Blockstream is really cool. Written by Mica (from Augur?), under the EthereumJS lib.</p><p>Good dealing with block re-orgs and changes in state.</p><p>Continuous Integration:</p><p>Doesn&rsquo;t really work for smart contracts.</p><p>We just use testrpc.</p><p>Neufund was different than 0x:</p><p>Neufund was a trustee for tokens &ndash;&ndash; it was centralized by definition.</p><p>This made it simpler: I could create &ldquo;open-ended&rdquo; contracts &ndash;&ndash; a switch statement, that the default would send to another proxy contract.</p><p>But wouldn&rsquo;t be able to do this with 0x &ndash;&ndash; e.g. if we wanted to add Shnorr signatures &ndash;&ndash; because it&rsquo;s a governance / security issues.</p>",
            "keywords": [
                "signature",
                "ethereumjs",
                "governance",
                "testrpc",
                "issue",
                "augur",
                "security",
                "integration",
                "neufund",
                "token",
                "smart_contract",
                "open",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Code audits before deployment</p><p>Want to add a formal verification tool to our deployment tool.</p><p>By analyzing the code, you can find patterns.</p><p>I manually did an audit in v0 of 0x:</p><p>Make sure all functions have a &ldquo;Read -> Write -> External Call&rdquo; pattern, so you don&rsquo;t have any race conditions.</p>",
            "keywords": [
                "deployment",
                "audit",
                "formal_verification"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Rest of the bounties from Remco</p><p>State-watching &ndash;&ndash; built-in diff&rsquo;ing of state trees</p><p>Should be implemented in the Ethereum clients &ndash; Geth and Rust.</p><p>They want this feature for OrderWatcher.</p><p>EIP process is suboptimal:</p><p>Lacks in consensus-building. There&rsquo;s vocal people who don&rsquo;t have good ideas; there&rsquo;s a lot of noise.</p><p>To improve: committee-based approach (reputable stakeholders from reputable projects who get together?).</p><p>Problems are getting solved at the wrong abstraction level.</p><p>E.g. NFT standards.</p><p>Neufund was largest Solidity project before &ndash;&ndash; tokenized equity.</p><p>You want a EuroToken. You don&rsquo;t want your company valuated in Ether.</p><p>What if blockchain forks; which token is actually tied to the company?</p><p>Bounty approach gives many different styles within the codebase.</p><p>This is a problem; e.g. OpenSSL codebase after Masters / PhDs.</p>",
            "keywords": [
                "eip",
                "vocal",
                "consensus",
                "orderwatcher",
                "client",
                "bounty",
                "solidity",
                "nft",
                "ethereum",
                "openssl",
                "neufund",
                "token",
                "blockchain",
                "rest",
                "geth",
                "eurotoken"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "1": {
        "name": "Leo Logvinov",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Started in blockchain 2 years ago in Berlin, working on Ethereum devtools, building solidity plugin for IntelliJ, built by him and an Australian.</p><p>Working on truffle, did some PRs, improving speed, usability, error handling.</p><p>Started working on 0x, primary role: devtools team.</p>",
            "keywords": [
                "error",
                "ethereum",
                "intellij",
                "truffle",
                "blockchain",
                "usability"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>There is a limit on local variable numbers (have a limit of 16, which influences how you write the code).</p><p>Solidity doesn&rsquo;t push variables down the stack, so you can&rsquo;t go more than 16 deep. This is an implementation detail in current compiler that needs to be improved.</p><p>ABIv2 - experimental feature for half a year or so - return structures and bus structures as parameters. 0x are planning to use it to make their code easier to audit especially.</p><p>C++ devs needed</p>",
            "keywords": [
                "limit",
                "compiler",
                "solidity",
                "audit"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Prettier type plugin for solidity. I don&rsquo;t have time to write it but Prettier has a good API.</p>",
            "keywords": [
                "type",
                "pretty",
                "solidity",
                "api"
            ]
        }
    },
    "2": {
        "name": "Axel Ericsson",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I have built 1Protocol</p><p>It lets smart contracts sign up as miners on different proof of stake protocols</p><p>Let users provide the contract with the stake</p><p>It&rsquo;s like a mining pool, but for staking</p><p>Three things</p><p>Interface for signing signatures (like MEW) and sending tokens to mediators</p><p>Building actual contracts that accept tokens and are signed up in Raiden as a mediator</p><p>Actually running the mediating machine on Raiden.</p><p>Eventually, anyone can send tokens and anyone can run the machine</p><p>For this, simply writing software around the Raiden node client. Raiden has published a python client. When you run it, it exposes an API on your computer, and 1Protocol is writing software that interacts with that API.</p>",
            "keywords": [
                "signature",
                "protocol",
                "api",
                "proof_stake",
                "client",
                "mew",
                "token",
                "raiden",
                "smart_contract",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Just web3JS and the python raiden client</p>",
            "keywords": [
                "raiden",
                "client"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle suite. Before that, built our own unit testing system.</p>",
            "keywords": [
                "truffle",
                "unit_testing"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Human thinking and auditing.</p><p>Will find some external team to do a professional audit.</p>",
            "keywords": [
                "professional",
                "audit"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Breaking out a javascript library for web pages that are accepting payments, which allows you to accept any kind of wallet mechanisms: Ledger, Metamask, Priv key, encrypted keystore, etc.</p><p>Same thing needs to exist for desktop software. Need a simple desktop wallet that accepts any kind of access to payments.</p>",
            "keywords": [
                "payment",
                "wallet",
                "metamask",
                "access"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>There is no tooling or anything related to state channels that is trusted yet.</p><p>Need the MEW of state channels.</p>",
            "keywords": [
                "state_channel",
                "mew",
                "tooling"
            ]
        }
    },
    "3": {
        "name": "Mike Goldin",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Software developer at Consensys</p><p>Known for Token Curated Registries 1.0. Works on team turning TCR&rsquo;s into product which in turn informs the engineering/design. We fully intend the projects to succeed so we can incorporate feedback. It&rsquo;s all still experimental, though.</p><p>TCR came from AdChain. Deployed to Ethereum mainnet on April 24th. Useful for data on how people interact when there&rsquo;s actual money at stake. New type of TCR where token supply inflates after every vote.</p><p>Adchain allows publishers and suppliers to find each other on a p2p.</p><p>By using TCRs to curate who may participate, cut out middlemen as well as bad actors.</p><p>Focus is on onboarding.</p>",
            "keywords": [
                "type",
                "tcr",
                "consensy",
                "adchain",
                "developer",
                "onboarding",
                "design",
                "deploy",
                "ethereum",
                "token"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle, useful as a testing framework.</p><p>Solidity linter, Sol Lint. Not super good, but alright. Eventually, I want an Airbnb javascript plugin for ES Lint.</p><p>Ganache Test-RPC</p><p>Eth.js sometimes</p>",
            "keywords": [
                "truffle",
                "javascript",
                "ganache"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Writes tests in Javascript</p><p>Sol Coverage tool</p><p>Wants 100% code, branch etc.</p><p>Github is part of testing workflow because of code reviews</p><p>How do you handle smart contract verification and security?</p><p>Also Josh Cassidy</p>",
            "keywords": [
                "security",
                "github",
                "smart_contract",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Pretty cool to have more languages for the EVM. Solidity is only reliable one. Yoichi&rsquo;s Bamboo is moving along.</p>",
            "keywords": [
                "evm",
                "solidity",
                "bamboo"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Fuzz Testing and formal verification desired.</p>",
            "keywords": [
                "formal_verification"
            ]
        }
    },
    "4": {
        "name": "Oleksii",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Started working with smart contracts in early 2016.</p><p>Started by writing tests using Truffle for other people&rsquo;s contracts.</p><p>Then, started educating himself on Solidity, became a smart contract developer.</p><p>What do you do at Ambisafe?</p><p>Do custom development for clients.</p><p>Our own products: e.g. webhooks for contract calls.</p><p>Scalable supernode solution &ndash; logic to make the node robust, etc</p><p>Platform to issue tokens. Fixed set of contracts, but for every new token, they deploy a new contract as a gateway.</p><p>Gateway token contract &ndash; implements specific logic of different tokens. Fees, etc.</p><p>+ Toolkit for DevOps / deployment:</p><p>Javascript functions to solve common problems, tx propagation issues, &hellip;</p><p>Tx propagation issues: sometimes your node gets a tx, but doesn&rsquo;t propagate to any other ones. Mostly seen in Parity.</p><p>Deployment scripts</p><p>Checking that the gas that&rsquo;s going to be spent; if enough gas is provided.</p><p>Scripts to collect info from the blockchain, doing sanity checks to make sure it&rsquo;s all good before proceeding, then collecting data after, &hellip;</p><p>COULD THIS BE A BOUNTY TOOL?</p><p>Cloning of contracts.</p><p>Most of their contracts don&rsquo;t copy any code anymore.</p>",
            "keywords": [
                "gas",
                "scalable",
                "ambisafe",
                "issue",
                "token_contract",
                "deployment",
                "client",
                "javascript",
                "blockchain",
                "bounty",
                "deploy",
                "parity",
                "devop",
                "test",
                "token",
                "truffle",
                "smart_contract",
                "platform",
                "tx",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>We have written our own tools which tell us, for instance, that &ldquo;this variable is never used.&rdquo;</p><p>Also includes optimizations to improve gas usage &ndash;&ndash; e.g. read address value and store in memory before loop, then call into it.</p><p>For contract address, for state variables, etc.</p>",
            "keywords": [
                "gas",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "5": {
        "name": "Brett Sun",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Working on Aragon entirely.</p><p>The end goal is to create a network between organisations that live on Ethereum (and potentially other platforms in the future).</p><p>This required a lot of foundational features.</p><p>A network of organisations requires organisations in the first place! So we have been working for the last year to build these.</p><p>We are now switching gears to think about what a network between the orgs will really look like.</p><p>We build aragon_os: an OS for organizations. We tend to think about resources (i.e. people and money), and structure the OS according to well-known principles. Instead of people and money, normal OSes manage CPU and RAM etc.</p><p>Two key pieces to this sort of work:</p><p>Controlling money.</p><p>Controlling permissions.</p><p>We also provide a lot of UI components on top of the contracts that we are writing.</p><p>The entire goal of 0.5 (live on Rinkeby now) is to allow people to easily create and manage their own organisation, along with granular permission and financial management.</p><p>Should be able to create their own application to live in their organisations: and this is where we imagine the network of organisations will emerge from.</p><p>Hooking up your own apps, and designing your own interfaces to handle certain complex behaviour</p>",
            "keywords": [
                "ui",
                "organization",
                "rinkeby",
                "aragon",
                "network",
                "permission",
                "resource",
                "ethereum",
                "design",
                "aragon_o",
                "platform",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Four categories:</p><p>EVM and lower level stuff:</p><p>A lot of our problems have been solved by solidity 0.5 pragma</p><p>Revert with reason! Should be better for error logging.</p><p>Dynamically-sized parameters inside the EVM. We did not have an opcode before Byzantium that could have handled returndatasize with dynamically-sized stuff.</p><p>We play a lot with assembly and ABIEncoding has really bugged us before inside Solidity. So when, for eg, we want to stuff dynamic arrays with mock call data sent through delegatecalls. We have to do some funny business to properly encode them, and 0.5 exposes tooling to do this automatically.</p><p>Smart contracts:</p><p>Not a lot of great tools here yet, especially around testing. This seems to be a fairly obvious hole.</p><p>Not a big fan of Truffle, even though everyone seems to use it. It is especially slow when compiling.</p><p>Solc can be installed directly on most distros, and does stuff in less than 1s, whereas solcjs will take 20s, so why would you go for the latter?</p><p>Dapphub has their own set of nix-based tools that I haven&rsquo;t tried yet, and really want to. But the barrier to understanding here if you don&rsquo;t come from the right programming background is very high.</p><p>We use a bunch of standard libraries like Open Zeppelin, and the MiniMeToken and some other cool code that tends to fly around on GitHub or Reddit in the right places. However, this is a tricky place right now, because Package Management is unclear and no-one is yet sure if they want to use ETHPM.</p><p>There is a lot of people copy-paste contracts into their own repos, which isn&rsquo;t great. It would be better to see them moved between repos with commit hashes and proper referencing.</p><p>We do this, as it is especially helpful for auditiability.</p><p>Dev tooling that allows people to easily build aragon applications:</p><p>It&rsquo;s tough to develop Ethereum applications right because there are a lot of things you need to spin up yourself.</p><p>Deploy a local chain, deploy your contracts onto it, and then only with that done can you start building a UI linked to that chain.</p><p>Not too bad if you have just a few contracts, but with the way that Aragon has been designed (esp in term of flexibility) there are a lot of components that need to be deployed on chain before it all begins to work.</p><p>ENS on local chain, APM, base logic contracts, factories to extend the proxies on top of those basic contracts, and then only do we have a good chain state for people to hook up a UI against.</p><p>This produces a lot of friction, both internally and externally, so we have this goal to simplify it all.</p><p>Ganache has a snapshotting feature where it will dump the entire chain state (the whole patricia trie into a bunch of JSON files) that can then be used to start up your own chain from that state.</p><p>However, when you tell Ganache to run from the snapshot, if you do anything on the chain, it overwrites everything.</p><p>So you actually need two snapshots and some patience to get things right.</p><p>We also need to deploy things onto IPFS, which adds another barrier for users wanting to get going with local development.</p><p>So, we have tried to build this command into aragon-cli, called &ldquo;aragon run&rdquo; that handles everything for you.</p><p>Based on the brittleness of tooling though, it&rsquo;s very difficult to make this reliable, and get it to error gracefully and debug why it isn&rsquo;t working when it fails.</p><p>UI:</p><p>Not too much in terms of Ethereum-related tooling - a lot is just normal, front-end javascript.</p><p>Major frustration is web3.js. There are just so many things wrong with that package&hellip; &ldquo;Every day is new adventure when using web3&rdquo;.</p><p>Pretty much every time we have had to do something for a deadline, we have run into issue with it that have delayed us.</p><p>i.e. in Buenos Aires, we wanted a mainnet launch for our Survey App, for which we need websockets and https.</p><p>We set Parity up with secure websockets on our own node and launched our UI and web3 just doesn&rsquo;t connect to secure websockets. So what was the problem?</p><p>Took some hours to play with all the different settings before realising that the latest version of web3 doesn&rsquo;t support websockets. Downgrading then works, but the previous package didn&rsquo;t have some other functions we needed.</p><p>Relied on getting events to process changed information in the UI. However, the event handler in one particular version of the package would send some events in the error callback as opposed to the actual one and we were totally baffled how that could even be.</p>",
            "keywords": [
                "minimetoken",
                "design",
                "ethpm",
                "ens",
                "contract",
                "ui",
                "evm",
                "solc",
                "aragon",
                "ethereum",
                "test",
                "ganache",
                "websocket",
                "smart_contract",
                "apm",
                "dapphub",
                "tooling",
                "javascript",
                "ipfs",
                "solidity",
                "error",
                "tool",
                "github",
                "truffle",
                "issue",
                "event",
                "deploy",
                "parity",
                "log"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>In addition to the above we also use solidity-coverage, which can be super painful too. Not sure if the most recent version has fixed some of the issues, as we haven&rsquo;t yet upgraded (we pin our contracts to an older version of solc for security reasons after they have been audited with a specific compiler version).</p><p>All of the tools are tightly coupled to the solc versions they use, and this becomes an issue in general for updating tools for coverage and testing. This should take 30 mins to set up, and yet, our CI is still broken today because solidity-coverage just does not want to work.</p>",
            "keywords": [
                "ci",
                "solc",
                "issue",
                "compiler",
                "security",
                "audit",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Human audits only right now.</p><p>Trailofbits is really interesting, been wanting to play with Enchidna. These guys come from a traditional infosec background and it really shows, because their professionalism is on another level from anyone else we&rsquo;ve been exposed to.</p><p>A lot of the actual code can be checked fairly automatically, especially with the more hardcore tools now coming out. You can&rsquo;t really automate some of the creative, game theoretic attacks, but there are people who are very good at this now.</p><p>Tried Oyente a while ago and did not have a good impression. It didn&rsquo;t really provide that much and the things it could identify were pretty easy to spot anyway.</p>",
            "keywords": [
                "oyente"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>A nice debugger! Please&hellip;</p><p>More infrastructure to easily set up your own node, and second layer tools on top of that to help cache data, because Dapps in 10 years are never going to work with just events...</p>",
            "keywords": [
                "event",
                "infrastructure",
                "dapp"
            ]
        }
    },
    "6": {
        "name": "Jorge Izquierdo",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Aragon - Decentralized Governance platform</p><p>We had a feeling that they had to go deeper into the stack to launch Aragon.</p><p>What we&rsquo;ve built:</p><p>We&rsquo;ve built two different interpreters:</p><p>Language for ACLs</p><p>Language for tx descriptions, similar to Natspec.</p><p>Allows you to do calls to smart contracts; but really basic stuff;</p><p>Built generic framework for interacting with their contracts. Our dApp changes; needs to integrate with 3rd party apps without allowing dApp developer to touch the database.</p><p>Ruby on Rails abstraction on-top of the data layer.</p><p>Problem here: we don&rsquo;t have any servers, we are a real dApp. Every single user has to compute entire state of the dApp.</p><p>Backend protocol / caching protocol / event-processing.</p><p>Upgradability stack.</p><p>Tooling to update storage etc correctly.</p><p>Trustless signer: help people understand their tx before sending the tx.</p><p>Working with metamask on this.</p><p>Our own CLI tooling</p><p>We have a package manager &ndash; backend to our app store</p>",
            "keywords": [
                "trustless",
                "governance",
                "protocol",
                "tooling",
                "acl",
                "aragon",
                "event",
                "developer",
                "database",
                "dapp",
                "backend",
                "platform",
                "decentralized",
                "tx",
                "contract",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Infura that is more decentralized. A full-node infrastructure[a].</p><p>An open-source explorer.</p>",
            "keywords": [
                "open_source",
                "infura",
                "decentralized",
                "infrastructure"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "7": {
        "name": "Jack Peterson and Sparkle",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "",
            "keywords": []
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Back-end: Visual Studio Code with docker images that run pythereum for unit tests.</p><p>Solidity compiler - Solium linter everyday</p><p>Integration tests run against Geth/Parity nodes</p><p>Custom libraries -- all their own RPC code.</p><p>No web3.js (ETH.js libraries are better)</p><p>Can run locally or dockerized - have a CI pipeline (Travis)</p><p>Push to Github and deploy to Rinkeby</p><p>Custom deploy tools are a huge headache. Doing a full custom deploy is like launching a satellite into space. There is a huge chasm to cross and a lot of the stuff is non-obvious</p><p>Truffle is used for this -- very challenging because it lacks deep modularity and customizability.</p><p>Failed at random on different networks after working reliably against testrpc. It won&rsquo;t tell you why and is deeply opaque. There is no error messaging and it is hard to use in general. The dependency of contracts gets very complicated (because logic is complicated).</p><p>There is definitely more work to get Truffle smooth for everyone</p><p>Actual contracts / delegate contracts -- build system is incredibly specific to their framework and difficult to adapt/customise.</p><p>Use Geth / Parity</p><p>UI -- react / redux.</p><p>Augur node is typescript ..</p><p>Lots of small things -- middleware library called ethereumjs-blockstream.</p><p>Library for generating keys and key files -- keythereum.</p><p>Key management is tough -- self signing (so can leave unlocked Geth instance, which is not good either)</p>",
            "keywords": [
                "ci",
                "testrpc",
                "library",
                "typescript",
                "rpc",
                "keythereum",
                "contract",
                "ui",
                "test",
                "error",
                "github",
                "docker",
                "dependency",
                "truffle",
                "geth",
                "rinkeby",
                "augur",
                "ethereumj",
                "travis",
                "deploy",
                "parity",
                "integration_test"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Pay others to think about it - no process yet.  We write a bunch of units tests, and we are going to run things through Oyente (Formal Verification).</p><p>Biggest problem - always has been - test thoroughly and comb through the code. Use static analysis tools. The biggest thing holding us back:</p><p>Maybe better standards for writing this stuff (NASA)</p><p>Create linting rules?</p><p>Have people working on project exhaustively review the code is the only way to do it right now. Certain classes of errors can be caught with unit tests, but we don&rsquo;t catch everything.</p>",
            "keywords": [
                "oyente",
                "linting",
                "static_analysis",
                "error",
                "test",
                "formal_verification",
                "unit_test"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Setting breakpoints in tests!</p><p>Salesforce Development:  Public thing where you post your code to it and everybody works off of it (lots of bounties projects now up from Status Open Bounties to Gitcoin and bounties.network).</p><p>Having clean Dev Nth without 30 things to set up:</p><p>React project will need to talk to Geth / IPFS / local = lot of setup is irritating.</p><p>If a transaction fails, the logs don&rsquo;t get written. This needs to be in the EVM</p><p>Having many slacks is a big problem. We should have 1 slack with all developers.</p><p>Documentation is also terrible.</p><p>What documentation would you like to see?</p><p>Tooling / documentation / community takes like a decade to develop. (Check Kauri for a possible solution)</p><p>&ldquo;How does Geth estimate Gas&rdquo; - need to ask a bunch of people and it&rsquo;s not written anywhere.</p><p>How much gas does a particular operation cost? Is this written down anywhere?  (People point you to yellow paper, but it&rsquo;s very hard to understand.)</p><p>Issues are not addressed so well by the Ethereum Foundation. We&rsquo;re talking about normal software development issues and sometimes the Foundation seems unfamiliar with best practices.</p>",
            "keywords": [
                "network",
                "community",
                "evm",
                "bounty",
                "gitcoin",
                "ethereum",
                "test",
                "kauri",
                "gas",
                "tooling",
                "ipfs",
                "documentation",
                "geth",
                "open",
                "react",
                "status",
                "issue",
                "developer",
                "cost",
                "log",
                "breakpoint",
                "slack"
            ]
        }
    },
    "8": {
        "name": "Joey Krug",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Co-Chief Investment Officer at Pantera Capital and Co-Founder @ Augur.</p>",
            "keywords": [
                "augur"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>At Augur, stack is different as it&rsquo;s a bit older.</p><p>IDE: if you&rsquo;re doing something simple you can use something like Remix. Remix has all the kind of stuff you need, automatic static analysis to detect bugs and very visual and easy to run.</p><p>More than 5-10 smart contracts, beyond ERC20 and ERC-721, now Remix will fall apart</p><p>UI is a big clunky as you add more contracts</p><p>It&rsquo;s hard to write a complicated test suite with continuous integration. Instead use Sublime with terminal or EMACS and VIM. Augur primarily uses a Visual Studio Code syntax highlighting.</p>",
            "keywords": [
                "ui",
                "sublime",
                "ide",
                "vim",
                "augur",
                "static_analysis",
                "syntax_highlighting",
                "remix",
                "integration",
                "test",
                "smart_contract",
                "emacs",
                "contract",
                "stack"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Run against pyethereum. Test suite is written in Python. As an investor, most companies are in JS environment with Truffle. Like Python a bit more. Truffle complaints are it has a lot of quirks. Default instructions for setting up tests in Truffle you get a weird nested stack of tests.</p><p>UX blockflow IDEO for Truffle, doesn&rsquo;t need to be rewritten but needs to be improved.</p>",
            "keywords": [
                "investor",
                "test_suite",
                "js",
                "test",
                "truffle",
                "stack"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Yeah, encourage everyone to use auditors. Lots of multisig tools out there that don&rsquo;t have CI builtin. Oyente, Mythril, but one problem is that no one else really uses them. Lots of bugs they found.</p><p>Tools are very well optimized to run for one smart contract. But not to run on suites of smart contracts. But if you fast forward a few years this will be relevant.</p>",
            "keywords": [
                "oyente",
                "ci",
                "multisig",
                "mythril",
                "smart_contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>My answers changed over a time, 1 year ago it was static analysis. These tools exist now, but they need to be improved. The tools themselves don&rsquo;t have test suites, for example and they need more firepower in general.</p><p>From an investor standpoint these dev tools need to be improved.</p>",
            "keywords": [
                "investor",
                "analysis",
                "test"
            ]
        }
    },
    "9": {
        "name": "Mark Beylin",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Creator of the Bounties Network. Bounties on any task in any Ethereum token. Frontend that relies on Infura and IPFS.</p><p>Infura doesn&rsquo;t let you listen for events. They have websocket capabilities that may be in beta right now.</p><p>Users use metamask for calls and transactions on it</p><p>I am the only solidity developer throughout its life.</p>",
            "keywords": [
                "event",
                "transaction",
                "network",
                "infura",
                "bounty",
                "ipfs",
                "solidity",
                "developer",
                "websocket"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I know and use the solium linter.</p><p>Use truffle, testrpc. I love Remix.</p><p>Use Remix for deployment. Feels like I can trust remix to work as it&rsquo;s meant to.</p><p>Web3JS, BigNumber, site is built on React.</p><p>IPFS JS library.</p><p>Blockies react library.</p>",
            "keywords": [
                "testrpc",
                "blockie",
                "library",
                "deployment",
                "ipfs",
                "remix",
                "bignumber",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Mocha tests using Truffle and testrpc.</p><p>Also use Rinkeby for when deploying staging versions.</p>",
            "keywords": [
                "truffle",
                "deploy",
                "rinkeby",
                "testrpc"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Consensys diligence is an auditing team available for their teams.</p><p>Argus (Berkeley audits chain)</p><p>Didn&rsquo;t find anything in our latest audit</p><p>Diligence at Consensys later found a re-entrancy vulnerability</p><p>Oyente also missed the re-entrancy bug(!!)</p><p>Having bug bounties in general is a good standard</p>",
            "keywords": [
                "oyente",
                "vulnerability",
                "consensy",
                "argus",
                "audit"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Better querying possibilities on the state of contracts. Better indexing to do this. Even something that will just shoot results into a SQL table.</p><p>A good wiki that is endorsed by the foundation but curated by the community.</p><p>E.g. &ldquo;How to do X&rdquo;</p><p>E.g. &ldquo;What is X&rdquo;</p><p>People don&rsquo;t know what they don&rsquo;t know</p>",
            "keywords": [
                "community",
                "query",
                "sql"
            ]
        }
    },
    "10": {
        "name": "Aidan Hyman",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Working with parity and geth and parity-bridge. Optimising the EVM for bespoke needs - could be for clients, for enterprises. Lower level focus.</p><p>Create tools and mechanisms for people to utilise the tech as easily as possible.</p><p>Collaborating with Aion & Shyft on potential implementation of a bridge.</p><p>Both on top of parity-bridge, which has some limitations:</p><p>Made only to work with POA.</p><p>Data availability for token information, following delegate_calls and not events.</p><p>Suggest work with Jay Rush and maybe add them into the team!!</p>",
            "keywords": [
                "bridge",
                "evm",
                "event",
                "client",
                "aion",
                "parity_bridge",
                "shyft",
                "token"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle</p><p>Lack of modularity is the biggest problem (across all tools listed below). Building on top of, rather than within, the EVM you need to update the toolset you&rsquo;re using and this becomes really difficult with the current tools.</p><p>If you implement some different opcodes in solidity, you need to take them all the way up. Open source is great, but it needs to be easy to fork and re-implement it easily in order for it to be really powerful.</p><p>Talk to person who had to modularise Truffle internally (not just testing, but also the lack of modularity - if you want to change something and still talk to others in the space, the best solution is often to rewrite the whole tool yourself, which is less than ideal). Aidan to send intro to David about this.</p><p>Parity and Geth</p><p>Also speak with David and Greg.</p><p>Use Parity due to responsiveness from the community and how good they are at answering questions!!! Great community - so NB!! Aidan&rsquo;s biggest asset is his network of core community members, which really matters in decentralized communities - open channels of communication.</p><p>Rust is a more obscure language and people lack experience, hence geth is somewhat easier to use and troubleshoot.</p><p>Geth has a bigger community, but the actual people developing the client aren&rsquo;t as readily available as Parity.</p><p>MetaMask for frontend development</p><p>Were tasked with making MM work for client and had to rebuild a lot of the stuff. Will also send an intro to the dev who handled. Greg is his name.</p><p>Mythril</p><p>Huge frustrations with this tool. Getting it running is a pain in the ass.</p><p>If it could be applied at the stack layer and not the smart contract layer. Build something like Mythril for an EVM implementation, trace things up the stack cleanly, add/remove opcodes, make new instructions. A stack explorer so to speak.</p><p>Could spawn so many things because we could understand the stack in a better way and grab a lot more logic. Pity to see focus on higher level tools, which has become somewhat of a hindrance. Why hyperledger went out and did it themselves (not just the licensing issues).</p><p>Educational tool for stupid web devs like me to learn about how opcodes actually work and are composed in the EVM.</p><p>Regular rust and node related stuff (also some go stuff).</p><p>Are there tools from these arenas that don&rsquo;t exist in Ethereum which would be really cool?</p><p>We need to make these tools more closely aligned with the chain itself. With WASM coming online, this is already happening and we just need to be ready - i.e. teach everyone WASM.</p><p>The end if here for really high-level development with WASM. What this will mean for the community and internet in general has yet to be discussed completely.</p><p>Try to use ethers.js as much as possible as opposed to web3</p><p>The person developing these tools (Richard) is totally accessible, responds to issues immediately (faster than a bot!!) - he is so collaborative and wants to make sure everyone is using the best tools possible, and this all makes such a difference.</p><p>Polymath people doing off-chain signing, which you couldn&rsquo;t do at the time and 1 of the methods didn&rsquo;t have a response variable they needed, and by the next morning it was updated. Tight feedback loops make it so much better to use tools.</p><p>You can create your own wallet in 4 LOC in your terminal - again the language and syntax is so much easier for a non-dev that this solution ought to win in the long time. Very relatable and understandable code base.</p><p>Gave solidity and parity/EVM workshops:</p><p>EVM workshop: took instructions, showed how it would be passed onto stack, where things go, how it gets passed on to memory. Questions were so relevant and knowledgeable.</p><p>Whereas in the solidity workshop, the questions were much more absurd and irrelevant. Talking about the stack, people from a dev background get it. It just makes sense. Take away: if we want devs who have been developing for 20 years, we need to actually show them how the stack works.</p><p>This is a community-wide failure that we need to focus on - for someone with a CompSci degree, solidity is crazy, but the stack is not!!</p><p>Bounty for cleaning up the yellow paper. Speak with David about this and his more in-depth version of the yellow paper.</p><p>Only ever hindered by delivering work because of MetaMask. Event and event monitoring between different networks was a fix that took a long time to be fixed. They have updated since and we haven&rsquo;t done any more work there since.</p>",
            "keywords": [
                "trace",
                "js",
                "network",
                "open_source",
                "community",
                "decentralized",
                "metamask",
                "wasm",
                "evm",
                "wallet",
                "mythril",
                "bounty",
                "ethereum",
                "test",
                "smart_contract",
                "client",
                "solidity",
                "truffle",
                "geth",
                "open",
                "stack",
                "mm",
                "issue",
                "polymath",
                "bot",
                "event",
                "parity"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Talk with Stu, who handles all the testing stuff.</p><p>Used to do what Mythril does: visualize the contracts as it does now, so once it is set up, it is very cool for us to use.</p><p>Such a focus on formal verification in Solidity (but who even knows if it really matters?).</p><p>Not doing fuzz testing for instance, and it seems like a lot of these requests are based on assumptions that have not been proven.</p><p>No-one knows what the optimal testing framework is, so more default templates in general that allow people to use what they need to use across different projects.</p><p>Again, modularity is what matters most.</p><p>Both unit and functional test as necessary. Unit testing seems more standard. Mocha and chai within truffle for the most part.</p><p>Ethereum-js VM has really bad testing around it and could be really usefully improved. We need some kind of local implementation to do testing on! Write another test suite as a bounty here.</p>",
            "keywords": [
                "js",
                "mythril",
                "test_suite",
                "solidity",
                "bounty",
                "ethereum",
                "vm",
                "truffle",
                "test",
                "formal_verification",
                "assumption",
                "unit_test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Mythril for the EVM stack. Rewrite a complete stack visualizer for the whole EVM. Add opcodes to the stack and see how it looks programatically and logically would be awesome.</p><p>Even an overhauled IDE that is actually Integrated. Again, rewritten from scratch with a focus on modularity would be really nice to see. Even just clearing your cache properly and the way it physically looks is not good enough.</p>",
            "keywords": [
                "mythril",
                "ide",
                "evm",
                "stack"
            ]
        }
    },
    "11": {
        "name": "Greg, Stu, David",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>David: EVM layer stuff: interactions between opcodes, JS dev and web3 also comes into this at the other side</p><p>Greg: Reimplementation and adding functionality to the EVM and a lot of &ldquo;bridge work&rdquo;</p><p>Setting up bridges, working with parity bridge and other existing contracts</p><p>Added efficiencies for personal needs to types when blocks are getting written. Basically recreated in the EVM to get a sender.</p><p>Way blocks are written into the merkle tree.</p><p>Parity bridge is cumbersome because it is not well versionized and depends on the version of the EVM you are running/that you forked from. Often requires a ton of extra configuration.</p><p>Stu: solidity and PM (managing groups of people working at that layer of the stack), building smart contracts for clients</p>",
            "keywords": [
                "type",
                "bridge",
                "evm",
                "js",
                "client",
                "solidity",
                "parity_bridge",
                "smart_contract",
                "pm",
                "contract",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>JetBrains suite as an IDE. Remix comes in there for extra convenience but has it faults and is not totally integrated.</p><p>Biggest problem with Remix is that it is written in jQuery and it is monolithic. Don&rsquo;t know when it compiling/rebuilding contracts. Spinner doesn&rsquo;t spin more than once, no responsiveness, very frustrating. Well laid out for an MVP ;)</p><p>Pass in data as strings and not having it parsed as strings is frustrating.</p><p>Will meet with Remix team this week to advance development further. Seeing it as only 2 devs hammers home how under-resourced a lot of this software infrastructure is.</p><p>Debugger has not really been touched since the first version. Critical software lagging behind is not good. Still better than the truffle debugger though.</p><p>EVMLab - has an old school debugger that lets you step thru opcodes and examine what is happening in memory and storage. Has not been maintained recently, so you need to hack it together yourself.</p><p>Web3 and truffle sometimes, but not often. Often Remix and a couple RPC calls with console.log()s suffice.</p><p>Looking over Mithril and visualisation of the control flow seems really interesting. Handles all the low hanging fruit, as an automated system should.</p>",
            "keywords": [
                "jetbrain",
                "ide",
                "mithril",
                "hack",
                "remix",
                "jquery",
                "log",
                "evmlab",
                "infrastructure",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Mostly unit tests in mocha and chai.</p><p>Mostly using Travis to automate the pipeline.</p><p>Projects are fairly young and PoC - so not necessarily a major concern at this point.</p><p>If not already mentioned, are there any libraries you rely on regularly?</p>",
            "keywords": [
                "unit_test",
                "library",
                "travis"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Mythril, as mentioned above.</p>",
            "keywords": [
                "mythril"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>EVMLab certainly has some of the features required, but they are very inaccessible</p><p>Directly execute arbitrary code and trace through it in nice fashion that is not just some JSON output.</p><p>Need to be able to step through those traces easily, which is also not possible there currently.</p><p>Go implementation of parity bridge (to make it leaner). Only one bridge that is open source, so having another one would be useful, especially seeing as Parity devs don&rsquo;t document well, especially changes between versions.</p><p>Some level of standardisation around bridges and agreement about how they should be structured.</p><p>What does interoperability actually mean in this context?</p>",
            "keywords": [
                "bridge",
                "trace",
                "execute",
                "parity",
                "open_source",
                "context",
                "evmlab"
            ]
        }
    },
    "12": {
        "name": "Jon Maurelian",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I work at Consensys Diligence doing audits; similar to Zeppelin.</p><p>Also, I do technical communications / writing blog posts about best practices around security / Consensys docs / token repos.</p>",
            "keywords": [
                "security",
                "consensy",
                "zeppelin",
                "token"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>We use Truffle a lot (never had to use Dapple or Embark)</p><p>Zeppelin used by clients -- would like to use EPM more</p><p>Runs a Geth node myself</p><p>Solhint linter</p><p>Solidity Coverage is test measurement coverage tool</p><p>ETHGasReporter (Takes your Mocha reports and says how much Gas your test used.)</p><p>Would like to see a fuzz tester.</p><p>Excited to learn more formal verification + bringing into practice &ndash; intro to Sergio?</p>",
            "keywords": [
                "embark",
                "ethgasreport",
                "mocha",
                "gas",
                "tester",
                "client",
                "test",
                "formal_verification",
                "solhint",
                "zeppelin"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "13": {
        "name": "Nick Dodson",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Working on experimental infrastructure. ARES, GovernX.</p><p>Building off-chain stuff - in order to conduct governance in organizational structures, most of the work is off-chain.</p><p>Will also be doing on-chain governance, where they build DAPPs for ICO&rsquo;s</p><p>Infrastructure level stuff: infura.</p>",
            "keywords": [
                "governance",
                "ico",
                "are",
                "infura",
                "dapp",
                "governx",
                "infrastructure"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Solidity Compiler</p><p>The C version is very fast - but if you run the emscripten version, it&rsquo;s painfully slow.  In transpiling process of C++ version, it drops down performance. The JS transpile needs to be improved.</p><p>Solc compiler slows down development time. Ideal to stay in local JS (and not have to go back to solc), have it compiled super fast inline using a tagged template literal or something like it (using require(&ldquo;solc-inline&rdquo;) or equivalent).</p><p>Could write `solidity` in backticks and have it compiled all in same file.</p><p>Would make experimentation and testing much easier and faster. Could potentially provide some specs/API for this. Will provide further specs via email.</p><p>Trying to build complex systems with 20 contracts and everytime need to wait 20 minutes</p><p>TestRPC + Geth Client</p><p>Not well maintained - ask Truffle team.</p><p>People are trying to get away from it - people want to test on GETH / Parity and use them to run their own Geth nodes, but it&rsquo;s a pain in the ass.</p><p>Was working on Geth library that allowed you to run in Mac / PC with JS</p><p>Used Geth like Testrpc - allowed you to test contract codes against all clients (Geth / RPC / Parity)</p><p>Never finished, but definitely needed.</p><p>If you&rsquo;re running contract tests locally, TestRPC is only ETH JS VM. This is, however, not the VM most of miners are using, and that can be cause for concern.</p><p>Can we make testing contracts against Geth easier? NodeJS Wrapper against Geth (most people are using Truffle - would be happy if Truffle had a module for this)</p><p>Truffle uses Ganache which is ETH JS VM - this isn&rsquo;t used in production.</p><p>Truffle involves hassle of having to download run and configure GETH</p><p>Maybe a wrapper or easy install script - run Geth like TestRPC</p>",
            "keywords": [
                "testrpc",
                "solc",
                "library",
                "production",
                "js",
                "compiler",
                "client",
                "solidity",
                "nodejs",
                "parity",
                "vm",
                "email",
                "test",
                "ganache",
                "truffle",
                "rpc",
                "geth",
                "contract",
                "api",
                "wrapper"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Mythril will be useful when in full bloom - need more oversight on contracts in general</p>",
            "keywords": [
                "mythril",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "14": {
        "name": "Ilan Benbrith",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I&rsquo;m the Technical PM at Consensys Academy working on an 11-week developer program. I&rsquo;m responsible for maintaining the course and making sure people reach their development goals.</p><p>The course is for experienced developers - experience with languages/git required.</p><p>Overall objective is to attract people to and grow the Ethereum community</p><p>Content creation, assignments, course, customer/student support, external resources, connection with Consensys mentors</p><p>The course starts with intro to blockchain in general, so that students don&rsquo;t have to know too much about blockchain. Historical context/ timeline, technical underpinnings of blockchain, technical underpinnings of Ethereum. Difference in mindset between traditional development vs DApp development.</p><p>Teaching them the setup and tools they&rsquo;ll need for the program (Truffle, Ganache, Remix, etc.)</p><p>Then EVM, Solidity/smart contracts, connecting a front end with React Native</p><p>Security smart contracting and auditing with help from ConsenSys Diligence</p><p>Finally, different integrations (IPFS, Oracalize, etc.) and design patterns of different teams.</p><p> LLL, Assembly language for the EVM, Vyper.</p><p> Ethereum Improvement proposals/ Ethereum Request for Comments processes</p>",
            "keywords": [
                "mindset",
                "remix",
                "design",
                "integration",
                "contract",
                "evm",
                "course",
                "ethereum",
                "ganache",
                "pm",
                "consensy",
                "ipfs",
                "mentor",
                "truffle",
                "react",
                "content",
                "lll",
                "developer",
                "resource",
                "security",
                "context",
                "blockchain",
                "vyper"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle, Ganache, Remix, Metamask etc.</p><p>Front end</p><p>React Native</p><p>LLL, Front end libraries</p><p>We give wide exposure</p>",
            "keywords": [
                "lll",
                "metamask",
                "remix",
                "library"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle testing</p><p>Best practices resources</p>",
            "keywords": [
                "resource"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Consensys Diligence provides some of the best resources and best practices online</p>",
            "keywords": [
                "resource"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Drizzle is a really cool idea for front-end development</p>",
            "keywords": []
        }
    },
    "15": {
        "name": "Goncalo Sa",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I work at Consensys Diligence - focus on security of the ecosystem. Everything that is related to security: it&rsquo;s on our roadmap to tackle it.</p><p>95% of our work today consists in doing security audits on smart contracts - any EVM-compatible or &ldquo;compilable&rdquo; code. That accounts for building security tools that do the checks automatically, or that assist on manual inspection.</p><p>The goal is to eventually encompass everything related to Ethereum security.</p><p>I have always been hacking - a grey hat of sorts.</p><p>Built an ad tech startup, which had a built from scratch ad server that I did the architecture for.</p><p>Had a mobile app to tell Portuguese people what was happening in their city.</p>",
            "keywords": [
                "security",
                "ethereum",
                "smart_contract",
                "evm"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I used to use Remix a lot more than I do today (though I still use it heavily).</p><p>Use it as a text editor, in fact, but mostly for debugger when I am auditing, especially when trying to prove/disprove an attack I have thought up.</p><p>Visual debugging feature helps me a lot. It&rsquo;s not perfect, though.</p><p>We&rsquo;re fans of dogfooding, so I use Mythril a lot, which was initially created by Bernard, but is now being developed by a bunch of people we hired.</p><p>Used mostly for automatic detection of errors.</p><p>Oyente is falling behind a bit, so I haven&rsquo;t used it in a long time.</p><p>Manticore is not built by us and does the same thing as Mythril (we have compared it). Though the inner workings are very different, the result is largely similar.</p><p>Have played with, but never tried to integrate, Enchidna into my workflow, as it is difficult to work with due largely to deadlines.</p><p>Rattle is closed source, so haven&rsquo;t yet got around to playing with it.</p><p>I extended a tool from Federico, who has an ANTLR parser for solidity, that is basically a viz and query tool for solidity contracts. Everything from inheritance trees to function call graphs and querying function paths in the function call graph. It is a tool to help with manual inspection particularly.</p>",
            "keywords": [
                "query",
                "oyente",
                "antlr",
                "mythril",
                "solidity",
                "error",
                "manticore",
                "solidity_contract",
                "audit",
                "rattle"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Remix, Surya and Mythril as above.</p><p>Very small number of instances where I need to do something off chain, for which I will then use Truffle.</p>",
            "keywords": [
                "mythril",
                "remix"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>None come to mind right now. Let&rsquo;s keep the focus on EthPM here - we need to make sure as many people use it as possible! We should have done this a long time ago and we need to dogfood it as a community!</p>",
            "keywords": [
                "community",
                "ethpm"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>A proper, local dummy client. I love the Truffle team and I love Ganache, which I use a lot.</p><p>I run a lot of tesst on Ganache, which are not seamless to run on other machines, so I would love a super seamless cross-platform client that has a great block explorer in it.</p><p>Using the visual version of Ganache about a month ago, I couldn&rsquo;t see events being fired, or various important details on transactions happening there. We need a more full-fledged local client.</p><p>We haven&rsquo;t really prepared for how to handle contracts across shards (coming months to years, who knows?).</p><p>We are looking mostly at tools to support the WASM architecture. This is likely the problem that will take the most of our time, I think. I have talked to Johan Barbie about this and I&rsquo;m not sure anyone has a very good solution for what a tool that would help scheme the interactions out actually looks like.</p><p>I am personally more worried about language design stuff, and languages in general, than I am about the consensus layer, or anything below the language and application layer.</p><p>We are also working hard on updating our tools to support, for instance, Vyper. John has been doing a terrific job there, doing contract translations from Solidity to Vyper, built a plugin for Truffle.</p><p>Mythril will also eWASM at some point before it goes into production.</p>",
            "keywords": [
                "wasm",
                "consensus",
                "ewasm",
                "event",
                "transaction",
                "mythril",
                "client",
                "solidity",
                "production",
                "block_explorer",
                "design",
                "ganache",
                "truffle",
                "platform",
                "vyper",
                "contract"
            ]
        }
    },
    "16": {
        "name": "Fabiano, Jordan, Nick",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Cryptokitties! Goals they have are to get multiple millions of users, the sooner the better. Ethereum sharding would be very nice, but even then there are scalability problems. Looking into other chains, EOS, Neo, Cardano  Looking at things from a scalability perspective.</p><p>Back-end stuff reconciling state of the world between blockchain and their stuff</p>",
            "keywords": [
                "cryptokittie",
                "shard",
                "blockchain"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Been a while since we have done smart contract development, haven&rsquo;t done any since we deployed. Truffle framework, TestRPC (now Ganache). The standards at the time.</p>",
            "keywords": [
                "truffle",
                "deploy",
                "smart_contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Standard testing and using community to audit contracts</p>",
            "keywords": [
                "community",
                "contract",
                "audit"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Audit code: bounty hunt program, found one major one via community. Ran our own repo specifically for this on Github.</p><p>Community auditing through bounty programs.</p>",
            "keywords": [
                "community",
                "github",
                "bounty",
                "audit"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>2 main areas with significant problems:</p><p>Data analytics and reconciliation btw on-chain and off-chain data.</p><p>Our first MVP didn&rsquo;t have a back-end at all but we had to develop a back-end as we scaled. Reconciling these quickly and correctly is key.</p><p>Analytics is difficult. Web3 and Geth, have to hook into data. But there are too many hurdles to jump to get these.</p><p>In particular, the biggest problem is when we want to deal with analytics where some of the data is implicit, like a series of transactions. One tx doesnt give enough data. When someone bids on a sale option in cryptokitties, bidder, price, and catId. Have those 3 pieces of information. But when you ask how many cats has this person sold? This info is implicit in a wider set of tx&rsquo;s, all of which you have to fetch and then compare..</p><p>Part of this is not them including this info in advance. A common problem in the ecosystem is that once you deploy something you need more info after deploying a smart contract and it&rsquo;s hard to get this</p>",
            "keywords": [
                "analytic",
                "reconciliation",
                "transaction",
                "deploy",
                "cryptokittie",
                "smart_contract",
                "geth",
                "tx"
            ]
        }
    },
    "17": {
        "name": "Andy Milenius",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>DappHub:</p><p>Working on dev tools since I got into the space in 2015. There were no tools at all; we wanted to create them in a holistic way from first principles.</p><p>Made tools to make use of Solidity compiler & make Ethereum API & EVM simpler in general.</p><p>Formal verifications & contract safety.</p>",
            "keywords": [
                "dapphub",
                "evm",
                "compiler",
                "solidity",
                "ethereum",
                "safety",
                "contract",
                "api"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "18": {
        "name": "Esteban Ordano",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I&rsquo;m hiring two or three people &ndash; excellent engineers &ndash; to build tooling.</p><p>We&rsquo;re calling the project Voltaire Labs, after the Voltaire house. Trying to get Sergio Lerner to help with that. Getting people I know from Google. Maybe we should join efforts? Will intro to Federico Bond.</p><p>Our infra:</p><p>MANA token which is an ERC20.</p><p>Auction of Land.</p><p>Land smart contract which is an NFT token standard.</p><p>Got tired of not hearing back re ERC non-fungibles improvements. Proposed alternative ERC.</p><p>Land registry of who owns which land parcel.</p><p>These link to IPFS or IPNS for content of land.</p><p>Decentralized exchange of land parcels.</p><p>Small tool for sending emails whenever an event is triggered on your contract. EthAlarm: takes address of contract, ABI, pick events that you&rsquo;re interested in.</p><p>We run the land auction off-chain, we had a period of registration where you&rsquo;d send the MANA you wanted to use in the auction. At the end of the auction, we distributed the NFT tokens and returned MANA.</p><p>Auction was mostly an independent application &ndash; better UX, less fees</p><p>Why the auction was off-chain:</p><p>We processed around 115k bids. The UX for the auction was great. We managed to provide the user with an experience that was way better, because it wasn&rsquo;t blockchain-based.</p><p>Both on the browser and the server, we exchanged cryptographic receipts &ndash;&ndash; &ldquo;I&rsquo;d like to bid for the following parcel (x,y), (x,y) &ndash; at the end you&rsquo;d receive a signed receipt&rdquo; &ndash; the server would receive that message, and say back &ldquo;I&rsquo;ve received a bid, and here&rsquo;s your receipt&rdquo;. All these receipts are public.</p><p>Anyone in the auction everyone could act as an independent verifier of the auction.</p><p>We returned a receipt had a nonce &ndash;&ndash;</p><p>We can audit the whole auction. Can prove every bid that we received.</p><p>How we&rsquo;ve been running auditing</p><p>We sold $16m worth of parcels of land.</p><p>We wanted to make sure that they weren&rsquo;t messing up.</p><p>Not many people were checking &ndash; but a few did and even reported back some issues; community trusted them.</p><p>Would be best if this was run on a decentralized protocol so people didn&rsquo;t have to trust these guys.</p><p>We&rsquo;re building a voting scheme with MANA:</p><p>&ldquo;How tall should this building be?&rdquo;</p><p>We are repeating the same pattern as the auction.</p><p>Our voting scheme is offchain and non-binding, because the project is early enough that people can back out.</p>",
            "keywords": [
                "cryptographic",
                "ipns",
                "nft",
                "token",
                "community",
                "fungible",
                "decentralized",
                "contract",
                "independent",
                "engineer",
                "protocol",
                "email",
                "browser",
                "verifier",
                "smart_contract",
                "ethalarm",
                "decentralized_exchange",
                "auction",
                "tooling",
                "ipfs",
                "audit",
                "content",
                "event",
                "issue",
                "blockchain"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Biggest request: have ERC20 upgraded to ERC223.</p><p>We have troubles with small re-orgs &ndash; transferring immediately upon approvals causes issues.</p><p>This was a problem with our code; hard to develop.</p><p>Have watchers on the Blockchain, and sending transaction to make correct transfer, e.g. for MANA token.</p>",
            "keywords": [
                "blockchain",
                "issue",
                "watcher",
                "token"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "19": {
        "name": "Matias Bargas",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I used to be an investor, but came to crypto and Decentraland at the same time.</p><p>I used to work with Juan and 2 other guys who all joined the team at the same time. I really wanted to leave enterprise companies and loved the team already there.</p><p>It&rsquo;s about the open philosophy, and break down the walls around the 1% of the 1% and diffuse power into the hands of everyone.</p><p>I was working on an online IDE for an in-house language at MuleSoft. Now the engineering manager at Decentraland.</p>",
            "keywords": [
                "investor",
                "decentraland",
                "ide",
                "crypto"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>The whole Ethereum stack, basically.</p><p>Truffle</p><p>Integration with common developer tools is not fantastic. We need to start thinking about and building our tools in such a way that is easier for the guy/girl who comes after me to fix the issues that come up.</p><p>If we are changing the world, why are we still thinking in narrow ways about how our tools should be used and by whom?</p><p>VS Code</p><p>React, typescript, nodejs</p><p>Bablyon.js as an engine for VR</p><p>Web3</p><p>One of team members rewrote web3 into typescript for EthBuenosAires and all the tests are passing! Will post a link here after the hackathon.</p><p>There were typos there!</p><p>There was functionality not working (and there are billions of $&rsquo;s running on top of it!)</p><p>IPFS for decentralized deployments.</p><p>Scalability is a concern here. If we want to deploy the whole metaverse in IPFS, we actually can&rsquo;t. We need to replicate data in, I don&rsquo;t know, Amazon or something because we can&rsquo;t supply the level of connection we need to (just 100,000 users or so, not even in the millions). And even this will require bootstrapping nodes like crazy.</p><p>The IPFS cluster is still in alpha and not as stable as we need it to be.</p><p>We are waiting for scalability, but we don&rsquo;t have the tools to monitor and handle that amount of information anyway, and this is a concern for us.</p><p>I haven&rsquo;t used this yet, but this seems to be an interesting tool: https://github.com/nomiclabs/buidler</p>",
            "keywords": [
                "issue",
                "js",
                "deployment",
                "ipfs",
                "vs_code",
                "react",
                "typescript",
                "nodejs",
                "ethereum",
                "deploy",
                "integration",
                "test",
                "truffle",
                "decentralized",
                "stack"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Starting from the infrastructure stuff: we need a new language to describe all the set of things that you need to do in order to deploy one or more contracts.</p><p>You have you application made up of a set of contracts that are all talking to each other: we need a decentralized logging system to make sure they are all still working properly and the events that are being dispatched by the nodes are correct.</p><p>A complete set of tools for testing. Truffle is not adaptable enough.</p><p>The work being done by Zeppelin on securing contracts and providing best practices around how to use audited contracts is great.</p>",
            "keywords": [
                "zeppelin",
                "event",
                "deploy",
                "audit",
                "truffle",
                "decentralized",
                "infrastructure",
                "contract"
            ]
        }
    },
    "20": {
        "name": "Nadav Hollander",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Building Dharma - open protocol for tokenized debt</p><p>Pretty much exclusively at the contract level, sometimes using stuff like libraries that wrap around contracts.</p>",
            "keywords": [
                "protocol",
                "library",
                "dharma",
                "open",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I like to use Typescript for testing.</p><p>0x team built a great tool for generating typescript tests from ABI&rsquo;s</p><p>Using truffle to test.</p>",
            "keywords": [
                "truffle",
                "test",
                "typescript"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle to write JS unit tests.</p><p>** There are not good mocking libraries for solidity **</p><p>Had to roll my own mocking contracts for testing</p><p>A better native solidity testing framework with mocking would be awesome</p><p>No manual testing.</p><p>It&rsquo;s still pretty painful to do this too</p>",
            "keywords": [
                "test",
                "solidity",
                "library"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Write down in plain text documents what the invariants are for the contracts. Just very clear human speak for how the contract should behave.</p><p>Then write unit tests relentlessly.</p><p>Ideally, there would be code review, but he is coding solo in his stuff write now.</p><p>Finding an audit is a crappy process. No information on who is doing it, what prices look like, which auditors are good / have good reputations.</p><p>Talked to zeppelin</p><p>Talked to Consensys diligence</p><p>Talked to Quantstamp</p>",
            "keywords": [
                "zeppelin",
                "invariant",
                "quantstamp",
                "audit",
                "unit_test",
                "code_review",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>A GREAT SOLIDITY DEBUGGER</p><p>A turnkey solution to the &ldquo;trusted relay chain&rdquo; thing. Just make it easy for people to spin up a side chain, run their programs on it, rewind history to a specific point in time, etc.</p><p>Also let you set up rules on it like locking up deposits for a week between the side chain and the main chain.</p>",
            "keywords": [
                "lock",
                "deposit",
                "solidity",
                "history"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Good logging and debugging</p><p>Setting up your own side chain easily to test things on because it would be way faster</p>",
            "keywords": [
                "test",
                "log"
            ]
        }
    },
    "21": {
        "name": "Alex van de Sande",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Working on Mist, the Ethereum browser.</p><p>Developers contributing open-source.</p><p>There&rsquo;s a wall between core team & open-source team.</p><p>Would love for people to be paid reliably for features.</p><p>3 Developers. Talk on Discord.</p><p>Current experimentations in paying open-source developers:</p><p>Colony</p><p>Commit F</p><p>We want beter Github integration. Now possible with Status Open Bounties and Gitcoin etc.</p>",
            "keywords": [
                "status",
                "developer",
                "bounty",
                "gitcoin",
                "ethereum",
                "github",
                "integration",
                "open_source",
                "browser",
                "colony",
                "open",
                "mist"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>People build new features, we check, and then approve it.</p><p>We&rsquo;ve had issues &ndash;</p><p>Meteor.js migrating to React.</p>",
            "keywords": [
                "issue",
                "js",
                "react"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Finding talented people is very hard. They are in such high demand. Trying to get people out of school. Online courses in Solidity.</p><p>Web developers, software engineers.</p><p>Separate recruiting approaches for the Foundation.</p>",
            "keywords": [
                "recruiting",
                "developer",
                "course",
                "engineer"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "22": {
        "name": "Nick Johnson",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>ENS: documentation, smart contracts, UI&rsquo;s,</p><p>Auditing other smart contracts</p><p>Other smart contracts</p><p>Ether cards</p><p>Offchain: dev tool, EVM static analysis tool,</p>",
            "keywords": [
                "ui",
                "evm",
                "static_analysis",
                "documentation",
                "smart_contract",
                "ens"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Open Zeppelin tools are increasingly good. But try to keep the smart contracts as small as possible</p><p>Just web3 itself in terms of javascript</p><p>ETH Gas station and etherscan are useful for different reasons</p>",
            "keywords": [
                "smart_contract",
                "javascript",
                "etherscan"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle unit testing with mocha</p><p>Added built in testrpc</p><p>Testrpc still doesn&rsquo;t have big number support for certain signatures so we have to fire up a geth node</p>",
            "keywords": [
                "signature",
                "mocha",
                "testrpc",
                "test",
                "geth"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Write a spec and define edge cases and corner cases</p><p>Lots of unit tests</p><p>Make a point of testing where you intentionally break</p><p>Ultimately get it audited</p><p>How will this get easier for beginners?</p><p>Open source solidity libraries so that less code needs to actually be written by beginners (just 10 lines of customization)</p><p>Build some of these best practices into static analysis tools (linterns on steroids)</p><p>Solicit crowdfunding to pay for the audits of projects that the mainstream is interested in</p><p>Open Zeppelin appears to be the best open source solidity library out there</p>",
            "keywords": [
                "crowdfunding",
                "library",
                "static_analysis",
                "solidity",
                "open_source",
                "audit",
                "unit_test",
                "open",
                "zeppelin",
                "spec"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Byzantium added return data size (prevents arbitrary return data size limits). Once solidity implements this, it will be possible to return strings and stuff.</p><p>Automated updatable smart contract?</p>",
            "keywords": [
                "limit",
                "smart_contract",
                "solidity"
            ]
        }
    },
    "23": {
        "name": "Elena Nadolinski",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Last 6 months have been working on Solidity, Ethmoji (like Gravitar for Ethereum).</p><p>Went to ETHWaterloo, have done talk at Hackathons about NFT&rsquo;s. Make your own NFT from scratch at ETHDenver. With tools that we have, things are not as hard as people think they are. Can write something in 20 minutes with tests!</p><p>OpenZeppelin came up to her and invited to talk at ETHBA.</p><p>With EthMoji wanted to make it the best smart contract as possible, wanted to make it upgradeable.</p>",
            "keywords": [
                "ethmoji",
                "ethwaterloo",
                "ethdenver",
                "nft",
                "ethereum",
                "test",
                "openzeppelin",
                "smart_contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Use Truffle because it&rsquo;s by far the best framework for testing. Used Embark and Biddler, used Remix a bit for debugging things in memory. Memory explorer would be fascinating. In Solidity everything is a hash table. No case at all for catching hash collisions.</p><p>OpenZeppelin, played around with ZeppelinOS but would use it more in the future.</p><p>VSCode with Solidity plug-in, almost never have problems.</p><p>Eth-gas-reporter is amazing :)</p><p>Command line tool for code coverage, Solidity-coverage is a mocha plug-in</p>",
            "keywords": [
                "embark",
                "mocha",
                "solidity",
                "remix",
                "openzeppelin"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle for testing. Force people to do TTD in events!</p><p>Truffle is not efficient in deploying things, can have a deployer contract that handles with more gas efficiency.</p>",
            "keywords": [
                "gas",
                "event",
                "deploy",
                "truffle",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Documentation</p><p>Debugging, so helpful. A debugger with a memory view but without using Remix. Online IDE is not great UX for a developer. Coding in a website not a great pattern</p><p>Something that abstracts away MetaMask. An Open Source core. They are using a Chrome plugin because they are storing your private keys on your browser's local storage. If you could provide a core of this is how you talk to Infura.</p><p>Design system patterns. They really stick blockchain in your face. Want to sacrifice accuracy for a better UX. Design system. Very interested in participating in this.</p><p>Figma does a preliminary case study on design in the Bay. The crypto teams that do design use Figma. Corporate Design system, open source Figma file.</p>",
            "keywords": [
                "ide",
                "developer",
                "infura",
                "remix",
                "crypto",
                "documentation",
                "design",
                "open_source",
                "browser",
                "blockchain"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>A lot of tools exist but aren&rsquo;t being utilized here. There&rsquo;s no reason that Travis can&rsquo;t run with Truffle. But this pattern doesn&rsquo;t exist. Now that we have upgradeable contracts we can think of smart contracts like regular development.</p><p>Documentation, for a beginner starting out it&rsquo;s extremely difficult. Not that many good tutorials on how to use technologies together.</p><p>Index of good tutorials. For IPFS in a smart contract. Want more deeper tutorials. Want to understand the why.</p>",
            "keywords": [
                "tutorial",
                "ipfs",
                "travis",
                "documentation",
                "truffle",
                "smart_contract",
                "contract"
            ]
        }
    },
    "24": {
        "name": "Swaroop",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>We are building EthVigil an API gateway to to help developers build apps on blockchain without worrying about nodes or RPC calls. We take any smart contract and turn it into a REST interface. Use a modified ERC20 token (and a hacked Remix IDE). So you don&rsquo;t have to worry about encoding it, filling out strings, etc. Deploy it to a testnet. Even take care of issues that could occur on the blockchain.</p><p>Once it&rsquo;s deployed it&rsquo;s like a Swagger API, make all the Get calls, etc. Any web developer can see how it works. Setting up private keys, all that signing, all that stuff is taken care of (custodian feature). All you need is an API key, abstracts away some of the pain.</p><p>Demoed minting some tokens. EthVigil goes deeper and will investigate if transactions will fail. Any web developer can use it upfront. Can add integrations, their system monitors the whole blockchain for events, can get notifications on Slack/email.</p>",
            "keywords": [
                "ide",
                "web_developer",
                "transaction",
                "event",
                "developer",
                "hack",
                "private_key",
                "remix",
                "deploy",
                "integration",
                "ethvigil",
                "testnet",
                "token",
                "email",
                "blockchain",
                "rpc",
                "rest",
                "contract",
                "slack",
                "api"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Mostly custom tools. Started with web3, started with Truffle but was running into a lot trouble using them so rolled their own.</p>",
            "keywords": [
                "truffle"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Basic unit tests, integration testing. So much of the codebase that keeps changing so difficult to stay on top of testing, but have must stricter tests on mainnet. At the moment don&rsquo;t have external auditing.</p>",
            "keywords": [
                "unit_test",
                "integration",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Web3 is a library to make it easier for a lot of developers in the space. But we use JSON RPC calls directly, don&rsquo;t want to abstract on top of this so don&rsquo;t want to get anything in between this. Had some issues with web3py.</p><p>Recommend that our customers use Truffle, Ganache, etc.</p>",
            "keywords": [
                "issue",
                "json_rpc",
                "developer",
                "ganache"
            ]
        }
    },
    "25": {
        "name": "Alex Beregszazzi & Pawel Bylica",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Pawel - focused on VM in general, spent a lot of time designing / optimizing the EVM for the future.</p><p>Experimenting with new ways to make the VM faster for future upgrades</p><p>Classic code optimization - added some small features to EVM (like Revert / Return Data Buffer / Shift Operators)</p><p>Works mostly with Alex -- changes in Byzantium were with Christian</p><p>Joined 2-3 months ago</p><p>Maintained C++ code base for Ethereum client -- experience with EVM</p><p>Alex</p><p>Started with building dApps, contracts, UIs &ndash; everything was broken in 2015.</p><p>Then jumped into proposing things and fixing things;</p><p>Solidity</p><p>Testing</p><p>Javascript</p><p>Led to working on testrpc & ganache-core</p><p>Worked on Trezor, and build a dApp for it.</p><p>Ended up with all these other issues: cpp-ethereum; testrpc; RPC methods.</p><p>Tried to raise issues, and sometimes they end up in improvements.</p><p>Spends most of his time in Solidity design.</p><p>eWASM &ndash; started 3 years ago for 6 months &ndash; then took a big break &ndash; then now working on it for 3-4 months (really started in Jan).</p>",
            "keywords": [
                "evm",
                "testrpc",
                "ewasm",
                "issue",
                "javascript",
                "solidity",
                "dapp",
                "design",
                "vm",
                "rpc",
                "trezor",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "26": {
        "name": "Christian Reitwiessner",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>90% of my time: design of Solidity language and its implementation</p><p>Formal verification part of the language &ndash;</p><p>Deprioritized over the last 2 months. Will take on again in April.</p><p>Other projects:</p><p>General research</p><p>Less research re sharding or plasma &ndash; More research on computational scalability of SNARKs, STARKs, Truebit</p><p>Handed off cpp-ethereum to Pavel &ndash; not working on it as much.</p>",
            "keywords": [
                "sharding",
                "snark",
                "solidity",
                "design",
                "research",
                "formal_verification",
                "plasma",
                "stark",
                "truebit"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Gas profiling:</p><p>Solidity does some upper-bound gas cost estimation &ndash; but its not very useful because it&rsquo;s just an upper bound.</p><p>How to calculate: run the EVM with specific inputs?</p><p>Or: run the function with larger and larger arrays; and find a &ldquo;gas function&rdquo; as a function of input size. But this also depends on state.</p><p>Solidity &ndash; 16 stack slots issue:</p><p>Soon: we&rsquo;ll have structs, and this will be less of an issue.</p><p>When we have IULIA, this requirement will go away.</p><p>When IULIA compiles to EVM, it can move variables from stack to memory, after analyzing which is used or not.</p><p>Interesting: IULIA will compile to eWASM.</p><p>Inlining common function calls:</p><p>We&rsquo;re conservative when it comes to adding new features in the code generation flow.</p><p>We already have an optimizer for IULIA which does inlining; so that will resolve this.</p><p>The optimizer (in solc) has a switch which decides what to optimize for: code size, execution cost.</p><p>This exists, but is rather crude &ndash; it assumes every opcode is only run once and this assumption breaks down if you have a loop.</p><p>Have Remco share his 0x example with Christian &ndash; and how it could be improved in terms of gas estimation.</p><p>Constant delegation.</p><p>Have Remco to share example of hash not being calculated at compile-time.</p><p>Having a good technical writer &ndash; who can understand the technical details of Ethereum, and improve the documentation.</p><p>Another model could be to create bounties for improving the documentation. Won&rsquo;t be bounties for a specific issue; but general rewards for improvements to the documentation.</p><p>Improving the documentation for Solidity</p><p>They&rsquo;re too deep inside this. Having an external viewpoint would be helpful.</p><p>In the research area: due to the way research funding works &ndash; people publish the work, but do no maintain the software or integrate with other tools.</p><p>Integrating research software with development tooling & keeping them up to date.</p><p>Big example: Formal Verification software</p><p>Five or six tools that similar to Oyente.</p><p>Remix has a plugin architecture &ndash; possibly supports Oyente.</p><p>Idea for tool: being able to test very quickly if a contract implements an interface.</p><p>The problem is that you cannot enumerate the functions of a contract.</p><p>There&rsquo;s a way to resolve this.</p>",
            "keywords": [
                "remix",
                "contract",
                "evm",
                "solc",
                "ewasm",
                "bounty",
                "ethereum",
                "test",
                "iulia",
                "oyente",
                "gas",
                "tooling",
                "gas_cost",
                "solidity",
                "documentation",
                "stack",
                "issue",
                "gas_profil",
                "cost",
                "research",
                "slot",
                "assumption",
                "formal_verification"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "27": {
        "name": "Fabian Vogelsteller",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>My future project: Lukso blockchain: EVM-based blockchain.</p><p>Working on industry-specific blockchains.</p><p>Built the Mist browser and Ethereum Wallet(worked with Alex van de Sande, who came up with the idea / design, and Fabian built it).</p><p>Works on web3.js. Proposed ERC20, ERC725/735 identity standard.</p><p>Joined Jan 2015 before mainnet. First person to make the user-facing / developer-facing tools intuitive. Simplified the RPC API.</p><p>My main focus now: half-time: web3.js & half-time: Lukso.</p>",
            "keywords": [
                "wallet",
                "developer",
                "identity",
                "ethereum",
                "design",
                "browser",
                "blockchain",
                "rpc",
                "mist",
                "api"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Web3.js</p><p>History:</p><p>Initially, it was built by Jeffrey Wilke.</p><p>Then Marek was working on it. Then I joined.</p><p>After Marek left, I took over. I&rsquo;ve been on it on my own for the last and a half year.</p><p>Did a full refactor. I changed everything to be more intuitive, simple, how I thought it should be.</p><p>Changed to a Pub/Sub model &ndash; can currently subscribe for logs, transactions, block headers. In the future, you should be able to subscribe to state changes, account balance changes, or anything else.</p><p>It&rsquo;s harder now to make global changes across Ethereum &ndash; because of different clients, agreements take time</p><p>E.g. Parity has the Pub/Sub model, and a parity-Pub/Sub model.</p><p>A lot of work around promises resolving based on conditions</p><p>Better documentation.</p><p>Account generation, key generation, signing, &hellip;</p><p>ABI Encoding, decoding, all are exposed.</p><p>Going forward: the API is good now, so someone should simplify the internals.</p><p>e.g. scrypt package is super large.</p><p>We hired a new person who starts in July.</p><p>The security model: either the person developing web3 is trusted, or you need a lot of people looking at it.</p><p>Would love to at some point decentralize & bountify the project.</p><p>The project doesn&rsquo;t need too many more people. The main work is done, but future addition could take more work.</p><p>There are two groups around the identity profile now:</p><p>Put it off-chain: for privacy etc.</p><p>Put it on-chain: ERC725.</p>",
            "keywords": [
                "subscribe",
                "transaction",
                "client",
                "identity",
                "security",
                "ethereum",
                "history",
                "api"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Need good IDEs:</p><p>Remix is good, but has problems.</p><p>Omkara &ndash; Remix for Atom. Sophisticated Solidity IDE for the Atom browser</p><p>This project can get a lot bigger. Could add debugging.</p><p>Formal verification</p><p>Write specifications for smart contract implementations, generated proofs that can be tested against EVM code.</p><p>Smart contract security / best practices</p><p>Also comes down to an editor &ndash; gives you recommendations, formatting, etc.</p><p>More examples in the Solidity documentation</p><p>There&rsquo;s someone at the EF working on documentation now.</p><p>Unit-testing for Solidity contracts</p><p>Dapple: a tool for testing Solidity contracts using Solidity contracts &ndash; unmaintained for 2 years now.</p><p>How is it that we don&rsquo;t have unit-testing for Solidity contracts?!</p><p>OpenZeppelin works on these audited pieces.</p><p>Ideas:</p><p>&ldquo;Results-based&rdquo; bounties.</p><p>having smaller tasks, having a lot of eyes on the project and setting smaller bounties.</p><p>Incentive structure for the reviewers & maintainers.</p><p>Idea: standing bug-bounties for large ecosystem projects & contracts, funded by EF.</p>",
            "keywords": [
                "atom",
                "remix",
                "incentive",
                "contract",
                "evm",
                "bounty",
                "unit_testing",
                "test",
                "browser",
                "smart_contract",
                "maintainer",
                "solidity",
                "documentation",
                "solidity_contract",
                "audit",
                "ide",
                "reviewer",
                "omkara",
                "security",
                "openzeppelin",
                "formal_verification"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "28": {
        "name": "Hudson Jameson",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Mainly focused on solidity smart contracts. A little node JS and Java but not very good at it.</p>",
            "keywords": [
                "js",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Remix, MyEtherWallet, MetaMask</p>",
            "keywords": [
                "metamask",
                "myetherwallet",
                "remix"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Have been using Truffle more lately but was mostly just using Remix before.</p><p>Write the contracts in Remix, deploy them in Remix. Usually do it all through Remix and MetaMask. Used to connect metamask to a ropsten node run locally, but now metamask is more reliable.</p>",
            "keywords": [
                "truffle",
                "deploy",
                "metamask",
                "remix"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Use the Remix tool to just scan for general bugs.</p><p>Wanted to use Oyente, but don&rsquo;t know how to use it</p><p>Remix is thinking about being modular to the point where you can just plug in your own about module - that would be awesome to see.</p>",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Dev Grants from the Foundation</p><p>Ethereum foundation had 2 iterations of this program</p><p>Get some money to build something at the protocol-level</p><p>The foundation is looking into revising the process.</p>",
            "keywords": [
                "ethereum",
                "protocol"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Remix combines an editor with a deployment mechanism and that&rsquo;s what I like about it.</p><p>EthMix was like a full IDE with better syntax highlighting and better debugging. And it was a native app instead of web-based. Pity that it has not been maintained.</p><p>Something that automatically uploads the contract to ENS.</p>",
            "keywords": [
                "ide",
                "deployment",
                "remix",
                "ethmix",
                "ens",
                "contract"
            ]
        }
    },
    "29": {
        "name": "Martin Swende",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I was a security professional, doing consulting, came into Ethereum a couple of years ago solving bounties for VMs.</p><p>October 2016 - became Head of Security at The Foundation.</p><p>Monitoring mainnet.</p><p>Being able to react when there is a consensus flaw. Had an API call to geth, called getBadBlocks. Geth will save bad blocks and you can query node for it.</p><p>So, we run geth and parity simultaneously. Ask parity node for last block, ask geth for bad blocks, If they match, can see more easily why and who might have acted badly.</p><p>But can&rsquo;t do it vice versa - been nagging Parity to add that end point so we can do the same process in reverse.</p><p>Geth client has a lot of metrics: how many i/o connections, db writes, block processing times, peer connects. Can export from geth and display in any charting you like. So, that&rsquo;s exactly what we do; get nice graphs about tx churn, how txes were rejected, queued, pooled.</p><p>Optimizations in geth which made block processing faster in the past month. You can also monitor for performance, not just security...</p><p>Shanghai attacks taught us that performance very much related to security.</p><p>P2P network information, protocol dissector / analyzer -- if I can see what is happening on my node and what my peer capabilities are, what have they seen, etc.  Is there any one peer that is sending me transactions that I reject? That way, I can identify bad behaving or lying peers (more in-depth view of what people are telling me over the network)</p><p>Would be difficult as an add-on (need node keys, decrypt data, etc.),  Much simpler to do within a client.  Protocol layer in Geth.</p><p>Build tools for analysis, especially when things are going wrong: hacks, network problems.</p><p>E.g. transaction propagation when network was overloaded with txes going back & forth between parity and Geth.</p><p>Needs for lots of testing around hard forks as the existing tools were not sufficient to cover all cases.</p><p>Coverage guided fuzzing - generate code and run on instrumented version of Geth / Parity. This matches code coverage, generates new code and increases coverage using fuzz tactics to mutate inputs and can test geth and parity differentially. Do they have the exact same stuff in the stack, in memory etc.?</p><p>Another fuzz testing tool based on EVM Lab that can generate tests for CPP ethereum and can cover py-ethereum etc by running in docker container with a switch that enables an output after every opcode and compare internal state differentially again. Run this 24/7.</p><p>Caught 5-6 consensus issues with this. Last hard fork was a controversy as Parity had done a whole bunch of releases prior to the hardfork and the suggestion was to postpone, which would have caused its own issues and forced clients to update again.</p><p>If patched before hard fork - no problem. Beat the drums and tell everyone to upgrade.</p><p>If you find a consensus issue on an existing client it is a bit more problematic.Telling everyone means giving people the chance to exploit it - tough to handle.</p><p>Examples of consensus issues: make a tx which invokes a precompile like verify_signature and if that, in one case returns true and in another returns false, or if they cost different amounts of gas (i.e. x on geth and y on parity) then post-state will be different so they won&rsquo;t accept the same blocks and then we have a fork.</p><p>There was a consensus issue that happened after Spurious Dragon when we implemented state cleaning. Chain split for 200 blocks, which were created on the wrong chain that were then abandoned. Block 2 600 000 or so.</p><p>Developers need to be alerted as soon as possible so they can fix it ASAP. People can lose money in the meantime, txes can be reverted. All exchanges need to be alerted to hold deposits and withdrawals.</p><p>Have built tools to detect this, so we consider it solved from a technical p.o.v.</p><p>Recommend that exchanges run all clients, but not sure if they do. Could be standardised with docker containers that could be more streamlined. Documentation around best practices, automated tooling etc.</p><p>Building something like Ethstats but more detailed. If there is a consensus failure, you might want to see exactly which tx in which block caused it. Nice to see blocks, txes and intermediate root hashes between each tx. Then you can see different post-state hash, i.e. that is where we should start looking.</p><p>Need detailed traces of exactly what happened in every opcode of this transaction.</p><p>One of the things I built in EVM Lab is a reproducer. Synthesises pre-state for that particular tx, then executes it and gives you a detailed trace from geth and parity that you can then compare.</p><p>Not much active development on EVM Lab. Use it mainly for investigating certain condition or opcode or potential attack. Pretty easy to put together desired scenario in an EVM assembly-like way by setting genesis you want and then run & benchmark it.</p><p>It is usable right now and I have no immediate plans to do anything in the near term. Might need some updates and it is not so user friendly.[a]</p><p>One of core devs for go-ethereum.</p><p>We want to expand - have 2 interns now, but had to turn someone away recently too. Send interested developers to Peter.</p><p>Working a lot with the signer, which was just merged in latest release. Standalone binary which can run off some secure enclave, USB armoury, parallel VM, some other machine on your network. Can be used for offline signing and has trusted UI.</p><p>Can be configured with particular rules written i.e. in JS. Definitely needs more work on the UI. has implemented one in python-qt and python-cleft. Can also be run in a console, with remote ports etc so you can decouple pvt keys from your daily computer.</p><p>Hoping MetaMask will integrate with it directly. Has spoken with Dan and another guy called Jordan building a tool called (?) which has integrated it already.</p><p>Hard problem: how to make it more secure for end users. Surf internet with unpatched browsers with 0 days and they get exploited. How can we improve upon that so that you have a sign what you see flow. Submit a tx, see the details of that tx when you approve it.</p><p>Unlock feature is most horrible thing he has seen where it will sign every tx sent to it for a given period.</p><p>I don&rsquo;t do too much DApp development, so I&rsquo;m not up to speed with capabilities of current tools and how they have matured over the last 6-8 months.</p><p>I have heard there is a debugger out now which I remember as being one of the main pain points.</p>",
            "keywords": [
                "query",
                "trace",
                "consensus",
                "js",
                "network",
                "tx",
                "api",
                "metamask",
                "ui",
                "evm",
                "protocol",
                "bounty",
                "ethereum",
                "test",
                "deposit",
                "browser",
                "professional",
                "evm_lab",
                "gas",
                "tooling",
                "fuzzing",
                "client",
                "documentation",
                "vm",
                "docker",
                "geth",
                "stack",
                "react",
                "transaction",
                "analysis",
                "issue",
                "hack",
                "developer",
                "security",
                "parity",
                "execute",
                "cost"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "30": {
        "name": "Kevin Owocki",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I developed Gitcoin, a bounty (and tips) platform for incentivizing open source contributions.</p><p>Solve incentivisation problem of OSS, where it is highly strategically valuable but difficult to capture in real-time the value being created.</p><p>I want to bring more devs into the space - MAIN GOAL.</p><p>300 bounties fulfilled so far and recruiting opportunities for OSS developers</p><p>Consensys offered customers (projects creating bounties for pilot of gitcoin), funding, regulatory protection</p><p>Not totally interoperable for now with EthPrize, recruiting strategy etc. Bounties are just one of the tools to recruit developers</p>",
            "keywords": [
                "consensy",
                "ethprize",
                "developer",
                "bounty",
                "gitcoin",
                "open_source",
                "regulatory",
                "platform",
                "recruit"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle for managing deployments and smart contract versioning</p><p>Web3Py, due to comfort with py and personal relationship</p><p>Django, Bootstrap, Metamask, Infura for Gitcoin Platform - which is mostly a standard web interface.</p>",
            "keywords": [
                "deployment",
                "infura",
                "gitcoin",
                "versioning",
                "metamask",
                "django",
                "truffle",
                "smart_contract",
                "platform",
                "bootstrap"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Pytests with TravisCi</p><p>Using product. Use gitcoin to build gitcoin.</p><p>Selenium tests with native web3 functionality</p>",
            "keywords": [
                "test",
                "gitcoin"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Gitcoin X EthPrize</p><p>More talent than fundable issues right now at Gitcoin - always looking for more cool stuff for the community to work on.</p><p>Happy to help.</p>",
            "keywords": [
                "ethprize",
                "issue",
                "community",
                "gitcoin"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "31": {
        "name": "Quazia & RJ",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Giveth - Charity platform with three layers</p><p>Fairly complex contracts on-chain. Pushes the limits of gas limit. Making transactions is relatively expensive.</p><p>Off-chain stuff. We cache everything; we store images and profiles offchain, will eventually be on IPFS.</p><p>Some actions are not on-chain: &ldquo;reviewing a milestone&rdquo;.</p>",
            "keywords": [
                "gas",
                "transaction",
                "ipfs",
                "limit",
                "platform",
                "giveth"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Remix vs. your local dev environment:</p><p>Can write code, deploy, and debug in Remix.</p><p>EVM Lab: written by Martin Swende; give it a tx hash; spits out opcodes, storage, memory.</p><p>RJ wrote source code mapping &ndash; doesn&rsquo;t work for complex contracts. Show your contract code along with the opcodes.</p><p>We use it often. Simple CLI tools. Just need Web3 and a tx hash. Sounds AMAZING.</p><p>To be improved: bugs with reproducing certain transactions.</p><p>E.g. couldn&rsquo;t recreate contract creations.</p><p>Source mappings.</p>",
            "keywords": [
                "evm",
                "transaction",
                "remix",
                "deploy",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Offchain stuff is not dispute related.</p><p>Gas limit issues:</p><p>Jordi wrote contracts to begin with &ndash; so WE had a good start.</p><p>Multiple DELEGATE calls to the same contract are the same price each time; but this doesn&rsquo;t make sense. You&rsquo;ve already loaded the contract in memory, so should be cheaper in consequent calls.</p><p>Abstracting &ndash; one key-value contract that stores pointers to data.</p><p>Rest of data &ndash; stores all data. Mappings of hashes to boolean to structs / addresses / etc.</p><p>Leads to upgradability of contracts. To the parameters used in the logic.</p><p>Separate data from the application; let&rsquo;s you iterate. The data contract is owned by the business logic, ETC.</p><p>Estimating gas / optimizing code:</p><p>To get gas limit: run it on testrpc. Easy.</p><p>Debugging is hard, after you start adding assembly in there.</p><p>Remix is hard for large contracts. Multiple contracts.</p><p>Testing flow:</p><p>We use Mocha + wrappers to generate contracts in Js.</p><p>Needed: better errors. e.g. if testrpc spit out more useful messages.</p><p>Deployment & CI:</p><p>We have Node scripts to do this. Async await. Pretty simple contract.</p><p>Jordi&rsquo;s tool compiles everything into a single file; makes verification on Etherscan simpler.</p>",
            "keywords": [
                "gas",
                "testrpc",
                "ci",
                "issue",
                "js",
                "deployment",
                "remix",
                "error",
                "etherscan",
                "rest",
                "wrapper",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>A solid debugger &ndash; needs a rare breed of dev to build.</p><p>Scaffolding tool for prototyping things &ndash;</p><p>To test a small contract before integrating with everything else.</p><p>Think this will standardize over time.</p>",
            "keywords": [
                "test",
                "contract"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "32": {
        "name": "Griff Green",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>3-tiered approach:</p><p>Blockchain smart contracts: liquid pledging; pledges that take control of authority and funds. Blockchain layer does the accounting.</p><p>Owner gets notified by email.</p><p>Bounty system: basically a chat room. Project discovery layer.</p><p>UI layer: reads off the blockchain, interacts with the blockchain.</p>",
            "keywords": [
                "ui",
                "discovery",
                "bounty",
                "email",
                "blockchain",
                "pledge",
                "chat"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Use Feathers interface to do caching. Improves UX.</p><p>NPM. Etherscan. Metamask.</p><p>Set of tools that we made ourselves. We don&rsquo;t use truffle because we were building smart contracts before truffle was a thing.</p><p>React. Remix.</p>",
            "keywords": [
                "remix",
                "etherscan",
                "truffle",
                "smart_contract",
                "metamask",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>We lean on the community a lot and give them &ldquo;sneak previews&rdquo;. We let them to go through the UX, and watch what happens.</p><p>The same person does all the testing.</p><p>We do a lot of auditing for other projects. Audria does this. We have a lot of good auditors and always maintain 100% code coverage.</p><p>Use travis for CI.</p><p>Most bugs they see are about game theory & cryptoeconomics.</p><p>These come up in ad-hoc situations.</p><p>We try to isolate things into individuals. Clear interfaces.</p><p>We always wanted push to live mainnet right away, but...</p><p>Today we made the decision to go to testnet, because mainnet is so expensive.</p><p>Testnet is not real a test (since it&rsquo;s not real money).</p><p>We&rsquo;re going to have a testnet token that represents real Ether.</p><p>&ldquo;Proof of Authority&rdquo; using Rinkeby.</p><p>Using the Minime token controller. Multisig pays out based on what&rsquo;s happening on testnet.</p><p>Ehter&rsquo;s price has gone up, gas is high, so everything is super expensive.</p><p>BAD for our users.</p><p>This is game over for dApp developers.</p><p>If Ethereum cannot solve these issues, developers will leave.</p><p>RSA, Ubiq will have Solidity. But don&rsquo;t have block explorers. White hat hacker group is looking into</p><p>Open-source Etherscan.</p>",
            "keywords": [
                "ci",
                "gas",
                "game_theory",
                "decision",
                "rinkeby",
                "multisig",
                "cryptoeconomic",
                "developer",
                "code_coverage",
                "dapp",
                "issue",
                "solidity",
                "ethereum",
                "isolate",
                "test",
                "testnet",
                "token",
                "etherscan",
                "community",
                "open"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Scaling proof-of-authority.</p><p>Block explorer.</p><p>Ropsten testnet gas limit -> attacking with gas limit.</p><p>Open-ended: apply for a bounty with your own idea.</p><p>We need a 24/7 security team. The network is not being watched by anyone; because right now the network is being attacked in a weird way, through the estimate gas function and throwing txs in pools.</p>",
            "keywords": [
                "network",
                "bounty",
                "block_explorer",
                "security",
                "scale",
                "testnet",
                "open"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "33": {
        "name": "Jordi Baylina",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Experience: 35 years of programming; 3 years in blockchains.</p><p>Learning more everyday; exciting from a global perspective.</p><p>This tech can change society over time. We&rsquo;ll see centralised power disappear, the world will become more trustless, people will take responsibility for themselves.</p><p>One of my first smart contracts was liquid democracy for the DAO.</p><p>Smart contracts for the white-hat group that originated from the DAO.</p><p>Wrote the Minime contract &ndash; maybe not the best time now because of gas costs, but it is an interesting smart contract.</p><p>Did the Status ICO.</p><p>Liquid pledging for Giveth.</p><p>Pushing DappNode - should be released soon and is really important for true decentralization.</p><p>Audits &ndash; for MakerDao and Aragon.</p><p>777 standard.</p><p>Working a lot on an identity project.</p>",
            "keywords": [
                "dao",
                "liquid",
                "status",
                "ico",
                "aragon",
                "gas_cost",
                "dappnode",
                "identity",
                "makerdao",
                "blockchain",
                "smart_contract",
                "giveth",
                "contract",
                "trustless"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>It&rsquo;s important to communicate to everyone that whatever you do will help, but will never give a warranty that there won&rsquo;t be an error.</p><p>I&rsquo;m a bit skeptical of formal verification stuff, but I think it&rsquo;s important to keep pushing it forward.</p><p>Do more audits.</p><p>Write defensive code. Don&rsquo;t try to do crazy things.</p><p>For the first time, we&rsquo;re mixing two things that haven&rsquo;t been mixed together:</p><p>The two:</p><p>Critical code &ndash; contracts holds money.</p><p>Open-source &ndash; everyone can see how it works.</p><p>E.g. you don&rsquo;t have this in planes &ndash; critical program but not open-source.</p><p>E.g. in a website &ndash; it could be open-source but not critical.</p><p>So you realize you need to write perfect code, but that&rsquo;s not possible. Because code is written by humans.</p><p>It&rsquo;s important to improve:</p><p>Do not take risks.</p><p>Try to isolate the critical part. E.g. if you&rsquo;re doing an ICO, don&rsquo;t hold the ETH in the contract, instead put it directly into the multisig.</p><p>Minimize the box, with its known security vectors.</p><p>On one side, you have a blockchain that by definition that is immutable. On the other side, immutable is not compatible with making mistakes.</p><p>Humans make mistakes. We are building things on top of that immutable base that could have mistakes.</p><p>But we need to keep blockchains immutable, because if don&rsquo;t, we lose their power.</p><p>How do we solve this?</p><p>Possible approach is having a second layer &ndash;&ndash; instead of ETH, we use an ETHToken. ETHToken has governance built in and can be modified. You build it in a more centralized manner, it can be changed; and then overtime, you soften the centralization rules, and make it decentralized (take away the authority, make it operated by a DAO, etc).</p><p>E.g. having an escape hatch would be super helpful. If there is a hack, it could be sent to the EF or whitehat group. And then you can decide what to do. Better than it going directly to a hacker.</p><p>And then you can build the smart contract applications on this second layer.</p><p>Want to make decentralization linear; so you don&rsquo;t have to take the risks from the beginning.</p><p>All contracts in Giveth have escape hatches built in.</p><p>STANDARD LIBRARY for using ETHToken in your contract, layer for security, escape hatches => I think it might be a bit too early though since we&rsquo;re still figuring it all out. Other teams working on this include Zeppelin, Aragon.</p><p>Better compilers. Better testers. Better formal verification. All the tooling helps.</p><p>There are some errors that are not due to programming &ndash; they&rsquo;re conceptual, due to economics, etc.</p>",
            "keywords": [
                "dao",
                "tester",
                "ico",
                "library",
                "risk",
                "open_source",
                "contract",
                "economic",
                "governance",
                "decentralize",
                "multisig",
                "aragon",
                "compiler",
                "escape_hatch",
                "isolate",
                "smart_contract",
                "zeppelin",
                "tooling",
                "error",
                "mistake",
                "giveth",
                "hack",
                "security",
                "formal_verification",
                "blockchain"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "34": {
        "name": "Stefan George",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>CTO of Gnosis and is building a prediction market, ddex and smart contract wallets.</p><p>Started in 2013 - discovered that we could add prediction markets using btc escrow because that was missing (a p2p marketplace for predictions).</p><p>Joe Lubin convinced us in 2015 to start a formal platform based on Ethereum, did the token launch and spun out of Consensus and begin working on the more fundamental problems</p><p>Decentralized exchanges!! But not efficient on Ethereum today (scalability and number of participants). We have had to contribute to building the DDEX infrastructure.</p><p>Prediction markets are a way to create new ERC20 tokens (conditional payment/purchase). The value of those tokens is only defined at a certain point in the future. We can therefore create derivatives of other ERC20 tokens, which are more precise investments under certain conditions.</p><p>DDEX allows people to trade the efficiently. It can be done in Ethereum on chain, but scalability, front-running and ease of use just isn&rsquo;t there yet (need everyone participating and having a global liquidity pool).</p><p>Dutch exchange implemented on chain to solve front running problems.</p><p>Integrating with USD price feed of Maker - was a little hard to depend on other people&rsquo;s infrastructure and therefore the tests that they have deployed. We ended up mocking their service for test net, would have been awesome to just point at their package, specify a contract on either network and go without having to mock any of the other services.</p><p>Make sure that things like ETHPM are deployed across all test networks.</p><p>Also built the multisig wallet for our own token launch, has been very successful and we now want to offer the same experience for every user: more secure wallets for personal use that are even better than hardware wallets.</p>",
            "keywords": [
                "payment",
                "contract",
                "ddex",
                "consensus",
                "wallet",
                "network",
                "ethereum",
                "gnosis",
                "deploy",
                "test",
                "ethpm",
                "token",
                "escrow",
                "smart_contract",
                "platform",
                "decentralized",
                "infrastructure",
                "maker"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Bounties are great for small problems, but we need to hire people full time to actually work on this stuff constantly and fix the long term incentives!!</p><p>Just waiting for the Ethereum Query Language ;) :p</p>",
            "keywords": [
                "ethereum",
                "incentive",
                "bounty",
                "query"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "35": {
        "name": "Alex Leverington",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Can&rsquo;t say what I&rsquo;ve working on in a concrete way, but I am building a team and starting a new project.</p><p>I&rsquo;m advising some projects.</p><p>Did some original stuff on the P2P system.</p>",
            "keywords": []
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Haven&rsquo;t come across any tools for game-theoretical stuff.</p><p>For code: using scripts for testing.</p><p>Ideally there would be a testing env that can do &ldquo;introspection&rdquo; & which can evaluate the state of the memory. It should test the effect of code rather than the output of the code and make sure that the tests all integrate with Solidity.</p><p>It&rsquo;s really hard to write unit test for the EVM state, as a result of some code executing. It would be good to have a test for this[a].</p><p>Will be looking at tools in the next two weeks.</p><p>Having a tool which exposes the EVM state &ndash; for this you need some code that understands how Solidity stores data in the EVM.</p><p>For looking at EVM state:</p><p>Remix is ok.</p><p>Aleph0?! Doesn&rsquo;t exist any more.</p><p>Some cases where your code doesn&rsquo;t change, but the environment around your code changes &ndash;&ndash; having actual tests.</p>",
            "keywords": [
                "evm",
                "solidity",
                "remix",
                "execute",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>It would be nice if some of the audits were completely opened up &ndash; rather than some statement from the auditors. Could be a security issue.</p><p>What we have right now for audits can be improved upon with better tools.</p><p>Audits and testing framework go hand in hand.</p><p>Auditor should be able to write a test to demonstrate the problem at the EVM level.</p><p>Instead of the auditor suggesting some workaround or wrapper.</p><p>Or auditor provides proof for something that works well.</p>",
            "keywords": [
                "evm",
                "issue",
                "security",
                "test",
                "wrapper",
                "open"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "36": {
        "name": "Alex Miller",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Started ETH development back in 2015. Shortly after launch; there was nothing. I remember booting up private chains from shell scripts. We&rsquo;ve come a long way in terms of dev tools. Problem isn&rsquo;t that there aren&rsquo;t tools, but not knowing where to look.</p><p>The problem here is sourcing a centralized repository for information[a][b].</p><p>EF website doesn&rsquo;t do that.</p><p>Wouldn&rsquo;t know where to point people from intro documentation.</p><p>Truffle & Solidity have good docs e.g.</p>",
            "keywords": [
                "truffle",
                "documentation",
                "solidity"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle</p><p>Configure parity instance https://github.com/GridPlus/trustless-relay/blob/master/parity/boot.js</p><p>Infrastructure tool to spin up local instances of Parity or Geth</p>",
            "keywords": [
                "js",
                "parity",
                "truffle",
                "infrastructure",
                "trustless"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Use Mocha; plain old truffle tests.</p><p>I don&rsquo;t do contract unit tests.</p>",
            "keywords": [
                "unit_test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Hasn&rsquo;t had any novel code that needed security audits before</p><p>There are common patterns that could be detected. E.g. reentrancy attacks, etc</p>",
            "keywords": [
                "reentrancy"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Collecting logs & events used to be hard. Web3 1.0 made this a lot easier. It is quite good, even-though it&rsquo;s in beta.</p><p>People should be using websocket calls more. Maybe more education around this. Serious efficiency gains to be had here.</p>",
            "keywords": [
                "event",
                "websocket"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "37": {
        "name": "Dave Appleton",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Lead blockchain dev @ HelloGold.</p><p>Token backed by gold.</p><p>Does consulting as well &ndash; writing smart contracts & backend for blockchain projects</p>",
            "keywords": [
                "blockchain",
                "hellogold",
                "contract",
                "token"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Helps that I&rsquo;ve been coding for a helluva long time.</p><p>The hardest thing for new devs is getting to contact the people they need.</p><p>It&rsquo;s also hard to find non-expensive auditors.</p><p>Gitter community is the key</p><p>Best dev communities or Gitter channels:</p><p>Go-ethereum</p><p>Solidity</p><p>Parity</p><p>I go to the specific one I need at the time.</p>",
            "keywords": [
                "community",
                "ethereum",
                "solidity",
                "parity"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "38": {
        "name": "Peter Kieltyka",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Started Horizon Blockchain games, building decentralized multiplayer games. What we&rsquo;re excited about is a new class of video games, in which players truly own in game items. Own them, and can trade them. They can even compete cryptographically to earn/unlock new items.</p><p>One of the core areas of work that is started immediately: how can we make high fidelity games that are scalable, low-cost, and provably fair. Video games with a decentralized economy. Can mine new items as part of the economy.</p><p>Love building new models on blockchain. What is most excited to do is to create utility through video games via blockchain.</p>",
            "keywords": [
                "game",
                "scalable",
                "cost",
                "fair",
                "blockchain",
                "decentralized"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>We&rsquo;ve built a blockchain gaming architecture with a low fungibility token, similar to ERC 721. We built our own state channels. We&rsquo;ve also created offchain game logic, and can verify the game in a single state. Skyweaver.net was our very first game. All work will be open source, won&rsquo;t do an ICO.</p><p>Game is offchain, persist the awards on chain. Based on a finite state design.</p><p>Use Truffle, Ganache-cli, write the infrastructure in Go. Geth is written in Go, that&rsquo;s very nice.</p><p>Client side application, standardize on Ethers.js (Richard Moore). Without Metamask you lack adoption. Ethers.js is being ported to Typescript, excited about that!</p><p>Web3.js has a lot of dependencies, large in filesize, and the API is not as compelling as Ethers or productive. Just too bloaty. Was great that it exists, but want very very lean tools. Ethers is just so active and very tight. Following newest standards and practices. Back the guy with the deepest knowledge.</p><p>Truffle is really cool. Helps with Developer workflow, but we spin up own testRPC service with Ganache. Truffle helps with deployment of contracts as well as package management. Truffle is now a monorepo, I pushed them to become a monorepo.</p>",
            "keywords": [
                "contract",
                "testrpc",
                "ico",
                "deployment",
                "developer",
                "client",
                "typescript",
                "state_channel",
                "design",
                "dependency",
                "truffle",
                "open_source",
                "token",
                "ganache",
                "blockchain",
                "metamask",
                "knowledge",
                "geth",
                "infrastructure",
                "api"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Do it in Typescript with Ethers.js and Chai and Mocha. Use Remix Solidity IDE. Amazing IDE for testing little blocks of code. Testing would be another great things to see more examples of Ethers.js</p>",
            "keywords": [
                "mocha",
                "ide",
                "chai",
                "solidity",
                "typescript",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Obviously security audits, looking through network and past experienced colleagues. Don&rsquo;t see us using formal verification unless that process is made easy, but I don&rsquo;t think that will happen. We will stick to security audits. Thoughtful in how things fit together and are secure.</p>",
            "keywords": [
                "network",
                "formal_verification"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Gas profiler 100%.</p><p>Would love to see an Ethereum Virtual Machine written in JavaScript. The Ethereum JS VM written but it&rsquo;s a little bit bulky. Important to offchain application, important for state channel applications. Richard Moore is writing this.</p>",
            "keywords": [
                "ethereum",
                "js",
                "vm",
                "gas"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Profiler at ETHDenver, to see gas costs.</p><p>eWasm will be game changing. Potential for having other languages target the EVM will create a more productive developer experience.</p><p>Vyper will be great. Their goals are twofold, improved security through usage of the language. Learning from Solidity. Security + productivity.</p><p>Really happy with seeing progression of Solidity. As cool as ewasm is, who knows when it will be ready.</p>",
            "keywords": [
                "evm",
                "ewasm",
                "developer",
                "solidity",
                "security",
                "cost",
                "vyper"
            ]
        }
    },
    "39": {
        "name": "James Prestwich",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Simple contracts to manage cross-chain swaps and contracts.</p>",
            "keywords": [
                "contract",
                "swap"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Python ETH Library - ABI Parsing expects events to be in two different formats neither of which you expect - ecosystem standardizes on hex strings</p><p>RLP is a hot mess - why use a non-standard serialization format for everything</p><p>Ensures nobody understands what&rsquo;s going on and things aren&rsquo;t readable - serialization format for everything ETH - includes transaction data</p><p>As a human - can&rsquo;t reason very well about those blobs or what those structures will have</p><p>Developing contracts on Bitcoin first - Solidity, Script, Snark tidbits, IVY (compiles to bitcoin script)</p>",
            "keywords": [
                "event",
                "solidity",
                "contract",
                "library"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Wrote tests with James on Integral stuff</p>",
            "keywords": [
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "40": {
        "name": "João Gabriel Carvalho",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Contributed to OpenZeppelin and Aragon about 1.5 years ago, met an audit company called Solidify. Worked with them as a developer, and also have done a lot of audits securing smart contracts, now back to development. Things happening that will be public soon, stay tuned!</p>",
            "keywords": [
                "aragon",
                "developer",
                "openzeppelin",
                "audit",
                "solidify",
                "smart_contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle.</p><p>Used a little bit of Embark but not a ton.</p><p>Use Mythril, Remix, TestRPC -> Ganache, Geth, also used a few Solidity flatteners.</p><p>Infura.</p><p>Web3.js.</p>",
            "keywords": [
                "embark",
                "infura",
                "solidity",
                "remix",
                "truffle",
                "geth"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Do it manually, 1000 accounts with 1000 Ether. A big loop and keep sending transactions</p><p>Do this multiple times with multiple states. A lot of handwork for not a lot of results.</p><p>Large scale testing is not really worth it.</p><p>Was testing an interactive ICO, very complicated process. State management was very hard, multiple states at same time. Made a loop to do it manually but was quite difficult.</p>",
            "keywords": [
                "transaction",
                "test",
                "ico"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Every project I&rsquo;ve done will go through an external audit. As a developer, usually run Mythril and Remix (uses Oyente?). But these only find basic bugs, are years away from more complex stuff. These are just the most basic checks.</p><p>For Auditing, use a lot of Remix with manual testing as opposed to JavaScript tests. This is easier and less fake.</p><p>The harder thing is flattening files. People use OpenZeppelin, other frameworks. Have to go through a lot of different files to understand the logic. Tool to make understanding this easier.</p>",
            "keywords": [
                "external_audit",
                "oyente",
                "mythril",
                "developer",
                "javascript",
                "remix",
                "test",
                "openzeppelin"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>A really good IDE.Not a plug-in, but a full IDE. Best elements of Truffle, best elements of Remix. Could connect to Geth. More refined deployment options. Make compiling easy, knowing the gas prices easier. Debugging, deploying. Everything in one place.</p>",
            "keywords": [
                "ide",
                "gas",
                "deployment",
                "remix",
                "good_ide",
                "deploy",
                "truffle",
                "geth"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Love to see a premium version of Infura. Infura is public nodes. Has to sign tx&rsquo;s offline, has to sync my own Geth. I wans to have an Infura account. Infura is pretty good here but could be a bit better.</p><p>Lacking resources for other languages other than Solidity. Doing anything with any other language, there is not enough material and you can&rsquo;t find the answers. Creating a gigantic gap between Solidity and other languages. Usually use Solidity because it&rsquo;s way faster.</p>",
            "keywords": [
                "infura",
                "solidity",
                "resource",
                "geth",
                "tx"
            ]
        }
    },
    "41": {
        "name": "Andreas Wallendahl",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Kauri</p><p>Decentralized knowledge base built on Ethereum and IPFS</p><p>Github is for code, Kauri is for how to use it. Built in incentivization layer enabled by Ethereum, enables bounties for new content. No token, uses Ether/ERC-20 token.</p><p>Most popular tutorial is new content from Maker.</p>",
            "keywords": [
                "tutorial",
                "ipfs",
                "bounty",
                "ethereum",
                "github",
                "knowledge",
                "token",
                "maker",
                "decentralized",
                "kauri"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle</p><p>Geth nodes on Google Cloud</p><p>Eth.js</p><p>React</p>",
            "keywords": [
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Needs to ask teammate (Josh Cassidy)</p>",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Also Josh Cassidy</p>",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>In-browser signing. Would make new user onboarding much, much easier. Metamask works on it but a bounty might drive it through.</p><p>A lot of people have built interaction with IPFS, that&rsquo;s why we built IPFS-store and eventium.</p><p>Blockchaimulator for testing that runs through 100,000 blocks, somewhat instantly. We had to wait for blocks to be produced.</p>",
            "keywords": [
                "onboarding",
                "ipfs",
                "bounty",
                "browser",
                "metamask"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Simple spin up of side-chain or scaling solution kind of like Heroku</p><p>Spankcard for counterfactual state channels is a good attempt at this</p><p>Omisego and Plasma team</p><p>Rapidly spin up and set criteria for Plasma chain</p><p>Gas costs</p><p>In web signing capability- I could preload Eth or fund with credit card. But, if users are used to this behavior there might be man in the middle attacks.</p>",
            "keywords": [
                "counterfactual",
                "gas_cost",
                "heroku",
                "state_channel",
                "plasma"
            ]
        }
    },
    "42": {
        "name": "Clement Lesaege and Nico Wagner",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Working on dispute resolution through smart contracts</p><p>Arbitration - process to decide who is right/wrong. Looks more like an arbitration DAO - system of incentives.</p><p>Enforcement</p><p>Decision-making</p><p>Incentivising people</p>",
            "keywords": [
                "dao",
                "arbitration",
                "decision",
                "incentive",
                "smart_contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Smart contracts - Remix</p><p>Being able to copy address directly is really cool now.</p><p>Stopped using remix core because writing tests in truffle is actually quicker than clicking everywhere through the `remix IDE.</p><p>Solidity - can&rsquo;t do operations in bytes. Want to split bytecode into address and integer and there is no easy way to do that. Could write some assembly (difficult to understand) or some hacky workaround that uses a lot of gas.</p><p>Byte manipulation is really needed in Solidity.</p><p>Add a solidity linter to Remix (already exists in Atom at least, but would be nice for having a properly integrated environment).</p><p>We really need a light client to use a DApp on a smartphone.</p><p>Truffle to run tests</p><p>Relying on other random libraries sometimes breaks things. If you use a library for tests that is not being used by your contract. I.e. it is very difficult to customise tests in truffle and you have to know some (undocumented) tricks in order to get around some basic stuff.</p><p>Better testing is required, more extensible and adaptable. We don&rsquo;t need over-engineer things, but a better debugger and a properly integrated environment is necessary.</p><p>Truffle doesn&rsquo;t work with latest solc - keeping all the tools in sync and up to date is a tough task and it delays and blocks developers from using the latest tools if they have not yet been supported across the ecosystem.</p><p>No warnings for deprecation!!</p><p>Frontend - ethers.js to communicate due to instability of web3. React, redux and redux-saga. Architecture with an API that is used to share methods needed to use Kleros easily.</p><p>Ethers.js is not well-known and it would be better to standardise things and have a  common library for everyone to use.</p><p>Main issue with web3 lies in callbacks. They don&rsquo;t use promises because the 1.0 version does not support them well.</p>",
            "keywords": [
                "gas",
                "library",
                "atom",
                "engineer",
                "solc",
                "developer",
                "api",
                "solidity",
                "remix",
                "issue",
                "test",
                "redux",
                "truffle",
                "smart_contract",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Write our own functional tests - but don&rsquo;t provide proper security against malicious actor (can&rsquo;t simulate those kind of network conditions easily). This is where fuzzing would be really, really useful. Try to understand how contracts could be exploited in ways that the developers can&rsquo;t directly specify in tests.</p>",
            "keywords": [
                "network",
                "developer",
                "security",
                "fuzz",
                "test",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>A tool to analyse security of smart contracts better, especially complex smart contract suites. Very excited to see formal verification, whenever that comes out.</p><p>Fuzz testing is super important!!</p><p>Great to use truffle boxes, but all of them are unstable and not well maintained. Would be great to see more effort put in there.</p><p>Trying to implement chain-view: a tool to share the workflow of the ethereum protocol with the clients. Mostly used to analyse transactions (i.e whether they are successfully included in a  block) Can be very useful for client-side devs and i.t.o providing end users with transparency.</p><p>Not open source currently.</p>",
            "keywords": [
                "protocol",
                "transaction",
                "client",
                "security",
                "ethereum",
                "open_source",
                "formal_verification",
                "smart_contract"
            ]
        }
    },
    "43": {
        "name": "Dan Tsui",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>LLC that does consulting and builds projects</p><p>Their first crypto client was Metamask.</p><p>Other examples: build UI on top of the smart contracts; how to integrate with scaling solutions.</p><p>Working with state channels on wallet. Should be live on 1st or 2nd week of April</p><p>First: &ldquo;productionizing&rdquo; their library for micro payments.</p><p>Got into this space contributing to the EthereumJS ecosystem.</p><p>Within the team, I function as PM and do code reviews.</p>",
            "keywords": [
                "payment",
                "ui",
                "library",
                "wallet",
                "client",
                "ethereumj",
                "crypto",
                "state_channel",
                "scale",
                "pm",
                "smart_contract",
                "metamask"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "44": {
        "name": "Jacky & Matthew",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Matthew:</p><p>Cofounder of Kyokan, CTO</p><p>Client work</p><p>Plasma and Plasma Chain.</p><p>State channels work with Spankchain.</p><p>Infrastructural work + Solidity.</p><p>Jacky:</p><p>Cofounder of Kyokan</p><p>Building / integrating with Ethereum wallets</p><p>Solidity</p>",
            "keywords": [
                "wallet",
                "spankchain",
                "client",
                "solidity",
                "ethereum",
                "plasma"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Matthew:</p><p>Working on plasma and writing it in Go. Focussed on interoperability between Geth and smart contracts.</p><p>My development style:</p><p>I really like Java. &ndash; enterprise-y tools make me productive.</p><p>IDE could be really improved.</p><p>I use IntelliJ&rsquo;s Solidity plugin to edit Solidity.</p><p>&ldquo;Jump-to-def&rdquo;; &ldquo;jump-to-implementation&rdquo;; syntax highlighting</p><p>Big difference in productivity.</p><p>E.g. when I&rsquo;m writing Go code, I can jump to the Geth definition. This is amazing.</p><p>I&rsquo;m switching between Solidity / Go, or Solidity / Javascript</p><p>Solidity Javascript bindings through Truffle are good.</p><p>Integrating libraries designed for cryptocurrencies with front-end apps is hard:</p><p>Bundle sizing: different behavior if you&rsquo;re running in the browser or in the backend.</p><p>E.g. if you compile a contract with truffle, you get a JSON file &ndash; which has the bytecode and all this stuff beyond the ABI.</p><p>This is heavy and unused.</p><p>Crypto.js has unnecessary dependencies:</p><p>Eth.js includes an ASN.1 parser which parses digital certificates &ndash;&ndash; which isn&rsquo;t needed for any crypto.js uses.</p><p>Google Chrome places a size limit (3 MB) on service workers in Incognito mode.</p><p>Bundle sizing is important &ndash; need to take out dependencies.</p><p>Standardize the interfaces for all these libraries.</p><p>E.g. a standardize library to read BIP39 seed words &ndash; across different programming languages.</p><p>Is there a Javascript API to boot a testnet, deploy contracts, and run tests against it?</p><p>For running application tests &ndash;</p><p>I want integration tests that run against Truffle easily</p><p>Having the ability to do this via Javascript is important</p><p>E.g. automate this: https://github.com/machinomy/machinomy/blob/master/run_integration_tests.sh</p><p>People don&rsquo;t know how to productionize a geth node:</p><p>On Ubuntu: you can &lsquo;apt-get install geth&rsquo;</p><p>Now, how do you secure it, monitor it, etc?</p><p>People say: &ldquo;just use Infura&rdquo; &ndash; but then you&rsquo;re tied to Infura.</p><p>Some ideas:</p><p>Docker instances; Chef or Ansible scripts; that setup a Geth node which has a bunch of best practices around it.</p><p>As an example:</p><p>Your RPC port shouldn&rsquo;t be open to the external world, but should be accessible to the front-end.</p><p>You need a layer sitting between the geth node and the external world, and gives: 1) analytics, 2) authentication, and 3) audit logging.</p><p>The dashboard could configure geth on the fly.</p><p>How do you secure a geth node with an RPC port:</p><p>Need only certain keys to be allowed to interact with it</p><p>Jacky:</p><p>Integrating Metamask with Dapps</p><p>Building a new wallet for Spank;</p><p>It&rsquo;s a service worker</p><p>Three threads running at once:</p><p>Runs a bunch of background processes</p><p>The Wallet</p><p>The Dapp itself</p><p>The messaging between these three threads sucks.</p><p>Cross-window JSON RPC library.</p><p>Wallets are pushing the limits of what Chrome is capable of.</p><p>They&rsquo;ve had to file two bugs with Chrome in the last month.</p><p>Runs into the service worker size limit.</p><p>Mostly Javascript and Web3 work</p><p>Lot of code repetition in loading state and confirming transactions</p><p>Web3 is kinda hard to use &ndash; large ABIs</p><p>Biggest problem has been around event management.</p><p>Key management is not that complicated &ndash; Web3 has a good handle on it.</p><p>The Web 3 interaction with the wallet:</p><p>Web3 provider talks to the blockchain &ndash;</p><p>Spank and Metamask &ndash; the provider is an instance of the ZeroClientProvider &ndash; written by the Metamask team</p><p>The ZeroClient makes all calls when there&rsquo;s no key needed. When a key is needed, it calls into your codebase.</p><p>Biggest problem is around the communication of gas costs.</p><p>The UX around this.</p><p>Users pick really high or low gas costs.</p><p>There are better ways to estimate gas.</p><p>Would be nice: currency conversion utility tools.</p><p>Existing tools are pretty buggy.</p><p>ETH has many different units.</p><p>Units conversion.</p><p>Matthew:</p><p>I write all my own methods &ndash; other than lowdash where I pull specific utils out.</p><p>React / Redux.</p><p>Need a way of shoving Web3 stuff into your Redux state.</p><p>Managing the lock state of your wallet</p><p>E.g. you need the lock-state of the wallet, because the UI changes.</p><p>They written a util that queries the wallet, gets it&rsquo;s lock-state, and puts it into the Redux state.</p><p>Authentication: people have public/private keypair; use this data as login.</p><p>Having a canonical way to npm install and have authentication build off of Metamask.</p><p>Nice to haves:</p><p>Typescript typing for crypto libraries.</p><p>Postgres types to manage Ethereum stuff &ndash;&ndash; addresses, wei,</p><p>Have these methods: .toFinney</p>",
            "keywords": [
                "query",
                "library",
                "typescript",
                "design",
                "metamask",
                "api",
                "contract",
                "ui",
                "type",
                "wallet",
                "json_rpc",
                "dapp",
                "ethereum",
                "backend",
                "test",
                "zeroclient",
                "browser",
                "smart_contract",
                "gas",
                "javascript",
                "gas_cost",
                "solidity",
                "limit",
                "docker",
                "dependency",
                "testnet",
                "audit",
                "truffle",
                "open",
                "plasma",
                "geth",
                "analytic",
                "ide",
                "transaction",
                "event",
                "infura",
                "spank",
                "log",
                "blockchain",
                "syntax_highlight",
                "integration_test"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "45": {
        "name": "ANDREY PETROV",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>https://thousandetherhomepage.com/</p>",
            "keywords": []
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle - not his favourite, but best thing out there right now</p><p>Vim for everything</p><p>Etherscan a lot</p><p>Remix IDE - trying this out sometimes, but also my own editor</p><p>Truffle</p><p>Also my own runner, written in go.</p>",
            "keywords": [
                "truffle",
                "vim",
                "etherscan"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Write a lot of tests myself. Get other people to read it. Keep it as simple as I humanly can.</p>",
            "keywords": [
                "test"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Things I want improved with truffle: it has a lot of moving pieces. Reliant on the nodejs ecosystem and all that. Would like to see a binary runner - want to be able to have a binary, give it some solidity, and it knows how to run it in a simulated environment. Really useful for deploying continuous integration and stuff.</p>",
            "keywords": [
                "nodejs",
                "deploy",
                "integration",
                "solidity"
            ]
        }
    },
    "46": {
        "name": "Liam Horne",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Co-founder of L4 and Counterfactual.</p><p>Two main things:</p><p>Leading the development of counterfactual: a generalised state channels framework and protocol. It&rsquo;s a simple, intuitive framework for developing DApps using state channels - so we do a lot of work on Solidity code and general work around EVM interactions.</p><p>Co-founders of ETHGlobal - so I spend a bunch of time talking to hackers and making sure that these events represent genuine progress and that people aren&rsquo;t just stuck on bugs. The output to time ratio needs to be as high possible.</p>",
            "keywords": [
                "evm",
                "protocol",
                "event",
                "counterfactual",
                "dapp",
                "state_channel",
                "ethglobal"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle suite.</p><p>Highest level comment: nice for specific use cases, but our use case does not match this. It&rsquo;s built for writing a bunch of contracts, deploying them and interacting.</p><p>Our whole framework is based around off-chain interactions, for which Truffle is not well suited.</p><p>The whole Truffle networks thing is kind of annoying. If you want to ship a simple build that you put in your browser and run, it doesn&rsquo;t work locally. You need to set up your own test environment.</p><p>Would be great to have a tool that could put together a super minified version of your ganache DB so that we could test across the same data.</p><p>We did some of this, but it&rsquo;s not well known and not the default across the ecosystem.</p><p>Use ethers.js a lot</p><p>ABI encoder v2</p><p>Not supported by truffle.</p><p>Ganache</p><p>Can be very unreliable for a lot of important things.</p><p>E.g. bug in ecrecover on bytes (even if signed correctly) it will not return the correct address, It is just not implemented correctly, so we had to port over to Parity.</p><p>However, the parity dev client doesn&rsquo;t throw errors on revert, it just logs them, and there is no option to change this.</p><p>The fact that the behaviours are different between these two things is concerning and frustrating.</p><p>Parity and Geth</p><p>I don&rsquo;t understand why there isn&rsquo;t just one-click Ganache replacement. If I just went to parity.heroku.app with a big button to launch an instance, that&rsquo;d be awesome. Seems like low hanging fruit that could really be quite easily worked on.</p><p>Getting around all the configuration details is such a headache.</p><p>I just want to launch testnets, and even do so locally in a way that actually works in practice.</p><p>Anything to do with solidity at all really.</p><p>Libraries and tools</p><p>Remix</p><p>Playing with rust for its ability to write once, run everywhere.</p><p>Tonne of JS tools to quickly iterate</p><p>Typescript  - state channels need to run in the client, you want to be able to have code client side to decide what to sign and whether it is safe, and this is easiest in typescript. Would be better in WASM, but it&rsquo;s not there yet.</p>",
            "keywords": [
                "wasm",
                "library",
                "safe",
                "js",
                "network",
                "client",
                "solidity",
                "error",
                "heroku",
                "typescript",
                "deploy",
                "parity",
                "state_channel",
                "test",
                "testnet",
                "ganache",
                "browser",
                "truffle",
                "log",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>WASM is likely most useful for us medium term.</p><p>State channels are very light in terms of the actual contract code. But the off-chain contract code is a lot more complicated. It would be nice if all of the things we&rsquo;re doing were easily runnable in the browser.</p><p>We have this concept of a module, which is some software that wraps a particular state channel application. We need code running in the client that determines whether or not it is safe to sign the next transaction, and where you store it, if you show it to the user at all etc.</p><p>We then have to implement a copy of what the contract does in JS and it would be way nicer if we just had a local environment to run some eWASM code because then we wouldn&rsquo;t need to worry about the node at all. We wanna have it work in any random browser and WASm enables that.</p><p>Plasma and state channels require stripped and straight forward teams to work on this stuff that can build out all the tools we need.</p><p>Truebit is exciting.</p>",
            "keywords": [
                "wasm",
                "safe",
                "ewasm",
                "js",
                "client",
                "state_channel",
                "concept",
                "browser",
                "plasma",
                "contract",
                "truebit"
            ]
        }
    },
    "47": {
        "name": "RICHARD MOORE",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "",
            "keywords": []
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I use all my own stuff, mainly</p><p>Ethers.js</p><p>ethers.cli</p><p>Ethers.build</p><p>Parity</p><p>Node.js</p>",
            "keywords": [
                "parity"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Automated testing? How do the facilitate manual testing?</p><p>Ethers.build</p><p>Automated</p><p>Also facilitates manual testing</p><p>Rudimentary debugging</p>",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Extensive testing!</p><p>Using ethers.build etc. code audits are usually from Yuet.</p><p>Usually just have someone else look it over.</p><p>More careful with blockchain-things esp once my money is in there.</p>",
            "keywords": [
                "blockchain",
                "yuet"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Events!!</p><p>There&rsquo;s definitely missing features of what ethereum actually stores in its DB.</p><p>I would love if infura enabled the trace API, which is hugely expensive, that&rsquo;s probably why they haven&rsquo;t, but for now there is no way to give it an address and find all the transaction (or even a transaction) from that address.</p><p>Would be great if you could just tell me the first tx hash that a given address ever made. Obviously this vastly increases cost of an ethereum node to run, but would be useful.</p><p>Events are just wildly unreliable. This is why ENS stores things on chain. Events don&rsquo;t work well enough to do what you need to do. If I need to look this up, I can&rsquo;t.</p><p>The main reason is if you indexed all that stuff all the time, it would constitute a huge load. So most people aren&rsquo;t doing that. Scarce details of how they aren&rsquo;t is the problem...</p><p>[Greg is working on something that will do this]</p>",
            "keywords": [
                "trace",
                "event",
                "infura",
                "en",
                "ethereum",
                "cost",
                "tx",
                "api"
            ]
        }
    },
    "48": {
        "name": "James Childs-Maidment",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Been building social apps on Ethereum. Leeroy.</p><p>Storing all posts and likes on-chain, syncing that with a centralized database and frontend.</p><p>I started with some little smart contract that saved a string to variable.</p><p>After that, just dove in on making Leroy over the next few months.</p><p>After getting a feel for solidity by playing with Remix.</p><p>Didn&rsquo;t really understand how expensive it would be to save everything on the blockchain. Solution was to store the hash of all the inputs.</p><p>From there, had to learn how to make things as cheap as possible.</p><p>Quite a bit of smart contract work on Leroy. Multiple versions of the contract along the way.</p><p>Because it&rsquo;s as cheap as possible, Leroy doesn&rsquo;t even fire events.</p>",
            "keywords": [
                "event",
                "database",
                "solidity",
                "remix",
                "ethereum",
                "blockchain",
                "smart_contract",
                "contract",
                "leroy"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>React / Redux app, with a firebase backend</p><p>Truffle. Just deployed using Remix, and uses it for playing with the contracts in general.</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>Web3JS</p><p>In a toy project, used MetaMask just for signing transactions. Had a separate web3 using Infura for other stuff.</p>",
            "keywords": [
                "infura",
                "remix",
                "deploy",
                "backend",
                "truffle",
                "metamask",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle for testing (JS unit tests).</p><p>Really enjoying writing async await tests with Truffle.</p><p>Automated testing? How do you facilitate manual testing?</p><p>Play with the contracts in Remix. Deploy the contracts to testrpc and then test manually using the UI.</p>",
            "keywords": [
                "ui",
                "testrpc",
                "deploy",
                "test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>No process, but would love to have it.</p><p>Apart from testing, would be cool to have tools that analyze what you&rsquo;ve written and make sure you&rsquo;re not doing anything dumb.</p><p>Right now, using Remix is helpful for getting warnings and stuff.</p><p>Hasn&rsquo;t used Oyente</p>",
            "keywords": [
                "oyente",
                "test",
                "remix"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>When you use Web3 library with Metamask, it&rsquo;s really crappy getting events coming through.</p><p>Maybe will get fixed when moving to websockets with 1.0</p>",
            "keywords": [
                "event",
                "metamask",
                "websocket",
                "library"
            ]
        }
    },
    "49": {
        "name": "Yondon Fu",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Previously: working on smart contracts.</p><p>Truffle, testrpc / ganache-cli.</p><p>Expanded our test suite so they could run on multiple clients: could point at testrpc, at geth or Parity on PoA mode.</p><p>Now: Golang for our node.</p><p>Integrating our smart contracts with their node that does video-processing.</p><p>Working with Geth. There&rsquo;s packages for interacting with EVM.</p>",
            "keywords": [
                "evm",
                "testrpc",
                "client",
                "test",
                "video",
                "truffle",
                "smart_contract",
                "geth",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "50": {
        "name": "Eric",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Been working on Livepeer for 2 years, before this was an entrepreneur. Was interested in Bitcoin in 2015 and saw Ethereum launch in the same summer as Steemit. Those two things got my attention.</p><p>One of the things we found in web2 is that video facilitates transactions. Companies make a lot of money by charging a big premium for this transaction. 30-80%.</p><p>Started to get more familiar with decentralization, wanted to build a video protocol that is cryptonative. Crypto payment by the packet. No payment channel so needed a decentralized video infrastructure.</p>",
            "keywords": [
                "payment",
                "protocol",
                "transaction",
                "crypto",
                "ethereum",
                "infrastructure",
                "video",
                "decentralized",
                "steemit"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Use web3js a lot, we use a lot of peer-to-peer networking in addition. First version of livepeer was a fork of Geth codebase and adding video streaming, since then we have a brand new code base.</p><p>Delegated proof-of-stake system for electing service providers in the network. All built in Solidity, use Truffle for this.</p><p>Use some Trail of Bits for security stuff</p><p>Use IPFS for storage</p><p>Truebit for decentralized computation verification</p><p>Collaborate with Swarm team for video distributions</p><p>The way our tech works is we depend on Ethereum for protocol but our own peer2peer network for delivering video. We create our own network while every node talks to Ethereum, can get complicated.</p>",
            "keywords": [
                "swarm",
                "protocol",
                "network",
                "solidity",
                "security",
                "ethereum",
                "video",
                "geth",
                "decentralized",
                "truebit"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Do a lot of unit testing. Try to cover as many cases as possible to make sure the code quality is high. There is not a lot of guarantee in terms of testing for security.</p>",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Internal security audits. Taking time to do thorough code reviews.</p><p>Trail of Bits did a security audit</p><p>Launch has been great, it&rsquo;s been a month and they&rsquo;ve learned a ton. Bigger and bigger community call, can test economic assumptions on the Mainnet.</p>",
            "keywords": [
                "community",
                "test",
                "assumption"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Identity solution. ENS exists but like a great solution that&rsquo;s built on top of ENS doesn&rsquo;t exist yet. Some solution around there is interesting</p><p>Reputation system on addresses. Addresses are participating in all these protocols. The network effect you have, the behavior of the one address in one protocol can predict in others. TrustDavis is an interesting paper on this.</p><p>Truebit is something that a lot of projects hope will exist. They are collaborating with them closely. They already have a prototype that&rsquo;s working and are excited about this</p>",
            "keywords": [
                "protocol",
                "truebit",
                "ens",
                "identity"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Better Debugger comes to mind. Monitoring systems and alerting systems. Metrics gathering systems. No one has figured a great solution for this.</p><p>Where do all the data live? Can use IPFS but you have run IPFS yourself and the solution doesn&rsquo;t perform well. One big research question is data availability problem. A lot of protocols work because they depend on punishment for bad behavior. But to prove the punishment requires data. For Casper that&rsquo;s fine, but or other protocols that doesn&rsquo;t work. If you rely on off-chain data can make this data unavailable for an attack vector.</p><p>Transaction Attestation Platform (TAP). Different interfaces on a smart contract. How can people trust that the smart contract underneath is the thing that they&rsquo;re thinking about. Kind of anti-phishing. Give a reputation to a smart contract. Show this to a user in a standardized way. It is a decentralized platform that users can use to attest to the trustworthiness of smart contract functions that other users will have to invoke in order to interact with DApps. http://dappbench.com</p>",
            "keywords": [
                "phishing",
                "protocol",
                "ipfs",
                "dapp",
                "research",
                "smart_contract",
                "platform",
                "decentralized"
            ]
        }
    },
    "51": {
        "name": "James Duffy",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Hybrid online marketing + developer</p><p>Invested in Bitcoin since 2013, huge fan of the philosophy of crypto. I forgot about it during the 3-year bear market, then interest resurged in 2017 when I discovered Ethereum</p><p>My co-founder Luke was working as lead developer at crypto company called Block Mason</p><p>I wanted to build new project because I was running into scalability issues on Ethereum. Matt was running into same issues -- things were too expensive and some really bad UI in general.</p><p>The project evolved a lot: the initial idea was called ETHDeploy. We were giving people a way to spin up EVM-based side chains on private test networks for demo&rsquo;ing and user trials.</p><p>Digital Ocean style way to spin up ETH-based blockchains.</p><p>To get adoption, we needed to build up our own applications. When we started doing that, we realized it didn&rsquo;t make sense to build EVM stuff in Solidity and built in Go.</p><p>Need developers building on platform - so built CryptoZombies</p><p>First, we built ETHFiddle which is Fiddle for Solidity -- like JSFiddle (inbrowser IDE for Ethereum to share code. Like Remix, but you can quickly share code snippets.)</p>",
            "keywords": [
                "ui",
                "evm",
                "ide",
                "issue",
                "developer",
                "solidity",
                "crypto",
                "ethfiddle",
                "remix",
                "ethereum",
                "blockchain",
                "platform",
                "cryptozombie",
                "ethdeploy"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle / Ganache. When it&rsquo;s time to test on a real network, sometimes just deployed to mainnet .</p><p>In-House guy out of NYC that does contract audits</p><p>Open Zeppelin stuff is awesome</p><p>Use own ETHFiddle to hack on code in the browser and share things with other people</p><p>Compiler output not good: just does a diff check.</p><p>Tried embedding Solidity Compiler, but errors weren&rsquo;t descriptive enough</p>",
            "keywords": [
                "zeppelin",
                "compiler",
                "network",
                "hack",
                "solidity",
                "ethfiddle",
                "error",
                "deploy",
                "ganache",
                "browser",
                "truffle",
                "open",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Some type of tool that would take ETH Smart contracts, pack them up and automatically deploy them to mainnet.</p><p>Heroku style CLI deployment tool or in-browser version.</p><p>Making deployment easier for testing and production.</p><p>Solidity is really &ldquo;bare bones&rdquo;</p><p>Hard to manipulate strings -- not present in Solidity</p><p>When trying to give examples in CryptoZombies -- couldn&rsquo;t do much</p><p>Comparing strings -- no substring function</p><p>Would be nice to have more &ldquo;Utils&rdquo;</p><p>Started Solidity X</p><p>Superset of Solidity that compiles to Solidity (intelligent defaults and prevents security issues)</p><p>Think coffee-script for Solidity -- plan to continue development in the future</p>",
            "keywords": [
                "type",
                "production",
                "deployment",
                "issue",
                "solidity",
                "heroku",
                "security",
                "deploy",
                "browser",
                "smart_contract",
                "cryptozombie"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "52": {
        "name": "Matthew Di Ferrante‏",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Audits</p><p>Some clients have their own testnets. Or some chain state that needs to be initialized before you can run the code.</p><p>Smart contract dev &ndash;</p><p>Decentralized exchange project &ndash;</p><p>Testing that is hard. You need to deploy on chain; there&rsquo;s a vault, ownership, hierarchy. How does the moving average work? You gotta run a 1000 trades and they have to be from the same account, etc etc</p><p>I wish these tools had a dev mode &ndash; where you can deterministically generate accounts</p><p>Geth & Truffle & etc should have a 1000 accounts that always show up as the first 1000 accounts.</p><p>E.g. for testing signatures.</p><p>There should be a templated test environment; that you can use across environments, installations, etc.</p><p>I find himself editing this a lot.</p><p>People often give me tests which have addresses hard-coded in. I then  have to set it up again.</p><p>Consistency:</p><p>Getting projects to sync up; or a tool to initialize the setup for different projects.</p><p>Can use ganache or testrpc upto a certain point, but then, it doesn&rsquo;t scale.</p><p>Something that takes one second to run in geth, takes 20-30s on ganache.</p><p>A tool that seeds the addresses, accounts &ndash; environment imaging.</p>",
            "keywords": [
                "signature",
                "testrpc",
                "client",
                "deploy",
                "test",
                "testnet",
                "ganache",
                "truffle",
                "smart_contract",
                "geth",
                "decentralized_exchange"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "53": {
        "name": "Jenna Zenk, Travis Jacobs",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Decentralized asset management system. Smart contract that allows you to set up and manage digital assets.</p><p>Feature complete protocol going up to mainnet for short period of time for testing.</p>",
            "keywords": [
                "smart_contract",
                "decentralized",
                "protocol"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Smart contract: Dapp by Dapphub. We manage packages with git modules. Includes Solidity compiler.</p><p>Subpackages delivered as git submodules i.e. safemath.</p><p>Used truffle in the past. When you make a large project of truffle it becomes too complex. Not a fan of the migrations script. Record migrations on blockchain with an actual contract. Can&rsquo;t run specific migration scripts, must run sequence of them. Need to recompile every time you do migrations even if contract code hasn&rsquo;t changed.</p><p>Parity.js used for testing and deployment. Doesn&rsquo;t have much error handling beyond what we&rsquo;ve requested. Uses parity specific JSON RPC calls- can&rsquo;t deploy to Geth or Ganache nodes. Looking to switch.</p><p>Didn&rsquo;t use metamask because idea was to have mobile compatibility- therefore didn&rsquo;t see the value of metamask and were less feature complete. Internally developed in-browser wallet with Ethers.js works on all devices</p><p>Ethers.js library- really great. Only used in front end stack. Great because it&rsquo;s not dependent on Metamask. More tools needed like Ethers.js that are maintained well.</p>",
            "keywords": [
                "dapphub",
                "library",
                "blockchain",
                "js",
                "json_rpc",
                "wallet",
                "dapp",
                "error",
                "parity",
                "deploy",
                "ganache",
                "browser",
                "truffle",
                "smart_contract",
                "geth",
                "metamask",
                "contract",
                "stack"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Use Parity.js for deployment on test network</p><p>For testing- use Ava javascript framework</p>",
            "keywords": [
                "parity",
                "js",
                "deployment",
                "javascript"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Continuous integration with tests and Oyente integration</p><p>Use Oyente.js - Melonport has sponsored the development of. Knows certain set of issues that have occured in smart contracts.</p><p>Regular code audits (4). Before they go live next February, planning for 2 more audits. Audit from Nick Johnson and Martin Swende. Audit from Deja Vu. Last audit from bug bounty- Nick Munroz from Solidify. Also running a main net bug bounty.</p><p>Thinking about formal verification but costs associated with it is really high.</p>",
            "keywords": [
                "oyente",
                "issue",
                "js",
                "bounty",
                "integration",
                "bug_bounty",
                "cost",
                "audit",
                "formal_verification",
                "solidify",
                "smart_contract",
                "integration_test"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Javascript library and</p><p>Light client</p>",
            "keywords": [
                "client"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Really good .js library, better standard. Our front-end would love to help with ideation/funding.</p><p>We almost have to ask users to run full parity node to not affect our Node, force downtime. More community-available Nodes or otherwise light clients. Infura is completely owned and limitations such as querying limits and looking far back into history.</p>",
            "keywords": [
                "query",
                "library",
                "js",
                "client",
                "infura",
                "limit",
                "parity",
                "history",
                "community"
            ]
        }
    },
    "54": {
        "name": "Aaron Kumavis",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Whymarrh: contracting in the space, working on Metamask UI, working at Kyokan.</p><p>Kumavis: co-founder of MetaMask.</p><p>wallet functionality;</p><p>not losing your private keys;</p><p>showing you what you&rsquo;re signing, and what the side-effects of that are;</p><p>choosing a good gas price</p><p>Using Ethereum.js, Eth.js.</p><p>One thing we don&rsquo;t do well &ndash; conveying on-chain errors that happen during tx execution.</p><p>Want to be able to go deeper.</p><p>Source map tooling. Here&rsquo;s where it exactly went wrong.</p><p>Want: an API to get source maps for published contracts.</p><p>Source mapping tool already exists.</p><p>Give it the trace information. They can generate this themselves using the json rpc.</p><p>Find where it reverted.</p><p>Throw that into the source maps.</p><p>That&rsquo;ll give you the original line it was on.</p><p>Could do more fancy analysis: find what values in the state are.</p><p>Not sure how useful this would be the average user.</p>",
            "keywords": [
                "ui",
                "gas",
                "trace",
                "tooling",
                "api",
                "wallet",
                "js",
                "json_rpc",
                "private_key",
                "error",
                "tx",
                "analysis",
                "ethereum",
                "contract",
                "metamask",
                "kyokan"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>We&rsquo;ve had good experience with bounties &ndash; Gitcoin,</p><p>One issue: bounties denominated in ETH or tokens, which leaves them open to volatility and potentially unhappy contributors.</p><p>Gitcoin, has ERC20 support, so you can use DAI now, which should help significantly.</p><p>People sometimes do crappy jobs, then get angry that they&rsquo;re bounty wasn&rsquo;t accepted. This is, in a general, a problem between intrinsic and extrinsic motivation which still needs to be solved.</p><p>Internally requirements change sometimes, leading us to not wanting to accept the solution even it abides by the initial spec, because we&rsquo;d need to do a refactor around it.</p>",
            "keywords": [
                "issue",
                "bounty",
                "gitcoin",
                "token",
                "open",
                "spec"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "55": {
        "name": "Dan Finlay",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>User interface platform apps - Apps that enable other apps.</p><p>A few gateway apps.</p><p>First layer of education making it easier for users to interact with other apps.</p><p>I started with the original &ldquo;Hello, World&rdquo; Greeter contract from ethereum.org.</p><p>I liked it so much I forked it.</p><p>Originally they had 3 tutorials: Greeter, Voting, and Crowd-funding - would be great to see that kept more up-to-date...</p>",
            "keywords": [
                "tutorial",
                "platform",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>React, gulp, javascript, browserify.</p><p>Mocha for testing, build live reloading.</p><p>web3 api and rpc api.</p><p>sinon mocks.</p><p>Create a UI for smart contracts, run testrpc, deploy contracts, and query it.</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>web3, eth-js, provider engine deprecating for json rpc engine, react.</p><p>bip-39, web crypto libraries.</p><p>Currently developing eth-keyring-controller</p>",
            "keywords": [
                "ui",
                "mocha",
                "query",
                "testrpc",
                "json_rpc",
                "javascript",
                "rpc",
                "smart_contract",
                "api",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Test network, mainchain, local test rpc, mocked user interface.</p>",
            "keywords": [
                "rpc",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Regularly TDD. Write a lot of tests. Truffle, dapphub etc.</p><p>eth-js or web3 to deploy contracts and write tests over to that.</p><p>Low-level js test. Thin wrapper around json-rpc, compile with solc, deploy straight to rpc. Used truffle v1 and they changed api, so truffle was behind. Switched to remix.</p><p>On metamask we use tests and QA. Automated tests and user tests.</p><p>Understanding the blockchain in the first place.</p><p>What&rsquo;s happening under the hood and why I would care.</p><p>A big challenge people hit the first time is reading from blockchain versus proposing a change.</p>",
            "keywords": [
                "dapphub",
                "solc",
                "api",
                "blockchain",
                "js",
                "remix",
                "tdd",
                "deploy",
                "test",
                "truffle",
                "rpc",
                "wrapper",
                "metamask",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>https://ethereum-magicians.org/t/strange-loop-an-ethereum-governance-framework-proposal/268/24</p><p>There&rsquo;s a road map that needs to be executed for this to work. If I had to guess, here&rsquo;s how it might unfold:</p><p>A client team with incentive to encourage a hard fork might implement &ldquo;accepting on-chain hard fork proposals with client parameters&rdquo; as a way to make it easier to develop the hard fork, in a community-focused way that gives users the power of choosing future forks in general, not merely supporting their own interests.</p><p>Once one client has implemented this, they should advertise their client as the client that gives the user the most control over the fork policy that their client uses, in hopes to either steal users to that client, or pressure other client developers to relinquish their own privileged decision making position by implementing support for the same.</p><p>There will probably be a friction period, either where some client devs don&rsquo;t want to support this feature (either out of conviction or seeing it as a waste of time, since they may not want or need any hard forks), and so it might come down to people who have the most at stake (for example, people hoping for a funds recovery) to fund the development of this general feature for all clients.</p><p>If core client developers aren&rsquo;t interested in supporting user-chosen hard fork policies, and refuse to review/merge these PRs, that might be a good reason to fork those clients, with hopes to merge after the changed version is proven stable.</p><p>IMO, any client not favorable to a user configured fork choice rule is entrenching their own power, and informed users should flock away from those clients as other alternatives emerge.</p>",
            "keywords": [
                "governance",
                "decision",
                "client",
                "execute",
                "ethereum",
                "incentive",
                "community"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>The ability to make really lightweight user interfaces that subscribe to blockchain state.</p><p>Would prefer that json-rpc return promises.</p><p>json-rpc is unperformant, wish it was easier to contribute to.</p>",
            "keywords": [
                "blockchain",
                "json_rpc",
                "subscribe"
            ]
        }
    },
    "56": {
        "name": "Christopher Brown",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Full stack web dev, working in finance and some other industries. Started in Eth after reading WSJ after Frontiers release.</p><p>VM was interesting - run code in the blockchain is really interesting.</p><p>Modular.network - working on a hybrid solution with Blossom.</p><p>Several microservices in AWS that are coordinating with SCs on the blockchains - all that talk to a frontend dashboard</p><p>Token contracts</p><p>More extensive libraries now - we have an open source repository for ETH contracts.</p><p>Math</p><p>Token</p><p>Crowdsale</p><p>Array handlers</p><p>Linked lists handlers</p><p>Landed on Status repos first when looking at this stuff :)</p><p>Looking at zeppelin&rsquo;s libraries and they didn&rsquo;t seem as organised as other strong OSS libraries.</p><p>All about documentation!! Seemed lacking and this is the focus at modular.network.</p><p>Not deployed libraries you can link to.</p><p>Modular deploys on all networks and you can link to them specifically using delegatecall.</p><p>Take ERC20 - no reason to have 10000 Full implementations out there, just need contracts to hold their own storage and implement the right interface.</p><p>Bridging tech is most important for foreseeable future due to efficiency concerns on chain.</p><p>ETHPM required for graceful handling of libraries and packages, easily, securely etc. Really need to focus on that.</p><p>Have some thoughts about using on chain tests for upgradeability.</p>",
            "keywords": [
                "finance",
                "zeppelin",
                "bridge",
                "library",
                "status",
                "network",
                "documentation",
                "vm",
                "deploy",
                "ethpm",
                "open_source",
                "token",
                "test",
                "blockchain",
                "upgradeability",
                "crowdsale",
                "contract",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle for building, testing and compiling</p><p>Can be sketchy on deployments, though this has improved recently. Built our own deployment script to get around it though.</p><p>Test, compiling and running are cool, but none of them are linked very well.</p><p>Being the devs of both ganache and truffle -putting the scripts together that would run the whole suite would be awesome.</p><p>Needs easier integration with CI tools.</p><p>Test scripts from zeppelin (in the sol libraries that pulls up testrpc, gives it a bunch of accounts and then executes whatever you have written).</p><p>Dive into lower level Ethereum libraries a lot - ethjs-utils especially.</p><p>You have to understand what is going on and WHY you&rsquo;re doing it. This context is tough to get across and the libraries here are just not as well advertised, which is a pity.</p><p>It&rsquo;s a maturity thing: early on you&rsquo;re just trying to attract people and get them to get their hands dirty. As the community matures, you need more forward-facing, lower-level libraries that are well documented available is absolutely key. You can only do so much with vanilla web3..</p><p>One of their new implementations is a new multisig wallet, picking up some stuff from ERC 191, added some things to address security concerns.</p><p>None of that stuff is in web3, so using ecsign method from utils in order to avoid going onchain all the time to get info that is available elsewhere.</p><p>More attention around lower level components is useful as we mature.</p><p>Ethereumjs-tx, ethereumjs-wallet, solidity-sha3, to get identical hashes</p><p>Little bit more control to JS devs.</p><p>Web3 1 looks good</p><p>Biggest mistake: made it default installer when web3 v1-beta came out and this is a crucial error!!</p><p>But scrypt is such a heavy package to deal with. We use that for local encryption/decryption now. Can it even be compiled into an Electron app for instance?</p><p>Necessary because everyone running full nodes is never gonna happen.</p>",
            "keywords": [
                "ci",
                "testrpc",
                "library",
                "multisig",
                "deployment",
                "wallet",
                "js",
                "ethereumj",
                "solidity",
                "mistake",
                "execute",
                "ethereum",
                "security",
                "integration",
                "test",
                "error",
                "context",
                "community",
                "tx",
                "zeppelin"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Just Truffle for tests</p><p>Mocha for unit and functional tests. Use mocha across the whole application base.</p><p>Have run Mythril on some mission critical contracts</p><p>Was a pretty good experience</p><p>Stay away from monolithic code bases, iterate and test as regularly as possible!</p><p>Applies especially to smart contracts</p><p>Use event logging to debug contracts if possible</p><p>Getting invalid opcodes as feedback when your code doesn&rsquo;t run is the single most frustrating thing in the world!</p><p>This has now improved a lot, which is awesome! Not just OOG errors in solidity anymore.</p><p>Finished contracts a few months ago and now don&rsquo;t really want to touch them too much. However, solc moves on a lot and there is a tension there (especially after audits)</p><p>SC dev is much more like traditional application dev, not web dev. Updates are months apart and very purposeful, bundle a bunch of things etc.</p><p>We like solidity, and most problems are related to VM not being as capable as people currently want.</p><p>There&rsquo;s a language called Jelly with very purposeful functions that are then linked together to create compound functions.</p><p>Someone wanted trailing and leading 0&rsquo;s from contracts return data - seemed very easy to do in Jelly. Specifically, bytes are so valuable on the blockchain and we use more bytes than we need to.</p><p>Room for optimisation with bytecode there.</p>",
            "keywords": [
                "mocha",
                "solc",
                "mythril",
                "solidity",
                "error",
                "vm",
                "test",
                "blockchain",
                "smart_contract",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>The community is doing a good job and a lot of the stuff we need is already being worked on by someone.</p><p>ETHDenver and the gas visualisation tool that came out of that.</p><p>Became apparent that there are places where you see red and you can&rsquo;t change that and these sorts of insights are useful - do I really, really need to put this piece of data on chain etc.</p><p>More visual tools that you could wrap around smart contract code (that doesn&rsquo;t get compiled).</p><p>Has there been any thought around wrapper code for SCs for developer-specific tools or libraries that give you the visuals you need to understand more of what is going in.</p><p>Having a logger that works well and you get outputs similar to solidity-coverage and doesn&rsquo;t only point out errors, but also information - showing scope and which state variable it has access to etc.</p><p>Think about in context of Parity issues we had: the fact they tried to structure a lib as a contract could have been picked up by something like this.</p><p>Or, in Ownable contracts, specifically printing out a report that says &ldquo;The owner of this contract is the only one who can access this specific state, as opposed to other users&rdquo; etc. Point out how to establish an owner (if not already set in initialisation function).</p>",
            "keywords": [
                "library",
                "issue",
                "solidity",
                "error",
                "parity",
                "context",
                "access",
                "community",
                "smart_contract",
                "wrapper",
                "contract"
            ]
        }
    },
    "57": {
        "name": "Harry Denley",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>EAL: Ethereum Address Lookup to prevent phishing.</p><p>Back in June: chrome extension as a mini block explorer. Hover over any address, shows how many transactions it has etc.</p><p>Couple weeks later, dedicated himself to finding phishing sites and black-listing them with Metamask and his chrome extension.</p><p>Recently &ndash; added service every midnight to do data gathering on each domain.</p><p>There is a group working on anti-phishing. We share information and data through an established channel.</p><p>We now have a bot to run ops on domains (whois data gathering, DNS records, SSL dumps, Shodan data on the server)</p><p>We have also deployed an archive bot on Twitter @EthereumBadList</p><p>My main effort: to protect users.</p><p>In the start of 2017, I got into Ethereum development.</p><p>Met team at Myetherwallet (now MyCrypto). Introduced me to other people like Griff.</p>",
            "keywords": [
                "mycrypto",
                "myetherwallet",
                "transaction",
                "bot",
                "eal",
                "ethereum",
                "deploy",
                "phish",
                "metamask"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Building a platform / website to educate people on how to stay safe. MyCrypto has some stuff.</p><p>I have a Twitter poll that described this idea.</p><p>Create a bounty around this.</p>",
            "keywords": [
                "safe",
                "mycrypto",
                "platform",
                "bounty"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "58": {
        "name": "Taylor Monahan",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Chaos. 2017 in one word.</p><p>Started off as a fun side project &ndash;&ndash; cofounder is Kosla &ndash; they were both working part-time.</p><p>Then it exploded &ndash;&ndash; the Ethereum price chart is a perfect representation of MEW growth. Kosla stopped being involved after it got chaotic, because it was no longer just a fun side project.</p><p>Ecosystem started going crazy &ndash;&ndash; she started leaning in.</p><p>Team growth &ndash; hired 2 devs in April/May. Hired Jordan in June. Hired a person / week in the summer. Hiring a ton of support people. Got a director of security. Trying to hire Harry in full-time. Team of ~ 20.</p><p>Growing a remote crypto team. How to incentivize them & keep them happy. Raises don&rsquo;t work in this space.</p>",
            "keywords": [
                "security",
                "ethereum",
                "crypto",
                "mew"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Money is not their constraining resource. People, hiring, management are constraining.</p><p>Best thing for ecosystem right now is: educational, marketing, videos, tutorials, write-ups, explaining how things work.</p><p>E.g. when your mother hears about an ICO, and they google it, there&rsquo;s good resources available to educate them.</p><p>In the beginning, MEW was a stepping stone for people who already owned cryptocurrencies, before they started using geth or parity or etc.</p><p>Now, this is no longer the case, there&rsquo;s new people who don&rsquo;t know anything about cryptocurrencies at all..</p><p>Biggest phishing attacks they&rsquo;re seeing are airdrop sites. &ldquo;Free money??&rdquo; Typing your private key is not a good idea.</p><p>How does a project responsible onboard people onto Ethereum?</p><p>How does the experience look as dApps become more of a thing? How do people use this?</p><p>In a dApp, the wallet functionality should be completely abstracted away. The user shouldn&rsquo;t even know that there is a wallet.</p><p>If I had extra money, I would give 100% of it to educational resources, people designing infographics, videos, etc.</p>",
            "keywords": [
                "type",
                "explain",
                "ico",
                "tutorial",
                "wallet",
                "private_key",
                "resource",
                "airdrop",
                "onboard",
                "parity",
                "ethereum",
                "dapp",
                "design",
                "mew",
                "video",
                "geth",
                "phish",
                "infographic"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "59": {
        "name": "Nate Murray",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I started by creating my own token using the tutorial on Ethereum.org.</p><p>I also did some of the other tutorials on the Ethereum.org page.</p><p>Rich user-facing Dapps using a modern JS web tech stack.</p><p>Solidity for writing smart contracts and web3 for the connection to the blockchain.</p><p>Next thing I'm working on: solidity, truffle, javascript, ipfs.</p>",
            "keywords": [
                "tutorial",
                "js",
                "javascript",
                "ipfs",
                "solidity",
                "dapp",
                "truffle",
                "token",
                "blockchain",
                "contract",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I use python for numeric analytics (not really around dapps).</p><p>For desktop apps I'll use Electron.</p><p>For contract development I use solidity, and web3.js for a connection to the blockchain.</p><p>Zeppelin's libraries for solidity.</p><p>0x has excellent repo for js.</p>",
            "keywords": [
                "analytic",
                "js",
                "solidity",
                "dapp",
                "blockchain"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>At first, getting contract working use Remix or testing framework built into truffle.</p><p>I don't use Ganache.</p><p>I really like connecting my contracts a real instance, and I like using console to connect to node.</p><p>I do it in layers. First start developing against testrpc because its faster. Then use geth.</p>",
            "keywords": [
                "testrpc",
                "ganache",
                "truffle",
                "geth",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Wish i knew better how to do audits. Would love to know list of auditors. However, even if I could get in touch with auditors it sounds expensive.</p><p>Use solc linter when developing.</p>",
            "keywords": [
                "linter",
                "solc"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Logging within solidity is hard, you can emit an event.</p><p>Tools around gas are hard, its so opaque.</p><p>Remix and gas is maddening, different gas limits, might have contract call that works in one env that doesn't work in another.</p><p>Formal verification; we need something better than solidity. Bamboo seems cool.</p><p>interested in the successor to serpent - vyper.</p>",
            "keywords": [
                "gas",
                "event",
                "serpent",
                "solidity",
                "remix",
                "limit",
                "log",
                "formal_verification",
                "vyper",
                "contract",
                "bamboo"
            ]
        }
    },
    "60": {
        "name": "Benjamin Bollen & Paruyr Gevorgyan",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>We are building a developer kit that builds a bridge from Web2 to Web3, nice interface so that people don&rsquo;t need to have understand blockchain to use it.. Need to get users on the technology.</p><p>We have to be very pragmatic. 3 core regions to be make technology accessible by millions:</p><p>Management for users and development</p><p>Define a token for an application, how would you use it for your company?</p><p>Being pragmatic about scaling, a Layer 2 Solution. Not really sidechains, all value is only defined as value of ERC20.</p><p>Circumvent boundary of the bridge with a business solution.</p><p>We put quite a lot of effort into this, they had 2 main concerns. Auxiliary systems, have to be natively compatible with many chains. And want to be token compatible first as opposed to be block first.</p><p>Had a bad experience with Ethereum Permission Client, had some incompatibilities on ABI level so had to do their own tooling.</p>",
            "keywords": [
                "bridge",
                "tooling",
                "developer",
                "permission",
                "client",
                "ethereum",
                "scale",
                "token",
                "blockchain",
                "sidechain"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>From an IDE perspective: Tried to use Remix, but not so easy to set up locally. No finalized IDE. It&rsquo;s powerful but not easy to set up, very complicated to set up and not so stable.</p><p>Web3.js Intense users, but don&rsquo;t like how they handle callbacks. New documentation is not yet complete. Want more examples on web3.js. Better documentation.</p><p>OpenOSTBase- a bunch of wrappers around the websockets around web3, make these more reliable and redundant. In production, things tend to break but this helps with that. Happy to contribute back :)</p><p>Web3.js is a first level API. First layer access to the technology, but want to have a more user friendly second layer that caters to the community needs. More user friendly, without having to do the same thing several times. We want a second level API, a helper or utility level API.</p><p>What tools don&rsquo;t exist at the moment?</p><p>Haven&rsquo;t super explored Ganache but is interested in more things done via command line. Any type of automation that can be done from the command line is cool and greatly helps with efficiency.</p><p>Biggest thing we are missing is an IDE suited for the ecosystem. Something that could do a gas function on Remix done on runtime, you could see security things happening on runtime. Integrating Remix with a different IDE, it&rsquo;s currently statically bound.</p><p>Clear explanation in Documentation.</p><p>General level: a big proponent of multiple chain universes. In OST users only really interact with Ethereum mainnet, only have tooling directed towards one chain.</p><p>Solidity perspective, have a diagram based solution to see all the connections. Solidity codebase diagram module would be very compelling.</p><p>How do you handle smart contract verification and security?</p><p>Guiding principles: observe standards and don&rsquo;t invent funny ways of doing things. Trying to reduce code to smaller components and go from there. Had 3 security auditors. Cure53 reviewed contracts and all traditional architecture. Zeppelin did audit for smart contracts.</p><p>Now working on the hardcore protocol. TrailOfBits builds a lot of interesting tools examining the bytecode. This is not an easy task. Trying to take very small steps one at a time and then go from there is the philosophy.</p><p>They are excited about ewasm. They respect work done with Solidity, but bytecode is the biggest thing. They have compiled with same Solidity on Mac and Linux for same thing and got different bytecode, this is a big concern.</p><p>Compiler, assembly tools, and debug tools are all major points of interest. Could be interesting if Solidity compiles to wasm, then you have portability.</p><p>What was the hardest part about learning to develop with Ethereum?</p><p>To set up the first private network was somewhat difficult. Didn&rsquo;t use Truffle, just Geth. Geth is very powerful but is missing good documentation and had to Google.</p><p>Solidity is good but needs better docs and better exampling. Very happy with CryptoZombies tutorials, want to see more things like this to help intro new users into the space.</p><p>Hardest thing when you deploy something is deploying a smart contract that intends to have value but not having a way to walk it back. In the last weeks running up until their deployment, did 8 dry tests with a self-destruct button. Ran this 8 times on Ropstein testnest, and then mainnet. Very interested in smart tooling to help in this process!</p><p>More tooling for testing of deployment. Testing where deployment happened properly to avoid situations like Parity Wallet. Had Monex with EthPM like tool. Scripting the deployment. Testing the deployment, could be a part of an automation toolset. Like fastlane for ios and android deployment.</p><p>What are you most excited about in the short term?</p><p>Getting OST to version 1.0 :) But beyond that most excited about ewasm. Also excited about Whisper and Swarm.</p>",
            "keywords": [
                "deployment",
                "network",
                "remix",
                "ethpm",
                "openostbase",
                "access",
                "community",
                "contract",
                "type",
                "wasm",
                "protocol",
                "compiler",
                "wallet",
                "ethereum",
                "test",
                "websocket",
                "ganache",
                "smart_contract",
                "wrapper",
                "cryptozombie",
                "zeppelin",
                "gas",
                "tooling",
                "tutorial",
                "solidity",
                "documentation",
                "audit",
                "geth",
                "ide",
                "swarm",
                "production",
                "security",
                "deploy",
                "parity"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Using Truffle. Have a setup where for local dev purposes are tested on one chain. At a later layer they are tested on a testnet.</p><p>One cool thing we would be interested in: very close adaption between local environment and staging. Having a seamless way of transitioning from local to go to staging on Ropstein/other testnet, flip a an environment variable and go from local to staging.</p>",
            "keywords": [
                "truffle",
                "test",
                "testnet"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "61": {
        "name": "Fredrik Harrysson",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Been a core dev on Parity for a few months.</p><p>Making the Ethereum client itself nice to use by developers.</p><p>Also building a solidity parser and linter</p><p>Building some JS libraries for developers to actually write dapps</p><p>Talk about the enterprise company dapp -- how did we scope, what tools, etc</p><p>All at a proof-of-concept stage. Probably 10 years before they can actually make it work in their business.</p><p>I set up the docker containers for the nodes, did the documentation, and built the React App</p>",
            "keywords": [
                "library",
                "js",
                "developer",
                "solidity",
                "dapp",
                "parity",
                "documentation",
                "linter",
                "react"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Everything, even in dev environment is containerized</p><p>IPFS, React, Parity, ParityJS</p><p>Have some internal tools that generate javascript ABI&rsquo;s from the smart contract spec</p><p>Have an internal CLI for deployment</p><p>Deploys the contracts and then initializes some values</p><p>If you change your contract in development, re-running this tool takes a super long time, which is frustrating</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>Main library they use for all dapp development is ParityJS, and their new library called Bonds/007 (React integrations)</p><p>Parity Ethereum node has pub/sub now</p>",
            "keywords": [
                "spec",
                "deployment",
                "javascript",
                "ipfs",
                "parity",
                "deploy",
                "integration",
                "parityjs",
                "ethereum",
                "smart_contract",
                "contract",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Use truffle internally for testing some contracts</p><p>Also write own own testing tools using Rust because we don&rsquo;t like javascript</p>",
            "keywords": [
                "javascript",
                "test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Internal audits.</p><p>We are introducing a checklist system for deployments.</p><p>Pre-, during, and post-deployment</p><p>Doing external audits on everything now. Even auditing Rust code right now.</p><p>External audits are great, but the average developer cannot afford that</p><p>***Teams have grown super fast without having time to document company knowledge so that all engineers know it*** (documentation includes process as well as code)</p>",
            "keywords": [
                "external_audit",
                "engineer",
                "checklist",
                "deployment",
                "developer",
                "documentation",
                "knowledge"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Setting initial values after deploying a contract is important</p><p>Being able to roll back transactions would be really nice for dapps</p>",
            "keywords": [
                "deploy",
                "dapp",
                "transaction",
                "contract"
            ]
        }
    },
    "62": {
        "name": "Nicolay Wolf",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Not developing lots of dApps.</p><p>Foundational work for WASM:</p><p>WASM interpreter</p><p>Runtime environment &ndash; which allows to run wasm within any network.</p><p>Forking Kovan &ndash; allowing wasm contracts to run</p><p>Running wasm on private chains</p><p>WASM interpreter:</p><p>Main problem:</p><p>Making the Rust interpreter deterministic.</p><p>WASM is not strictly deterministic &ndash;&ndash; need to narrow down to deterministic opcodes.</p><p>Need to ban several opcodes, e.g. floating points. Simple solution: just parse WASM and fail if there&rsquo;s any floating point opcodes.</p><p>Other option: to canonicalize the NaN constant &ndash;&ndash; you need to bring all these flags under one definition.</p><p>One idea: you could check after each floating point opcode &ndash;&ndash; to see if its NaN and use canonical.</p><p>BUT this is not worth the effort, because no blockchains apps will have floating point anyway.</p><p>Other sources of determinism: deterministic stack for execution</p><p>WASM doesn&rsquo;t enforce size of the stack &ndash;&ndash;</p><p>When you get to JIT compilation of WASM, this compiles into using a register-machine specific to the hardware architecture; this process is actually deterministic.</p><p>But it&rsquo;s non-deterministic when you go to run it.</p><p>E.g. when a function uses a lot of stack &ndash;&ndash; e.g. a recursive function that calls itself and itself &ndash;&ndash; it can fail when it hits the stack limit of the operating system.</p><p>This can fail at different times for different machines. So, it&rsquo;s non-deterministic.</p><p>We&rsquo;re transforming existing WASM into this modified WASM that takes care of these issues.</p><p>Any WASM implementation that takes untrusted code from the network needs to have this stuff done.</p><p>eWASM collaboration will be helpful &ndash;&ndash;</p><p>Mozilla has a Rust-WebAssembly group.</p><p>Gas metering &ndash; not challenging but needs to be done</p><p>We have tools which transform WASM from free-form to gas-metered form.</p><p>Includes how much opcodes cost.</p><p>eWASM has this also &ndash;&ndash; we&rsquo;re taking a more scientific approach to this.</p><p>Parity simply uses the eWASM table.</p><p>Don&rsquo;t need to be super precise, just need to protect against malicious users.</p><p>Memory also costs gas.</p><p>Simple way is to charge for memory linearly.</p><p>The original idea is to charge for extra memory quadratically more given how much memory was allocated before &ndash; but you don&rsquo;t need to do this anymore, because there&rsquo;s new ways to allocate memory.</p><p>Gas costs are embedded into the bytecode.</p><p>Proving the correctness of implementation</p><p>Fuzz testing against various interpreters &ndash; spec implementation;</p><p>Fuzz test: allow the interpreter to run code; it should fail or do the same thing at exactly the same spots as other interpreters or existing codebases.</p><p>The interpreter should not panic in any case &ndash;&ndash; otherwise, malicious actor could crash certain nodes</p><p>They use cargo-fuzz for rust</p><p>There are also fuzzing tools for WebAssembly: which can generate randomized wasm modules &ndash;&ndash; can take this; put it into your implementation and the reference implementation; and see that they do the same thing.</p>",
            "keywords": [
                "wasm",
                "spec",
                "gas",
                "ewasm",
                "network",
                "gas_cost",
                "fuzzing",
                "dapp",
                "limit",
                "parity",
                "cost",
                "test",
                "blockchain",
                "kovan",
                "contract",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Research for cost of running WASM on different architectures and machines.</p><p>Scientific proofs on how this correlation works.</p><p>Or also computational analysis?</p><p>This will be used to assign costs to Opcodes, and also know exactly why.</p><p>Parity is using eWASM&rsquo;s results for this currently.</p>",
            "keywords": [
                "wasm",
                "ewasm",
                "analysis",
                "parity",
                "cost",
                "research"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "63": {
        "name": "Peter Czaban",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I started out building some trading algorithm.</p><p>During the early foundation days, there were workshops in London, and during one of those workshops I was writing a dapp using Mist.</p><p>Then, later, I deployed a token contract for fun, and then basically started straight away with client development.</p><p>Been working on the core Parity client on the consensus algorithms. Consensus contracts in solidity. Proof of stake.</p>",
            "keywords": [
                "trading",
                "algorithm",
                "consensus",
                "token_contract",
                "client",
                "solidity",
                "dapp",
                "proof_stake",
                "deploy",
                "parity",
                "mist",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle, solidity syntax highlighter for VIM, Jupiter notebook for testing stuff</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>EtherJS</p><p>In Rust similar libraries like @crypto and @key</p>",
            "keywords": [
                "vim",
                "crypto"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Mostly truffle for testing. Also have some of my own custom tooling that works on RPC.</p>",
            "keywords": [
                "rpc",
                "tooling"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>First contracts were usually for prototypes.</p><p>I would write contract, write tests, then integration tests.</p><p>Then would go through a review process.</p><p>Sometimes would go to an external audit.</p><p>This only happened for a few projects.</p>",
            "keywords": [
                "external_audit",
                "contract",
                "integration_test"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Being able to run things in exactly the same environment as the deployment environment (for me, it was necessary to have a custom client that I ran code against)</p><p>Parity / Truffle sometimes behave in different ways</p><p>Built a custom thing that had partial functionality to give a more consistent testing environment</p><p>Being able to track versioning of contracts from dev to deployment. Requires a lot of back and forth.</p><p>Pain points working with the language. I want a better type system!</p>",
            "keywords": [
                "type",
                "deployment",
                "client",
                "parity",
                "versioning",
                "truffle",
                "contract"
            ]
        }
    },
    "64": {
        "name": "Phil Castonguay",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Used to work for 0x, now I work as a SC dev and researcher independently.</p><p>I was the developer relations manager at 0x.</p><p>I am now focussing on state channels, signature-based improvements in general smart contracts, blockchain storage (utilising merkle trees and improving best practices).</p><p>Working with a gaming project that utilises state channels, unrelated to Raiden.</p><p>A lot of things that could be done off-chain by simply using different signatures: for crowdsales instead of using on-chain whitelist, you send a signed message for every participant and then they need to pass that message along with sending their Ether. Used by Polymath to get around the gas costs (could cost up to $15 000 just to whitelist everyone).</p><p>Working with chronologic on Ethereum Alarm Clock and other secondary markets, e.g. conditional execution where I want to make sure if x happens somewhere on chain, then do y.</p><p>Right now smart contracts don&rsquo;t listen to each other and require 3rd parties to watch the chain and inform them.</p>",
            "keywords": [
                "signature",
                "polymath",
                "developer",
                "gas_cost",
                "state_channel",
                "ethereum",
                "cost",
                "blockchain",
                "raiden",
                "smart_contract",
                "crowdsale"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Using Truffle, Ganache, testrpc</p><p>Most of the tests are not run in parallel, under-utilising my compute resources, can&rsquo;t be adapted easily or extended.</p><p>Remix for quick prototyping</p><p>Actually quite enjoy using the debugger - I find it fairly easy to use. Would be great to play with single function testing locally so that you don&rsquo;t have to run a full suite to test one or two things.</p><p>Typescript (mostly for testing)</p><p>Mostly following 0x standards - transcribing from typescript to js that make it really easy to define statically-typed tests.</p><p>Mocha, chai</p>",
            "keywords": [
                "type",
                "mocha",
                "chai",
                "testrpc",
                "js",
                "typescript",
                "resource",
                "remix",
                "test"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>I struggle with fuzzing: it&rsquo;s very useful for when different people are working on the same standards  - so we could easily run fuzzing between entirely different teams and see if the way they implement all the functions behave the same way and make sure the different implementations of the same standard are the same. Better standardisation is key.</p><p>Writes unit tests myself and try for 100% coverage.</p><p>I uses Mythril and am looking forward to formal verification.</p><p>Standards checking!! Here is a standard, put your contract next to it and check that it conforms to the standard implementation and then reuse a lot of the unit tests etc. that come with that standard.</p>",
            "keywords": [
                "fuzzing",
                "mythril",
                "fuzz",
                "test",
                "formal_verification",
                "unit_test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Nothing exists for state channels regarding how you pass messages and other p2p tools that allow different agents to communicate easily with each other.</p><p>Not easy to document this.</p><p>No easy way to test how peers are interacting with each other and you want to run simulations in state channels.</p><p>Scheduled transactions: we need a queue to avoid race transactions, can help lower gas costs. But we need off-chain system for nodes to communicate in order to implement that.</p><p>Easy to use and easy to test frameworks for this stuff is going to be super important.</p><p>Would be awesome to have some kind of simulation tool for multi-agent networks of this kind (even relevant for whisper and other parts of the Ethereum network, like zeppelin doing token mechanics simulations and analysis, especially around bad agents). More of a research tool than developer specific.</p><p>Simulator for the cross-client, cross-account signature schemes and management - right now the only way to test these schemes are to actually plug in a ledger and then test. Would be great to be able to test this from one place!</p><p>Couldn&rsquo;t make this work in Truffle, passing in byte code and passing. But then, using mycrypto or Remix, it failed because the encoding, libraries and dependencies are different!!</p><p>Very confusing how bytecode arrays are passed in different tools and how you can convert from one type to the other, how we could concatenate a range of arguments in a single contract and then vice versa. Figuring out how that works (argument encoding) is really difficult to get right.</p>",
            "keywords": [
                "signature",
                "type",
                "mycrypto",
                "library",
                "transaction",
                "analysis",
                "network",
                "gas_cost",
                "client",
                "remix",
                "state_channel",
                "ethereum",
                "research",
                "test",
                "dependency",
                "token",
                "truffle",
                "contract",
                "zeppelin"
            ]
        }
    },
    "65": {
        "name": "Federico & Jaynti",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Trying to work on Plasma &ndash; white paper is unspecified; it is not clear yet.</p><p>Started Dagger project &ndash; to get events for our UI or backend.</p><p>Use cases:</p><p>If you want to send an email or notification to users.</p><p>If your multisig wallet has incoming or outgoing transaction.</p><p>UI for the front-end; a multisig wallet: sent a tx and see it real-time. Make UI/UX better in Ethereum.</p>",
            "keywords": [
                "ui",
                "event",
                "dagger",
                "backend",
                "email",
                "tx"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "66": {
        "name": "Alex Leishman",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I am an engineer on the Polychain team, but come from the Bitcoin world. Used to work at a brokerage. Went back to grad school. Decent amount of experience in Bitcoin and Ethereum stuff over the years. I also have a cryptography background.</p><p>Doing a lot of lightning stuff right now, payment channels. Spending a lot of time investing companies in the space, doing due diligence.</p><p>Been deeper into the bitcoin world, a bit of an outsider in Ethereum.</p><p>I built a blockchain analytics tool called blockseer for bitcoin and Ethereum</p><p>Taught Bitcoin/Ethereum class at Stanford in 2015</p><p>Am really proud of the exchange and brokerage that I built in Taiwan.</p>",
            "keywords": [
                "payment",
                "analytic",
                "engineer",
                "polychain",
                "blockchain"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I don&rsquo;t do much eth-dev right now.</p>",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>CI pipeline needed.</p><p>Testing and security audits are one and the same since you&rsquo;re deploying it once.</p><p>Few contracts are heavily audited, and ecosystem is built around those smart contracts.</p>",
            "keywords": [
                "ci",
                "deploy",
                "audit",
                "smart_contract",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>We refer companies to trail of bits/ other.</p><p>Formal verification handled by specialized firms. Important contracts will/should be audited by people.</p>",
            "keywords": [
                "contract",
                "audit",
                "formal_verification"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Large players funding bug bounties for public smart contracts.</p><p>Multisig is a pain in Ethereum. Multiparty signature with a single key from an account.</p>",
            "keywords": [
                "multisig",
                "ethereum",
                "smart_contract",
                "signature"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Native chain improvements</p><p>Casper</p><p>Generalized staking system where you can sell your stake via a new token via smart contracts. Bond for staking.</p><p>Programming tool chains for web assembly. Being able to take advantage of multiple languages like C++ and Rust and have it compiled down to WA.</p><p>LLVM - any LL language could compile to web assembly.</p>",
            "keywords": [
                "smart_contract",
                "token"
            ]
        }
    },
    "67": {
        "name": "JOHN PALMER",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Web applications that interact with smart contracts, usually through MetaMask or Infura.</p><p>We built www.hashheroes.com as our first dive into Ethereum.</p><p>We built www.withpragma.com to make Ethereum development easier.</p><p>We built www.onhexel.com to make it easier for anyone to experiment with tokens and try new ideas.</p>",
            "keywords": [
                "smart_contract",
                "infura",
                "metamask",
                "token"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Web3.js</p><p>0x.js</p><p>Truffle</p><p>Testrpc</p><p>Infura</p><p>Remix Solidity</p><p>Etherscan</p>",
            "keywords": [
                "js",
                "infura",
                "etherscan"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>First of all, I write unit tests in javascript and run those locally.</p><p>Interact with smart contract through remix solidity or Pragma.</p><p>Test my app in my own UI. Check etherscan to make sure that happened.</p>",
            "keywords": [
                "ui",
                "smart_contract",
                "test",
                "etherscan"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Linting</p><p>Code review on my own and with other people. Check best practices from Consensys</p>",
            "keywords": [
                "code_review",
                "consensy",
                "lint"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>It&rsquo;s not possible to bundle two different transactions together and pay with them at the same time with MetaMask.</p><p>I wish errors in contracts were surfaced better. Generally, it is hard to know when things go wrong in contracts[a].</p><p>Gas limit</p><p>Wish I could do more within the fallback function. I know it&rsquo;s limited purposefully, but I would like a secure way to execute code in it.</p>",
            "keywords": [
                "gas",
                "transaction",
                "error",
                "limit",
                "execute",
                "metamask",
                "contract"
            ]
        }
    },
    "68": {
        "name": "Marcus Molchany",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Made a few standalone contracts for fun.</p><p>More full-fledged projects are web frontend with blockchain backend.</p><p>Web apps use Metamask to interact with blockchain. Infura as provider if MetaMask not installed.</p><p>We built www.hashheroes.com as our first dive into Ethereum</p>",
            "keywords": [
                "infura",
                "backend",
                "blockchain",
                "metamask",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Ethereum: Remix solidity, testrpc, truffle, web3 JS, Infura, Etherscan</p><p>Web: React / redux, create-react-app</p>",
            "keywords": [
                "testrpc",
                "infura",
                "ethereum",
                "etherscan",
                "redux",
                "truffle",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>For contracts, I use Remix Solidity with the Javascript VM. For unit tests, I write JS unit tests using truffle. Tried to write unit tests in solidity but it was difficult. Testrpc behaves strangely sometimes.</p><p>When developing a contract, I will write extra events just to make sure the right thing happened, and then will delete the events when contract is in production.</p><p>Automated testing?</p><p>Included above. Automated is unit tests with truffle. Manual is event logging, usually in Remix.</p>",
            "keywords": [
                "testrpc",
                "event",
                "production",
                "javascript",
                "vm",
                "truffle",
                "unit_test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Warning messages from Remix or solc.</p><p>Reading through Consensys best practices and making sure I use them in my contracts.</p><p>Asking for code review in subreddits.</p>",
            "keywords": [
                "consensy",
                "solc",
                "subreddit",
                "remix",
                "code_review",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>I really want a richer debugger. The one in remix is too hard to figure out[a].</p>",
            "keywords": [
                "remix"
            ]
        }
    },
    "69": {
        "name": "Piper Merriam",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Trinity: new Python-based Ethereum node.</p><p>Py-EVM: python implementation of EVM in python.</p><p>Sharding & Casper research team are building on this.</p><p>Web3.py: python equivalent of web3.js</p><p>V4 is coming along nicely and is fairly solid right now.</p><p>Under the above &ndash; there are a myriad of base libraries that I&rsquo;m the developer &ndash;&ndash; i.e. side-effects of the work.</p><p>Package management</p><p>Similar to Populus &ndash;&ndash; but actually the underlying core package-management structure. The solution is ready, it just needs to be built.</p><p>It is project that I had to cut off, but wants to pick up again &ndash;&ndash; immediately came to mind for bounties.</p>",
            "keywords": [
                "library",
                "developer",
                "bounty",
                "trinity",
                "research"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>The Hive tests &ndash;</p><p>Framework that black-box tests EVM implementation.</p><p>Has had multiple conversations with cdetrio on Github.</p><p>Bounty: needs clear documentation: &ldquo;for your EVM to be included in the Hive tests, you need this stuff.&rdquo;</p><p>Maybe it&rsquo;s not super high impact and not crisply defined</p><p>Bounty: need a formal spec for the Json RPC api.</p><p>Have integrations tests in Web 3. Subtle differences across nodes, which make things confusing.</p><p>Somebody needs to shepherd the ERC spec through &ndash;&ndash; most of the work is done. Dan Finlay already hammered out most of the work.</p><p>Someone needs to write the schema for all Json RPC endpoints.</p><p>This is super well defined.</p>",
            "keywords": [
                "evm",
                "json_rpc",
                "bounty",
                "github",
                "documentation",
                "integration",
                "test",
                "api",
                "spec"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "70": {
        "name": "Richard Ma & Don Ho",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Focused on the security aspect of Ethereum. 3 main challenges for going mainstream:</p><p>1) security, 2) scalability, 3) usability.</p><p>Too many projects; audit talent is in low supply;</p><p>System to allow anyone to get a high-quality audit for teams.</p><p>Components:</p><p>Payment smart contract: deals w upgrades; governance</p><p>Verification node: software to verify smart contracts</p><p>Software library: formal verification, static analysis checks</p>",
            "keywords": [
                "payment",
                "governance",
                "library",
                "static_analysis",
                "security",
                "ethereum",
                "audit",
                "formal_verification",
                "smart_contract",
                "usability"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>IDEs:</p><p>Remix is probably the best one. No support for quick-fixes (like you have in IDEs).</p><p>Better support for projects.</p><p>Manage dependencies.</p><p>Code coverage tools, to see how good your tests are. Integration would be good.</p><p>Existing tool: run this as a separate command & get results in a web ui.</p><p>Solidity-coverage.</p><p>Has some static analysis tools &ndash; more would be better.</p><p>Notes:</p><p>Web UI is weird. We don&rsquo;t use it, because of lack of project support.</p><p>We use sublime text / IntelliJ.</p><p>Better syntax coloring like Remix would be good.</p><p>Bounty for solidity support in Vim and/or Sublime.</p><p>Debugging</p><p>Half the time is always spent debugging.</p><p>Debugging with truffle & node-js is horrible.</p><p>Have to debug the JS and contract parts separately.</p><p>Different environments.</p><p>We do iterative development; somewhat test-driven; We&rsquo;re aiming for very good coverage.</p><p>What I&rsquo;m envisioning: putting a breakpoint into the smart contract or Javascript. Ideally, one breakpoint can step through all code.</p><p>Testrpc</p><p>Usable blockchain explorer for testrpc &ndash; to explore local data.</p><p>Would be great for learning as well.</p><p>Streamlining code export for Etherscan verification during contract deployment</p><p>Typically, you have to flatten all your imported contracts, it&rsquo;s a pain in the ass.</p><p>Would be good to have a place to do this. Assures that the version is consistent.</p><p>Sometimes you need update your contract &ndash;</p><p>Tools to evolve your old contract into your new one. Only deploy the additions.</p><p>We had this issue in their ICO: we wanted to change the end-date for the ICO.</p><p>There&rsquo;s a valuable data in the old contract.</p><p>Could run into problems with consistency.</p><p>More than &ldquo;library driven development&rdquo;, would be good to have tools that generate this for you.</p><p>My vision: refactorings like in Eclipse; pick refactorings (e.g. can split the class, etc). This would tie into the IDE.</p><p>Developer education programs</p><p>Lesson plans. Get each company to do one session</p><p>We went to a meetup for people who like to learn Ethereum. It was way oversubscribed.</p><p>Could be good for recruiting / onboarding.</p><p>We&rsquo;re putting together a &ldquo;minimum security standard&rdquo; after interviewing all auditing teams.</p><p>Existing auditing tools for Solidity are poor.</p><p>Read our Solidity analyzer: https://github.com/quantstamp/solidity-analyzer</p>",
            "keywords": [
                "testrpc",
                "ico",
                "library",
                "js",
                "deployment",
                "integration",
                "code_coverage",
                "contract",
                "sublime",
                "onboarding",
                "bounty",
                "ethereum",
                "intellij",
                "test",
                "smart_contract",
                "vim",
                "javascript",
                "solidity",
                "recruiting",
                "github",
                "dependency",
                "etherscan",
                "truffle",
                "ide",
                "blockchain",
                "issue",
                "analysis",
                "developer",
                "security",
                "deploy",
                "quantstamp",
                "breakpoint"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "71": {
        "name": "Jay Rush",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>QuickBlocks works with the Ethereum blockchain from the data side. How does one get usable, fast data out of the blockchain (as opposed to putting into the blockchain with a smart contract for example). Our work is fully decentralized (gets all of its data directly and only from the node); We take a bottom-up approach. We run for particular accounts or groups of account, not necessarily chain-wide. We retrieve and store only what the end user asks for.</p>",
            "keywords": [
                "ethereum",
                "blockchain",
                "quickblock",
                "decentralized",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>The tracing API across the two clients is different and seems ad-hoc.</p><p>A common format for the tracing RPC calls, so tools such as QuickBlocks which rely on the traces would be easier to build.</p><p>I use Parity. I can&rsquo;t switch to Geth because they don&rsquo;t share the same interface for the traces.</p>",
            "keywords": [
                "trace",
                "client",
                "parity",
                "rpc",
                "geth",
                "quickblock",
                "api"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "72": {
        "name": "Yann Levreau",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Working on dev tools for the Foundation for the last 2 years.</p><p>Working on Remix for the last 1.5 years.</p><p>Working alone for the last bit.</p><p>Over the last 6 months, there are more developers. Team is 4-5 people now.</p><p>Iuri Matias: dev of Embark &ndash;&ndash; he&rsquo;s on the Remix team.</p><p>Main scopes of work:</p><p>Improving the UX.</p><p>There&rsquo;s a Remix chat where some people were saying they were using it to deploy mainnet, and I was shocked, since this was not the intended use-case initially.</p><p>UX for people to use Remix and deploy contracts, and not make mistakes.</p><p>Adding static analysis</p><p>There is a new tab-based layout.</p><p>There are several modules.</p><p>Splitting Remix into different modules</p><p>Can now write contracts, debug, deploy, do static analysis &ndash;&ndash; this used to be all in one app. Now it&rsquo;s modular, so you can use these pieces in different apps. E.g. can use static analysis in VSCode.</p><p>He was in touch with Roan Blanco, developer of VSCode &ndash;&ndash; he started to integrate the debugging part of Remix as a plugin. Might do the same for static analysis.</p><p>Road is adding the static analysis.</p>",
            "keywords": [
                "embark",
                "analysis",
                "developer",
                "static_analysis",
                "remix",
                "mistake",
                "deploy",
                "contract",
                "chat"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Focussed on Remix and improving the UX:</p><p>Remix is an entry point for users</p><p>But it&rsquo;s hard to use for beginners.</p><p>It&rsquo;s hard to use if you don&rsquo;t know blockchain or the tech behind it.</p><p>There&rsquo;s documentation and videos on youtube &ndash; still hard to use.</p><p>Idea: do UX user interviews</p><p>take a beginner developer or new user, and let them use Remix (or other tools), check out what the main flows are, what are their main questions,</p><p>They have two people &ndash; who come from front-end dev. When they started 6 months ago, they didn&rsquo;t know blockchains, so their feedback was helpful.</p><p>There are three kinds of blockchain users</p><p>1) front-end dev: wants to use the blockchain to build UI, but doesn&rsquo;t care about contracts.</p><p>2) contract developer</p><p>3) administrator: not writing code, but still needs to call contracts or send transactions to them.</p><p>Remix is not focused on front-end devs right now. They&rsquo;re not targeting these people. They target contract developers or admins who &ldquo;use&rdquo; contracts.</p><p>Is there a tutorial, or a beginner contract that it initializes:</p><p>Yes. There is a &ldquo;ballot&rdquo; contract &ndash; but it&rsquo;s kinda opaque and hard to understand.</p><p>Docs: remix.readthedocs.io</p><p>Has a quick start page.</p><p>Need to improve: onboarding for &ldquo;administrator&rdquo; users (above). So they can use Remix without making errors.</p><p>Two bounties</p><p>User testing for various blockchain-user personas (above).</p><p>Making tutorials or videos for beginners using Remix.</p><p>Building the static analysis tab:</p><p>Need to add more modules.</p><p>There will be a way to add plugins in Remix</p><p>Let&rsquo;s say you are an external contributor, you&rsquo;ll be able to add code, but the code won&rsquo;t be in the Remix github, but in its repo and it&rsquo;s added as a plugin.</p><p>E.g. Solium integration.</p><p>We are architecting the plugin API with the Solium team.</p><p>Another example: Oyente &ndash;&ndash; we&rsquo;re integrating it as a plugin.</p><p>Potential bounty in the future:</p><p>Writing good documentation around this. We&rsquo;re all super busy devs, and need people to help with documentation.</p><p>Last week &ndash; someone created an Electron app for Remix &ndash;&ndash; self-driven contributor; would be nice if they can post Github issues and have people contribute and get rewarded.</p>",
            "keywords": [
                "ui",
                "oyente",
                "api",
                "tutorial",
                "transaction",
                "onboarding",
                "developer",
                "static_analysis",
                "bounty",
                "remix",
                "error",
                "documentation",
                "github",
                "integration",
                "test",
                "video",
                "blockchain",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Hard to make links between tools.</p><p>If you want to make a DAPP (truffle and remix, metamask for front-end), how can you aggregate all tools or write documentation?</p><p>Swarm integration for Remix?</p><p>Currently if you &ldquo;import&rdquo;, it imports from the Swarm gateway &ndash;- it&rsquo;s a basic integration, and can be improved to be really cool.</p><p>Frustrated developing on Swarm. Building Swarm integration, but not usable in production.</p><p>Was trying to fix a bug in Remix - but related to how they import Swarm file -- had trouble fixing bug because emix used Swarm gateway which was offline.</p><p>Swarm not in production environment yet -- looking forward to this.</p><p>Web3 library</p><p>In Web3 have send transaction method - no wrapper around it or other functions that people can use, and use more safely. Would like to see web3 safe send transaction (locate transaction in EVM to check if transaction passed. If its fine, transaction is sent, and if not there is a warning).</p><p>&ldquo;Wrapper around Send Transaction Function&rdquo;</p><p>Possible to develop transaction which fails. If you want to develop a transaction, you first have to send/execute it (but don&rsquo;t want to lose money). Execute transaction locally, wait for trace and then debug it. Think this is what Truffle is using.</p><p>Contract&rsquo;s with specific values: in code, write maximums to revert transactions - can this be added in front-end (ie. limiting contracts values so when transaction is sent there is a check beforehand so you can be sure you don&rsquo;t make mistakes).</p><p>Would require changes in solidity to provide this functionality to web3</p>",
            "keywords": [
                "swarm",
                "evm",
                "trace",
                "safe",
                "production",
                "transaction",
                "solidity",
                "dapp",
                "remix",
                "execute",
                "documentation",
                "limit",
                "integration",
                "mistake",
                "swarm_integration",
                "truffle",
                "wrapper",
                "metamask",
                "contract"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "73": {
        "name": "Gustavo Guimarães",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Blockchain engineer, working in the space since 2016. Mostly as a freelancer, helping companies solve business problems using blockchains.</p><p>Middle of this year, started Samsara Protocol. Started with idea of selling real estate on chain, and decided to use a raffle based system to do this.</p><p>Abstract idea from property to raffling all kinds of assets.</p><p>Smart contract developer in general.</p>",
            "keywords": [
                "raffle",
                "protocol",
                "engineer",
                "developer",
                "blockchain",
                "smart_contract",
                "samsara"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Use Truffle heavily.</p><p>Still a long way away from good debugging tools.</p><p>Using Remix out of habit, especially to check and step through opcodes.</p><p>Remix to dig deeper into what is going on with my solidity code. Especially the debugger there to dive into the EVM.</p><p>Have got used to the debugger here, but it is still so obscure when something throws an exception and difficult to find out why.</p><p>I have developed some intuition for this, but it&rsquo;s really, really difficult for people just beginning.</p><p>No break points!</p><p>Use open zeppelin as reference for smart contracts - have worked on some educational projects with the Zeppelin team.</p><p>No issues with this. Haven&rsquo;t looked into zeppelin_os yet.</p><p>But the idea is quite interesting - upgradeability and on chain libraries are cool.</p><p>Truffle-flattener library - make all your modules into one file. Use this to deploy, rather than doing it file by file.</p><p>React for frontend stuff.</p><p>Web3 to hook it all together.</p><p>Websockets (wss) are tough to work with. Having difficulty connecting to them through the infura nodes.</p><p>Overall, really happy with the new version - it solves a lot of problems, particularly around signing transactions safely.</p>",
            "keywords": [
                "evm",
                "library",
                "issue",
                "infura",
                "remix",
                "deploy",
                "upgradeability",
                "websocket",
                "truffle",
                "smart_contract",
                "zeppelin",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>I test in JS - unit tests mostly.</p><p>On average the ratio is 15:1 testing to smart contract lines of code and this can cause things to be quite slow, but it&rsquo;s still good practice and seems necessary for immutable contracts.</p><p>Overall, quite happy with what comes out of the box with Truffle.</p><p>Have only added await async calls to make things easier to read. Have some Mocha extensions added for the same reason.</p><p>Prefer readable code, rather than fast code, especially when it comes to testing.</p>",
            "keywords": [
                "mocha",
                "test",
                "truffle",
                "smart_contract",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Here in Berlin I have worked with solidity,berlin and they are amazing. Do really comprehensive audits.</p><p>Have also used formal verification tools: most often Mythril, sometimes Oyente.</p><p>I am also aware that the invariance checks etc. are also created by humans, so might not be entirely comprehensive.</p><p>3 levels of checks: write code, write tests for the code, pass to another engineer to check, then formal verification tools, lastly do the audit.</p>",
            "keywords": [
                "oyente",
                "engineer",
                "mythril",
                "solidity",
                "formal_verification",
                "audit"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Would be nice to have a tool that could get bytecode and re-engineer it into solidity code.</p><p>Sometimes I want to check if a function or some functionality and, if the contract has been deployed but not verified, it&rsquo;s not really possible.</p><p>Open source block explorer.</p>",
            "keywords": [
                "engineer",
                "solidity",
                "block_explorer",
                "deploy",
                "open_source",
                "contract"
            ]
        }
    },
    "74": {
        "name": "Scott Wright",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Just simple stuff - proofs of concept.</p><p>Working through course material</p><p>Building a token and a very minor escrow app</p><p>Timed auction.</p>",
            "keywords": [
                "course",
                "concept",
                "token",
                "escrow",
                "auction"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Remix</p><p>Geth obviously</p><p>SolC for compiling</p><p>Yarn is (apparently) standard now for js</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>Web3</p>",
            "keywords": [
                "js",
                "geth",
                "remix",
                "solc"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Automated testing?</p><p>There&rsquo;s an IDE that I&rsquo;ve used - Remix. Provides an interaction with Geth, create test accounts, and then I use that UI to launch a test application on testnet, play with it, see if it works&hellip;</p><p>I WANT an automated test suite, but nothing out there right now.</p>",
            "keywords": [
                "ui",
                "ide",
                "test_suite",
                "remix",
                "test",
                "testnet",
                "geth"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Automated testing - I want a testing suite, a whole tool that is entirely focussed TDD. The work really corresponds to that. Clientless work with many test iterations.</p><p>A lot of uncertainty around how gas works.</p><p>What is it exactly, how does it get used, how do you optimize for it?</p><p>The basic idea is fine, but the details when you&rsquo;re building stuff are very hard to find out</p><p>What are the best design patterns for dealing with it, the strategies?</p><p>Also, you come up against issues when there&rsquo;s a withdrawal attack vector, where you try to send ether to them, and there&rsquo;s some sort of callback function and etc.</p><p>There&rsquo;s a design pattern that works around that, but my level of knowledge is just that someone TOLD me that, but what other things do I need to be aware of? How can I find out more? These are open questions for me right now.</p><p>Would love a list of things where I can go through check marks and say &ldquo;OK, I&rsquo;ve followed x and y&rdquo; and I&rsquo;ve watched out for the following 23 possible issues / attacks.</p>",
            "keywords": [
                "gas",
                "issue",
                "tdd",
                "design",
                "test",
                "knowledge",
                "open"
            ]
        }
    },
    "75": {
        "name": "Felix Feng",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Founder of Set Protocol, wrote all the smart contract code/unit tests</p><p>Aims to build collateralized baskets of tokens. Bundle the world. In a tokenized world where tokens lie behind everything, we need to create abstractions that remove mental overload, improve transaction efficiency, and handle large amounts of tokens in general.</p><p>Just released token sets dapp for bundling/unbundling token sets. First use case- investment vehicle/product. Javascript library similar to 0x for interfacing with their smart contract code.</p>",
            "keywords": [
                "protocol",
                "library",
                "javascript",
                "dapp",
                "test",
                "token",
                "smart_contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Internal javascript library in Typescript for UI  interfacing with their protocol (bundle/unbundle)</p><p>Uses 0x ABI gen for automatically generating typed objects</p><p>Truffle for testing/ compiling</p><p>TruffleHD wallet provider repo</p><p>Infura for deploying code to Ropsten testnet, hitting services all the time. Easier to deploy to testnet.</p><p>For deploying to mainnet, they use Remix.</p>",
            "keywords": [
                "ui",
                "type",
                "protocol",
                "library",
                "wallet",
                "javascript",
                "infura",
                "typescript",
                "deploy",
                "testnet"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Started with truffle tests</p><p>Then converted tests to typescript for type safety (avoids host of potential errors, useful for building FE library as well) and used 0x ABI gen</p><p>Aim for 100% test coverage (~95%)</p>",
            "keywords": [
                "type",
                "library",
                "error",
                "typescript",
                "test",
                "safety"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Contracted security auditing firm before launching to mainnet and did it internally.</p><p>Introduced to firm through investors</p><p>Zeppelin and Consensys security etc. are super backlogged and can be highly expensive.</p><p>Tried automated tests for quantstamp but their compiler solidity version (4.2.3) wasn&rsquo;t supported.</p>",
            "keywords": [
                "investor",
                "compiler",
                "solidity",
                "security",
                "quantstamp",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Debugger</p><p>More free automated formal verification</p><p>List i.e. Aggregated &ldquo;Awesome Ethereum&rdquo; for security (blog posts, tools, etc.)</p>",
            "keywords": [
                "security",
                "ethereum",
                "formal_verification"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Debugger. Especially as contracts start linking to each other, stack trace gets more important.</p><p>Open source block explorer for any chain.</p><p>Lot more typescript tooling. 0x started the movement and built tooling around it.</p><p>People are building their own deployers/compilers. More standardization need here.</p>",
            "keywords": [
                "trace",
                "tooling",
                "compiler",
                "typescript",
                "block_explorer",
                "open_source",
                "standardization",
                "contract",
                "stack"
            ]
        }
    },
    "76": {
        "name": "Simon Jentzsch",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>CTO of SlockIt.</p><p>Daily standups like any other startup, making sure all our tools work correctly</p><p>Part of day consists of update on new tools, libraries and their respective stability. Assessing trade-offs is difficult and time-consuming work.</p><p>Consulting work, experience with real customers</p><p>Connecting IOT devices to the blockchain</p><p>Energy Web foundation, smart meters</p><p>Smart contracts for data incoming from IOT</p><p>Determine what  type of hardware they should use</p><p>Building universal sharing network (USN) in-house.</p><p>Connect IOT devices, access control, rental and sharing settings</p><p>Launched MVP on Testnet and inviting beta users. Planning on deploying to Mainnet.</p><p>Public repo containing architecture and contracts</p><p>All smart contracts will be publicly available after security audit</p><p>Use Kovan since its compatible with most clients. Also on Rinkeby.</p><p>Using Parity for tests, but interoperability between clients is lacking badly.</p><p>Gives and recieves audit</p><p>First, internal security audit</p><p>Then, number of experts from different teams.</p>",
            "keywords": [
                "type",
                "library",
                "rinkeby",
                "network",
                "client",
                "deploy",
                "parity",
                "iot",
                "testnet",
                "test",
                "access",
                "blockchain",
                "slockit",
                "smart_contract",
                "audit",
                "kovan",
                "contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Start with Truffle - mainly for testing and setting up environment</p><p>Doesn&rsquo;t produce/support typescript</p><p>Extended version we produced and use for</p><p>Typesafe contracts based on solidity contracts</p><p>Throws errors on incorrect smart contract types</p><p>Usually write tests with Travis CI, for all three browsers (GETH, TestRPC, Parity)</p><p>Use Remix for debugging</p><p>Wish we had a more stable and easier to use debugger!!</p><p>Test RPC vs Ganache</p><p>Many tiny differences (output syntax, JSON RPC error messages, etc.)  between clients makes testing very hard between clients</p><p>RPC Specs need to be tightened up so that we can communicate with them from whichever framework, write tests easily and actually understand the error messages that come back.</p><p>Not specific enough, too much room for divergence</p><p>Web3 library is trying to limit this</p>",
            "keywords": [
                "type",
                "ci",
                "library",
                "json_rpc",
                "client",
                "typescript",
                "error",
                "travis",
                "limit",
                "test",
                "solidity_contract",
                "ganache",
                "browser",
                "truffle",
                "rpc",
                "smart_contract",
                "geth",
                "contract",
                "spec"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Scalability is long-hoped for and looked forward to ;)</p><p>Mainnet as main authority,. For different devices, different chains.</p><p>Current work around could be  to use bridges (parity)</p><p>Micropayment, multiply party, state channel Solutions like Raiden up and coming, but not ready yet</p><p>Contracts that pay only for your devices from a certain account</p><p>They currently use libraries and packages to avoid security issues</p>",
            "keywords": [
                "bridge",
                "library",
                "issue",
                "state_channel",
                "security",
                "parity",
                "raiden",
                "contract"
            ]
        }
    },
    "77": {
        "name": "Fernando G",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I am a developer, working in London for the last 4 years, I love coding in general, but also security. I am joining ConsenSys next week and I am working in several side-personal projects, including the solidity-graph-debugger</p>",
            "keywords": [
                "security",
                "developer",
                "solidity",
                "consensy"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Well, it depends, when I build tools related to Ethereum, I tend to use the Java ecosystem (Java8, Maven/Gradle, Spring if it is a web application, etc).</p><p>When I am writing Smart Contracts, I use truffle for building and testing, intellij with Solidity plugin as IDE, Ganache, Mythril for formal verification, etc.</p>",
            "keywords": [
                "ide",
                "mythril",
                "ethereum",
                "ganache",
                "formal_verification",
                "smart_contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>For unit testing I use truffle, I write JavaScript tests, it works great. I use Mythril if I am auditing my contracts, I identify some really important invariant and I write a little script to formally verify it, and Mythril is great for that. Manticore can also do that, but didn't have the time to test their scripting APIs (something I have pending)</p>",
            "keywords": [
                "mythril",
                "invariant",
                "unit_testing",
                "manticore",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>I always try to keep myself on top of existing known vulnerabilities and the new ones. I have a repository with proof of concepts of most of them, and I run unit tests demonstrating the bug and the fix, in that way I have a practical view of the known security bugs. Then I try to audit my contracts using the knowledge I acquired and the tools available, mythril formal verification, mythril analysis, manticore, porosity</p>",
            "keywords": [
                "vulnerability",
                "analysis",
                "mythril",
                "concept",
                "manticore",
                "audit",
                "knowledge",
                "unit_test",
                "formal_verification",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>I think anything related to ease the whole lifecycle of developing Smart Contracts is a good candidate. A good IDE (or plugins for existing matures IDEs), with integrations to common services and tools like embedded 1 click debugger, 1 click deployment with builtin interaction with on chain contracts would be a game changer.</p><p>And like I said, a good project that can make average users to use Smart Contracts without the need of handling the private key, secure it, go to an exchange and verify their identities to get ether, then use complicated processes to do a simple thing would help a lot to gain adoption, which is very important (even if the network and technology is not completely ready at the moment for that)</p>",
            "keywords": [
                "ide",
                "deployment",
                "network",
                "private_key",
                "good_ide",
                "identity",
                "integration",
                "smart_contract",
                "contract"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Good question, there is a lot of ecosystem that has to be created. The most obvious thing, would be a graphical debugger that is what I am building, but also dependency management tools, good IDEs (intellij solidity plugin is cool, but like everything right now, it's a bit green), better documentation tools, clients for pretty much everything, an easier way to interact with contracts for the average non technical user...</p>",
            "keywords": [
                "ide",
                "client",
                "solidity",
                "documentation",
                "dependency",
                "intellij",
                "contract"
            ]
        }
    },
    "78": {
        "name": "Dandelion",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>SourcCred - bounties and reputation for open source work.</p><p>Earn ethereum cred - reputation in the eth ecosystem for different projects</p><p>Fair distro of tokens based on who developed the project</p><p>Analyse history and collect social feedback to refine the process</p><p>Currently a &ldquo;regular&rdquo; web front-end and back-end with plans to move the backend to blockchain in near future after proof-of-concept, doesn&rsquo;t want to host a centralized server</p><p>I am also currently trying to correctly map Github identities to Ethereum addresses. Was thinking about developing an ad hoc key-based style proof, post a specific gist so that you prove you hold the account.</p><p>IPFS & filecoin separate business layer (fs and file retrieval) from incentive layer. Same thing with SourceCred. We want tokens to flow according to a software infrastructure graph.</p><p>Tokens flow according to software dep graph</p><p>Need a fair transparent way for who determines credit for a project. How can we create tools for determining who earns credit in a fair way? Using algo and data collection. Been in Node ecosystem to parse data out of Github. Try to implement Pagerank on files, pull requests, function level, etc. Using TensorFlow for cred.</p><p>Connect GH ids to eth addresses eventually</p>",
            "keywords": [
                "filecoin",
                "ipfs",
                "bounty",
                "identity",
                "ethereum",
                "github",
                "fair",
                "open_source",
                "token",
                "history",
                "sourccred",
                "infrastructure"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>At core abstractions layer. If SourceCred depends on Foo library. Every time I mint SouceCred tokens, I want to give SourceGrain token to not only contributors to SourceCred but also the Foo library. But in Blockchain it is very difficult to Iterate over all of the objects.</p>",
            "keywords": [
                "blockchain",
                "token"
            ]
        }
    },
    "79": {
        "name": "David Wolever",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Been working with Spankchain team. Combination of state channels and smart contracts.</p><p>Also worked on smart contract for ICO auction.</p>",
            "keywords": [
                "ico",
                "spankchain",
                "state_channel",
                "smart_contract",
                "auction"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Vim editor, truffle. Metamask.</p><p>Switching over to onenet, using something called Vinos. Under the radar.</p><p>Vinos going to support state channels natively. Will be a little bit less terrible than Metamask.</p><p>Trouble with metamask.</p><p>Interface not well documented.</p><p>Doesn&rsquo;t have promises.</p><p>Had awful error reporting.</p><p>Don&rsquo;t know when someone closes metamask transaction. Had to write logic that says if they&rsquo;ve clicked the button 3 times and we haven&rsquo;t heard back, give them a tooltip. No documentation for that kind of thing.</p><p>Vinos will be iframed, not chrome extension.</p>",
            "keywords": [
                "vim",
                "error",
                "state_channel",
                "documentation",
                "metamask"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>First, use Truffle for unit testing.</p><p>Series of scripts for blockchain scraping. Call Truffle to send transactions to testrpc. Script connects to testrpc to make sure the state has been correctly changed.</p><p>Manual testing by running multiple test auctions. Just actually going through the process 40 or 50 times over the course of a week. Started on testrpc and then did it on a testnet with more test users. Even tested on the mainnet a few days before the real auction.</p><p>Tests on the mainnet actually revealed new problems that weren&rsquo;t revealed on testnet</p><p>Because there were hundreds of logs per block on the mainnet, it was too many</p><p>Had to go through and make performance better on mainnet</p>",
            "keywords": [
                "testrpc",
                "course",
                "transaction",
                "unit_testing",
                "truffle",
                "test",
                "testnet",
                "blockchain",
                "auction"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Front end: nothing really</p><p>Dapp: went through intense reviews.</p><p>3-5 people on a call and would go line by line through the code</p><p>Also hired a couple external audits</p><p>Even after all that, found one bug right before launch (a few days before)</p>",
            "keywords": [
                "external_audit",
                "dapp"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Need a tool like metamask supporting state channels (Vinos will fix this)</p><p>So hard to get insights into what&rsquo;s going on in solidity.</p><p>Debuggers are really hard to use.</p><p>Debugging tests is a matter of just guessing why assertions failed.</p><p>Solidity interpreter would be awesome without having to compile each time, would make development much faster.</p>",
            "keywords": [
                "solidity",
                "state_channel",
                "solidity_interpreter",
                "test",
                "metamask"
            ]
        }
    },
    "80": {
        "name": "James Young",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Work primarily with Spankchain, doing state channel research/implementation. Also worked on Adtoken, first production release of TCR.</p><p>I can preface this by saying this was all informed initially by experience with online ads. In online advertising, I had to deal with scalability and scale. Helping run a video advertising exchange on the supply side, on a slow day did 4-5 billion events a day. In online advertising, had to start at scale.</p><p>Before online advertising was in gaming, needed to be 100% in uptime. Game used AWS/EC2 at the time.</p><p>Looked at Ethereum, had scaling problems. Looked at all these initial options early on. In Adtoken, for the TCR did the groundwork for serving ads. Had concept of verifiability.</p><p>Knew about the concept about state channels, was waiting for them. Ethereum community does a great job at being able to explain things and have docs, but lack of production projects.</p><p>Opportunity with Spank chain to hit the ground running and implement into production, learn by doing. Alternative approach with state channels and dove right in. So much invaluable info you learn when you have contact with reality.</p><p>Coming tools for layer 2 tooling. Need to have these standards, but don&rsquo;t quite exist yet.  This is all informed by practical implementation.</p><p>Also work on a DAO that helps multiple projects that need state channels.</p>",
            "keywords": [
                "tcr",
                "explain",
                "tooling",
                "production",
                "event",
                "spankchain",
                "spank",
                "state_channel",
                "ethereum",
                "concept",
                "research",
                "scale",
                "video",
                "adtoken"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>We use Truffle, and Ganache on the web3 blockchain side of things. On traditional web2, use node, Kubernetes, Docker (traditional scaling pipeline).</p><p>Etherscan to verify transactions</p><p>It&rsquo;s a lot of looking at Github issues. Have to support multisig contracts.</p><p>On the front-end React/Redux.</p><p>Rely heavily on Infura, Metamask. Have their own state channel wallet, users fund SpankWallet with Metamask and then they open these other state channel with card.</p>",
            "keywords": [
                "multisig",
                "transaction",
                "wallet",
                "redux",
                "state_channel",
                "docker",
                "scale",
                "etherscan",
                "ganache",
                "blockchain",
                "open",
                "metamask",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>I test and retest. Wrote the auction contract in Spankchain, the only payment channel auction ever. The contract itself was 150-170 lines (including comments). Had to document well and had 3 audits, but tests were over 2200 lines long.</p><p>This became a distraction. Had to create a testing DSL. Had to test for success and for failure. Had to test for strange modifier behavior. Had to lock myself in a room for a few weeks and think of every possible scenario and test for itself.</p>",
            "keywords": [
                "payment",
                "lock",
                "spankchain",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>We had multiple audits at multiple periods of time. Had to just to make sure that to have a semblance of security, had a bug bounty. Left a subtle bug to make sure audit was legit.</p>",
            "keywords": [
                "security",
                "bug_bounty",
                "audit"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Getting mainstream users onboarded. Informed by practical problems, just getting ETH. Cold start problems. Ways of getting around this, using Gas Relay. What would be interesting iswhere dApps, applications have pre-funded. EIP-186 where you can have the dApp pay for gas.</p><p>It&rsquo;s going to delve more into identity based solutions. That&rsquo;s what really needs to be worked on, that first-time UX down so a mainstream user can use this. We need to figure out the UI/UX. One click Amazon shopping is the standard. We have to solve the problem.</p><p>This breaks down into two things, part of it is a multisig wallet solution. It&rsquo;s very scary and you have 0 Eth and you&rsquo;re interested in Ethereum, don&rsquo;t lose your private key! This is like Internet cash, but I&rsquo;m used to forgetting my password. Fund recovery for a new user. Once you have value, you can learn about private key, about mnemonic. Funding something that makes multisig easy to use.</p><p>The cold start problem, not having them to pay the initial gas costs when they don&rsquo;t have value. If you can solve those two things, mainstream adoption.</p><p>I think having a dedicated layer 2 talks specifically could be interesting. Layer 2 solutions are the solutions that scale. Get more Layer 2 solution widespread. And then a lot more collaboration between projects. Projects that need Layer 2 solutions could invest into a fund that is a common platform so not everyone does their own solution. To keep it very practical, want to incentivize everyone to share the knowledge. Could start a DAO to automate this, could get some funding via token inflation. They are working on this DAO on the side but there is still some aftermath for the DAO,. Providing this structure to have people come together on projects as opposed to one project.</p>",
            "keywords": [
                "eip",
                "dao",
                "gas",
                "multisig",
                "wallet",
                "gas_cost",
                "private_key",
                "dapp",
                "identity",
                "onboard",
                "ethereum",
                "knowledge",
                "token",
                "platform"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>I wish and a hope there is bachelor&rsquo;s in blockchain. In blockchain, you have to know legal, economics, game theory, some coding, etc. Here&lsquo;s the best curriculum so you can understand for yourself, is this mechanism design good. Some cryptography. Need to be able to give people the fundamentals. Need a broader view, not just technical.</p><p>This is why it&rsquo;s so fascinating, you can go down so many rabbitholes. It&rsquo;s intimidating, if you had a set course curriculum with the basics. Here it is, it&rsquo;s starting to happen. Cryptoeconomic primitives. Teach people beyond the code. Allow people to draw their own conclusions.</p>",
            "keywords": [
                "blockchain",
                "cryptoeconomic",
                "course",
                "economic"
            ]
        }
    },
    "81": {
        "name": "Doug Hoyte",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Doug Hoyte, working on sportcrypt.com, a sports betting exchange. I've also consulted on a few other ethereum projects.</p>",
            "keywords": [
                "ethereum",
                "betting"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>web3.js, ethereumjs-util, solc, testrpc, parity --dev, metamask</p><p>Overall it's pretty easy to get started, which is nice. For dislikes see next question.</p>",
            "keywords": [
                "ethereumjs",
                "metamask",
                "solc"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Custom test harness, could never figure out how to get truffle to do what I needed</p>",
            "keywords": [
                "truffle",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Trying to keep everything as simple as possible, reduce attack surface, minimise dependencies, the usual. We have a pretty comprehensive test-suite, and perform white-box invariant tests after every interaction.</p>",
            "keywords": [
                "dependency",
                "test",
                "invariant"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Hmmm, a good light client implementation so everyone doesn't centralise around infura/etherscan, although that ship has probably already sailed</p>",
            "keywords": [
                "infura",
                "client",
                "etherscan"
            ]
        }
    },
    "82": {
        "name": "Ricardo Guillerme Schmidt",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Development of smart contracts for Status.</p><p>Can also do some web3 integration with javascript, but I have not really dug deeply into that.</p><p>I want to work on DAO&rsquo;s that have delegation proxies so that you can trust an expert to vote for you.</p><p>Oraclize but too expensive.</p><p>TrueBit but not available.</p><p>Zokrates or some other solution also a possibility.</p>",
            "keywords": [
                "status",
                "javascript",
                "integration",
                "oraclize",
                "smart_contract",
                "truebit"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Microsoft VS code, Git, Remix for manual tests, Truffle, Parity.chain for testing, Mist & Parity on Ropsten for development</p><p>I gave up on Ganache - too much variability between that and live environments.</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>Not really, mostly backend.</p>",
            "keywords": [
                "vs_code",
                "remix",
                "parity",
                "backend",
                "ganache",
                "mist"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Automated testing?</p><p>First develop the smart contract.</p><p>Manual test with Remix is the first step.</p><p>Ethercamp IDE was really good, but now it&rsquo;s too old.</p><p>The new tool for Eclipse might be good but it&rsquo;s only on Windows.</p><p>When it looks like it&rsquo;s working, write some truffle javascript unit tests.</p><p>Usually spotting bugs happens in manual tests and truffle unit tests are just for making sure it&rsquo;s good.</p><p>Remix debugger is very useful, but it&rsquo;s missing some features.</p>",
            "keywords": [
                "ide",
                "remix",
                "test",
                "unit_test",
                "smart_contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>No major process. &ldquo;This function should do one thing. Only that. If it can be used to do anything else, that&rsquo;s a problem.&rdquo;</p><p>I saw that the Parity library didn&rsquo;t have the owner set. But I think other developers should write the code so that this is impossible.</p>",
            "keywords": [
                "parity",
                "developer",
                "library"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Would be very good if VScode had the same thing that remix had - i.e. an actually Integrated IDE.</p><p>Would use only remix, but it&rsquo;s horrible to use with multiple folders and things like that. Remix is only good at small projects but wants it for big projects. Connecting with RemixD can often mess up all your files.</p><p>Solidity can&rsquo;t return arrays or variable length values. Knows there is some solution with assembly but it&rsquo;s too ugly.</p>",
            "keywords": [
                "ide",
                "solidity",
                "remix"
            ]
        }
    },
    "83": {
        "name": "Richard Ramos",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Smart contract developer at Status, also working a lot on Embark.</p><p>Background: I came out of TransUnion and the financial industry.</p><p>I write smart contracts mostly related to SNT use cases: Tribute to Talk; smart contracts to control spam; a set of contracts related to identity and recovery and to allow users to register their Status ENS domain.</p>",
            "keywords": [
                "embark",
                "status",
                "developer",
                "identity",
                "smart_contract",
                "ens"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Embark, obviously!</p><p>Not just a framework for web applications - it lets you create properly decentralised applications.</p><p>You can build an app and then forget about the process of uploading to distributed file stores and setting up a lot of the infrastructure.</p><p>Embark uses web3js-1.0, which is useful because there are a lot improvement encapsulated in that library. I like the style of coding you have to use - promisfying everything, every communication with EVM is done asynchronously.</p><p>VS Code locally and Remix to test contracts.</p><p>Working between them and copy-pasting between can be a real hack though. So, I start on Remix and once I am sure it is working and stable enough, I move it into VS code.</p><p>Sometimes I also use Truffle because I like the debugger they have.</p><p>A lot of tools from the JS ecosystem: node-js, React, webpack.</p>",
            "keywords": [
                "embark",
                "evm",
                "library",
                "js",
                "hack",
                "vs_code",
                "remix",
                "webpack",
                "test",
                "infrastructure",
                "react"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Mostly through unit testing in Embark. I created a new feature for it (not yet released yet) that lets you create a small scaffold for the unit tests you need for any given contract.</p><p>After executing that functionality I can then populate the code for each individual test, and this saves a lot of time.</p><p>Not really using verification tools right now.</p><p>Handle code coverage with solcoverage.</p>",
            "keywords": [
                "embark",
                "solcoverage",
                "code_coverage",
                "execute",
                "test",
                "unit_test",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>If I want to build things that are secure AND cheap to use, this is really difficult because we don&rsquo;t have an existing scaling solution.</p>",
            "keywords": []
        }
    },
    "84": {
        "name": "Bob Summerwill",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Been involved with the Ethereum community since 2015. Worked for Foundation, and then for Consensys, then at Sweetbridge. Bootstrapping current efforts.</p>",
            "keywords": [
                "sweetbridge",
                "consensy"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Most of his work has been on the platform work itself or on the community side. Truffle and Remix are the leading things. Embark and Populus, a little bit. Metamask, very important. Mist not so much, it really needs a bullet in the head. Was a good idea 4 years ago. No one wants a desktop browser.</p><p>Mist was meant to have a dapp store and everything, and was meant to configure it. Brave killed it. MyCrypto and Metamask were really underestimated at the start.</p><p>Infura is absolutely essential, that&rsquo;s just fabulous.</p><p>Looking forward to in-browser client. Parity bridge that pushes block data into IPFS, JavaScript for IPFS. In-browser client, lightest of light client. Don&rsquo;t reconstruct the whole thing locally. Primarily Metamask driving this. Ride on top of libp2p instead of devp2p.</p>",
            "keywords": [
                "embark",
                "mycrypto",
                "bridge",
                "javascript",
                "infura",
                "ipfs",
                "dapp",
                "brave",
                "parity",
                "browser",
                "community",
                "platform",
                "mist",
                "metamask"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>As good as that gets right now, there are various guides to best practices. Consensys has a really good one. Leaning on Zeppelin, Consensys Diligence, zklabs. Fairly small amount of people that have expertise, real dearth of people.</p><p>Consensys Diligence was super swamped for requests right at the start. Pay someone to stop working on their project.</p>",
            "keywords": [
                "consensy"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Work for GUI&rsquo;s, development tools for GUI&rsquo;s. Can we get to a level where Visual Studio/Visual Studio Code/ Atom? Interactive debuggers is absolutely #1. Single stepping through it.</p><p>On Truffle, you can do with smart contract debugging. Because you don&rsquo;t have external inputs, you&rsquo;re not reading from inputs, no keyboard. The path is completely deterministic. Scrubbing backwards is quite simple, rewind is entirely possible. That kind of tooling could work.</p><p>Back in the day, there was Mix. Was a sort of debugger, but their own IDE really. But how much maintenance was this? But this is where Remix came in. With Truffle it&rsquo;s all low-level, command liney stuff. Need to add value for normal developers.</p>",
            "keywords": [
                "ide",
                "tooling",
                "atom",
                "developer",
                "remix",
                "truffle",
                "smart_contract"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Interactive debugging. Truffle and Remix have started to have little bits for that. What you really need is a nice GUI debugger. VSCode or Sublime, you need step-in debugging. Visual Studio would be ideal, step in and step out.</p><p>Profiling, gas counting. Doesn&rsquo;t exist. Anything with performance or gas counting, metrics and analysis stuff.</p><p>On FIFA, what was so incredibly involved was doing instrumented builds and then delta. Seeing memory use go up by this amount, objective before and after measurements. Having this instrumented data to go in. Automated builds is like &ldquo;Whoa, what the fuck happened to the gas count there?&rdquo; Some change was made. Costs are a huge consideration for smart contracts.</p><p>Standard libraries and frameworks. Need to not have people writing low level stuff, it should be common and it&rsquo;s hard and easy to fuck up. People shouldn&rsquo;t be writing this. The primary innovation for mature languages are the standard libraries, don&rsquo;t write a string class or math class.</p>",
            "keywords": [
                "sublime",
                "gas",
                "analysis",
                "remix",
                "cost",
                "truffle",
                "smart_contract"
            ]
        }
    },
    "85": {
        "name": "Yaniv Tal and Brandon Ramirez",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Yaniv and Brandon from The Graph, query protocol for getting data off blockchains and storage networks</p><p>Focused on research and protocol design</p><p>The issue is that Ethereum nodes do not maintain a lot of indexes, if you&rsquo;re using the JSON RPC you can&rsquo;t run queries on smart contract state. A lot of time, people need to transform the data. The way they&rsquo;re storing data onchain is not how to they want to pull that data out</p><p>The Graph is a Layer 2 protocol that sits on top of Ethereum that builds those indexes that makes all that data available via GraphQL.</p><p>GraphQL has become really popular in the web and mobile community, substantial improvement over REST API&rsquo;s. Gives you flexibility so you can make changes to UI so you don&rsquo;t have to make changes to the back-end. Having this query language on Ethereum is great.</p><p>GraphQL is a natural fit for blockchain. If you don&rsquo;t have a centralized infrastructure in the mix, GraphQL can make a lot of sense for this.</p>",
            "keywords": [
                "query",
                "ui",
                "protocol",
                "issue",
                "json_rpc",
                "network",
                "rest",
                "graphql",
                "design",
                "ethereum",
                "research",
                "community",
                "blockchain",
                "smart_contract",
                "infrastructure",
                "api"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Been using Truffle for Solidity. Remix on occasion. Etherscan on occasion. Looking at already polished contracts.</p><p>Use Parity and Geth, use Parity a lot as a Rust shop.</p><p>All over the place with IDE, Atom, Visual Studio Code. Atom not good for writing a lot of Solidity code, only one guy is maintaining the linter for Solidity for Atom.</p><p>Haven&rsquo;t been doing so much dapp development recently. Are looking into ZeppelinOS contracts, started using Aragon for contract codes.</p><p>Struggled with Aragon at ETHBA hackathon, they made a lot of changes before the Hackathon that threw them off a lot. Overall like APM, spins up IPFS node, like the upgradeability.</p><p>APM (Aragon Package Manager) is not just for Aragon contracts, is statically linked to contracts on the blockchain.</p>",
            "keywords": [
                "ide",
                "atom",
                "aragon",
                "ipfs",
                "remix",
                "upgradeability",
                "etherscan",
                "blockchain",
                "apm",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Write a lot of tests, try to make them as comprehensive as we can.</p><p>Think we use Truffle for writing the tests, all in JavaScript. Home rolled their own utilities. Don&rsquo;t have anything for test coverage.</p><p>For end-to-end testing, would be nice for good tooling for this. Kind of pain in the ass to test other systems that interact with the blockchain.</p>",
            "keywords": [
                "blockchain",
                "javascript",
                "test",
                "tooling"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Instead of statically linking contracts, you find the library that already has what you want and you call functions on this blockchain. This is pragmatic from the gas standpoint but raises security questions on the dependency.</p><p>So far still statically including everything, would like to do more including things dynamically. But not comfortable with existing solutions.</p><p>But stuff we include statically we have to audit ourselves.</p><p>Haven&rsquo;t deployed anything on Mainnet for The Graph, but are talking to firms that specialize in auditing. Want to do a full rigorous auditing.</p><p>Do a little bit of social proof, use things widely used by the community.</p><p>For dependencies, still just in development so have been pretty loose with it. Have been using OpenZeppelin, widely used 3rd party libraries.</p>",
            "keywords": [
                "gas",
                "library",
                "security",
                "deploy",
                "community",
                "dependency",
                "openzeppelin",
                "audit",
                "blockchain",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>We need to ask, what are the barriers to dapps going to mainstream? Scalability, and how to make transactions fast and cheaper.</p><p>Useability around things like wallets, like Metamask, is also a problem. As people have to approve things, it&rsquo;s not a good UX. Not designed for microtransactions or to handle cases where a bunch of transactions only go to 5 dollars worth of ETH. This would be tooling. Plugins that would support payment channels (like Next) and state channels with the recent L4 paper. This needs to be integrated into the UI/UX. Set the budget, authenticate in an easy way (finger print), and in a secure way to have it do a payment channel and eventually state channels.</p><p>LastPass or OnePass, weird to me that they haven&rsquo;t moved into this space yet. Status could solve this on mobile. 99% of mainstream people won&rsquo;t use Metamask.</p><p>For Open Source Block Explorer, the big problem is around collaboration. Problem is how to solve the problem around the nodes and to incentivize this.</p>",
            "keywords": [
                "payment",
                "tooling",
                "status",
                "transaction",
                "wallet",
                "dapp",
                "state_channel",
                "block_explorer",
                "design",
                "metamask"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Pretty common for people to develop contracts locally but don&rsquo;t really know what gas costs are, and then they deploy to testnet and Mainnet and are surprised. Compile time tool for estimating gas. Embark 3.1 has a Profiler :)</p><p>I know people are working on different types of debuggers, that&rsquo;s a big one. It works well in Remix, but if someone integrated this in Atom that would be pretty great.</p>",
            "keywords": [
                "type",
                "embark",
                "gas",
                "atom",
                "gas_cost",
                "remix",
                "deploy",
                "testnet",
                "contract"
            ]
        }
    },
    "86": {
        "name": "Sina Habibian",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I started in January or February of this year, and used a tutorial on Medium for creating a voting system.</p><p>Interesting because the tutorial was already out of date by that point.</p><p>Working on TrueBit. A few smart contracts:</p><p>TrueBit core incentive layer: tasks workers who do computation off-chain</p><p>Web-assembly interpreter in solidity</p><p>Building a bridge between dogecoin and Ethereum</p><p>Haven&rsquo;t really started on any front-end stuff for these things.</p><p>Interactive Coin Offering protocol that TrueBit did</p>",
            "keywords": [
                "bridge",
                "protocol",
                "tutorial",
                "solidity",
                "ethereum",
                "smart_contract",
                "truebit"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Vim with solidity syntax highlighter, truffle and travis for tests</p><p>Running into problems with truffle on the current project</p><p>Zeppelin&rsquo;s libraries for safe math and tokens. Using some JS state machine libraries for the client.</p>",
            "keywords": [
                "vim",
                "library",
                "safe",
                "js",
                "client",
                "travis",
                "token",
                "truffle"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle and Javascript unit tests</p><p>First person to build the contract didn&rsquo;t use truffle, so built his own complete testing system.</p><p>Built own testsuite because truffle wasn&rsquo;t configurable enough for my needs: it was running into issues as the complexity of the smart contracts grow</p><p>Deploy things to testnet. Though it&rsquo;s true that there is a limited amount of benefit from deploying to testnet. It that doesn&rsquo;t really test stuff like vulnerable attack vectors or incentive misalignments</p><p>Better to do real testing on the mainnet under a public Beta, using real ETH</p>",
            "keywords": [
                "issue",
                "deploy",
                "incentive",
                "truffle",
                "test",
                "testnet",
                "unit_test",
                "smart_contract",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>A bunch of upfront discussions and security analysis.</p><p>Then writing tests.</p><p>Security audit, bug bounties</p><p>Then, we will run a beta on the mainnet</p>",
            "keywords": [
                "security",
                "analysis",
                "test"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Testing is so important in this space, but testing is so painful and so slow.</p><p>No good debugger!!</p><p>Slow testing and debugging slow down your whole cycle.</p>",
            "keywords": [
                "test"
            ]
        }
    },
    "87": {
        "name": "Truffle Team",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "",
            "keywords": []
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Chris:</p><p>The closer you are the foundation of the stack, the less pain you feel.</p><p>We probably cause the pain.</p><p>There&rsquo;s a disparity between demand for infrastructure, and supply of engineers working on it.</p><p>I love web3 & Solidity &ndash; good open-source projects, fantastic engineers.</p><p>What I do day-to-day: development of Truffle.</p><p>Nick:</p><p>Disparity between engineers using the tools & engineers using them.</p><p>The demand for mature projects has stepped up</p><p>These tools, Truffle included, are struggling to handle mature projects, mature teams, mature practices. It&rsquo;s great when people are building proofs of concept though.</p><p>The requirements are coming in pretty fast</p><p>What I do day-to-day: Truffle debugger; development of Truffle</p>",
            "keywords": [
                "engineer",
                "concept",
                "open_source",
                "truffle",
                "infrastructure",
                "stack"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Set of tools: linters & coverage tools</p><p>Critical, have mostly been worked on volunteer basis.</p><p>Needs ongoing support; needs to adapt to changes in the stack (Solidity, Web3, &hellip;)</p><p>Should be platform agnostic, should not assume that people are using Truffle, should work with dapphub.</p><p>Leonid Logvinov wrote a 0x code coverage tool.</p><p>bounty: making a next-gen coverage tool, that can be consumed by any platform or into your tooling.</p><p>Code coverage is absolutely critical from a security point of view.</p><p>The existing system is fragile, and only has two devs working on it part-time (?)</p><p>People to talk to: Christopher Gewecke, Alex Rea (works on Solidity coverage), Leonid Logvinov (0x coverage tool)</p><p>Chris wrote the code coverage tool before joining Consensys, it&rsquo;s a volunteer project.</p><p>There are also more sophisticated audit tools: Mythril by Consensys (Bernard Mueler), Oyente maintained by MelonPort is another one.</p><p>Tracing / gas-profiling?</p><p>We would like to add this kind of stuff to ganache.</p><p>Remco Bloemen working on gas-profiling.</p><p>Bounty: support for hardware wallets in Metamask</p><p>Web3 has their provider engine.</p><p>Better key management support on the web3 level.</p><p>Metamask also wants to have Ledger support.</p>",
            "keywords": [
                "dapphub",
                "oyente",
                "trace",
                "consensy",
                "tooling",
                "wallet",
                "mythril",
                "gas_profil",
                "bounty",
                "code_coverage",
                "security",
                "coverage_tool",
                "audit",
                "ganache",
                "truffle",
                "metamask",
                "platform",
                "linter",
                "stack"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "88": {
        "name": "Preethi Kasireddy",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I&rsquo;m the founder and CEO of Trustory, an app that&rsquo;s built on the blockchain. App for users to create stories, and stories get validated using a cryptoeconomic game. Stories are claims that people are making!</p><p>Before that, I was doing independent development and was an engineer at Coinbase for a while.</p>",
            "keywords": [
                "coinbase",
                "independent",
                "engineer",
                "cryptoeconomic",
                "trustory"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>With Ethereum, for Trustory, we will write smart contracts in Solidity but maybe also make extensive use of Go.</p><p>Tendermint Consensus engine to build our sidechain with.</p><p>Other Cryptolibs TBD.</p>",
            "keywords": [
                "tendermint",
                "consensus",
                "solidity",
                "trustory",
                "ethereum",
                "smart_contract",
                "sidechain"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>For JS, Mocha/Chai. In the past, used py-ethereum. For now, TBD.</p>",
            "keywords": [
                "ethereum",
                "js"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>In the past, OpenZeppelin. Don&rsquo;t think we&rsquo;ll use them again because they are a bit pricey.</p>",
            "keywords": [
                "openzeppelin"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Testing and debugging!</p><p>Key management stuff.</p>",
            "keywords": [
                "test"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Debugging. We don&rsquo;t use Truffle, and if you&rsquo;re not using Truffle, it&rsquo;s kind of impossible to debug your contracts. Truffle is not the future, it feels very restrictive. If you&rsquo;re not using Truffle it&rsquo;s difficult.</p><p>Testing. Surprised that there is no native tester for Solidity yet. Good examples to test using pyethereum or some other library.</p><p>Key management and key generation, for people that are not security experts. Right now, some people are using BIP39, some people are using other stuff. It&rsquo;s a mess. We need to decide what the standard is and make the examples around it.</p>",
            "keywords": [
                "tester",
                "library",
                "solidity",
                "security",
                "test",
                "truffle",
                "contract"
            ]
        }
    },
    "89": {
        "name": "Alexey Akhunov",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Been in Ethereum since the beginning. Was following the PoC. Mined few blocks on his home computer.</p><p>Initially ran geth, then parity, then geth again.</p><p>Geth said it would be more like a library.</p><p>6 months ago, moved to doing Ethereum dev full time.</p><p>Did security audits &ndash; gets tedious &ndash; smart contract are usually short. But comes with more stuff &ndash; server-side, etc</p><p>Now: playing with the go-ethereum code, trying to optimize it.</p><p>People talk about sharding, Casper, etc will fix everything; but that won&rsquo;t solve everything without optimizing everything.</p>",
            "keywords": [
                "ethereum",
                "smart_contract",
                "geth",
                "library"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Geth.</p><p>Can pass in --cpu-profile</p><p>Uses basic stuff that comes with Go: PProf.</p><p>Go has in-built tool to open this file.</p><p>Can generate dominator tree -> whole graph of traces vs times. Shows which nodes are dominating.</p><p>My workflow:</p><p>Change code.</p><p>Run geth with --cpu-prof</p><p>Generate graph from .prof file.</p><p>Run on cloud overnight.</p>",
            "keywords": [
                "open",
                "geth",
                "trace",
                "pprof"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Unification of testnets[a].</p><p>Rinkeby & Kovan are still incompatible.</p><p>I wanted to write this myself, write Kovan implementation in Geth?</p><p>I hate that everything in the smart-contract ecosystem is written in Javascript &ndash; e.g. Truffle. People then use truffle bindings in production.</p><p>Native go tooling. Native go contracts.</p><p>I tried to do javascript auditing. And it is virtually impossible without safety of types. There&rsquo;s a lot of dependencies; it&rsquo;s really hard to check everything.</p><p>Specific: where the web-server is written, not in JS, but in a compiled language: should bind directly to the smart contracts, instead of going through JS bindings. Use go-bindings.</p>",
            "keywords": [
                "type",
                "contract",
                "tooling",
                "rinkeby",
                "production",
                "js",
                "javascript",
                "dependency",
                "testnet",
                "safety",
                "truffle",
                "smart_contract",
                "geth",
                "kovan",
                "unification"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "90": {
        "name": "Simon de la Rouviere",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I have been in blockchain since 2013 working in BTC. I have always looked at this stuff as a tool to enable creators, so I built an app that let people sell digital goods for BTC.</p><p>Started building on Ethereum when it was announced in 2014, and then more actively late 2014, working in the stack.</p><p>Currently most time on: Ujo music - decentralized licensing platform for musicians.</p><p>30% of time on Curation Markets - monetize new networks of value and coordinate toward shared goals.</p>",
            "keywords": [
                "network",
                "ethereum",
                "platform",
                "decentralized",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>I am the smart contract lead at Ujo, so spend most of my time writing Solidity and tests.</p><p>Writing tests in Truffle and to deploy contracts.</p><p>Generates helpful build file with info about deployment that can then be ported into any frontend app through a simple JSON file that can have multiple networks and contracts specified in it.</p><p>Sometimes use Remix, mainly for catching syntax errors more quickly (than Atom at least, my other IDE). Works well for quick interaction (using MetaMask) with smart contracts.</p><p>Just truffle&rsquo;s contract libraries to interact with frontend</p><p>Use Oraclize for on-chain price oracle for Ujo stores.</p><p>Strings library built by Nick Johnson that helps us parse strings in the registry more easily.</p><p>Wrote our own ERC-721 implementation as well.</p><p>After CK came out, there was no fully standardised implementation. The community was still iterating over the standard, OZ also wrote one. There were some stylistic changes that Consensys wanted over the OZ work, so we still needed our own implementation.</p><p>Also just helps with my own understanding to write this stuff myself.</p><p>Curation market specific tools?</p><p>Trent from Ocean Protocol is pioneering the engineering approach to analysing token systems using well known tools from his trade that I don&rsquo;t understand as well as he does.</p><p>We use a lot of different curves for curved bonding markets, and there are some curves that are more easily visualized and assessed.</p><p>xkcd graphs makes some interesting and easy to understand stuff.</p>",
            "keywords": [
                "ide",
                "consensy",
                "library",
                "atom",
                "protocol",
                "deployment",
                "network",
                "solidity",
                "error",
                "community",
                "test",
                "token",
                "oraclize",
                "truffle",
                "smart_contract",
                "metamask",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Mythril is very useful and we use it.</p><p>Writing extensive unit tests in Truffle covers a lot of the low hanging fruit and gives you a great understanding of your contracts and how they really work.</p><p>It really depends on the use case: i.e. checking for over- or underflow means you sometimes need to be really careful.</p><p>Best resources to learn about tests?</p><p>The EVM is notoriously bad at providing good error reports.</p><p>Revert with reason will be really helpful for this. But there might still be edge cases where it is not certain what transpired.</p><p>You used to require a lot of context in order to sense what</p><p>A lot of my knowledge comes from debugging myself and following the traces through the EVM. Sometimes you just have to vasbyt (an Afrikaans word meaning, roughly, grit your teeth and just hold on).</p><p>Solidity is moving more towards safer defaults in general, which allows more advanced devs to take the guard rails off when we know what we are doing:</p><p>Explicitly setting the constructor (to avoid some of the Parity hacks)</p><p>Addition of transfer function to automatically check for failure of sends (which was previously manual).</p><p>After DAO hack, I started collecting information and Smart Contract best practices repo, which is now maintained by the Consensys Diligence team.</p><p>Infura uses a load balancer between multiple Eth clients, but these have different tx pools, so during the migration process, it is pinging infura, but it is shuffling the request to different node each time, which eventually cause the migration to fail.</p><p>However, the error reporting from the client claims that the nonce is too low, which is technically true, but not at all descriptive about why the migration actually failed.</p>",
            "keywords": [
                "dao",
                "trace",
                "unit_test",
                "tx",
                "contract",
                "evm",
                "mythril",
                "test",
                "smart_contract",
                "consensy",
                "client",
                "solidity",
                "error",
                "truffle",
                "safe",
                "hack",
                "infura",
                "resource",
                "parity",
                "knowledge",
                "context"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Autonomous artist blueprint has existed for more than a year. Someone just needs to copy-paste and build it: https://medium.com/@simondlr/lets-summon-an-autonomous-artist-a-bot-that-creates-owns-and-sells-its-own-art-ada1afad086a</p><p>A lot of curation market stuff: usage, governance and management of the community.</p><p>There are different interesting ideas around this. Dmitry from Ocean proposed a model where a bounty is funded collectively, then it graduates to an NFT after a certain threshold. Will go back to him for more details on this.</p><p>The usage of curved bonding for network effects on bounties: let&rsquo;s say Status wants to issue a bounty. The buy Status bounty tokens on a curved bond, backed by SNT or Eth. This is valuable because, over time, if Status only uses Status bounty tokens for their bounties, you slowly build up a network effect around that token. Can either sell out or hold the tokens if you believe more people will fund more bounties in the futures. This allows people to speculate on the work being done in Status - it is a really a super-powered donation though.</p><p>It&rsquo;s kind of like network effects for investment or VC.</p>",
            "keywords": [
                "governance",
                "status",
                "issue",
                "bot",
                "bounty",
                "nft",
                "token",
                "community"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>One thing that comes to mind is a mature, incentivized storage platform does not really exist, still. Swarm has never really answered my immediate needs, and I worry sometimes that it is a bit too similar to something like S3.</p><p>Wouldn&rsquo;t need to solve all problems immediately, just needs to be better than what we have today. Infura provides access to the IPFS network, and then backs them up themselves so that they have guaranteed access to it. Which is good enough, for now.</p><p>In the future, if you&rsquo;re going to have 1000&rsquo;s of GB of media, this will need to be looked at much more closely.</p><p>Protocols labs multi-hashing scheme is very useful in addressing the content.</p>",
            "keywords": [
                "content",
                "swarm",
                "protocol",
                "network",
                "infura",
                "ipfs",
                "access",
                "platform"
            ]
        }
    },
    "91": {
        "name": "Alvaro",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>VirtuePoker &ndash; offchain game, smart contracts to represent state of a poker game &ndash; offchain consensus of consensus, and submit to onchain.</p><p>Building poker with Ether, that can be played without an intermediary.</p><p>When you leave the table, you cash out with the stake which you have left</p>",
            "keywords": [
                "smart_contract",
                "virtuepoker",
                "consensus"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "92": {
        "name": "Javier Franco",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>VirtuePoker &ndash;&ndash; making the migration to the new problem.</p><p>We have a Proof-of-Concept on Python; implementing in Electron.</p><p>Talking to Plasma, to use for scaling and also gas costs. This is a big problem.</p><p>The poker game actions are all done off-chain; the money stuff is on-chain. The winner reports the results. This is on-chain and expensive. Even reporting on the results costs $1.</p><p>Offchain stuff:</p><p>P2P network between all the peers &ndash; just a centralized API right now. Later want to be p2p without a server, but could have attack vectors with people listening in.</p><p>Building the backend &ndash; regulatory process &ndash; if you lose a hand, but thought you won, you should be able to call in. Also to prevent collision. View patterns.</p>",
            "keywords": [
                "virtuepoker",
                "gas_cost",
                "network",
                "cost",
                "scale",
                "backend",
                "regulatory",
                "plasma",
                "api"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Testing our Dutch Auction ICO contract:</p><p>We were targeting 100% code coverage.</p><p>The contract allowed ICO to stop in two ways:</p><p>By hitting the market cap</p><p>By calling stop (?)</p><p>The time between the auction being finished, and the tokens being claimed, you want 7 days.</p><p>This is equivalent to 30k blocks.</p><p>How to test? You hardcode lower numbers, test (which is slow), then switch in the real numbers.</p><p>What a solution for this would look like:</p><p>These tools could have a way to mine the number of blocks you want, instead of block-by-block.</p><p>Stress-testing the economics & game theory of ICO contract:</p><p>To be able to bid, you need to be whitelisted. Then, the amount you bid is also limited.</p><p>Solidity:</p><p>It&rsquo;s a simple language. Not very complex. Problem is you have to be very strict about testing everything; not even leaving a single line of code without coverage.</p><p>E.g. Parity bug. All contracts where using the same contract.</p><p>E.g. if you want to use an external function of a contract, and that person kills the contract, you are screwed. Kinda like someone deleting an NPM package you depend on. But there&rsquo;s no roll back.</p><p>We are moving towards factory or library-driven contracts.</p><p>We will have a proxy contract.</p>",
            "keywords": [
                "ico",
                "game_theory",
                "library",
                "solidity",
                "parity",
                "test",
                "token",
                "code_coverage",
                "auction",
                "contract",
                "economic"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>How to simplify the way to calculate the gasPrice.</p><p>Having an estimateGasCost when you send a transaction?</p><p>A lot of people have trouble when sending a transaction with a low gas cost, doesn&rsquo;t get accepted &ndash; but you can replay the same tx with the same nonce with higher gas price and overwrite</p><p>Wallets need to implement this, it would help a lot of people.</p>",
            "keywords": [
                "wallet",
                "gas_cost",
                "gas",
                "tx"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "93": {
        "name": "Rick Dudley",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I worked on EthPM briefly.</p><p>I gave up in frustration</p><p>I was working at Monax at the same time with RJ and Jan.</p><p>This is a good bounty that we&rsquo;re going after.</p><p>Bigger problems within EthPM:</p><p>Fundamentally, in Ethereum, we have contract immutability.</p><p>If I take the same bytecode and deploy it to two different networks, it&rsquo;s going to have different hashes. So how do I reference the code across my local, testnet, and mainnet environments? How do I reference that in my dev environment? -> the contract address won&rsquo;t be the same.</p><p>Working on at the moment?</p><p>VulcanizeDB with Maker as their client.</p><p>Steps:</p><p>Take IPFS (the content-address allows you to verify the content is correct) and retrieve the data</p><p>SQL query &ndash; you do a search given parameters and you get back a result set.</p><p>Because you trust the database is free of faults.</p><p>Vulcanize: our result-sets contain content-addressable data.</p><p>ETL system for blockchains.</p><p>Pull blockchain data into a Postgres database &ndash; load all blocks, transactions, tx receipts.</p><p>You as an engineer write a transformation &ndash; which also generates a GraphQL endpoint.</p><p>Your dapp can then pull that data on an ongoing basis live &ndash;&ndash; pubsub, polling, &hellip; The data is also content-addressable.</p><p>e.g. you put the events for a contract into a table, you have a block range, a contract, in this table</p><p>Then, you take that table, do a pg_dump, and put it into IPFS.</p><p>You can then verify that using your own client.</p><p>Github / vulcanize / vulcanize.db</p><p>Will be released soon.</p><p>Will eventually write a DSL for those transform.</p><p>Standalone vulcanize db reads from one node, but can gossip the transformed to other nodes.</p><p>Interactions with IPFS, Tendermint, Lightning, &hellip;</p><p>Federated exchange &ndash; decentralized exchange</p><p>Once you have that system; then the Tendermint validators can have a system marketing</p><p>Tendermint validators can be bonded on Ethereum AND they promise to route the Bitcoin HTLCs</p>",
            "keywords": [
                "vulcanizedb",
                "query",
                "network",
                "database",
                "ethpm",
                "tx",
                "contract",
                "engineer",
                "bounty",
                "dapp",
                "ethereum",
                "decentralized_exchange",
                "tendermint",
                "client",
                "ipfs",
                "github",
                "sql",
                "testnet",
                "maker",
                "monax",
                "content",
                "transaction",
                "event",
                "graphql",
                "deploy",
                "etl",
                "blockchain"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>I like the DappHub stuff; but it&rsquo;s not fully integrated.</p><p>There isn&rsquo;t a full testing suite; no way to go from the Solidity integration tests, to full-stack integration tests.</p><p>Casey Detrio worked on testing & fuzzing within Ethereum Foundation codebases.</p><p>But they don&rsquo;t run simulation networks on updates, so there could be consensus breaks.</p><p>For instance, the airline industry does this. Airlines use BFT within fly-by-wire systems.</p><p>Check out: videos from SQLite author explaining how they did testing.</p><p>Our testing:</p><p>We use both Zeppelin and Dapphub.</p><p>Phantom-js test of something that uses IPFS and Ethereum.</p><p>Monax had a lot of great tools, that didn&rsquo;t get the attention they deserved in the community:</p><p>Counterintuitively, the federated context has higher security requirements. Your clients ask tougher questions than ICO token buyers.</p>",
            "keywords": [
                "consensus",
                "ico",
                "js",
                "network",
                "token",
                "video",
                "community",
                "explain",
                "ethereum",
                "test",
                "zeppelin",
                "dapphub",
                "fuzzing",
                "ipfs",
                "solidity",
                "client",
                "stack",
                "monax",
                "security",
                "context",
                "integration_test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "94": {
        "name": "Evan Van Ness",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Have only ever played around very early, but never built anything seriously</p><p>Personality isn&rsquo;t suited to writing bug free software, which is what you have to write in this space, and not a serious enough developer</p><p>The idea of writing code with actual value attached to, direct value that you can never take back in the case of an error.</p><p>I&rsquo;m glad others are developing, but I would lose too much sleep.</p><p>I run the Week In Ethereum newsletter, and has become a full time job at Consensys.</p><p>Close to 40hrs a week to curate</p><p>Do a podcast as well.</p><p>Moderator of r/ethereum</p>",
            "keywords": [
                "moderator",
                "consensy",
                "developer",
                "error",
                "ethereum"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "95": {
        "name": "William Entriken",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Started using Ethereum in December.</p><p>Created ERC721/161 to support my project. It was contentious, I won the fork wars.</p><p>Underestimated how crazy this ERC721 process was.</p><p>721 is the first standard that&rsquo;s actually an Interface.</p><p>Interfaces are broken in Solidity.</p><p>Started filling bugs in Solidity. &ndash;&ndash; interfaces should be able to inherit from interfaces.</p><p>External vs public in interfaces. I fixed it.</p><p>Fixing things in Solidity &ndash;&ndash; basically rewriting the whole inheritance model in Solidity.</p><p>In 721, I had a caveat section, &ldquo;errors in Solidity etc&rdquo; &ndash;&ndash;</p><p>People said: &ldquo;the standard shouldn&rsquo;t say a function is payable&rdquo; &ndash;&ndash; but I said that the interface needs to enforce this.</p><p>Got the attention of Christian, Alex, Hudson.</p><p>721 had a dependency on 165. So I started to fix 165.</p><p>Mainly occupied with full time job, speaking re: 721 and its use cases at conferences, evangelism, million dollar homepage, navy, google, hardware (semiconductors)</p><p>Big open-source guy, worked on KDE project, worked in semiconductors.</p>",
            "keywords": [
                "solidity",
                "error",
                "ethereum",
                "dependency",
                "open_source"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "96": {
        "name": "Christopher Goes",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Wyvern is an application agnostic protocol for exchange of transactions, not tokens</p><p>Parameterisable orders - kitties with blue eyes, discovery mechanism</p><p>NFT, bonds, collateralized debt obligations, pools of cats, where people care more about the  parameters of the asset</p><p>Buying and selling of smart contracts. Use case- rental of smart contracts in exchange for fees</p><p>Like the 0x for transactions, ethereum assets</p><p>Proxy account system where users create DEX orders that execute transactions under specified conditions.</p><p>Abstracting over Ethereum bytecode - anything you can send over eth transaction you can buy/sell</p><p>Mostly written in January 2018</p>",
            "keywords": [
                "wyvern",
                "discovery",
                "protocol",
                "transaction",
                "dex",
                "nft",
                "ethereum",
                "execute",
                "token",
                "smart_contract"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Solidity, Typescript, Truffle for deployment, JS front end</p><p>Bytecode checking handled by libraries</p><p>Bytecode of your order (constructed in UI) is checked vs orderbook</p><p>How are you building the front-end to construct bytecode?</p><p>https://exchange.projectwyvern.com/</p><p>Wyvern schemas library maps bytecode to visual representations</p>",
            "keywords": [
                "ui",
                "wyvern",
                "library",
                "deployment",
                "js",
                "solidity",
                "typescript",
                "truffle"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Oyente</p><p>SolCoverage is super useful</p><p>Javascript tests</p><p>Current experience writing tests in solidity is terrible. Could be better with a better interpreter.</p><p>Current static analysis tools focused too heavily on reentry bugs, post-DAO</p><p>Security audit on Wyvern revealed that a non-zero contract balance tool</p><p>More edge cases needed between Solidity and EVM gotchas</p>",
            "keywords": [
                "dao",
                "oyente",
                "wyvern",
                "evm",
                "analysis",
                "solcoverage",
                "solidity",
                "security",
                "audit",
                "contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Local, easy Solidity interpreter</p><p>Currently, tests are done on EVM through a blockchain</p><p>Most things you&rsquo;re testing don&rsquo;t rely on blockchain features (timestamps, block # etc.)</p><p>Easy interpreter that runs locally on computer not through ganache</p><p>Also, Better gas measurement- line by line gas cost analysis</p><p>His workaround was using solidity assembly code (well documented)</p><p>User account experience would be better if people used contracts instead of standard accounts</p><p>Wyvern already uses user-owned smart contracts as their user account</p><p>Instead of ERC-721 way (smart contract approved to spend your funds). If users had proxy accounts, they could create global limits on spending of tokens. Wouldn&rsquo;t need to track approvals via various individual contracts.</p><p>Custom rules for fraud detection/reversal could be set up (i.e. double confirmation/ time period required for transactions > $xxxxx)</p>",
            "keywords": [
                "wyvern",
                "evm",
                "gas",
                "transaction",
                "analysis",
                "solidity",
                "limit",
                "solidity_interpreter",
                "test",
                "cost",
                "ganache",
                "token",
                "blockchain",
                "smart_contract",
                "contract"
            ]
        }
    },
    "97": {
        "name": "Matt Condon",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Built a raffle contract, but didn&rsquo;t ship it because I didn&rsquo;t want to deal with real money in early 2017</p><p>First thing I shipped was steak.network</p><p>Now building XLNT and gnarly</p><p>Solidity contracts.</p><p>Off-chain clients.</p><p>Frontend interfaces for blockchain-backed stuff.</p>",
            "keywords": [
                "raffle",
                "gnarly",
                "network",
                "client",
                "solidity",
                "blockchain",
                "contract",
                "xlnt"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle, Infura, MetaMask, Etherscan, Remix, Solidity flattener.</p><p>If not already mentioned, are there any libraries you rely on regularly?</p><p>Web3, BigNum, moment, Numeral, Chai, Mocha</p>",
            "keywords": [
                "mocha",
                "chai",
                "numeral",
                "etherscan",
                "truffle",
                "bignum"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Try not use truffle test.</p><p>Never written a solidity test, but written a lot of JS tests.</p><p>Also do some manual integration tests using Remix to deploy to Ganache or something. Using remix for this testing.</p>",
            "keywords": [
                "js",
                "solidity",
                "test",
                "ganache",
                "integration_test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Nothing, no real process besides following best practices.</p><p>Gets auditing. Should be running Mythril but hasn&rsquo;t set it up yet. They have a great blogpost on finding unchecked self-destruct.</p>",
            "keywords": [
                "mythril",
                "audit"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Truffle has a lot of rough edges (documented elsewhere)</p><p>Gas profiling</p><p>Interactive debugger that works</p>",
            "keywords": [
                "gas"
            ]
        }
    },
    "98": {
        "name": "Ramon Recuero",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Last summer, developed Redis on Ethereum. Simple to read & write data.</p>",
            "keywords": [
                "redis",
                "ethereum"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "",
            "keywords": []
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Redis had the smart contract. Made an npm library; had Truffle tests + npm tests.</p>",
            "keywords": [
                "redis",
                "smart_contract",
                "test",
                "library"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>Found a list of the top 10 security vulnerabilities; reentrancy, math overflow, ...</p><p>You don&rsquo;t know what you don&rsquo;t know.</p><p>How to find info:</p><p>Google / reading about the DAO hack / Reddit.</p>",
            "keywords": [
                "overflow",
                "dao",
                "reentrancy",
                "vulnerability",
                "hack",
                "security"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Having difficulty in hiring people &ndash; most engineers don&rsquo;t understand blockchain.</p><p>Don&rsquo;t have much to show for it right now.</p><p>SoV</p><p>Infrastructure needs to get exist first.</p><p>Lack of use-case, to be honest.</p><p>Explaining the data model for blockchains:</p><p>E.g. similar to: Dan Abramov: Redux devtools on the right.</p><p>Making an interactive demo of data flowing through.</p>",
            "keywords": [
                "explain",
                "engineer",
                "redux",
                "blockchain",
                "infrastructure"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "99": {
        "name": "Facu Spagnuolo",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I studied Computer Engineering and am a full stack dev. I started my career by programming web stuff and distributed systems.</p><p>A year ago I had heard a lot about BTC and &ldquo;blockchain&rdquo;, so I got involved.</p><p>My life goal is to build the technologies that will make people&rsquo;s lives easier and more free.</p><p>Cryptocurrencies clearly can do this, but Ethereum specifically - because of the community, and the fully functional VM on a chain - is clearly the best platform we have so far.</p><p>I knew Manuel from before, and so got together with him and decided to start building some tutorials and interaction guides to walk people through the same forests I was exploring. Started contributing to Zeppelin as a security researcher, because that is the major focus at the company.</p><p>This gave a lot of background as I really had to grasp how thing happen in the EVM. You have to be incredibly conscious and attentive about the stuff you&rsquo;re programming.</p><p>Auditing well-known projects also really helped me grow my knowledge of how the whole ecosystems works and what the best practices are.</p><p>I am now building Zeppelin OS - upgradable smart contracts, with a scheduler, and on chain standard libraries.</p><p>It&rsquo;s a huge challenge to build this on Ethereum currently, so I became a core member and we are releasing our first version today!!</p>",
            "keywords": [
                "evm",
                "library",
                "tutorial",
                "security",
                "ethereum",
                "vm",
                "community",
                "knowledge",
                "scheduler",
                "blockchain",
                "smart_contract",
                "platform",
                "zeppelin",
                "stack"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Truffle - I don&rsquo;t really like it, but have to use it.</p><p>We can improve a lot of things here and build some more things on top of it.</p><p>Testing your contracts easily across any network and setting your own defaults through the console is not as easy as it should be.</p><p>Truffle scripts allow you to deploy your application, but the truffle environment itself is very difficult to manage, especially if you need to modify it to fit your specific project. You can lose days trying to do that.</p><p>We should start thinking about providing an interface that can be consumed, extended and used by other cmd line tools, and things like zeppelin_OS.</p><p>The testing environment is really good, but could still provide some extra features (like better debugging and changing variable easily between tests without needing to recompile everything).</p><p>I haven&rsquo;t yet found one chance to run the debugger properly - but we really need that and it really needs to be easy to use.</p><p>When I try to debug my contracts on the network, I start logging events on the smart contract to see what is happening. This is really slow, it is a waste of gas and is not the way I want to handle things in the future.</p><p>We also use open zeppelin a lot in our own projects: i.e. DApps we build ourselves, and zeppelin_OS - an on chain version that can be used as a standard library for zeppelin OS.</p><p>Currently you have to deploy manually the smart contracts from our libraries that you want to use. But now, with zeppelin_OS, everyone can build a standard library that can be linked to a project that is using zeppelin_OS and everyone can use the same source code.</p><p>Say goodbye to all those deploy-time issues ;)</p><p>We use many small helper libraries: e.g. to do tricky things like testing low level calls, crafted transactions where you need to specify very small things to do with the data as an array of byte or whatever. Truffle provides no friendly way to do this, so you have to start playing with buffers of bytes and hashes and all sorts of nonsense.</p><p>Ethereumjs-abi, ethereumjs-utils etc.</p><p>Web3 is a great library. It&rsquo;s very simple, though it&rsquo;s been a long time that they have been promising a stable 1.0 version.</p><p>MetaMask is also really useful - makes life easier in so many ways.</p><p>We use both geth and parity as we have our own nodes to test things.</p><p>Remix is really cool and it works really well. I encourage people to use it and look forward to new releases from them.</p><p>Sharing sets/suites of contracts easily can be improved.</p>",
            "keywords": [
                "zeppelin",
                "ethereumjs",
                "gas",
                "library",
                "event",
                "issue",
                "network",
                "transaction",
                "dapp",
                "remix",
                "deploy",
                "test",
                "log",
                "truffle",
                "smart_contract",
                "metamask",
                "contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>We use Travis CI.</p><p>Coverall for coverage tests, also for solidity coverage using solcoverage as a plugin. Super useful to us.</p><p>Write plain mocha tests (integration and unit) and we aim for 100% coverage always.</p><p>When working on DApps we usually have standard paths to test how the UI works.</p><p>This is another developer tool that is missing: a tool to test UIs when signing transactions.</p>",
            "keywords": [
                "ui",
                "ci",
                "transaction",
                "developer",
                "dapp",
                "integration",
                "test"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>For governance:</p><p>We are still exploring which models are better for upgradeability. How to take into account the community, dev team, investors etc. We need a governance pattern that works specifically for upgradeability decisions, which tend to be more focussed than larger governance questions and might lend themselves to specific, narrow mechanisms.</p><p>It may be possible to modify the way the compiler maps state variable to storage, so that we can allow people to implement similar patterns to ours without all the inline assembly stuff. Might make a nice bounty - improving the compiler in general to allow new features specifically in terms of what you can do with the EVM.</p><p>Having a scheduler implies huge gas costs, so we need to find scheduling mechanisms that will allow the community to run transactions in a feature for you and be rewarded with tokens or Eth or whatever. (see chronologic for this kind of stuff too)</p><p>We are trying to see if there is anyway to use TCRs and token curation markets in order to handle on chain standard libraries and upgradeability too. The idea behind zeppelin OS is to encourage other teams to build their own on chain standard libraries and provide them through zeppelin OS to be used in other projects. We would love to see the community come forward with suggestions about how this could be best managed.</p>",
            "keywords": [
                "governance",
                "evm",
                "decision",
                "investor",
                "transaction",
                "compiler",
                "gas_cost",
                "library",
                "bounty",
                "upgradeability",
                "token",
                "scheduler",
                "community"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "100": {
        "name": "Manuel Araoz",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Open Zeppelin: open source smart contract framework</p><p>Currently working on building web app</p><p>On chain libraries with upgradability</p><p>Contract interaction</p><p>Marketplace</p><p>Scheduler for asynchronous execution.</p>",
            "keywords": [
                "contract",
                "library",
                "open_source",
                "scheduler",
                "smart_contract",
                "open",
                "zeppelin"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Use the truffle toolkit the entire way. Truffle for testing.</p><p>Publish on npm for users to use open zeppelin.</p><p>One of the first to try ethpm.</p><p>It was super buggy with IPFS errors and it couldn&rsquo;t find the resources and stuff</p>",
            "keywords": [
                "resource",
                "ethpm",
                "error",
                "ipfs"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Truffle automated testing with javascript unit tests</p><p>Migrated to async/await style of tests</p><p>Mocha, Chai</p><p>Onchain bug bounties for finding implementation bugs.</p>",
            "keywords": [
                "test",
                "bounty",
                "chai"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>We design first then develop.</p><p>Sometimes they see other teams mix these two phases.</p><p>This is bad, because you can break your assumptions in nuanced ways..</p>",
            "keywords": [
                "design",
                "assumption"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Upgradability</p><p>We&rsquo;re going to build an upgradable library, for the most used kinds of contracts. So that you can just use the library and it will be an upgradable form[a].</p><p>Upgradability requires governance mechanisms though, and these are more difficult to figure out, as it is not just about code.</p><p>We are not working on debugging, but would love to see someone solve it</p><p>We use the truffle debugger but it&rsquo;s not covering all their needs</p><p>Remix is good, but we would rather not use the web UI.</p><p>Better tools for deploying and managing contracts on the blockchain</p><p>We&rsquo;re building this (John & Marcus)</p><p>Tools to replay past transactions</p><p>E.g. for historical testing of upgrades.. replaying transactions from previous versions and making sure they don&rsquo;t break.</p><p>Stress-testing cryptoeconomic system: we only really do human analysis now.</p><p>Better tools &ndash; like simulations of the mechanism design to prevent game theoretic problems &ndash; would be cool. This can be a bounty[b].</p>",
            "keywords": [
                "ui",
                "governance",
                "library",
                "transaction",
                "analysis",
                "cryptoeconomic",
                "bounty",
                "deploy",
                "test",
                "blockchain",
                "contract"
            ]
        }
    },
    "101": {
        "name": "Brendan Chou",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>On chain derivatives for erc-20 tokens</p><p>Open sourcing their code in next week or two</p><p>Only smart contracts protocol so far, no UX/Dapps</p>",
            "keywords": [
                "protocol",
                "dapp",
                "token",
                "smart_contract",
                "open"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Remix for smart contracts</p><p>Writing Javascript tests</p><p>Truffle for compiling and test, NPM to manage packages,</p><p>SolCoverage</p>",
            "keywords": [
                "solcoverage",
                "javascript",
                "remix",
                "test",
                "smart_contract"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>Mocha, js unit tests on Truffle</p>",
            "keywords": [
                "mocha"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "",
            "keywords": []
        }
    },
    "102": {
        "name": "Lane Rettig",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>Core developer for EWASM, but independent and works on a grant.</p><p>Doing a lot of governance-related stuff lately, EIP0, Fellowship of Ethereum Magicians</p><p>Runs a blockchain community and coworking space in NY called Crypto NYC (www.cryptonyc.org)</p><p>New project called Odin Protocol, an open data marketplace</p>",
            "keywords": [
                "eip",
                "governance",
                "coworking",
                "odin",
                "independent",
                "protocol",
                "ewasm",
                "developer",
                "crypto",
                "ethereum",
                "community",
                "blockchain",
                "open"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Use vim, tmux and work way down in the protocols - no web3 etc.</p><p>Lots and lots of helpful vim plugins: various language syntax plugins, version control, etc.</p><p>Writing web assembly itself (tests), Javascript and some C++: evm2wasm transpiler that can maintain backwards compatibility.</p>",
            "keywords": [
                "vim",
                "wasm",
                "evm",
                "protocol",
                "javascript",
                "test"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "",
            "keywords": []
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "",
            "keywords": []
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "",
            "keywords": []
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Working on evm2wasm in JS - we need to be able to run all the tests using the new WASM infrastructure. I want something like a CI on my local machine, make a change, save the file and see whether the tests are passing or failing. Hot reloading for the whole test suite kind of thing. Local test harness that just works.</p>",
            "keywords": [
                "wasm",
                "evm",
                "ci",
                "js",
                "test",
                "infrastructure"
            ]
        }
    },
    "103": {
        "name": "Kames",
        "who_what": {
            "question": "Who are you and what are you working on?",
            "answer": "<p>I am working on uPort as a community a manager. The primary role is basically discovering how to empower developers to use uPort. uPort is a decentralized identity system.</p><p> Getting developers to understand how to implement this in the front-end environment, get people that are not used to Ethereum to understand this</p><p>Ask the right questions to get people thinking about this</p>",
            "keywords": [
                "developer",
                "identity",
                "ethereum",
                "community",
                "uport",
                "decentralized"
            ]
        },
        "tooling": {
            "question": "What are the tools/libraries/frameworks you use?",
            "answer": "<p>Eth.js, we use Nick Dodson&rsquo;s stuff. Inject web3js, but use more of the lightweight stuff for internal requirements. We use Truffle for tests. For the Buidlbox project, we use React-Redux. Mobile app is all react-native. Use React/redux everywhere, React sagas.</p><p>Use IPFS, use Infura. New spec puts us on IPFS, before we were just on Ethereum but this cost too much. Introduced IPFS to help with this, but it&rsquo;s a bottleneck point.</p>",
            "keywords": [
                "ipfs",
                "react",
                "ethereum",
                "cost",
                "react_native",
                "test",
                "redux",
                "spec"
            ]
        },
        "testing": {
            "question": "How do you handle testing?",
            "answer": "<p>We run a lot of unit tests on the JavaScript, but don&rsquo;t do enough testing right now. For smart contracts, reach out internally at Consensys. But not baked out process. Could use a better audit process.</p><p>Could use a better audit tool. Can test smart contracts at a code level, formal verification but haven&rsquo;t researched this.</p>",
            "keywords": [
                "consensy",
                "research",
                "test",
                "formal_verification",
                "smart_contract"
            ]
        },
        "smart_contract": {
            "question": "How do you handle smart contract verif & security?",
            "answer": "<p>The mainnet launch was very minimal. Using segregated accounts in uPort app, use proxy contracts that have been around like a year. These went through formal verification a while ago. We were confident with putting them on mainnet. Switching up in the future how we handle it.</p><p>Had them audited by Consensys internally, possibly by the diligence group.</p><p>Getting away from smart contracts, looking at a different identity protocol layer. If uPort was continuing in smart contracts  upgradeability via smart contracts (ZeppelinOS) would be interesting.</p><p>Deprecating our smart contracts, but using ether-did (decentralization identity). Just need a private key and a public key, so don&rsquo;t need a smart contract. Etherdid registry is a smart contract, but smart contracts are not the core protocol any more.</p>",
            "keywords": [
                "consensy",
                "protocol",
                "identity",
                "upgradeability",
                "audit",
                "formal_verification",
                "uport",
                "smart_contract",
                "contract"
            ]
        },
        "bounties": {
            "question": "Other bounties?",
            "answer": "<p>Education platform that is not focused on a business model. Loom is doing a fantastic job of educating people, but it&rsquo;s a business. A great general education source that is not leading to some business. Online university or online education center would be fantastic.</p><p>Better UI/UX, thinking about this next layer. Get product people, designers, etc. involved. A Material design for dApps.</p>",
            "keywords": [
                "design",
                "platform",
                "dapp"
            ]
        },
        "missing_tools": {
            "question": "What tools don’t exist at the moment?",
            "answer": "<p>Drag and drop website builder for dApps, I&rsquo;m working on this. Product people are not able to prototype the user experience is very detrimental to the long term growth of the ecosystem</p><p>Need tools that enable quick validation in the real world. Need better prototyping</p><p>Design systems, design patterns, how to handle long transaction times. New thinking in this regard.</p>",
            "keywords": [
                "design",
                "dapp"
            ]
        }
    }
}

const Questions = [
    { id: 'smart_contract', text: 'How do you handle smart contract verification and security?' },
    { id: 'bounties', text: 'Other bounties?' },
    { id: 'who_what', text: 'Who are you and what are you working on?' },
    { id: 'tooling', text: 'What are the tools/libraries/frameworks you use?' },
    { id: 'frustrations', text: 'What are your biggest frustrations?' },
    { id: 'testing', text: 'How do you handle testing?' },
    { id: 'missing_tools', text: 'What tools don’t exist at the moment?' },
    { id: 'domain', text: 'Other domain specific questions?' },
    { id: 'ethereum', text: 'What was the hardest part about learning to develop with Ethereum?' },
    { id: 'short_term', text: 'What are you most excited about in the short term?' },
    { id: 'ease', text: 'Was anything easier than expected?' },
    { id: 'other_people', text: 'Who are the other people you think we should talk to?' },
    { id: 'resources', text: 'What are the best educational resources?' },
    { id: 'other_questions', text: 'Are there any other questions we should be asking?' }
]

module.exports = {
    InterviewData,
    Questions
}
