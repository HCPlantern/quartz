---
id: 20231114144456
title: Init a linux system
aliases: 
date: 2023-11-14 14:44
draft: false
tags:
---
create new user

```sh
sudo useradd -D -p PASSWORD hcplantern

sudo usermod -aG sudo hcplantern

```

zsh:
```zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

curl -SL https://mirror.ghproxy.com/github.com/docker/compose/releases/download/v2.23.0/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose