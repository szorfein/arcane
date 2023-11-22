import { reactive } from 'vue';
export const posts = reactive([

{ title: "linux" },
{ posts: [

{
slug: "ssh-hardening",
title: "Ssh hardening",
date: "2023-11-17",
tags: "security",
description: "Enhance security of SSH by configuring it.",
content: `<h2 id="create-a-new-group">Create a new group</h2><br><p>To fine tunning ssh, we only want to allow few local users to use ssh.</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">groupadd</span><span> ssh-user<br></span><span style="color:#50fa7b;">usermod</span><span style="font-style:italic;color:#ffb86c;"> -a -G</span><span> ssh-user </span><span style="color:#ff79c6;">&lt;</span><span>username</span><span style="color:#ff79c6;">&gt;<br></span></code></pre><br><h2 id="sshd-config">sshd_config</h2><br><p>Edit file /etc/ssh/sshd_config</p><br><pre data-lang="config" style="background-color:#282a36;color:#f8f8f2;" class="language-config "><code class="language-config" data-lang="config"><span style="font-style:italic;color:#ffb86c;">HostKey </span><span style="color:#ff79c6;">/</span><span>etc</span><span style="color:#ff79c6;">/</span><span>ssh</span><span style="color:#ff79c6;">/</span><span>ssh_host_ed25519_key<br></span><span style="font-style:italic;color:#ffb86c;">HostKey </span><span style="color:#ff79c6;">/</span><span>etc</span><span style="color:#ff79c6;">/</span><span>ssh</span><span style="color:#ff79c6;">/</span><span>ssh_host_rsa_key<br></span><span><br></span><span style="font-style:italic;color:#ffb86c;">AllowGroups </span><span>ssh</span><span style="color:#ff79c6;">-</span><span>user<br></span></code></pre><br><p>Options recommended by the audit tool lynis.</p><br><pre data-lang="config" style="background-color:#282a36;color:#f8f8f2;" class="language-config "><code class="language-config" data-lang="config"><span style="font-style:italic;color:#ffb86c;">ClientAliveCountMax </span><span style="color:#bd93f9;">2<br></span><span style="font-style:italic;color:#ffb86c;">ClientAliveInternal </span><span style="color:#bd93f9;">0<br></span><span style="font-style:italic;color:#ffb86c;">FingerprintHash </span><span>sha256 </span><span style="color:#6272a4;"># default<br></span><span style="font-style:italic;color:#ffb86c;">LoginGraceTime </span><span style="color:#bd93f9;">120 </span><span style="color:#6272a4;"># default<br></span><span style="font-style:italic;color:#ffb86c;">LogLevel </span><span style="color:#6be5fd;">VERBOSE<br></span><span style="font-style:italic;color:#ffb86c;">MaxAuthTries </span><span style="color:#bd93f9;">3<br></span><span style="font-style:italic;color:#ffb86c;">MaxSessions </span><span style="color:#bd93f9;">2<br></span></code></pre><br><p>Few things to disable.</p><br><pre data-lang="config" style="background-color:#282a36;color:#f8f8f2;" class="language-config "><code class="language-config" data-lang="config"><span style="font-style:italic;color:#ffb86c;">AllowAgentForwarding </span><span style="color:#bd93f9;">no<br></span><span style="font-style:italic;color:#ffb86c;">AllowTcpForwarding </span><span style="color:#bd93f9;">no<br></span><span style="font-style:italic;color:#ffb86c;">GatewayPorts </span><span style="color:#bd93f9;">no </span><span style="color:#6272a4;"># default<br></span><span style="font-style:italic;color:#ffb86c;">HostbasedAuthentication </span><span style="color:#bd93f9;">no<br></span><span style="font-style:italic;color:#ffb86c;">PermitRootLogin </span><span style="color:#bd93f9;">no<br></span><span style="font-style:italic;color:#ffb86c;">PermitUserEnvironment </span><span style="color:#bd93f9;">no </span><span style="color:#6272a4;"># default<br></span><span style="font-style:italic;color:#ffb86c;">PermitTunnel </span><span style="color:#bd93f9;">no </span><span style="color:#6272a4;"># default<br></span><span style="font-style:italic;color:#ffb86c;">TCPKeepAlive </span><span style="color:#bd93f9;">no<br></span><span style="font-style:italic;color:#ffb86c;">X11Forwarding </span><span style="color:#bd93f9;">no </span><span style="color:#6272a4;"># default<br></span></code></pre><br><p>Force to use only strong algorithms.</p><br><pre data-lang="config" style="background-color:#282a36;color:#f8f8f2;" class="language-config "><code class="language-config" data-lang="config"><span style="font-style:italic;color:#ffb86c;">KexAlgorithms </span><span>curve25519</span><span style="color:#ff79c6;">-</span><span>sha256</span><span style="color:#ff79c6;">@libssh.</span><span>org</span><span style="color:#ff79c6;">,</span><span>diffie</span><span style="color:#ff79c6;">-</span><span>hellman</span><span style="color:#ff79c6;">-</span><span>group</span><span style="color:#ff79c6;">-</span><span>exchange</span><span style="color:#ff79c6;">-</span><span>sha256<br></span><span style="font-style:italic;color:#ffb86c;">Ciphers </span><span>chacha20</span><span style="color:#ff79c6;">-</span><span>poly1305</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes256</span><span style="color:#ff79c6;">-</span><span>gcm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes128</span><span style="color:#ff79c6;">-</span><span>gcm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes256</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes192</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes128</span><span style="color:#ff79c6;">-</span><span>ctr<br></span><span style="font-style:italic;color:#ffb86c;">MACs </span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">256</span><span style="color:#ff79c6;">-</span><span>etm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">512</span><span style="color:#ff79c6;">-</span><span>etm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>umac</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">128</span><span style="color:#ff79c6;">-</span><span>etm</span><span style="color:#ff79c6;">@openssh.</span><span>com<br></span><span style="font-style:italic;color:#ffb86c;">HostKeyAlgorithms </span><span>ssh</span><span style="color:#ff79c6;">-</span><span>ed25519</span><span style="color:#ff79c6;">-</span><span>cert</span><span style="color:#ff79c6;">-</span><span>v01</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>ssh</span><span style="color:#ff79c6;">-</span><span>rsa</span><span style="color:#ff79c6;">-</span><span>cert</span><span style="color:#ff79c6;">-</span><span>v01</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>ssh</span><span style="color:#ff79c6;">-</span><span>ed25519</span><span style="color:#ff79c6;">,</span><span>ssh</span><span style="color:#ff79c6;">-</span><span>rsa<br></span></code></pre><br><h2 id="ssh-config">ssh_config</h2><br><p>Edit file /etc/ssh/ssh_config. Options for Github.</p><br><pre data-lang="config" style="background-color:#282a36;color:#f8f8f2;" class="language-config "><code class="language-config" data-lang="config"><span style="font-style:italic;color:#ffb86c;">Host </span><span>github</span><span style="color:#ff79c6;">.</span><span>com<br></span><span>  </span><span style="font-style:italic;color:#ffb86c;">KexAlgorithms </span><span>curve25519</span><span style="color:#ff79c6;">-</span><span>sha256</span><span style="color:#ff79c6;">@libssh.</span><span>org</span><span style="color:#ff79c6;">,</span><span>ecdh</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span>nistp256</span><span style="color:#ff79c6;">,</span><span>ecdh</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span>nistp384</span><span style="color:#ff79c6;">,</span><span>ecdh</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span>nistp521<br></span><span>  </span><span style="font-style:italic;color:#ffb86c;">Ciphers </span><span>chacha20</span><span style="color:#ff79c6;">-</span><span>poly1305</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes256</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes192</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes128</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes256</span><span style="color:#ff79c6;">-</span><span>cbc</span><span style="color:#ff79c6;">,</span><span>aes192</span><span style="color:#ff79c6;">-</span><span>cbc</span><span style="color:#ff79c6;">,</span><span>aes128</span><span style="color:#ff79c6;">-</span><span>cbc<br></span><span>  </span><span style="font-style:italic;color:#ffb86c;">MACs </span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">256</span><span style="color:#ff79c6;">,</span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">512</span><span style="color:#ff79c6;">,</span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha1<br></span></code></pre><br><p>Tell ssh to use only algorithms supported by our server.</p><br><pre data-lang="config" style="background-color:#282a36;color:#f8f8f2;" class="language-config "><code class="language-config" data-lang="config"><span style="font-style:italic;color:#ffb86c;">Host </span><span style="color:#ff79c6;">*<br></span><span>  </span><span style="font-style:italic;color:#ffb86c;">HostKeyAlgorithms </span><span>ssh</span><span style="color:#ff79c6;">-</span><span>ed25519</span><span style="color:#ff79c6;">-</span><span>cert</span><span style="color:#ff79c6;">-</span><span>v01</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>ssh</span><span style="color:#ff79c6;">-</span><span>rsa</span><span style="color:#ff79c6;">-</span><span>cert</span><span style="color:#ff79c6;">-</span><span>v01</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>ssh</span><span style="color:#ff79c6;">-</span><span>ed25519</span><span style="color:#ff79c6;">,</span><span>ssh</span><span style="color:#ff79c6;">-</span><span>rsa<br></span><span>  </span><span style="font-style:italic;color:#ffb86c;">Ciphers </span><span>chacha20</span><span style="color:#ff79c6;">-</span><span>poly1305</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes256</span><span style="color:#ff79c6;">-</span><span>gcm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes128</span><span style="color:#ff79c6;">-</span><span>gcm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>aes256</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes192</span><span style="color:#ff79c6;">-</span><span>ctr</span><span style="color:#ff79c6;">,</span><span>aes128</span><span style="color:#ff79c6;">-</span><span>ctr<br></span><span>  </span><span style="font-style:italic;color:#ffb86c;">MACs </span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">256</span><span style="color:#ff79c6;">-</span><span>etm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>hmac</span><span style="color:#ff79c6;">-</span><span>sha2</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">512</span><span style="color:#ff79c6;">-</span><span>etm</span><span style="color:#ff79c6;">@openssh.</span><span>com</span><span style="color:#ff79c6;">,</span><span>umac</span><span style="color:#ff79c6;">-</span><span style="color:#bd93f9;">128</span><span style="color:#ff79c6;">-</span><span>etm</span><span style="color:#ff79c6;">@openssh.</span><span>com<br></span></code></pre><br><h2 id="create-keys">Create keys</h2><br><p>Server side, we generate new keypair. Also delete poor keypair present like <code>/etc/ssh/ssh_host_ecdsa_key</code>:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#8be9fd;">cd</span><span> /etc/ssh<br></span><span style="color:#50fa7b;">rm</span><span> ssh_host_</span><span style="color:#ff79c6;">*</span><span>key</span><span style="color:#ff79c6;">*<br></span><span style="color:#50fa7b;">ssh-keygen</span><span style="font-style:italic;color:#ffb86c;"> -t</span><span> ed25519</span><span style="font-style:italic;color:#ffb86c;"> -f</span><span> ssh_host_ed25519_key</span><span style="font-style:italic;color:#ffb86c;"> -N </span><span style="color:#f1fa8c;">&quot;&quot; </span><span style="color:#ff79c6;">&lt;</span><span> /dev/null<br></span><span style="color:#50fa7b;">ssh-keygen</span><span style="font-style:italic;color:#ffb86c;"> -t</span><span> rsa</span><span style="font-style:italic;color:#ffb86c;"> -b</span><span> 4096</span><span style="font-style:italic;color:#ffb86c;"> -f</span><span> ssh_host_rsa_key</span><span style="font-style:italic;color:#ffb86c;"> -N </span><span style="color:#f1fa8c;">&quot;&quot; </span><span style="color:#ff79c6;">&lt;</span><span> /dev/null<br></span></code></pre><br><p>On Client:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">ssh-keygen</span><span style="font-style:italic;color:#ffb86c;"> -t</span><span> ed25519</span><span style="font-style:italic;color:#ffb86c;"> -o -a</span><span> 100<br></span><span style="color:#50fa7b;">ssh-keygen</span><span style="font-style:italic;color:#ffb86c;"> -t</span><span> rsa</span><span style="font-style:italic;color:#ffb86c;"> -b</span><span> 4096</span><span style="font-style:italic;color:#ffb86c;"> -o -a</span><span> 100<br></span></code></pre><br><h4 id="references">References</h4><br><ul><br><li>https://blog.stribik.technology/2015/01/04/secure-secure-shell.html</li><br><li>https://cisofy.com/documentation/lynis/</li><br><li>man sshd_config</li><br><li>man ssh_config</li><br></ul><br>`,
},

{
slug: "git-workflow",
title: "Git Workflow",
date: "2023-11-10",
tags: "git",
description: "Optimise your git workflow.",
content: `<p>This workflow work mainly on 2 branches:</p><br><ul><br><li><code>main</code></li><br><li><code>devel</code></li><br></ul><br><h1 id="start-a-project">Start a project</h1><br><p>The branch <code>main</code> contain only stable code, kind of <code>production</code> version.<br><code>devel</code> contain all the future works/stuff/feature planned, but not yet fully tested.</p><br><p>Start by create the <code>devel</code> branch on your repository:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout</span><span style="font-style:italic;color:#ffb86c;"> -b</span><span> devel<br></span><span style="color:#50fa7b;">git</span><span> push origin devel<br></span></code></pre><br><p>You can call this branche: dev, develop or anything you want.</p><br><h1 id="features">Features</h1><br><p>Features are added into the <code>devel</code> branch</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout</span><span style="font-style:italic;color:#ffb86c;"> -b</span><span> colorscheme devel<br></span><span style="color:#50fa7b;">...wrote</span><span> code to build your feature...<br></span></code></pre><br><p>Once time terminated, create a commit:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> commit</span><span style="font-style:italic;color:#ffb86c;"> -a -S -m </span><span style="color:#f1fa8c;">&quot;new colorscheme done&quot;<br></span></code></pre><br><p>If we have other commit/work to do, push the feature branch:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> push origin colorscheme<br></span></code></pre><br><p>When you have done all the features, merge them to the <code>devel</code> branch:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout devel<br></span><span style="color:#50fa7b;">git</span><span> merge colorscheme </span><span style="color:#6272a4;"># only for little commit (less than 5 lines)<br></span><span style="color:#50fa7b;">git</span><span> merge</span><span style="font-style:italic;color:#ffb86c;"> --no-ff</span><span> colorscheme<br></span></code></pre><br><p>Destroy the branch if you have done, keep if not sure.</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> branch</span><span style="font-style:italic;color:#ffb86c;"> -d</span><span> colorscheme<br></span><span style="color:#50fa7b;">git</span><span> push origin</span><span style="font-style:italic;color:#ffb86c;"> -d</span><span> colorscheme </span><span style="color:#6272a4;"># remove the branch on github<br></span><span style="color:#50fa7b;">git</span><span> push origin devel<br></span></code></pre><br><p>When all features are finish, create a release !</p><br><h1 id="release">Release</h1><br><p>Release are started into the <code>devel</code> branch:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout</span><span style="font-style:italic;color:#ffb86c;"> -b</span><span> release-1.2 devel<br></span><span style="color:#50fa7b;">git</span><span> commit</span><span style="font-style:italic;color:#ffb86c;"> -a -S -m </span><span style="color:#f1fa8c;">&quot;version 1.2&quot;<br></span></code></pre><br><p>If we have other commit/work on the branch, push on github</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> push origin release-1.2<br></span></code></pre><br><p>When finished, merge it into 'Main' and 'Develop'</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout main<br></span><span style="color:#50fa7b;">git</span><span> merge</span><span style="font-style:italic;color:#ffb86c;"> --no-ff</span><span> release-1.2<br></span><span style="color:#50fa7b;">git</span><span> tag</span><span style="font-style:italic;color:#ffb86c;"> -a -s -m </span><span style="color:#f1fa8c;">&quot;Release v1.2 - September 2022&quot;</span><span> 1.2<br></span></code></pre><br><p>For the release message (in Github) example:</p><br><pre data-lang="markdown" style="background-color:#282a36;color:#f8f8f2;" class="language-markdown "><code class="language-markdown" data-lang="markdown"><span>September 2022 - v1.2<br></span><span><br></span><span style="color:#8be9fd;">### Notable changes<br></span><span style="color:#ff79c6;">* </span><span>Most important change from the changelog<br></span><span style="color:#ff79c6;">*</span><span> Second important change from the changelog<br></span><span><br></span><span>[All Changes](</span><span style="text-decoration:underline;color:#bd93f9;">https://github.com/szorfein/spior/blob/master/CHANGELOG.md</span><span>)<br></span></code></pre><br><p>To delete a tag:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> tag</span><span style="font-style:italic;color:#ffb86c;"> -d</span><span> X<br></span><span style="color:#50fa7b;">git</span><span> fetch origin tag X<br></span></code></pre><br><p>Merge into devel</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout devel<br></span><span style="color:#50fa7b;">git</span><span> merge</span><span style="font-style:italic;color:#ffb86c;"> --no-ff</span><span> release-1.2<br></span></code></pre><br><p>Delete the release</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> branch</span><span style="font-style:italic;color:#ffb86c;"> -d</span><span> release-1.2<br></span></code></pre><br><p>And push all the release and tag to your git repository:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> push origin</span><span style="font-style:italic;color:#ffb86c;"> --all<br></span><span style="color:#50fa7b;">git</span><span> push origin</span><span style="font-style:italic;color:#ffb86c;"> --tags<br></span></code></pre><br><p>Or more manually if you have a lot of private branches:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> push origin devel<br></span><span style="color:#50fa7b;">git</span><span> checkout main<br></span><span style="color:#50fa7b;">git</span><span> push origin main<br></span><span style="color:#50fa7b;">git</span><span> push origin 1.2 </span><span style="color:#6272a4;"># the tag<br></span></code></pre><br><p>Push the tag: https://git-scm.com/book/en/v2/Git-Basics-Tagging</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> tag<br></span><span style="color:#50fa7b;">git</span><span> show 1.2<br></span><span style="color:#50fa7b;">git</span><span> push origin 1.2<br></span></code></pre><br><h1 id="issue">Issue</h1><br><p>When issue come, create a new branch on <code>main</code> this time, with the issue number:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout</span><span style="font-style:italic;color:#ffb86c;"> -b</span><span> Hotfix-1.2.1 main<br></span><span style="color:#50fa7b;">...wrote</span><span> codes to fix the issue...<br></span></code></pre><br><p>Once time finish, make a commit:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> commit</span><span style="font-style:italic;color:#ffb86c;"> -a -S -m </span><span style="color:#f1fa8c;">&quot;Hotfix done&quot;<br></span></code></pre><br><p>If we have other commit/work, push on github</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> push origin Hotfix-1.2.1<br></span></code></pre><br><p>When we finish</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> commit</span><span style="font-style:italic;color:#ffb86c;"> -a -S -m </span><span style="color:#f1fa8c;">&quot;Fix issue #1 - v1.2.1&quot;<br></span></code></pre><br><p>When issue is solved, merge it into <code>main</code> and <code>devel</code> branch:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout main<br></span><span style="color:#50fa7b;">git</span><span> merge</span><span style="font-style:italic;color:#ffb86c;"> --no-ff</span><span> Hotfix-1.2.1<br></span><span style="color:#50fa7b;">git</span><span> tag</span><span style="font-style:italic;color:#ffb86c;"> -a -s -m </span><span style="color:#f1fa8c;">&quot;Release v1.2.1 - September 2022&quot;</span><span> 1.2.1<br></span></code></pre><br><p>Into devel</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> checkout devel<br></span><span style="color:#50fa7b;">git</span><span> merge</span><span style="font-style:italic;color:#ffb86c;"> --no-ff</span><span> Hotfix-1.2.1<br></span></code></pre><br><p>Remove the Hotfix</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> branch</span><span style="font-style:italic;color:#ffb86c;"> -d</span><span> Hotfix-1.2.1<br></span><span style="color:#50fa7b;">git</span><span> push origin</span><span style="font-style:italic;color:#ffb86c;"> -d</span><span> Hotfix-1.2.1<br></span></code></pre><br><p>And push all</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">git</span><span> push origin</span><span style="font-style:italic;color:#ffb86c;"> --all<br></span><span style="color:#50fa7b;">git</span><span> push origin</span><span style="font-style:italic;color:#ffb86c;"> --tags<br></span></code></pre><br><h4 id="references">References</h4><br><ul><br><li>https://nvie.com/posts/a-successful-git-branching-model/</li><br><li>https://www.red-gate.com/simple-talk/devops/tools/getting-started-with-gitflow/</li><br></ul><br>`,
},

{
slug: "quickemu",
title: "Quickemu",
date: "2023-11-05",
tags: "virtualization",
description: "Replace Oracle Virtualbox by QuickEmu",
content: `<p>Use Quickemu in order to replace Virtualbox.</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">pacman</span><span style="font-style:italic;color:#ffb86c;"> -S</span><span> quickemu<br></span></code></pre><br><p>To downloads the iso for voidlinux:</p><br><pre data-lang="sh" style="background-color:#282a36;color:#f8f8f2;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#50fa7b;">quickemu </span><span style="color:#ff79c6;">&lt;</span><span>arg</span><span style="color:#ff79c6;">&gt;<br></span></code></pre><br>`,
},

]},
])
