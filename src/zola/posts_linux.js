import { reactive } from 'vue';

export const posts = reactive([

{
  slug: "quickemu",
  title: "Quickemu",
  date: "2023-11-05",
  description: "Replace Oracle Virtualbox by QuickEmu",
  content: `<p>Use Quickemu in order to replace Virtualbox.</p><br><pre data-lang="sh" class="language-sh "><code class="language-sh" data-lang="sh">pacman -S quickemu<br></code></pre><br><p>To downloads the iso for voidlinux:</p><br><pre data-lang="sh" class="language-sh "><code class="language-sh" data-lang="sh">quickemu &lt;arg&gt;<br></code></pre><br>`,
},

])
