import { reactive } from 'vue';

export const posts = reactive([

{
slug: "ssh-hardening",
title: "Ssh hardening",
date: "2023-11-17",
tags: "security",
description: "Enhance security of SSH by configuring it.",
content: `<h2 id="create-a-new-group">Create a new group</h2><br><p>To fine tunning ssh, we only want to allow few local users to use ssh.</p><br><pre data-lang="sh" class="language-sh "><code class="language-sh" data-lang="sh"># groupadd ssh-user<br># usermod -a -G ssh-user &lt;username&gt;<br></code></pre><br><h2 id="sshd-config">sshd_config</h2><br><p>Edit file /etc/ssh/sshd_config</p><br><pre data-lang="py" class="language-py "><code class="language-py" data-lang="py">HostKey &#x2F;etc&#x2F;ssh&#x2F;ssh_host_ed25519_key<br>HostKey &#x2F;etc&#x2F;ssh&#x2F;ssh_host_rsa_key<br><br>AllowGroups ssh-user<br><br>ClientAliveCountMax 2<br>ClientAliveInternal 0<br>FingerprintHash sha256 # default<br>LoginGraceTime 120 # default<br>LogLevel VERBOSE<br>MaxAuthTries 3<br>MaxSessions 2<br><br>KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group-exchange-sha256<br>Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr<br>MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com<br>HostKeyAlgorithms ssh-ed25519-cert-v01@openssh.com,ssh-rsa-cert-v01@openssh.com,ssh-ed25519,ssh-rsa<br></code></pre><br><h3 id="feature-to-disable">Feature to disable</h3><br><pre data-lang="py" class="language-py "><code class="language-py" data-lang="py">AllowAgentForwarding no<br>AllowTcpForwarding no<br>GatewayPorts no # default<br>HostbasedAuthentication no<br>PermitRootLogin no<br>PermitUserEnvironment no # default<br>PermitTunnel no # default<br>TCPKeepAlive no<br>X11Forwarding no # default<br></code></pre><br><h2 id="ssh-config">ssh_config</h2><br><p>Edit file /etc/ssh/ssh_config</p><br><pre data-lang="py" class="language-py "><code class="language-py" data-lang="py">Host github.com<br>  KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521<br>  Ciphers chacha20-poly1305@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr,aes256-cbc,aes192-cbc,aes128-cbc<br>  MACs hmac-sha2-256,hmac-sha2-512,hmac-sha1<br></code></pre><br><p>Configure your host to allow only strong algorithms.</p><br><pre data-lang="py" class="language-py "><code class="language-py" data-lang="py">Host *<br>  HostKeyAlgorithms ssh-ed25519-cert-v01@openssh.com,ssh-rsa-cert-v01@openssh.com,ssh-ed25519,ssh-rsa<br>  Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr<br>  MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com<br></code></pre><br><h2 id="create-keys">Create keys</h2><br><p>Server side, we generate new keypair. Also delete poor keypair like <code>/etc/ssh/ssh_host_ecdsa_key</code>:</p><br><pre><code>cd &#x2F;etc&#x2F;ssh<br># rm ssh_host_*key*<br># ssh-keygen -t ed25519 -f ssh_host_ed25519_key -N &quot;&quot; &lt; &#x2F;dev&#x2F;null<br># ssh-keygen -t rsa -b 4096 -f ssh_host_rsa_key -N &quot;&quot; &lt; &#x2F;dev&#x2F;null<br></code></pre><br><p>On Client:</p><br><pre><code>$ ssh-keygen -t ed25519 -o -a 100<br>$ ssh-keygen -t rsa -b 4096 -o -a 100<br></code></pre><br><h4 id="references">References</h4><br><ul><br><li>https://blog.stribik.technology/2015/01/04/secure-secure-shell.html</li><br><li>https://cisofy.com/documentation/lynis/</li><br><li>man sshd_config</li><br><li>man ssh_config</li><br></ul><br>`,
},

{
slug: "git-workflow",
title: "Git Workflow",
date: "2023-11-10",
tags: "git",
description: "Optimise your git workflow.",
content: `<p>This workflow work mainly on 2 branches:</p><br><ul><br><li><code>main</code></li><br><li><code>devel</code></li><br></ul><br><h1 id="start-a-project">Start a project</h1><br><p>The branch <code>main</code> contain only stable code, kind of <code>production</code> version.<br><code>devel</code> contain all the future works/stuff/feature planned, but not yet fully tested.</p><br><p>Start by create the <code>devel</code> branch on your repository:</p><br><pre><code>$ git checkout -b devel<br>$ git push origin devel<br></code></pre><br><p>You can call this branche: dev, develop or anything you want.</p><br><h1 id="features">Features</h1><br><p>Features are added into the <code>devel</code> branch</p><br><pre><code>$ git checkout -b colorscheme devel<br>...wrote code to build your feature...<br></code></pre><br><p>Once time terminated, create a commit:</p><br><pre><code>$ git commit -a -S -m &quot;new colorscheme done&quot;<br></code></pre><br><p>If we have other commit/work to do, push the feature branch:</p><br><pre><code>$ git push origin colorscheme<br></code></pre><br><p>When you have done all the features, merge them to the <code>devel</code> branch:</p><br><pre><code>$ git checkout devel<br>$ git merge colorscheme # only for little commit (less than 5 lines)<br>$ git merge --no-ff colorscheme<br></code></pre><br><p>Destroy the branch if you have done, keep if not sure.</p><br><pre><code>$ git branch -d colorscheme<br>$ git push origin -d colorscheme # remove the branch on github<br>$ git push origin devel<br></code></pre><br><p>When all features are finish, create a release !</p><br><h1 id="release">Release</h1><br><p>Release are started into the <code>devel</code> branch:</p><br><pre><code>$ git checkout -b release-1.2 devel<br>$ git commit -a -S -m &quot;version 1.2&quot;<br></code></pre><br><p>If we have other commit/work on the branch, push on github</p><br><pre><code>$ git push origin release-1.2<br></code></pre><br><p>When finished, merge it into 'Main' and 'Develop'</p><br><pre><code>$ git checkout main<br>$ git merge --no-ff release-1.2<br>$ git tag -a -s -m &quot;Release v1.2 - September 2022&quot; 1.2<br></code></pre><br><p>For the release message (in Github) example:</p><br><pre data-lang="markdown" class="language-markdown "><code class="language-markdown" data-lang="markdown">September 2022 - v1.2<br><br>### Notable changes<br>* Most important change from the changelog<br>* Second important change from the changelog<br><br>[All Changes](https:&#x2F;&#x2F;github.com&#x2F;szorfein&#x2F;spior&#x2F;blob&#x2F;master&#x2F;CHANGELOG.md)<br></code></pre><br><p>To delete a tag:</p><br><pre><code>$ git tag -d X<br>$ git fetch origin tag X<br></code></pre><br><p>Merge into devel</p><br><pre><code>$ git checkout devel<br>$ git merge --no-ff release-1.2<br></code></pre><br><p>Delete the release</p><br><pre><code>$ git branch -d release-1.2<br></code></pre><br><p>And push all the release and tag to your git repository:</p><br><pre><code>$ git push origin --all<br>$ git push origin --tags<br></code></pre><br><p>Or more manually if you have a lot of private branches:</p><br><pre><code>$ git push origin devel<br>$ git checkout main<br>$ git push origin main<br>$ git push origin 1.2 # the tag<br></code></pre><br><p>Push the tag: https://git-scm.com/book/en/v2/Git-Basics-Tagging</p><br><pre><code>$ git tag<br>$ git show 1.2<br>$ git push origin 1.2<br></code></pre><br><h1 id="issue">Issue</h1><br><p>When issue come, create a new branch on <code>main</code> this time, with the issue number:</p><br><pre><code>$ git checkout -b Hotfix-1.2.1 main<br>...wrote codes to fix the issue...<br></code></pre><br><p>Once time finish, make a commit:</p><br><pre><code>$ git commit -a -S -m &quot;Hotfix done&quot;<br></code></pre><br><p>If we have other commit/work, push on github</p><br><pre><code>$ git push origin Hotfix-1.2.1<br></code></pre><br><p>When we finish</p><br><pre><code>$ git commit -a -S -m &quot;Fix issue #1 - v1.2.1&quot;<br></code></pre><br><p>When issue is solved, merge it into <code>main</code> and <code>devel</code> branch:</p><br><pre><code>$ git checkout main<br>$ git merge --no-ff Hotfix-1.2.1<br>$ git tag -a -s -m &quot;Release v1.2.1 - September 2022&quot; 1.2.1<br></code></pre><br><p>Into devel</p><br><pre><code>$ git checkout devel<br>$ git merge --no-ff Hotfix-1.2.1<br></code></pre><br><p>Remove the Hotfix</p><br><pre><code>$ git branch -d Hotfix-1.2.1<br>$ git push origin -d Hotfix-1.2.1<br></code></pre><br><p>And push all</p><br><pre><code>$ git push origin --all<br>$ git push origin --tags<br></code></pre><br><h4 id="references">References</h4><br><ul><br><li>https://nvie.com/posts/a-successful-git-branching-model/</li><br><li>https://www.red-gate.com/simple-talk/devops/tools/getting-started-with-gitflow/</li><br></ul><br>`,
},

{
slug: "quickemu",
title: "Quickemu",
date: "2023-11-05",
tags: "virtualization",
description: "Replace Oracle Virtualbox by QuickEmu",
content: `<p>Use Quickemu in order to replace Virtualbox.</p><br><pre data-lang="sh" class="language-sh "><code class="language-sh" data-lang="sh">pacman -S quickemu<br></code></pre><br><p>To downloads the iso for voidlinux:</p><br><pre data-lang="sh" class="language-sh "><code class="language-sh" data-lang="sh">quickemu &lt;arg&gt;<br></code></pre><br>`,
},

])