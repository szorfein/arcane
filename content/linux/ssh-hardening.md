+++
title = "Ssh hardening"
date = 2023-11-17

[taxonomies]
tag = ["security"]

[extra]
description = "Enhance security of SSH by configuring it."
+++

## Create a new group
To fine tunning ssh, we only want to allow few local users to use ssh.

```sh
groupadd ssh-user
usermod -a -G ssh-user <username>
```

## sshd_config

Edit file /etc/ssh/sshd_config

```config
HostKey /etc/ssh/ssh_host_ed25519_key
HostKey /etc/ssh/ssh_host_rsa_key

AllowGroups ssh-user
```

Options recommended by the audit tool lynis.

```config
ClientAliveCountMax 2
ClientAliveInternal 0
FingerprintHash sha256 # default
LoginGraceTime 120 # default
LogLevel VERBOSE
MaxAuthTries 3
MaxSessions 2
IgnoreRhosts yes
PrintLastLog yes
StrictModes yes
```

Few things to disable.

```config
AllowAgentForwarding no
AllowTcpForwarding no
GatewayPorts no # default
HostbasedAuthentication no
PermitRootLogin no
PermitUserEnvironment no # default
PermitTunnel no # default
TCPKeepAlive no
X11Forwarding no # default
```

Force to use only strong algorithms.

```config
KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group-exchange-sha256
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr
MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com
HostKeyAlgorithms ssh-ed25519-cert-v01@openssh.com,ssh-rsa-cert-v01@openssh.com,ssh-ed25519,ssh-rsa
```

## ssh_config

Edit file /etc/ssh/ssh_config. Options for Github.

```config
Host github.com
  KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521
  Ciphers chacha20-poly1305@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr,aes256-cbc,aes192-cbc,aes128-cbc
  MACs hmac-sha2-256,hmac-sha2-512,hmac-sha1
```

Tell ssh to use only algorithms supported by our server.

```config
Host *
  KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group-exchange-sha256
  HostKeyAlgorithms ssh-ed25519-cert-v01@openssh.com,ssh-rsa-cert-v01@openssh.com,ssh-ed25519,ssh-rsa
  Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr
  MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com
```

## Create keys
Server side, we generate new keypair. Also delete poor keypair present like `/etc/ssh/ssh_host_ecdsa_key`:

```sh
cd /etc/ssh
rm ssh_host_*key*
ssh-keygen -t ed25519 -f ssh_host_ed25519_key -N "" < /dev/null
ssh-keygen -t rsa -b 4096 -f ssh_host_rsa_key -N "" < /dev/null
```

On Client:

```sh
ssh-keygen -t ed25519 -o -a 100
ssh-keygen -t rsa -b 4096 -o -a 100
 ```

## Restart the server

```sh
sudo systemctl restart sshd
```

#### References
+ [stribik blog](https://blog.stribik.technology/2015/01/04/secure-secure-shell.html)
+ [audit tool Lynis](https://cisofy.com/documentation/lynis/)
+ [audit tool ssh-audit](https://linux-audit.com/)
+ man sshd_config
+ man ssh_config
