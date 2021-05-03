(self.webpackChunksubql_mono=self.webpackChunksubql_mono||[]).push([[200],{8775:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-017790b0",path:"/create/manifest.html",title:"Manifest File",lang:"English",frontmatter:{},excerpt:"",headers:[{level:2,title:"Network Filters",slug:"network-filters",children:[]},{level:2,title:"Mapping Filters",slug:"mapping-filters",children:[]}],filePathRelative:"create/manifest.md",git:{updatedTime:162007954e4,contributors:[]}}},1469:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>m});var e=a(6252);const t=(0,e.uE)('<h1 id="manifest-file"><a class="header-anchor" href="#manifest-file">#</a> Manifest File</h1><p>The Manifest <code>project.yaml</code> can be seen as an entry point of your project, it defines most of the deetails on how SubQuery will index and transform chain data.</p><p>The Manifest can be in either YAML or JSON format - in this document we will use YAML in all examples.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">specVersion</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.1&quot;</span>\n<span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;This subquery indexes kitty&#39;s birth info&quot;</span>\n<span class="token key atrule">repository</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/onfinality-io/subql-examples&quot;</span>\n<span class="token key atrule">schema</span><span class="token punctuation">:</span> <span class="token string">&quot;./schema.graphql&quot;</span>\n<span class="token key atrule">network</span><span class="token punctuation">:</span>\n  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> <span class="token string">&quot;ws://host.kittychain.io/public-ws&quot;</span>\n  <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token key atrule">&quot;KittyIndex&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;u32&quot;</span><span class="token punctuation">,</span>\n    <span class="token key atrule">&quot;Kitty&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;[u8; 16]&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token comment"># typesChain: { chain: { Type5: &#39;example&#39; } }</span>\n<span class="token comment"># typesSpec: { spec: { Type6: &#39;example&#39; } }</span>\n<span class="token key atrule">dataSources</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> runtime\n    <span class="token key atrule">kind</span><span class="token punctuation">:</span> substrate/Runtime\n    <span class="token key atrule">startBlock</span><span class="token punctuation">:</span> <span class="token number">1</span>\n    <span class="token key atrule">filter</span><span class="token punctuation">:</span>  <span class="token comment">#Optional</span>\n      <span class="token key atrule">specName</span><span class="token punctuation">:</span> kitty<span class="token punctuation">-</span>chain \n    <span class="token key atrule">mapping</span><span class="token punctuation">:</span>\n      <span class="token key atrule">handlers</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">handler</span><span class="token punctuation">:</span> handleKittyBred\n          <span class="token key atrule">kind</span><span class="token punctuation">:</span> substrate/CallHandler\n          <span class="token key atrule">filter</span><span class="token punctuation">:</span>\n            <span class="token key atrule">module</span><span class="token punctuation">:</span> kitties\n            <span class="token key atrule">method</span><span class="token punctuation">:</span> breed\n            <span class="token key atrule">success</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li><code>specVersion</code> indicates which version of this API is being used.</li><li><code>schema</code> points to the GraphQL schema file of this SubQuery (you shouldn&#39;t need to change this).</li><li><code>network.endpoint</code> defines the wss or ws endpoint of the blockchain to be indexed.</li><li><code>network.types</code> declare the specific types supported by this blockchain. We support the additional types used by substrate runtime modules. <ul><li><code>typesAlias</code>, <code>typesBundle</code>, <code>typesChain</code>, and <code>typesSpec</code> are supported.</li></ul></li><li><code>dataSources</code> defines the data will be filtered and extracted and the location of the mapping function handler for the data transformation to be applied. <ul><li><code>kind</code> only supports <code>substrate/Runtime</code> for now.</li><li><code>startBlock</code> specifies the block height to start indexing from.</li><li><code>filter</code> will filter the data source to execute by the network endpoint spec name, see <a href="#network-filters">network filters</a></li><li><code>mapping.handlers</code> will list all the <a href="/create/mapping">mapping functions</a> and their corresponding handler types, with additional <a href="#mapping-filters">mapping filters</a>.</li></ul></li></ul><h2 id="network-filters"><a class="header-anchor" href="#network-filters">#</a> Network Filters</h2><p>Commonly, the user will create a SubQuery and expect to reuse it for both their testnet and mainnet (e.g Polkadot and Kusama). Between networks, various options are likely to vary (e.g. index start block). Therefore, we allow users to define different details for each data source so one SubQuery project can still be used across multiple networks.</p><p>Users can add a <code>filter</code> on <code>dataSources</code> to decide which data source to run on the each network.</p><p>Below is an example that shows different data sources for both Polkadot and Kusama networks.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">...</span>\n<span class="token key atrule">network</span><span class="token punctuation">:</span>\n  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> <span class="token string">&quot;wss://polkadot.api.onfinality.io/public-ws&quot;</span>\n\n<span class="token comment">#Create a template to avoid redundancy</span>\n<span class="token key atrule">definitions</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">mapping</span><span class="token punctuation">:</span> <span class="token important">&amp;mymapping</span>\n       <span class="token key atrule">handlers</span><span class="token punctuation">:</span>\n         <span class="token punctuation">-</span> <span class="token key atrule">handler</span><span class="token punctuation">:</span> handleBlock\n           <span class="token key atrule">kind</span><span class="token punctuation">:</span> substrate/BlockHandler\n\n<span class="token key atrule">dataSources</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> polkadotRuntime\n    <span class="token key atrule">kind</span><span class="token punctuation">:</span> substrate/Runtime\n    <span class="token key atrule">filter</span><span class="token punctuation">:</span>  <span class="token comment">#Optional</span>\n        <span class="token key atrule">specName</span><span class="token punctuation">:</span> polkadot\n    <span class="token key atrule">startBlock</span><span class="token punctuation">:</span> <span class="token number">1000</span>\n    <span class="token key atrule">mapping</span><span class="token punctuation">:</span> <span class="token important">*polkadot-mapping</span> <span class="token comment">#use template here</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kusamaRuntime\n    <span class="token key atrule">kind</span><span class="token punctuation">:</span> substrate/Runtime\n    <span class="token key atrule">filter</span><span class="token punctuation">:</span> \n        <span class="token key atrule">specName</span><span class="token punctuation">:</span> kusama\n    <span class="token key atrule">startBlock</span><span class="token punctuation">:</span> <span class="token number">12000</span> \n    <span class="token key atrule">mapping</span><span class="token punctuation">:</span> <span class="token important">*kusmama-mapping</span> <span class="token comment"># can reuse or change</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="mapping-filters"><a class="header-anchor" href="#mapping-filters">#</a> Mapping Filters</h2><p>Mapping filters are a extremely useful feature to decide what block, event, or extrinsic will trigger a mapping handler.</p><p>Only incoming data that statisfy the filter conditions will be processed by mapping functions. Mapping filters are optional, but are recommended as they significantly reduce the amount of data processed by your SubQuery project and will improve indexing performance.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#Example filter from callHandler</span>\n<span class="token key atrule">filter</span><span class="token punctuation">:</span> \n   <span class="token key atrule">module</span><span class="token punctuation">:</span> balances\n   <span class="token key atrule">method</span><span class="token punctuation">:</span> Deposit\n   <span class="token key atrule">success</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Following table explain filters supported by different handlers.</p>',15),p=(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",null,"Handler"),(0,e.Wm)("th",null,"Supported filter")])],-1),l=(0,e.Uk)("BlockHandler"),o=(0,e.Wm)("td",null,[(0,e.Wm)("code",null,"specVersion")],-1),c=(0,e.Uk)("EventHandler"),i=(0,e.Wm)("td",null,[(0,e.Wm)("code",null,"module"),(0,e.Uk)(","),(0,e.Wm)("code",null,"method")],-1),r=(0,e.Uk)("CallHandler"),u=(0,e.Wm)("td",null,[(0,e.Wm)("code",null,"module"),(0,e.Uk)(","),(0,e.Wm)("code",null,"method"),(0,e.Uk)(" ,"),(0,e.Wm)("code",null,"success")],-1),k=(0,e.uE)('<ul><li>Module and method filter are supported to any substrate based chain.</li><li>The <code>success</code> filter takes a boolean value, and can use to filtering the extrinsic by its success status.</li><li>The <code>specVersion</code> filter specifies the spec version range for substrate block. The following examples describe how to set version ranges.</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">filter</span><span class="token punctuation">:</span>\n  <span class="token key atrule">specVersion</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>   <span class="token comment">#Index block with specVersion in between 23 and 24 (inclusive).</span>\n  <span class="token key atrule">specVersion</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span>      <span class="token comment">#Index block with specVersion greater than or equal 100.</span>\n  <span class="token key atrule">specVersion</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token null important">null</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">]</span> <span class="token comment">#Index block with specVersion less than or equal 23.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),m={render:function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("table",null,[p,(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("td",null,[(0,e.Wm)(a,{to:"/create/mapping.html#block-handler"},{default:(0,e.w5)((()=>[l])),_:1})]),o]),(0,e.Wm)("tr",null,[(0,e.Wm)("td",null,[(0,e.Wm)(a,{to:"/create/mapping.html#event-handler"},{default:(0,e.w5)((()=>[c])),_:1})]),i]),(0,e.Wm)("tr",null,[(0,e.Wm)("td",null,[(0,e.Wm)(a,{to:"/create/mapping.html#call-handler"},{default:(0,e.w5)((()=>[r])),_:1})]),u])])]),k],64)}}}}]);